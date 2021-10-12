import React from 'react'
import { render, screen } from '@testing-library/react'
import Home from '../../pages/Home'

test('should render Home page', () => {
  render(<Home/>)
  const screenTitle = screen.getByText(/Home/)
  expect(screenTitle).toBeInTheDocument()
})
