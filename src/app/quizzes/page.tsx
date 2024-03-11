import { cookies } from 'next/headers'
import Link from 'next/link'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'

import { Database } from './database.types'

export default async function QuizzesPage() {
  const supabase = createServerComponentClient<Database>({ cookies })

  const { data: quizzes, error } = await supabase.from('quiz').select('id, post(title,description)')
  console.log(quizzes)

  return (
    <div className='flex h-full flex-col overflow-y-auto'>
      <header className='border-b bg-white px-4 shadow-md'>
        <div className='mx-auto flex w-full max-w-7xl justify-end py-2'>
          <Link
            href='/quizzes/new'
            className='flex items-center gap-1 rounded-md bg-blue-500 px-4 py-2 text-white'>
            <span className='font-icon'>add</span> Create Quiz
          </Link>
        </div>
      </header>
      <div className='flex-1 px-4'>
        <div className='mx-auto w-full max-w-7xl py-8 '>
          {error || 1 ? (
            <div className='mx-auto max-w-xl rounded-lg border bg-white p-8 shadow-lg'>
              <div className='flex flex-col items-center gap-4'>
                <div className='aspect-video w-64 rounded-md bg-slate-200' />
                <div className='flex-1'>
                  <p className=''>There no quizzes to show</p>
                </div>
              </div>
            </div>
          ) : (
            <ul className='space-y-6'>
              {quizzes.map(
                (quiz) =>
                  quiz.post && (
                    <li className='rounded-lg border bg-white p-4 shadow-md' key={quiz.id}>
                      <h2 className='text-xl text-slate-700 text-balance'>
                        <strong>{quiz.post.title}</strong>
                      </h2>
                      <p className='mt-1'>{quiz.post.description}</p>
                    </li>
                  )
              )}
            </ul>
          )}
        </div>
      </div>
    </div>
  )
}
