'use client'

import Button from "@/app/components/ui/button";
import { GithubIcon, SignOutIcon } from "@/app/components/ui/icons";
import { SignInWithGithub, SignOut } from "@/app/services/auth/auth-actions";
import { useRouter } from "next/navigation";
import { Session } from "@supabase/supabase-js";

export default function AuthSignInButtonClient({ session }: { session: Session | null }) {

  const router = useRouter()

  const handleSignIn = async () => {
    await SignInWithGithub()
  }

  const handleSignOut = async () => {
    await SignOut()
    router.refresh()
  }
  return (
    <header>
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
