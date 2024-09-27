import React from 'react'
import { BreadCrumbs } from "@/app/components"

interface PageHeroProps {
  pageTitle: string;
  prev: string;
  prevUrl: string;
  currentPage: string;
}

const PageHero:React.FC<PageHeroProps> = ({pageTitle, prev, prevUrl, currentPage}) => {
  return (
    <div className='flex items-center justify-center bg-gradient-to-r from-cyan-500 to-blue-500 h-[220px] md:h-[350px] w-screen'>
      <main className='h-[100px] pt-6 md:pt-0 px-5 md:px-10 w-full lg:w-[1260px] xl:w-[1400px] space-y-5 md:space-y-10'>
        <span className='text-2xl md:text-4xl font-bold text-blue-950 px-6 rounded-l-xl bg-white py-4'>{pageTitle}</span>
        <BreadCrumbs prev={prev} prevUrl={prevUrl} currentPage={currentPage} />
      </main>
    </div>
  )
}

export default PageHero
 