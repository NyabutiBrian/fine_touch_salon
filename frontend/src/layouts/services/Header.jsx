import React from 'react'

import pattern2 from '../../assets/images/pattern-2-8.webp'

const Header = () => {
  return (
    <div id="header" className="flex flex-col items-center justify-center space-y-4 py-16 px-4 z-20 scroll-m-16 bg-center bg-cover" style={{backgroundImage: `url(${pattern2})`}}>
        <div className="text-primary font-extrabold">
            <h1 className="text-4xl md:text-6xl xl:text-8xl">Hairworks</h1>
        </div>
        <div className="text-primary font-extrabold">
            <h1 className="text-4xl md:text-6xl xl:text-8xl">Braiding + Cornrows</h1>
        </div>
        <div className="text-primary font-extrabold">
            <h1 className="text-4xl md:text-6xl xl:text-8xl">Weaving + Crochets</h1>
        </div>
    </div>
  )
}

export default Header