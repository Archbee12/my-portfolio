import React from 'react'
import AboutIntro from '@/components/about/AboutIntro'
import MyJourney from '@/components/about/MyJourney'
import FocusAreas from '@/components/about/FocusArea'

const About = () => {
  return (
    <div className= "space-y-20 py-8 sm:space-y-24 sm:py-12">
      <AboutIntro />
      <FocusAreas />
      <MyJourney />
    </div>
  )
}

export default About