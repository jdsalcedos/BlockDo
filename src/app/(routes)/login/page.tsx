'use client'
import SignButton from '../../components/sign-button'

export default function Login() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white dark:bg-gray-900">
      <h1 className="text-4xl text-white pb-5 ">
        Block - Do
      </h1>
      <SignButton />
    </div>
  )
}
