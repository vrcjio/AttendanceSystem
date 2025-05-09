import React from 'react'
import HeroSection from './Components/LayndingPage/HeroSection'
import AboutSection from './Components/LayndingPage/AboutSection '
import FeatureSection from './Components/LayndingPage/FeatureSection'
import HowItWorksSection from './Components/LayndingPage/HowItWorksSection'
import TestimonialSection from './Components/LayndingPage/TestimonialSection'
import Footer from './Components/LayndingPage/Footer '

function LayndingPage({...props}) {
  return (
    <div {...props} className='landing-page'>
      <HeroSection />
      <AboutSection />
      <FeatureSection />
      <HowItWorksSection />
      <TestimonialSection />
      <Footer />
    </div>
  )
}

export default LayndingPage
