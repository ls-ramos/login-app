import React, { FC } from 'react'
import { Route, Redirect } from 'react-router-dom'
import { useAuth } from './AuthProvider'

interface Props {
  path: string
}

const PrivateRoute: FC<Props> = ({ children, ...rest }) => {
  const auth = useAuth()
  return (
        <Route
        {...rest}
        render={({ location }) =>
          auth?.token
            ? children
            : <Redirect
                to={{
                  pathname: '/',
                  state: { from: location }
                }}
            />
        }
        />
  )
}

export default PrivateRoute
