import React, { FC } from 'react'
import { RiErrorWarningLine } from 'react-icons/ri'

interface Props {
  message: string
}

const ErrorMessage: FC<Props> = ({ message, ...rest }) => {
  return (
    <div className="row error-message-container">
      <RiErrorWarningLine className="error-icon"/>
      <p className="error-text" {...rest}>{message}</p>
    </div>
  )
}

export default ErrorMessage
