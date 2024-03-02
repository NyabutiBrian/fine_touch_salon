import React from 'react'
import { Link } from 'react-router-dom'

import logo from '../assets/images/nav-logo-1.webp'

const Navbar = () => {
  return (
    <div className="navbar sticky top-0 max-w-screen-md xl:max-w-screen-xl rounded-full mx-auto bg-primary z-50">
        <div className="navbar-start">
            <div className="dropdown">
                <div tabIndex="0" role="button" className="btn btn-ghost md:hidden text-whity">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                    </svg>
                </div>
                <ul tabIndex="0" className="menu menu-lg dropdown-content mt-3 z-[1] p-2 shadow bg-primary text-whity rounded-box w-56 font-semibold">
                    <li><Link to="/" className="text-warmy hover:text-whity">Home</Link></li>
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/services">Services</Link></li>
                    <li><a href="#contacts">Contact Us</a></li>
                </ul>
            </div>
            <Link to="/" className="md:ml-4">
                <img src={logo} alt="Fine Touch Navigation Logo" title="Navigation Logo" className="w-1/3" />
            </Link>
        </div>
        <div className="navbar-center hidden md:flex">
            <ul className="menu menu-horizontal px-1 text-whity font-medium">
                <li><Link to="/" className="text-warmy hover:text-whity">Home</Link></li>
                <li><Link to="/about" className="hover:text-warmy">About Us</Link></li>
                <li><Link to="/services" className="hover:text-warmy">Services</Link></li>
                <li><a href="#contacts" className="hover:text-warmy">Contact Us</a></li>
            </ul>
        </div>
        <div className="navbar-end mr-4">
            <Link to="/appointment" className="bg-whity text-primary font-semibold cursor-pointer text-sm md:text-base py-2 px-4 rounded-full hover:bg-gradient-to-br from-warmy to-[#f3C492] focus:ring-4 focus:outline-none focus:ring-secondary transition duration-200 transform hover:scale-110">Book Now</Link>
        </div>
    </div>
  )
}

export default Navbar