import ContentLoader from 'react-content-loader'
import React from 'react'
export const MyLoader = () => (
  <ContentLoader
    height={475}
    width={400}
    speed={2}
    primaryColor='#f3f3f3'
    secondaryColor='#ecebeb'
  >
    <circle cx='30' cy='30' r='30' />
    <circle cx='117' cy='30' r='30' />
    <circle cx='204' cy='30' r='30' />
    <circle cx='286' cy='31' r='30' />
  </ContentLoader>
)
