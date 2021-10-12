import React from 'react'
import { render, screen } from '@testing-library/react'
import ErrorMessage from '../../components/ErrorMessage'

test('should render ErrorMessage with message', () => {
  render(<ErrorMessage message={'test'} />)
  const textElement = screen.getByText(/test/i)
  expect(textElement).toBeInTheDocument()
})
