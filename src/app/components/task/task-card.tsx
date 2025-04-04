import { type Task } from "@/app/types/task";

export default function TaskCard({ task }: { task: Task }) {
  return (
    <div className="flex flex-col bg-gray-800 p-4 rounded-lg shadow-md text-gray-200">
      <h3>{task.title}</h3>
      <p>{task.content}</p>
      <div className="flex flex-col gap-2">
        <p>{task.created_at}</p>
        <p>{task.end_at}</p>
        <p>{task.user_id}</p>
      </div>

    </div>
  )
}
