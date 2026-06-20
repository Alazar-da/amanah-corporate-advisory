'use client'

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import VisionMission from './components/VisionMission'
import Services from './components/Services'
import Locations from './components/Locations'
import WhyChooseUs from './components/WhyChooseUs'
import Team from './components/Team'
import Industries from './components/Industries'
import Process from './components/Process'
import Testimonials from './components/Testimonials'
import CTA from './components/CTA'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import { Toaster } from 'react-hot-toast'

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <VisionMission />
      <Services />
      <Locations />
      <WhyChooseUs />
      <Team />
      <Industries />
      <Process />
      <Testimonials />
      <CTA />
      <Contact />
      <Footer />
      <ScrollToTop />
      <Toaster
  position="top-center"
  reverseOrder={false}
/>
    </main>
  )
}