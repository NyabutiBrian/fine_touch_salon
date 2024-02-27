import React from 'react'

import hair7 from '../../assets/images/customers/hair7.webp'

const CEO = () => {
  return (
    <section>
        <div data-aos="fade-up" className="py-16">
            <div className="flex flex-col lg:flex-row justify-center items-center space-y-4 lg:space-y-0">
                <div className="lg:-mx-8 z-10">
                    <img src={hair7} alt="Fine Touch Salon CEO" title="CEO Fine Touch Salon" className="w-72 sm:w-96 rounded-3xl shadow-2xl" loading = "lazy" />
                </div>
                <div className="flex flex-col max-w-xl text-primary bg-gradient-to-br from-whity to-warmy rounded-3xl py-8 px-6 md:px-16 shadow-2xl z-20">
                    <div className="flex justify-center">
                        <h1 className="-mt-16 text-2xl italic py-4 px-6 font-semibold bg-whity rounded-3xl shadow-2xl">Message from our CEO</h1>
                    </div>
                    <div className="pt-4 flex justify-center space-x-4">
                        <span className="text-5xl">“</span>
                        <p className="text-sm lg:text-base text-justify italic">
                            At Fine Touch, we don't just provide hair services; we create transformative experiences that uplift the spirit and enhance confidence. 
                            Our team is dedicated to delivering excellence in every aspect of our work, from the latest trends to the warm, personalized service we offer. 
                            Join us and together, let's unleash your inner beauty and shine bright in a world that celebrates authenticity.
                        </p>
                        <span className="text-5xl">“</span>
                    </div>
                    <div className="text-sm text-center italic font-semibold py-4">
                        <p>Princess, CEO</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default CEO