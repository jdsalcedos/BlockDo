'use server'

import { revalidatePath } from "next/cache"
import { createClient } from "../utils/supabase/server"
import { getUser } from "../services/auth/get-user"

export async function deleteTask(task_id: string) {
  'use server'

  const supabase = await createClient()

  const user = await getUser()

  if (user === null) return

  await supabase
    .from('tasks')
    .delete()
    .eq('id', task_id)

  revalidatePath('/')
}
