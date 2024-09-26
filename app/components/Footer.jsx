import React from 'react'
import { PawPrint } from 'lucide-react';


function Footer() {
  return (
    <div className='bg-blue-950 bottom-0'>
        <div className='flex gap-4'>
            <h1 className='text-sm font-semibold'>Unchained Pets</h1>
            <PawPrint className='text-white mt-1' />
        </div>
    </div>
  )
}

export default Footer