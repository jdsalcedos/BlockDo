import { createClient } from "@/app/utils/supabase/server"

export async function getSession() {
  const supabase = createClient()
  const { data: { session } } = await (await supabase).auth.getSession()
  return session
}