import { SignButtonServer } from '@/app/components/sign-button-server'

export default function Login() {
  return (
    <main>
      <section className="flex flex-col items-center justify-center min-h-screen bg-white dark:bg-gray-900">
        <h1 className="text-4xl text-white pb-5 ">
          Block - Do
        </h1>
        <SignButtonServer />
      </section>
    </main>
  )
}
