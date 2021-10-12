import React from 'react'
import { render, screen } from '@testing-library/react'
import Snackbar from '../../components/Snackbar'

test('should render snackbar', () => {
  render(<Snackbar message="test"/>)
  const snackbarDiv = screen.getByText('test')
  expect(snackbarDiv).toBeInTheDocument()
})
