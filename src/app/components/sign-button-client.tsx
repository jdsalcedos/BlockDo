'use client'

import { useRouter } from "next/navigation";
import Button from "./button";
import { GithubIcon, SignOutIcon } from "./icons";
import { createClientComponentClient, type Session } from "@supabase/auth-helpers-nextjs"

export default function SignButtonClient({ session }: { session: Session | null }) {

  const supabase = createClientComponentClient()
  const router = useRouter()

  const handleSignIn = async () => {
    await supabase.auth.signInWithOAuth({
      provider: 'github',
      options: {
        redirectTo: 'http://localhost:3000/auth/callback'
      }
    })
  }

  const handleSignOut = async () => {
    await supabase.auth.signOut()
    router.refresh()
  }

  return (
    <header className="flex flex-col items-center justify-center space-y-3">
      {
        session === null
          ? (
            <Button operation={handleSignIn} text={"Sign in with Github"} icon={<GithubIcon />} />
          )
          :
          <Button operation={handleSignOut} text={"Sign out"} icon={<SignOutIcon />} />
      }
    </header>
  )
}
