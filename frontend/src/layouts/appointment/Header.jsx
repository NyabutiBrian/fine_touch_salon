import React from 'react'

import hair3 from '../../assets/images/customers/hair3.webp'
import pattern2 from '../../assets/images/pattern-2-8.webp'

const Header = () => {
  return (
    <div className="py-16 bg-center bg-cover" style={{backgroundImage: `url(${pattern2})`}}>
        <div className="relative grid grid-cols-2 text-primary px-4">
            <div className="text-6xl sm:text-8xl xl:hidden font-extrabold text-end px-4 xl:pr-16">
                <h1 data-aos="flip-left">Time</h1>
                <h1>To</h1>
                <h1 data-aos="flip-left">Rock</h1>
            </div>
            <div className="hidden xl:block bigt font-extrabold text-end px-4 xl:pr-16">
                <h1 data-aos="flip-left">Time</h1>
                <h1>To</h1>
                <h1 data-aos="flip-left">Rock</h1>
            </div>
            <div className="absolute right-4 lg:right-16 z-40">
                <img src={hair3} alt="Fine Touch Salon Service Attractive Picture" title="Attractive Service Picture" className="rounded-xl w-52 sm:w-72 md:w-96 xl:w-full"/>
            </div>
        </div>
    </div>
  )
}

export default Header