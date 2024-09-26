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
    <div className='flex items-center justify-center bg-gradient-to-r from-cyan-500 to-blue-500 h-[350px] w-screen'>
      <main className='h-[100px] px-10 xl:w-[1460px] space-y-10'>
        <span className='text-4xl font-bold text-blue-950 px-6 rounded-l-xl bg-white py-4'>{pageTitle}</span>
        <BreadCrumbs prev={prev} prevUrl={prevUrl} currentPage={currentPage} />
      </main>
    </div>
  )
}

export default PageHero
