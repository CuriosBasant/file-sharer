'use client'

import {
  ComponentProps,
  createContext,
  PropsWithChildren,
  useContext,
  useId,
  useState,
} from 'react'

const Context = createContext('')

export default function Form(props: PropsWithChildren<ComponentProps<'form'>>) {
  const formId = useId()

  return (
    <Context.Provider value={formId}>
      <form className='' {...props}>
        {props.children}
      </form>
    </Context.Provider>
  )
}

type FormFieldProps = ComponentProps<'input'> & {
  label: string
  secure?: boolean
}

function FormField(props: FormFieldProps) {
  const formId = useContext(Context)
  const fieldId = props.name + formId

  return (
    <div className='space-y-1'>
      <label htmlFor={fieldId} className='font-bold font-small-caps'>
        {props.label}
      </label>

      {props.secure ? (
        <FormSecureField {...props} id={fieldId} />
      ) : (
        <input
          type='text'
          {...props}
          className='w-full rounded-md border border-slate-300 bg-slate-100 shadow-inner focus:outline-none'
          id={fieldId}
        />
      )}
    </div>
  )
}
Form.Field = FormField

function FormSecureField(props: ComponentProps<'input'>) {
  const [visible, setVisible] = useState(false)

  return (
    <div className='relative'>
      <input
        {...props}
        type={visible ? 'text' : 'password'}
        className='w-full rounded-md border border-slate-300 bg-slate-100 pr-12 shadow-inner focus:outline-none'
      />
      <button
        className='absolute right-2 top-2.5 font-icon'
        onClick={() => void setVisible((b) => !b)}
        type='button'>
        {visible ? 'visibility_off' : 'visibility'}
      </button>
    </div>
  )
}
