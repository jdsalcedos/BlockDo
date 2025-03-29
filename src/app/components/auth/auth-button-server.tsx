import { getSession } from "@/app/services/auth/get-session";
import AuthSignInButtonClient from "./auth-button-client";

export async function AuthSignInButtonServer() {
  const session = await getSession()
  return <AuthSignInButtonClient session={session} />
}