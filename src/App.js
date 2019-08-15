import React from 'react'
import { ListOfCategories } from './components/ListOfCategories/index'
import { GlobalStyles } from './GlobalStyles'
import { ListOfPhotoCards } from './components/ListOfPhotoCard/index'
import { Logo } from './components/Logo/index'
export const App = () => (
  <div>
    <GlobalStyles />
    <Logo />
    <ListOfCategories />
    <ListOfPhotoCards />
  </div>)
