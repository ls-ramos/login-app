import React, { useEffect, useState } from 'react'
import Spinner from '../components/Spinner'
import TopSnackbar from '../components/TopSnackbar'

import { useAuth } from '../components/AuthProvider'

const Home = () => {
  const [loading, setLoading] = useState(true)
  const [userMessage, setUserMessage] = useState({ message: '', type: '' })
  const auth = useAuth()

  useEffect(() => {
    if (!auth) return

    const { user, token } = auth
    if (user && token) {
      user.getUserDetails(token).then(() => {
        setLoading(false)
        setUserMessage({ message: 'User information retrieved', type: 'success' })
      }).catch(err => {
        setUserMessage({ message: 'Falied to retrieve user information', type: 'error' })
        console.error(err)
      })
    }
  }, [auth?.user, auth?.token])

  return (
    <div className="main-container">
      { userMessage.message &&
        <TopSnackbar
          className={`${userMessage.type}-snackbar`}
          message={userMessage.message}
          onClose={() => setUserMessage({ message: '', type: '' })}
        />}
        <div className="row header">
          <h1>Home</h1>
          <button
            className="button logout-button"
            onClick={async () => {
              if (auth) {
                await auth?.signout()
              } else {
                console.error('Auth not set')
              }
            }}>
            Logout
        </button>
        </div>
        <h3>Welcome to your home page</h3>

        <label className="user-label">First Name</label>
        <div className="user-info-container">
          {loading ? <Spinner/> : <p className="user-info">{auth?.user?.firstName}</p>}
        </div>

        <label className="user-label">Last Name</label>
        <div className="user-info-container">
          {loading ? <Spinner/> : <p className="user-info">{auth?.user?.lastName}</p>}
        </div>

    </div>
  )
}

export default Home
