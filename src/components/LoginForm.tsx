import React, { FC, useState } from 'react'
import Input from './Input'
import ErrorMessage from './ErrorMessage'
import Spinner from './Spinner'
import Snackbar from './Snackbar'

import { useTranslation } from 'react-i18next'
import WaitContainer from './WaitContainer'

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
    if (!email?.trim()) {
      setEmailError('Email is required')
      error = true
    } else if (!email?.match(/^[A-Za-z0-9+_.-]+@[A-Za-z0-9.-]+$/)) {
      setEmailError('Invalid email address')
      error = true
    }

    if (!password.trim()) {
      setPasswordError('Password is required')
      error = true
    }

    return !error
  }

const LoginFormComponent: FC<Props> = ({ onSubmit }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('')
  const [submitError, setSubmitError] = useState('')
  const [loading, setLoading] = useState(false)

  const { t } = useTranslation()

  const clearErrors = () => {
    setEmailError('')
    setPasswordError('')
    setSubmitError('')
  }

  const handleLoginSubmit = async () => {
    setLoading(true)
    clearErrors()
    if (areFieldsValid(email, setEmailError, password, setPasswordError)) {
      try {
        await onSubmit(email.trim(), password)
      } catch (err: any) {
        console.error(err)
        setSubmitError(err?.message)
        setLoading(false)
      }
    } else {
      setLoading(false)
    }
  }

  return (
      <div className="column login-form">
        <Snackbar/>
        <h1>{t('Welcome, Log in!')}</h1>
        <Input
          className="login-input"
          placeholder={t('Email')}
          type="text"
          value={email}
          onChange={(e) => {
            setEmailError('')
            setEmail(e.target.value)
          }}
          valueError={t(emailError)}
        />
        <Input
            className="login-input"
            placeholder={t('Password')}
            type="password"
            value={password}
            onChange={(e) => {
              setPasswordError('')
              setPassword(e.target.value)
            }}
            valueError={t(passwordError)}
        />
        {
          !!submitError && <ErrorMessage message={t(submitError)}/>
        }
        <button
          className="button login-button"
          onClick={handleLoginSubmit}
          disabled={loading}
          >
          {loading ? <Spinner className="centered-loader"/> : t('Login')}
        </button>
      </div>
  )
}

const LoginForm: FC<Props> = (props) => (
  <WaitContainer>
    <LoginFormComponent {...props}/>
  </WaitContainer>
)

export default LoginForm
