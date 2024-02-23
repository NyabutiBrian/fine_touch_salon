import React, { useEffect } from 'react'

import svgTop from '../assets/images/dark-wave-haikei-up.svg'
import svgBottom from '../assets/images/dark-wave-haikei-down.svg'

import Navbar from '../components/Navbar'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

import Header from '../layouts/landing/Header'
import About from '../layouts/landing/About'
import Services from '../layouts/landing/Services'
import Feedback from '../layouts/landing/Feedback'

const Landing = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />
      <Header />

      {/* Content */}
      <div className="-mt-0 xl:-mt-36 relative z-30">
        {/* SVG TOP */}
        <div>
            <img src={svgTop} alt="Wave svg" title="Wave SVG"/>
        </div>

        {/* MAIN CONTENT */}
        <main className="bg-whity">
          <div className="max-w-screen-xl mx-auto px-4">
            <About />
            <Services />
            <Feedback />
            <Contact />
          </div>
        </main>

        {/* SVG BOTTOM */}
        <div>
            <img src={svgBottom} alt="Wave svg" title="Wave SVG"/>
        </div>

      </div>

      <Footer />
    </>
  )
}

export default Landing