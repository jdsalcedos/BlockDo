'use client'


import { useRef } from "react"
import { PostTaskButton } from "./post-task-button"
import { addTask } from "@/app/actions/add-task-action"

export default function TaskComposer() {

  const formRef = useRef<HTMLFormElement>(null)

  const handleSubmit = async (formData: FormData) => {
    await addTask(formData)
    formRef.current?.reset() // Reset the form after submission
  }

  return (
    <form ref={formRef}
      action={handleSubmit}
      className='flex flex-row p-3 border-b border-white/20 w-md'
    >
      <div className='flex flex-1 flex-col gap-4 bg-[#2A3C4F] p-6 rounded-2xl'>
        <textarea
          name='title'
          rows={1}
          className="w-full text-sm bg-gray-700 placeholder-gray-300 p-2 rounded-xl h-12 resize-none focus:ring-2 focus:outline-none focus:ring-blue-500"
          placeholder="Titulo"
        ></textarea>
        <textarea
          name='content'
          rows={4}
          className="w-full text-sm bg-gray-700 placeholder-gray-300 p-2 rounded-xl resize-none focus:ring-2 focus:outline-none focus:ring-blue-500"
          placeholder="Que esta pasando?"
        ></textarea>
        <div className="bg-gray-700 rounded-xl p-2 text-sm">
          <p className="pt-1.5 text-gray-300 ">Fecha limite (opcional)</p>
          <input
            type="date"
            name='end_at'
            className="my-1.5 p-4 w-full text-gray-300 rounded-xl focus:ring-2 focus:outline-none focus:ring-blue-500"
          />
        </div>
        <PostTaskButton />
      </div>
    </form>
  )
}