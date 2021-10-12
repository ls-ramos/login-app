import React from 'react'
import { render, screen } from '@testing-library/react'
import WaitContainer from '../../components/WaitContainer'

test('should render component with WaitContainer', () => {
  render(<WaitContainer><p>test</p></WaitContainer>)
  const paragraph = screen.getByText('test')
  expect(paragraph).toBeInTheDocument()
})
