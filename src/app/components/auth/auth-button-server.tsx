import AuthSignInButtonClient from "./auth-button-client";
import { getUser } from "@/app/services/auth/get-user";

export async function AuthSignInButtonServer() {
  const user = await getUser()
  return <AuthSignInButtonClient user={user} />
}