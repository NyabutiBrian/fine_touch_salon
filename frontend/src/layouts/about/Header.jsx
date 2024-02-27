import React from 'react'
import heroImage from '../../assets/images/header-1-8.webp'
import pattern2 from '../../assets/images/pattern-2-8.webp'

const Header = () => {
  return (
    <div id="header" className="flex flex-col items-center justify-center py-16 z-20 scroll-m-16 bg-center bg-cover" style={{backgroundImage: `url(${pattern2})`}}>
        {/* Image */}
        <div>
            <img data-aos="zoom-out-down" src={heroImage} alt="Hero Section visual of unique hair styles" title="Striking visuals of different hairsytles" className="w-80 md:w-auto"/>
        </div>
    </div>
  )
}

export default Header