import React, { JSX } from 'react'

export default function Button({ operation, text, icon }: { operation: () => void, text: string, icon: JSX.Element }) {
  return (
    <button onClick={operation} type="button" className="text-gray-100 ring ring-gray-500 shadow-xl bg-[#384049] hover:bg-[#24292F]/60 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center ">
      {icon}
      {text}
    </button>
  )
}
