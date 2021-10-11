import React, { Fragment, useState } from 'react'
import { Redirect } from 'react-router'

import { useAuth } from '../components/use-auth'

const Login = () => {
  const auth = useAuth()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  console.log('AUTH LOGIN PAGE:', auth)

  if (auth?.token) {
    return (
      <Redirect to={{ pathname: '/home' }}/>
    )
  }

  return (
        <Fragment>
            <p>Login page</p>
            <input placeholder="Email" type="text" onChange={(e) => { setEmail(e.target.value) }}/>
            <input placeholder="Password" type="password" onChange={(e) => { setPassword(e.target.value) }}/>
            <button onClick={async () => {
              if (auth) {
                await auth.signin(email, password)
                console.log('Signed in')
              } else {
                console.log('Error')
              }
            }}>
                Log in
            </button>
        </Fragment>
  )
}

export default Login
