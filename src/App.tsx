import React from 'react'
import './App.css'

import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

import Home from './pages/Home'
import Login from './pages/Login'

import PrivateRoute from './components/PrivateRoute'
import { ProvideAuth } from './components/use-auth'
import { CookiesProvider } from 'react-cookie'

function App () {
  console.log('APP RE_RENDER')
  return (
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
        </Switch>
      </Router>
    </ProvideAuth>
    </CookiesProvider>
  )
}

export default App
