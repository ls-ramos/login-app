import React from 'react'
import { render, screen } from '@testing-library/react'
import { ProvideAuth } from '../../components/AuthProvider'

test('should render component with AuthProvider', () => {
  render(<ProvideAuth><p>test</p></ProvideAuth>)
  const paragraph = screen.getByText('test')
  expect(paragraph).toBeInTheDocument()
})
