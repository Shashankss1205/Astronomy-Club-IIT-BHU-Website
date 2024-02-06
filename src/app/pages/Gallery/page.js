import React from 'react'
import Header from '../../Components/Header'
import Footer from '@/app/Components/Footer'
import Gallery from './Gallery'

const images = []
for (let i = 1; i <= 33; i++) {
  images.push(`/images/gallery/Image${i}.JPG`); 
}

const page = () => {
  return (
    <>
      <Gallery images={images}></Gallery>
    </>

  )
}

export default page

