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

function App () {
  return (
    <ErrorBoundary>
    <CookiesProvider>
    <ProvideAuth>
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
