'use server'

import { revalidatePath } from "next/cache"
import { createClient } from "../utils/supabase/server"

export async function addTask(formData: FormData) {
  'use server'

  const content = formData.get('content')
  const title = formData.get('title')
  const end_at = formData.get('end_at')

  console.log('content', content)

  if (content === null) return

  const supabase = await createClient()

  const { data: { user } } = await supabase.auth.getUser()

  if (!user) return

  // await supabase.from('tasks').insert({
  //   title: title,
  //   content: content,
  //   end_at: end_at,
  //   user_id: user.id,
  // })

  console.log(user)

  revalidatePath('/')

}
