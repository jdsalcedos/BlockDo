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
      className='flex flex-row p-3 border-b border-white/20 '
    >
      <div className='flex flex-1 flex-col gap-4 bg-[#2A3C4F] p-6 rounded-2xl'>
        <textarea
          name='title'
          rows={1}
          className="w-full text-2xl bg-black placeholder-gray-500 p-2 rounded-xl"
          placeholder="Titulo"
        ></textarea>
        <textarea
          name='content'
          rows={4}
          className="w-full text-xl bg-black placeholder-gray-500 p-2 rounded-xl"
          placeholder="Que esta pasando?"
        ></textarea>
        <div className="bg-[#abbfd5] rounded-xl p-2">
          <p className="pt-1.5 text-gray-200 ">Fecha limite (opcional)</p>
          <input
            type="date"
            name='end_at'
            className="p-5 w-full bg-cyan-900"
          />
        </div>
        <PostTaskButton />
      </div>
    </form>
  )
}