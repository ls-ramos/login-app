import React, { Fragment, useEffect, useState } from 'react'
import { useAuth } from '../components/use-auth'

const Home = () => {
  const [loading, setLoading] = useState(true)
  const auth = useAuth()

  useEffect(() => {
    if (!auth) return

    const { user, token } = auth
    if (user && token) {
      user.getUserDetails(token).then(() => {
        setLoading(false)
        console.log('NEW USER:', user)
      })
    }
  }, [auth?.user, auth?.token])

  return (
    <Fragment>
        <p>Home page</p>
        {loading && <p>loading</p>}
        {!loading &&
          <Fragment>
            <p>{auth?.user?.firstName}</p>
            <p>{auth?.user?.lastName}</p>
          </Fragment>
        }
        <button onClick={async () => {
          if (auth) {
            await auth?.signout()
          } else {
            console.log('Error')
          }
        }}>
            Log out
        </button>
    </Fragment>
  )
}

export default Home
