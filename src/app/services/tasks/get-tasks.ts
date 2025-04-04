import { createClient } from "@/app/utils/supabase/server";

export async function getTaskData() {
  const supabase = await createClient()

  const { data: tasks, error } = await supabase
    .from('tasks')
    .select('*, user:users(*)') // trae los datos de la tabla tasks y los datos del usuario relacionado
    .order('created_at', { ascending: false })

  if (error) {
    console.error(error)
    return []
  }

  return tasks || []
}