import React, { Fragment } from 'react'
import { useAuth } from '../components/use-auth'
import { Redirect } from 'react-router'

import LoginForm from '../components/LoginForm'

const Login = () => {
  const auth = useAuth()

  console.log('LOGIN PAGE RENDER')

  if (auth?.token) {
    return (
      <Redirect to={{ pathname: '/home' }}/>
    )
  }

  return (
    <Fragment>
      <LoginForm onSubmit={async (email, password) => {
        if (auth) {
          await auth.signin(email, password)
          console.log('Signed in')
        } else {
          console.log('Error')
        }
      }}/>
    </Fragment>
  )
}

export default Login
