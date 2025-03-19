import React from 'react'

export default function Button({ operation, text, icon}: { operation: () => void , text: string, icon: React.ReactNode}) {
  return (
    <button onClick={operation} type="button" className="text-gray-200 ring ring-gray-500 shadow-xl bg-[#384049] hover:bg-[#24292F]/60 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center ">
      {icon}
      {text}
    </button>
  )
}
