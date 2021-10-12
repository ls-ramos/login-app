import React, { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { Link, useLocation } from 'react-router-dom'
import WaitContainer from '../components/WaitContainer'

const NotFoundComponent: FC = () => {
  const location = useLocation()
  const { t } = useTranslation()
  return (
    <div className="centered-container">
      <h1>{t('Are you lost ?')}</h1>
      <p>{`${t('Unfortunately we could not find the page')} ${location.pathname} :( `}</p>
      <Link to="/home">{t('Back to Home')}</Link>
    </div>
  )
}

const NotFound: FC = () => (
  <WaitContainer>
    <NotFoundComponent/>
  </WaitContainer>
)
export default NotFound
