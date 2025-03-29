import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import AuthSignInButtonClient from "./auth-button-client";

export async function AuthSignInButtonServer() {
  const supabase = createServerComponentClient({ cookies })
  const { data: { session } } = await supabase.auth.getSession()

  return <AuthSignInButtonClient session={session} />
}