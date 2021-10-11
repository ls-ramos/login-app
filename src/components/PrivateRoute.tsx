import React, { FC } from 'react'
import { Route, Redirect } from 'react-router-dom'
import { useAuth } from './use-auth'

interface Props {
  path: string
}

const PrivateRoute: FC<Props> = (props) => {
  const { children, ...rest } = props
  const auth = useAuth()
  console.log('PRIVATE ROUTE AUTH:', auth)
  return (
        <Route
        {...rest}
        render={({ location }) =>
          auth?.token
            ? (
                children
              )
            : (
            <Redirect
                to={{
                  pathname: '/',
                  state: { from: location }
                }}
            />
              )
        }
        />
  )
}

export default PrivateRoute
