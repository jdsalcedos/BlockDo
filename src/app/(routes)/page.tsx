import { redirect } from "next/navigation";
import { AuthSignInButtonServer } from "@/app/components/auth/auth-button-server";
import { createClient } from "@/app/utils/supabase/server";
import { getTaskData } from "../services/tasks/get-tasks";
import TaskCard from "../components/task/task-card";

export default async function Home() {
  const supabase = await createClient()

  const { data: { user } } = await supabase.auth.getUser()

  if (user === null) {
    redirect('/login')
  }

  const tasks = await getTaskData()


  return (
    <div className="flex flex-col bg-gray-900 min-h-screen items-center justify-center text-gray-200">

      <h1 className="py-5 text-3xl ">
        Acá iran las tareas del usuario con su respectivo grid
      </h1>

      <AuthSignInButtonServer />
      <div className="grid grid-cols-3 gap-4 p-4 space-x-3">
        {tasks.map((task) => (
          <TaskCard key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
}