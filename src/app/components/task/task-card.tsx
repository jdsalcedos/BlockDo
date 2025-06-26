'use client'

import { useState } from "react";
import { type Task } from "@/app/types/task";
import DeleteTaskButton from "./delete-task-button";
import EditTaskModal from "./edit-task-modal";

export default function TaskCard({ task }: { task: Task }) {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div className="flex flex-col bg-gray-800 p-4 rounded-lg shadow-md text-gray-200 h-max">
      <h3>{task.title}</h3>
      <p>{task.content}</p>
      <div className="flex flex-col gap-2">
        <p>{task.created_at}</p>
        <p>{task.end_at}</p>
        <p>{task.user_id}</p>
      </div>
      <div className="flex gap-2 mt-4 justify-between">
        <button
          onClick={() => setIsEditing(true)}
          className="bg-blue-500 px-4 py-2 rounded hover:bg-blue-600 cursor-pointer"
        >
          Editar
        </button>
        <DeleteTaskButton task={task} />
      </div>
      {/* solo se renderiza el modal si isEditing es true */}
      {isEditing && (
        <EditTaskModal task={task} onClose={() => setIsEditing(false)} />
      )}
    </div>
  );
}
