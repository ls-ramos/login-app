import React, { FC } from 'react'
import { Link, useLocation } from 'react-router-dom'

const NotFound: FC = () => {
  const location = useLocation()
  return (
    <div className="centered-container">
      <h1>Are you lost ?</h1>
      <p>{`Unfortunately we could not find the page ${location.pathname} :( `}</p>
      <Link to="/home">Back to Home</Link>
    </div>
  )
}
export default NotFound
