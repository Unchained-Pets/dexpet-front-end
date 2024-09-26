"use client"
import React from 'react'
import { useState, useEffect } from 'react';
import { PawPrint } from 'lucide-react';
import { Button } from '@/components/ui/button';
function Navbar() {

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
    <div className={`flex justify-between items-center px-10 py-5 bg-opacity-50 transition-colors duration-300 ease-in-out backdrop-blur-sm fixed top-0 left-0 w-full z-50'${ isScrolled ? 'bg-black text-white' : 'bg-transparent text-black'}`}>
        <div className='flex gap-4'>
            <h1 className='text-2xl font-semibold'>Unchained Pets</h1>
            <PawPrint className='text-blue-700 mt-1' />
        </div>
        <div className='space-x-10'>
        <a href="" className='font-semibold hover:bg-blue-700 hover:py-2 hover:px-2 hover:rounded-md hover:text-white '>Pet List</a>
            <a href="/adoption" className='font-semibold'>Adoption</a>
            <a href="" className='font-semibold'>Contact</a>
        </div>

        <div>
        <Button variant="outline" >Adopt Here</Button>
        </div>
    </div>
  )
}

export default Navbar