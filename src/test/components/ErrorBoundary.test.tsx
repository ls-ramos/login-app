import React from 'react'
import { render, screen } from '@testing-library/react'
import ErrorBoundary from '../../components/ErrorBoundary'

test('should render ErrorBoundary error screen', () => {
  const FailedComponent = () => {
    throw new Error('unexpected error')
  }
  render(<ErrorBoundary><FailedComponent/></ErrorBoundary>)
  const textElement = screen.getByText(/Oh no an unexpected error ocurred :\(/i)
  expect(textElement).toBeInTheDocument()
})

test('should render ErrorBoundary children', () => {
  const SuccessComponent = () => (<p>No error found</p>)
  render(<ErrorBoundary><SuccessComponent/></ErrorBoundary>)
  const textElement = screen.getByText(/No error found/i)
  expect(textElement).toBeInTheDocument()
})
