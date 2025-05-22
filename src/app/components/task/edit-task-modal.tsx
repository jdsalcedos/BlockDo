'use client'

import { useState } from "react";
import { editTask } from "@/app/actions/edit-task-action";

export default function EditTaskModal({ task, onClose }: { task: any, onClose: () => void }) {
  const [title, setTitle] = useState(task.title || "");
  const [content, setContent] = useState(task.content || "");
  const [endAt, setEndAt] = useState(task.end_at || "");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", title);
    formData.append("content", content);
    formData.append("end_at", endAt);

    await editTask(formData, task.id);
    onClose(); // Cierra el modal después de guardar
  };

  return (
    <div className="fixed inset-0 bg-[#34495E]/90 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-[#2A3C4F] text-white p-6 rounded-lg w-96">
        <h2 className="text-xl font-bold mb-4">Editar Tarea</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div>
            <label className="block text-sm font-medium">Título</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full p-2 bg-gray-700 rounded"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Contenido</label>
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="w-full p-2 bg-gray-700 rounded"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Fecha Límite</label>
            <input
              type="date"
              value={endAt}
              onChange={(e) => setEndAt(e.target.value)}
              className="w-full p-2 bg-gray-700 rounded"
            />
          </div>
          <div className="flex justify-end gap-2">
            <button
              type="button"
              onClick={onClose}
              className="bg-red-500 px-4 py-2 rounded hover:bg-red-600"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="bg-green-500 px-4 py-2 rounded hover:bg-green-600"
            >
              Guardar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}