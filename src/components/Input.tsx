import React, { FC } from 'react'
import ErrorMessage from './ErrorMessage'

interface Props {
  className?:string,
  placeholder?: string,
  type?: string,
  value?: string,
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void,
  valueError?: string
}

const Input: FC<Props> = ({ valueError, className, ...rest }) => {
  let classes = className || ''
  if (valueError) {
    classes += ' error-input'
  }
  return (
    <div className="input-container">
      <input className={classes} {...rest}/>
      {
        !!valueError && <ErrorMessage message={valueError}/>
      }
    </div>
  )
}

export default Input
