import React from 'react';
import { PageHero, AdoptionIntro } from "@/app/components"

const Adoption = () => {
  return (
    <div className=''>
      <PageHero pageTitle='Get Adoption' prev='Home' prevUrl='/' currentPage='Adoption' />
      <AdoptionIntro />
    </div>
  )
}

export default Adoption
