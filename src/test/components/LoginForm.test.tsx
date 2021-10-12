import React from 'react'
import { render, screen } from '@testing-library/react'
import LoginForm from '../../components/LoginForm'

test('should render Login Form', () => {
  render(<LoginForm onSubmit={() => {}}/>)
  const textElement = screen.getByText(/Welcome, Log in!/i)
  expect(textElement).toBeInTheDocument()
})
