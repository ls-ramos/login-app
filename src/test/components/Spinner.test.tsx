import React from 'react'
import { render } from '@testing-library/react'
import Spinner from '../../components/Spinner'

test('should render Spinner', () => {
  const element = render(<Spinner/>)
  const spinnerDiv = element.getByTestId('loader-spinner-div0')
  expect(spinnerDiv.className).toContain('loader')
})
