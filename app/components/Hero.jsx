import React from 'react'
import Image from 'next/image'

function Hero() {
  return (
    <div>
        <div className=''>
            <Image
            src='/dd.jpg'
            height={800}
            width={800}
            alt='Hero'
            className='w-full'
            />
        </div>
        <div className='-mt-96 ml-10 mb-[400px]'>
          <h1 className='text-8xl font-bold text-blue-500'>Best Friend <br/> in A Pet</h1>
          <p className='text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, sunt.</p>
        </div>
        <div>

        </div>
    </div>
  )
}

export default Hero