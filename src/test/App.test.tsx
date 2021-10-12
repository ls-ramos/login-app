import React from 'react'
import { render, screen } from '@testing-library/react'
import App from '../App'

test('renders learn react link', () => {
  render(<App />)
  const loginElement = screen.getByText(/Welcome, Log in!/i)
  expect(loginElement).toBeInTheDocument()
})
