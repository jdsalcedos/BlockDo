'use client'

import Button from "@/app/components/ui/button";
import { GithubIcon, SignOutIcon } from "@/app/components/ui/icons";
import { SignInWithGithub, SignOut } from "@/app/services/auth/auth-actions";
import { useRouter } from "next/navigation";
import { User } from "@supabase/supabase-js"; // Cambia Session a User

export default function AuthSignInButtonClient({ user }: { user: User | null }) {

  const router = useRouter();

  const handleSignIn = async () => {
    await SignInWithGithub();
  };

  const handleSignOut = async () => {
    await SignOut();
    router.refresh();
  };

  return (
    <header>
      {
        user === null
          ? (
            <Button operation={handleSignIn} text={"Sign in with Github"} icon={<GithubIcon />} />
          )
          :
          <Button operation={handleSignOut} text={"Sign out"} icon={<SignOutIcon />} />
      }
    </header>
  );
}
