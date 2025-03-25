import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { Database } from "../types/database";
import { redirect } from "next/navigation";
import { SignButtonServer } from "../components/sign-button-server";

export default async function Home() {
  const supabase = createServerComponentClient<Database>({ cookies });
  const { data: { session } } = await supabase.auth.getSession();

  if (session === null) {
    redirect("/login");
  }

  return (
    <>
      <h1>Home</h1>
      <SignButtonServer />
    </>
  );
}
