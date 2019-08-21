import React from 'react'
import { GlobalStyles } from './GlobalStyles'
import { Logo } from './components/Logo'
import { NavBar } from './components/NavBar'
import { Home } from './pages/Home'
import { Detail } from './pages/Detail'

import { Router } from '@reach/router'

export const App = () => {
  return (
    <div>
      <GlobalStyles />
      <Logo />
      <Router>
        <Home path='/' />
        <Home path='/pet/:id' />
        <Detail path='/detail/:detailId' />
      </Router>
      <NavBar />
    </div>
  )
}
