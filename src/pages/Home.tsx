import React, { useEffect, useState } from 'react'
import Spinner from '../components/Spinner'
import TopSnackbar from '../components/TopSnackbar'

import { useAuth } from '../components/AuthProvider'
import { useTranslation } from 'react-i18next'
import WaitContainer from '../components/WaitContainer'

const HomePage = () => {
  const [loading, setLoading] = useState(true)
  const [userMessage, setUserMessage] = useState({ message: '', type: '' })
  const auth = useAuth()
  const { t } = useTranslation()

  useEffect(() => {
    if (!auth) return

    const { user, token } = auth
    if (user && token) {
      user.getUserDetails(token).then(() => {
        setLoading(false)
        setUserMessage({ message: t('User information retrieved'), type: 'success' })
      }).catch(err => {
        setUserMessage({ message: t('Falied to retrieve user information'), type: 'error' })
        console.error(err)
      })
    }
  }, [auth?.user, auth?.token])

  const handleLogout = async () => {
    if (auth) {
      await auth?.signout()
    } else {
      setUserMessage({ message: t('Failed to logout, please try again'), type: 'error' })
    }
  }
  return (
    <div className="main-container">
      { userMessage.message &&
        <TopSnackbar
          className={`${userMessage.type}-snackbar`}
          message={userMessage.message}
          onClose={() => setUserMessage({ message: '', type: '' })}
        />}
        <div className="row header">
          <h1>{t('Home')}</h1>
          <button className="button logout-button" onClick={handleLogout}>
            {t('Logout')}
          </button>
        </div>
        <h3>{t('Welcome to your home page')}</h3>

        <label className="user-label">{t('First Name')}</label>
        <div className="user-info-container">
          {loading ? <Spinner/> : <p className="user-info">{auth?.user?.firstName}</p>}
        </div>

        <label className="user-label">{t('Last Name')}</label>
        <div className="user-info-container">
          {loading ? <Spinner/> : <p className="user-info">{auth?.user?.lastName}</p>}
        </div>

    </div>
  )
}

const Home = () => (
  <WaitContainer>
    <HomePage />
  </WaitContainer>
)

export default Home
