import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { SignButtonServer } from "../components/sign-button-server";

export default async function Home() {
  const supabase = createServerComponentClient({ cookies })
  const { data: { session } } = await supabase.auth.getSession()

  if (session === null) {
    redirect('/login')
  }
  const { data } = await supabase.from('tasks').select()

  return (
    <div className="flex bg-gray-900 min-h-screen items-center justify-center py-2 text-gray-200 text-3xl ">
      <SignButtonServer />
      Dirijase a /login para ver los avances :D
      <pre>
        {
          JSON.stringify(data, null, 2)
        }
      </pre>
    </div>
  );
}
