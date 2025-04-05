'use client'

import { useFormStatus } from "react-dom"

export function TaskComposerButton() {

  const { pending } = useFormStatus()
  return (
    <button
      disabled={pending}
      type="submit"
      className="bg-sky-600 text-sm disabled:opacity-40 disabled:pointer-events-none font-light rounded-xl px-5 py-2 self-end text-white hover:bg-blue-600/20 transition-colors duration-150 ease-in-out"
    >
      {pending ? 'Creando...' : 'Crear'}
    </button>
  )
}