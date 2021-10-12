import React, { FC } from 'react'
import { useCookies } from 'react-cookie'
import ReactCountryFlag from 'react-country-flag'

interface Props{
  onLanguageSelected: (newLanguage: string) => void
}
const LanguageSelector: FC<Props> = ({ onLanguageSelected, ...rest }) => {
  const [cookie, setCookie] = useCookies(['language'])

  const selectLanguge: (newLanguage: string) => void = (newLanguage) => {
    onLanguageSelected(newLanguage)
    if (cookie?.language !== newLanguage) {
      setCookie('language', newLanguage, {
        path: '/',
        maxAge: 29030400 // approximately one year
      })
    }
  }

  return (
    <div className="country-row" {...rest}>
      <button onClick={() => selectLanguge('en')} className="clean-button">
        <ReactCountryFlag countryCode="US" className="country-flag" style={{ fontSize: '1.5rem', lineHeight: '1.5rem' }}/>
      </button>
      <button onClick={() => selectLanguge('pt')} className="clean-button">
        <ReactCountryFlag countryCode="BR" className="country-flag" style={{ fontSize: '1.5rem', lineHeight: '1.5rem' }}/>
      </button>
      <button onClick={() => selectLanguge('de')} className="clean-button">
        <ReactCountryFlag countryCode="DE" className="country-flag" style={{ fontSize: '1.5rem', lineHeight: '1.5rem' }}/>
      </button>
      </div>
  )
}

export default LanguageSelector
