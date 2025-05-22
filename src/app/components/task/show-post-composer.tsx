'use client'

import { useState } from "react";
import TaskComposer from "./post-task";

export default function ShowPostComposer() {
  const [showComposer, setShowComposer] = useState(false);

  return (
    <>
      <button
        onClick={() => setShowComposer(true)}
        type="button"
        className="text-black ring ring-gray-500 shadow-xl bg-[#CBEA1D] hover:bg-[#CBEA1D]/60 font-medium rounded-lg text-m px-3 py-3 inline-flex"
      >
        Crear nueva tarea
      </button>
      {showComposer && (
        <div className="fixed inset-0 bg-[#34495E]/90 bg-opacity-50 flex justify-center items-center z-50">
          <div className="relative">
            <button
              onClick={() => setShowComposer(false)}
              className="absolute top-2 right-2 bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center hover:bg-red-600"
              aria-label="Cerrar"
              type="button"
            >
              ×
            </button>
            <TaskComposer />
          </div>
        </div>
      )}
    </>
  )
}
