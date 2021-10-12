import React from 'react'
import { render, screen } from '@testing-library/react'
import Input from '../../components/Input'

test('should render Input', () => {
  render(<Input valueError="error test" placeholder="test placeholder"/>)
  const textElement = screen.getByText(/error test/i)
  const placeholder = screen.getByPlaceholderText(/test placeholder/i)
  expect(textElement).toBeInTheDocument()
  expect(placeholder).toBeInTheDocument()
})
