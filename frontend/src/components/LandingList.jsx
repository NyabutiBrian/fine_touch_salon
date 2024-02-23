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
                    <div className="flex items-center justify-center space-x-2">
                        <i className="fa-solid fa-check-double"></i>
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