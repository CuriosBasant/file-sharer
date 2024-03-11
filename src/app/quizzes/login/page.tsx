import { cookies } from 'next/headers'
import { createServerActionClient } from '@supabase/auth-helpers-nextjs'

import LoginForm from './LoginForm'

export default function LoginPage() {
  return (
    <div className='grid h-full place-items-center p-4'>
      <LoginForm
        onLoginAction={async (formData) => {
          'use server'

          const email = formData.get('email') as string
          const password = formData.get('password') as string

          const supabase = createServerActionClient({ cookies })
          const { data, error } = await supabase.auth.signInWithPassword({ email, password })
          if (error) return
          data
        }}
      />
    </div>
  )
}
