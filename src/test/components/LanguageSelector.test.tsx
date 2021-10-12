import React from 'react'
import { render, screen } from '@testing-library/react'
import LanguageSelector from '../../components/LanguageSelector'

test('should render Language Selector', () => {
  render(<LanguageSelector onLanguageSelected={() => {}}/>)
  const buttonElement = screen.getAllByRole('button')
  expect(buttonElement.length).toBe(3)
})
