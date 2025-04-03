import { redirect } from "next/navigation";
import { AuthSignInButtonServer } from "@/app/components/auth/auth-button-server";
import { createClient } from "@/app/utils/supabase/server";

export default async function Home() {
  const supabase = await createClient()

  const { data: { user } } = await supabase.auth.getUser()

  if (user === null) {
    redirect('/login')
  }

  const { data } = await supabase.from('tasks').select()

  return (
    <div className="flex flex-col bg-gray-900 min-h-screen items-center justify-center text-gray-200">

      <h1 className="py-5 text-3xl ">
        Acá iran las tareas del usuario con su respectivo grid
      </h1>

      <AuthSignInButtonServer />
      /* <pre>
        {
          JSON.stringify(data, null, 2)
        }
      </pre> */
    </div>
  );
}