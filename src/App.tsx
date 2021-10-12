import React from 'react'
import './styles/App.css'

import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

import Home from './pages/Home'
import Login from './pages/Login'
import NotFound from './pages/NotFound'

import PrivateRoute from './components/PrivateRoute'
import { ProvideAuth } from './components/AuthProvider'
import { CookiesProvider } from 'react-cookie'
import ErrorBoundary from './components/ErrorBoundary'

import i18n from './i18n'
import LanguageSelector from './components/LanguageSelector'

function App () {
  const changeLanguage: (newLanguage: string) => void = (newLanguage) => {
    i18n.changeLanguage(newLanguage)
  }
  return (
    <ErrorBoundary>
    <CookiesProvider>
    <ProvideAuth>
      <LanguageSelector onLanguageSelected={changeLanguage}/>
      <Router>
        <Switch>
          <PrivateRoute path="/home">
            <Home />
          </PrivateRoute>
          <Route exact path="/">
            <Login />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </ProvideAuth>
    </CookiesProvider>
    </ErrorBoundary>
  )
}

export default App
