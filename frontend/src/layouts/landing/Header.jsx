import React from 'react'
import { Link } from 'react-router-dom'

import pattern1 from '../../assets/images/pattern-2-8.webp'
import heroSection from '../../assets/images/header-1-8.webp'

const Header = () => {
  return (
    <div id="header" className="flex flex-col items-center justify-center py-16 px-4 z-20 scroll-m-16 bg-center bg-cover" style={{backgroundImage: `url(${pattern1})`,}}>
        <div className="text-primary font-extrabold">
            <h1 className="text-8xl lg:hidden">Twists</h1>
            <h1 className="bigt hidden lg:block">Twists</h1>
        </div>
        <div>
            <img src={heroSection} alt="Hero Section visual of unique hair styles" title="Striking visuals of different hairsytles" className="w-72 md:w-96 lg:hidden"/>
        </div>
        <div className="flex flex-row space-x-8 text-primary font-extrabold">
            <h2 className="text-7xl lg:hidden">for</h2>
            <h2 className="bigt2 hidden lg:block">for</h2>
            <img src={heroSection} alt="Hero Section visual of unique hair styles" title="Striking visuals of different hairsytles" className="w-72 md:w-96 hidden lg:block"/>
            <h2 className="text-7xl lg:hidden">you</h2>
            <h2 className="bigt2 hidden lg:block">you</h2>
        </div>

        {/* Tagline */}
        <div className="max-w-5xl mx-auto shadow-2xl rounded-3xl mt-4 py-4 px-6 bg-gradient-to-br from-warmy to-[#FFE6CB] z-40">
            <div className="text-primary font-medium md:text-md mt-6 flex flex-col items-center space-y-4">
                <p>
                    Fine Touch Salon located in the heart 
                    of Utawala. We seek to provide the best 
                    friendly and personalized services 
                    through a team of highly skilled and creative 
                    professionals in a clean and relaxing environment.
                </p>
                <div className="py-4 transition duration-200 transform hover:scale-110">
                    <Link to="/appointment" className="bg-primary text-whity/80 font-semibold cursor-pointer text-sm md:text-base py-3 px-6 rounded-full hover:text-whity focus:ring-4 focus:outline-none focus:ring-whity">Book an Appointment</Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header