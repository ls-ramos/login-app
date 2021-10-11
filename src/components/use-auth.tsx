import React, { useContext, createContext, useState, FC, useEffect } from 'react'
import { useCookies } from 'react-cookie'
import User from '../models/User'

interface authObject {
    user: User | null,
    token: string | null,
    signin: (email: string, password: string) => void,
    signout: () => void
}

interface ApiCallResponse {
  data: {
      data: {
      login:{
          jwt: string,
          user: User
      }
      }
  }
}

function useProvideAuth (): authObject {
  const [user, setUser] = useState<User | null>(null)
  const [cookies, setCookie, removeCookie] = useCookies(['jwt'])
  const [token, setToken] = useState<string | null>(cookies?.jwt || null)

  console.log('PROVIDER AUTH:', user)

  useEffect(() => {
    if (cookies?.jwt && !user) {
      User.getLoggedInUserFromToken(cookies.jwt).then(userLoggedIn => {
        console.log('Setting user')
        setUser(userLoggedIn)
      })
    }
  }, [cookies?.jwt, user])

  const signin = async (email:string, password:string) => {
    const signinResponse: ApiCallResponse = await User.login(email, password)
    const { data: { data: { login: { jwt, user } } } } = signinResponse

    const loggedInUser = new User(user.id, user.email, user.blocked)

    setUser(loggedInUser)
    setToken(jwt)
    setCookie('jwt', jwt, {
      path: '/',
      secure: true,
      sameSite: 'strict',
      maxAge: 604800 // one week
    })
  }

  const signout = () => {
    setToken(null)
    setUser(null)
    removeCookie('jwt')
  }

  return {
    user,
    token,
    signin,
    signout
  }
}

const authContext = createContext<authObject| null>(null)

export const ProvideAuth: FC = ({ children }) => {
  const auth = useProvideAuth()
  return (
    <authContext.Provider value={auth}>
      {children}
    </authContext.Provider>
  )
}

export const useAuth = () => {
  return useContext(authContext)
}
