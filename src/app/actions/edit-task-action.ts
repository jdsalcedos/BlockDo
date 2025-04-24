'use server'

import { revalidatePath } from "next/cache";
import { getUser } from "../services/auth/get-user";
import { createClient } from "../utils/supabase/server";

export async function editTask(formData: FormData, task_id: string) {
  'use server'

  const content = formData.get('content')
  const title = formData.get('title')
  const end_at = formData.get('end_at')

  const supabase = await createClient()

  const user = await getUser()

  if (user === null) return

  await supabase.from('tasks')
    .update({
      title: title,
      content: content,
      end_at: end_at
    })
    .eq('id', task_id)

  revalidatePath('/')
}