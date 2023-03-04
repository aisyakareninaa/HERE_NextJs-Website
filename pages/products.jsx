import Hero from '@/components/Hero'
import Products from '@/components/Products'
import React from 'react'
import Footer from '@/components/Footer'

const products = () => {
  return (
    <div>
        <Hero heading='HERE Our Products' message='Find your comfort with HERE' />
        <Products />
        <Footer />
    </div>
  )
}

export default products