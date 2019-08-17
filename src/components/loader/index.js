import ContentLoader from 'react-content-loader'
import React from 'react'

export const MyLoader = () => (
  <ContentLoader
    height={500}
    width={400}
    speed={2}
    primaryColor='#f3f3f3'
    secondaryColor='#ecebeb'
  >
    <circle cx='59' cy='40' r='40' />
    <circle cx='150' cy='40' r='40' />
    <circle cx='247' cy='40' r='40' />
    <circle cx='338' cy='40' r='40' />
  </ContentLoader>
)
