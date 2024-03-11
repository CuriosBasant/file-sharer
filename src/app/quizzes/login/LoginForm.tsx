'use client'

import React from 'react'

import { Form } from '~/quizzes/components'

export default function LoginForm(props: { onLoginAction(data: FormData): void }) {
  return (
    <Form
      className='w-full max-w-lg space-y-4 rounded-xl border bg-white p-8'
      action={props.onLoginAction}>
      <Form.Field label='Email' name='email' />
      <Form.Field label='Password' name='password' secure />
      <div className='flex justify-end'>
        <button className='rounded-md bg-sky-500 px-4 py-2 text-white transition hover:opacity-90'>
          Login
        </button>
      </div>
    </Form>
  )
}
