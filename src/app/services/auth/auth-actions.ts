import { createClient } from "@/app/utils/supabase/client"
import {redirect} from "next/navigation";

const supabase = createClient()

export async function SignInWithGithub() {
  await supabase.auth.signInWithOAuth({
    provider: 'github',
    options: {
      redirectTo: 'http://localhost:3000/auth/callback'
    }
  })
}

export async function SignOut() {
  await supabase.auth.signOut()
}