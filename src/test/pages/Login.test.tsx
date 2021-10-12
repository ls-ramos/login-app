import React from 'react'
import { render, screen } from '@testing-library/react'
import Login from '../../pages/Login'

test('should render Home page', () => {
  render(<Login/>)
  const screenTitle = screen.getByText(/Welcome, Log in!/i)
  expect(screenTitle).toBeInTheDocument()
})
