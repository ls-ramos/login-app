import React, { FC } from 'react'
interface Props{
  className?: string
}
const Spinner: FC<Props> = ({ className, ...rest }) =>
  (<div data-testid="loader-spinner-div0" className={`loader ${className || ''}`} {...rest}></div>)

export default Spinner
