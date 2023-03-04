import Footer from '@/components/Footer'
import React from 'react'
import Contact from '../components/Contact'
import Hero from '../components/Hero'

const contact = () => {
  return (
    <div>
        <Hero heading='Contact' message='Have any question about our products or need our help?' />
        <Contact />
        <Footer />
    </div>
  )
}

export default contact