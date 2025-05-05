'use server'

import { revalidatePath } from "next/cache"
import { createClient } from "../utils/supabase/server"
import { getUser } from "../services/auth/get-user"

export async function addTask(formData: FormData) {
  'use server'

  const content = formData.get('content')
  const title = formData.get('title')
  const end_at = formData.get('end_at') || null;

  const supabase = await createClient()

  const user = await getUser()

  if (user === null) {
    console.log('El usuario no está autenticado.')
    return
  }

  const { error } = await supabase
    .from('tasks')
    .insert({
      title: title,
      content: content,
      end_at: end_at,
      user_id: user.id,
    })

  if (error) {
    console.error('Error al insertar en Supabase:', error)
    return
  }

  revalidatePath('/')
}
