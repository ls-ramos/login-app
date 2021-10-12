import React, { FC, Suspense } from 'react'
import Spinner from './Spinner'

const WaitContainer: FC = ({ children, ...rest }) => (
  <Suspense
    fallback={<div className="centered-container"><Spinner/></div>}
    {...rest}
  >
    {children}
  </Suspense>
)

export default WaitContainer
