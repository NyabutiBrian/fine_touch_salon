import React from 'react'
import { Link } from 'react-router-dom'

const LandingList = ({services, title}) => {
  return (
    <div className="max-w-sm bg-gradient-to-br from-whity to-warmy p-8 rounded-2xl shadow-xl">
        <div className="flex flex-col items-center justify-center space-y-4">
            <div>
                <h3 className="text-primary text-2xl font-bold">{title}</h3>
            </div>
            <div>
            {services.map((service) => (
                <ul className="text-primary text-lg fle flex-col space-y-2" key={service.id}>
                    <div data-aos="fade-left" className="flex items-center justify-center space-x-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width='1rem' viewBox="0 0 448 512"><path d="M342.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 178.7l-57.4-57.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l80 80c12.5 12.5 32.8 12.5 45.3 0l160-160zm96 128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 402.7 54.6 297.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0l256-256z"/></svg>
                        <li>{service.name}</li>
                    </div>
                </ul>
            ))}
            </div>
            <div className="py-4 transition duration-200 transform hover:scale-110">
                <Link to="/services" className="bg-primary text-whity/80 font-semibold cursor-pointer text-sm py-3 px-6 rounded-full hover:text-whity focus:ring-4 focus:outline-none focus:ring-whity">Load More</Link>
            </div>
        </div>
    </div>
  )
}

export default LandingList