import {createClient} from "@/app/utils/supabase/server";

export async function getSession() {
  const supabase = await createClient()
  const { data: { session } } = await supabase.auth.getSession()

  return session
}