'use client'
import SignInButton from '../components/sign-in-button'

export default function Login() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white dark:bg-gray-900">
      <h1 className="text-4xl text-white pb-5 font-bold font-serif">
        Block - Do
      </h1>
      <SignInButton/>
    </div>
  )
}
