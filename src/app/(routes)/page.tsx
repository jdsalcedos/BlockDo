import { redirect } from "next/navigation";
import { createClient } from "@/app/utils/supabase/server";
import TaskList from "../components/task/task-list";
import TaskComposer from "../components/task/post-task";
import Header from "../components/ui/header";

export default async function Home() {
  const supabase = await createClient()

  const { data: { user } } = await supabase.auth.getUser()

  if (user === null) {
    redirect('/login')
  }

  return (
    <div className="bg-[#34495E]">
      <Header />
      <div className="flex flex-col min-h-screen items-center justify-center text-gray-200">
        <TaskComposer />
        <TaskList />
      </div>
    </div>
  );
}