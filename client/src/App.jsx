import { useState } from 'react'
import Navbar from './components/navbar/Navbar'
import HeroSection from './components/heroSection/HeroSection'
import Services from './components/services/Services'
import Testimonials from './components/testimonials/Testimonials'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'



function App() {

  return (
    <>
      <Navbar />
      <HeroSection />
      <Services />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  )
}

export default App
