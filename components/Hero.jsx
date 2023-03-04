import React from 'react'
import Link from 'next/link';

const Hero = ({heading, message}) => {
  return (
    <div className='flex items-center justify-center h-screen mb-12 bg-fixed 
    bg-center bg-cover custom-img'>
        {/* Overlay */}
        <div className='grid grid-cols-2 mx-8 my-8 items-center xs:grid-cols-1 xs:order-1'> 
      <div className="flex-1">
            <h2 className='text-5xl py-4 items-stretch font-semibold'>{heading}</h2>
            <p className='text-md my-2'>{message}</p>
            <Link href="/products/#products">
            <button className="bg-yellow-400 px-5 py-3 rounded-lg hover:bg-black-200">Get Yours!</button>
            </Link>
        </div>

      </div>
        </div>
  )
}

export default Hero