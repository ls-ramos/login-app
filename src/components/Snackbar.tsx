import React, { FC, useEffect, useState } from 'react'

interface Props {
  className?:string
  message?:string,
  onClose?: () => void
}

const Snackbar: FC<Props> = ({ className, message, onClose, ...rest }) => {
  const [visible, setVisible] = useState(true)
  setTimeout(() => {
    setVisible(false)
  }, 2900)

  useEffect(() => {
    if (!visible) {
      if (onClose) onClose()
    }
  }, [visible])
  return (visible ? <div className={`snackbar ${className || ''}`} {...rest}>{message || ''}</div> : <div></div>)
}

export default Snackbar
