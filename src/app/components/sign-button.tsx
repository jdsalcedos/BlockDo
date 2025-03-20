import Button from "./button";
import { GithubIcon, SignOutIcon } from "./icons";

export default function SignButton() {

  const handleSignIn = () => {
    // Sign in logic
  }

  const handleSignOut = () => {
    // Sign in logic
  }

  return (
    <div className="flex flex-col items-center justify-center space-y-3">
      <Button operation={handleSignIn} text={"Sign in with Github"} icon={<GithubIcon />} />
      <Button operation={handleSignOut} text={"Sign out"} icon={<SignOutIcon />} />
    </div>
  )
}
