import React from 'react'
import { travelSlides } from '../data/travelSlides';
import TravelSlider from './TravelSlider';

const Hero = () => {
  return (
    <div className='flex flex-col items-center justify-center z-50'>
      

      <TravelSlider slides={travelSlides}/> 
      
    </div>
  )
}

export default Hero