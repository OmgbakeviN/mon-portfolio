import { useState } from 'react'

import Navbar from './components/navbar'// Note la majuscule (important)
import HeroSection from './components/HeroSection'
import AboutSection from './components/About'
import SkillsSection from './components/SkillsSection'
function App() {
  return (
    <div className='animate-blob min-h-screen bg-gray-900'>
      <Navbar />
      < HeroSection />
      <AboutSection /> 
      <SkillsSection />
    </div>

  )
}

export default App