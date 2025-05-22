import { redirect } from "next/navigation";
import { createClient } from "@/app/utils/supabase/server";
import TaskList from "../components/task/task-list";
import Header from "../components/ui/header";
import ShowPostComposer from "../components/task/show-post-composer";
import Footer from "../components/ui/footer";

export default async function Home() {

  const supabase = await createClient()

  const { data: { user } } = await supabase.auth.getUser()

  if (user === null) {
    redirect('/login')
  }

  return (
    <div className="bg-[#34495E] min-h-screen flex flex-col">
      <Header />
      <div className="flex flex-col items-center justify-center text-gray-200 py-6 flex-grow">
        <TaskList />
      </div>
      <Footer />
    </div>
  );
}