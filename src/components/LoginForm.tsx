import React, { FC, useState } from 'react'
import Input from './Input'
import ErrorMessage from './ErrorMessage'
import Spinner from './Spinner'

interface Props{
  onSubmit: (email:string, password:string) => void
}

const areFieldsValid: (
    email: string,
    setEmailError: (error: string) => void,
    password:string,
    setPasswordError: (error:string) => void
  ) => boolean = (email, setEmailError, password, setPasswordError) => {
    let error = false
    if (!email.trim()) {
      setEmailError('Email can not be empty')
      error = true
    }

    if (!password.trim()) {
      setPasswordError('Password can not be empty')
      error = true
    }

    return !error
  }

const LoginForm: FC<Props> = ({ onSubmit }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('')
  const [submitError, setSubmitError] = useState('')
  const [loading, setLoading] = useState(false)

  const clearErrors = () => {
    setEmailError('')
    setPasswordError('')
    setSubmitError('')
  }

  return (
    <div className="column login-form">
      <h1>Welcome, Login !</h1>
      <Input
         className="login-input"
         placeholder="Email"
         type="text"
         value={email}
         onChange={(e) => {
           setEmailError('')
           setEmail(e.target.value)
         }}
         valueError={emailError}
      />
      <Input
          className="login-input"
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => {
            setPasswordError('')
            setPassword(e.target.value)
          }}
          valueError={passwordError}
      />
      {
        !!submitError && <ErrorMessage message={submitError}/>
      }
      <button
        className="login-button"
        onClick={async () => {
          setLoading(true)
          clearErrors()
          if (areFieldsValid(email, setEmailError, password, setPasswordError)) {
            try {
              await onSubmit(email, password)
            } catch (err: any) {
              console.log(err)
              setSubmitError(err?.message)
            }
          }
          setLoading(false)
        }}
        disabled={loading}
        >
        {loading ? <Spinner/> : 'Login'}
      </button>

    </div>
  )
}

export default LoginForm
