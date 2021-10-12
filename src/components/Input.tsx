import React, { FC, useState } from 'react'
import ErrorMessage from './ErrorMessage'
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'

interface Props {
  className?:string,
  placeholder?: string,
  type?: string,
  value?: string,
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void,
  valueError?: string
}

const Input: FC<Props> = ({ valueError, className, type, ...rest }) => {
  const [passVisible, setPassVisible] = useState(false)

  let classes = className || ''
  if (valueError) {
    classes += ' error-input'
  }

  const isPassword = type === 'password'
  let passedType = type || ''
  if (isPassword && passVisible) {
    passedType = 'text'
  }
  return (
    <div className="input-container">
      <div className="row">
        <input className={classes} type={passedType} {...rest}/>
        {isPassword &&
          <div className="row" onClick={() => setPassVisible(!passVisible)}>
            {!passVisible ? <AiOutlineEye className="eye-button"/> : <AiOutlineEyeInvisible className="eye-button"/>}
          </div>
        }
      </div>
      {
        !!valueError && <ErrorMessage message={valueError}/>
      }
    </div>
  )
}

export default Input
