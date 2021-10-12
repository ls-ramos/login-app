import React from 'react'
import { useAuth } from '../components/AuthProvider'
import { Redirect } from 'react-router'

import LoginForm from '../components/LoginForm'

const Login = () => {
  const auth = useAuth()

  if (auth?.token) {
    return (
      <Redirect to={{ pathname: '/home' }}/>
    )
  }

  return (
    <LoginForm onSubmit={async (email, password) => {
      if (auth) {
        await auth.signin(email, password)
      } else {
        console.error('Auth not set')
      }
    }}/>
  )
}

export default Login
