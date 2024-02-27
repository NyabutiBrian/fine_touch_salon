import React from 'react'
import { Link } from 'react-router-dom'

import pattern3 from '../assets/images/pattern-3.webp'
import footerLogo from '../assets/images/nav-logo-1.webp'

const Footer = () => {
  return (
    <footer id="footer" className="bg-primary z-10 -mt-20 bg-center bg-cover" style={{backgroundImage: `url(${pattern3})`}}>
        <div className="max-w-sm sm:max-w-2xl md:max-w-3xl lg:max-w-5xl xl:max-w-7xl mx-auto px-2 pt-32 pb-5">
            <div className="flex flex-col items-center xl:flex-row xl:justify-between">
                <div className="mb-6 md:mb-0">
                    <Link to="/">
                        <img data-aos="flip-left" src={footerLogo} alt="Fine Touch Footer Logo" title="Footer Logo Fine Touch Salon"/>
                    </Link>
                </div>
                <div className="grid grid-cols-2 gap-8 sm:gap-6">
                    <div>
                        <h2 className="mb-6 font-semibold text-warmy uppercase">Resources</h2>
                        <ul className="text-whity/80 font-medium">
                            <li className="mb-4">
                                <Link to="/about" className="hover:underline hover:text-whity">About Us</Link>
                            </li>
                            <li className="mb-4">
                                <a href="#contacts" className="hover:underline hover:text-whity">Contacts</a>
                            </li>
                            <li>
                                <Link to="/services" className="hover:underline hover:text-whity">Services</Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="mb-6 font-semibold text-warmy uppercase">Legal</h2>
                        <ul className="text-whity/80 font-medium">
                            <li className="mb-4">
                                <a href="#" className="hover:underline hover:text-whity">Privacy Policy</a>
                            </li>
                            <li>
                                <a href="#" className="hover:underline hover:text-whity">Terms &amp; Conditions</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

        <hr className="my-6 border-warmy sm:mx-auto lg:my-4" />

        <div className="max-w-7xl mx-auto flex items-center flex-col sm:flex-row sm:justify-between py-4 px-8">
            <span className="text-sm text-whity sm:text-center">© 2023 <a href="#"
                    className="hover:underline">Fine Touch Salon™</a>. All Rights Reserved.
            </span>
            <div className="flex mt-4 space-x-5 sm:justify-center sm:mt-0">
                <a href="#" className="transition duration-200 transform hover:scale-150">
                    <i className="fa-brands fa-x-twitter text-whity hover:text-warmy"></i>
                    <span className="sr-only">Twitter page</span>
                </a>
                <a href="#" className="transition duration-200 transform hover:scale-150">
                    <i className="fa-brands fa-instagram text-whity hover:text-warmy"></i>
                    <span className="sr-only">Instagram page</span>
                </a>
                <a href="#" className="transition duration-200 transform hover:scale-150">
                    <i className="fa-brands fa-tiktok text-whity hover:text-warmy"></i>
                    <span className="sr-only">Tiktok page</span>
                </a>
            </div>
        </div>

    </footer>
  )
}

export default Footer