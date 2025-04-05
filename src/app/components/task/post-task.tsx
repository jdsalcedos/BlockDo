'use client'

import { addTask } from "@/app/actions/add-task-action"
import { useRef } from "react"

export default function TaskComposer() {

  const formRef = useRef<HTMLFormElement>(null)

  return (
    <form ref={formRef}
      action={async (formData) => {
        await addTask(formData)
        formRef.current?.reset() // Reset the form after submission
      }}
      className='flex flex-row p-3 border-b border-white/20'
    >

      <div className='flex flex-1 flex-col gap-y-4'>
        <textarea
          name='title'
          rows={1}
          className="w-full text-2xl bg-black placeholder-gray-500 p-2"
          placeholder="Titulo"
        ></textarea>
        <textarea
          name='content'
          rows={4}
          className="w-full text-xl bg-black placeholder-gray-500 p-2"
          placeholder="Que esta pasando?"
        ></textarea>
        <button
          type="submit"
          className="bg-sky-500 text-sm disabled:opacity-40 disabled:pointer-events-none font-bold rounded-full px-5 py-2 self-end"
        >
          Postear
        </button>
      </div>
    </form>
  )
}