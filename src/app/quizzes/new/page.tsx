import { cookies } from 'next/headers'
import { createServerActionClient } from '@supabase/auth-helpers-nextjs'

import { Database } from '~/quizzes/database.types'

export default function NewQuizPage() {
  return (
    <div className='h-full p-8'>
      <div className='mx-auto max-w-7xl rounded-lg border bg-white p-8'>
        <form
          className='-mt-4 space-y-4'
          action={async (formData) => {
            'use server'

            const title = formData.get('title') as string
            const description = formData.get('description') as string

            const supabase = createServerActionClient<Database>({ cookies })
            supabase.from('post').insert({
              title,
              description,
              user_id: '',
            })
          }}>
          <div className='space-y-2'>
            <label className='font-bold text-slate-700 font-small-caps' htmlFor='quiz-title'>
              Title
            </label>
            <input
              className='w-full rounded-md border bg-slate-100 text-lg shadow-inner outline-none'
              placeholder='Quiz Title'
              name='title'
              id='quiz-title'
              required
              type='text'
            />
          </div>
          <div className='space-y-2'>
            <label className='font-bold text-slate-700 font-small-caps' htmlFor='quiz-description'>
              Description
            </label>
            <textarea
              className='w-full rounded-md border bg-slate-100 text-lg shadow-inner outline-none'
              placeholder='Quiz Description'
              name='description'
              id='quiz-description'
              rows={4}
            />
          </div>
          <div className='flex justify-end'>
            <button className='rounded-md bg-blue-500 px-4 py-2 text-white transition hover:opacity-90'>
              Create Quiz
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
