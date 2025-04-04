import { createClient } from "@/app/utils/supabase/server";

export async function getTaskData() {
  const supabase = await createClient()

  const { data, error } = await supabase.from('tasks').select()

  if (error) {
    console.error(error)
    return []
  }

  return data || []
}