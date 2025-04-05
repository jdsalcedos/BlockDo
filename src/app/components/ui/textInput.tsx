'use client'
import React from 'react'

interface TextInputProps {
  label?: string
  placeholder?: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  type?: string
}

export default function TextInput({label, placeholder = '', value, onChange, type = 'text'}: TextInputProps) {
  return (
    <div className="flex flex-col gap-1 text-white w-full">
      {label && <label className="text-sm text-gray-300">{label}</label>}
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="bg-[#ffffff] border-none ring ring-gray-500 text-black placeholder-gray-400 text-sm rounded-lg focus:ring-principal focus:outline-none block w-full p-2.5 shadow-xl transition-colors my-2.5"
      />
    </div>
  )
}