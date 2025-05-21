import { AuthSignInButtonServer } from "../auth/auth-button-server";
import { BlockdoIcon } from "./icons";

export default function Header() {

  return (
    <>
      <div className="flex items-center justify-between w-full px-10 py-2">
        <div className="flex items-center gap-6">
          <BlockdoIcon />
          <span className="text-2xl text-white font-light">
            / Página Principal
          </span>
        </div>

        <AuthSignInButtonServer />
      </div>
      <div className="border-b-2 border-white mx-6" />
    </>
  )

}