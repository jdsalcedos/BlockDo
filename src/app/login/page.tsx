import { GithubIcon } from '../components/icons'

export default function Login() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white dark:bg-gray-900">
      <h1 className="text-4xl text-white pb-4 font-bold font-serif">
        Block - Do
      </h1>
      <button type="button" className="text-gray-200 ring ring-gray-500 shadow-xl bg-[#384049] hover:bg-[#24292F]/60 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center ">
        <GithubIcon />
        Sign in with Github
      </button>
    </div>
  )
}
