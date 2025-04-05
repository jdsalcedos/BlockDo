import { AuthSignInButtonServer } from '@/app/components/auth/auth-button-server'
import TextInput from '@/app/components/ui/textInput'
export default  function Login() {

  return (
    <div className="flex flex-col min-h-screen items-center justify-center">
      <div className='flex flex-col min-m-screem items-center justify-center bg-sky-950 p-8 rounded-3xl'>
        <h1 className="text-4xl pb-5 text-white">
          Inicia Sesion
          <TextInput label="" placeholder="Email"/>
          <TextInput label="" placeholder="Password"/>
        </h1>
        <AuthSignInButtonServer />
      </div>
    </div>
  )
}