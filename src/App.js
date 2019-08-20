import React, { Fragment } from 'react'
import { ListOfCategories } from './components/ListOfCategories/index'
import { GlobalStyles } from './GlobalStyles'
import { ListOfPhotoCards } from './components/ListOfPhotoCard/index'
import { Logo } from './components/Logo/index'
import { PhotoCardWithQuery } from './container/PhotoCardWithQuery'
export const App = () => {
  const urlParams = new window.URLSearchParams(window.location.search)
  const detailId = urlParams.get('detail')
  return (
    <div>
      <GlobalStyles />
      <Logo />
      {
        detailId
          ? <PhotoCardWithQuery id={detailId} />
          : <Fragment>
            <ListOfCategories />
            <ListOfPhotoCards categoryId={1} />
          </Fragment>
      }

    </div>
  )
}
