import React, { Fragment } from 'react'
import { ListOfCategories } from '../components/ListOfCategories'
import { ListOfPhotoCards } from '../components/ListOfPhotoCard'

export const Home = ({ id }) => {
  return (
    <Fragment>
      <ListOfCategories />
      <ListOfPhotoCards categoryId={id} />
    </Fragment>
  )
}
