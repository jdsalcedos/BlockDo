'use client'

import { addTask } from "@/app/actions/add-task-action"
import { useRef } from "react"

export default function TaskComposer() {

  const formRef = useRef<HTMLFormElement>(null)

  const handleSubmit = async (formData: FormData): Promise<void> => {
    console.log('submit')
    await addTask(formData);
  };

  return (
    <form ref={formRef}
      action={handleSubmit} className='flex flex-row p-3 border-b border-white/20'>
      <div className='flex flex-1 flex-col gap-y-4'>
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