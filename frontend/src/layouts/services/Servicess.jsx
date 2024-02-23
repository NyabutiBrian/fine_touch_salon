import React, { useState } from 'react'

import hair1 from '../../assets/images/services/hair1.webp'
import hair4 from '../../assets/images/services/hair4.webp';
import hair7 from '../../assets/images/services/hair7.webp';
import hair8 from '../../assets/images/services/hair8.webp';

const Servicess = () => {

    const [services, setServices] = useState([
        { category:'Hairworks', name:'Relaxing', cost:'350', image: hair1 , id:'1'},
        { category:'Hairworks', name:'Texturizing', cost:'400', image:hair4, id:'2'},
        { category:'Hairworks', name:'Hair Treatment', cost:'450', image: hair7 , id:'3'},
        { category:'Hairworks', name:'Hair Coloring', cost:'500', image:hair8, id:'4'},

        { category:'Braiding + Cornrows', name:'Knotless', cost:'550', image: hair1 , id:'5'},
        { category:'Braiding + Cornrows', name:'Lemonade', cost:'600', image:hair4, id:'6'},
        { category:'Braiding + Cornrows', name:'Stitch Lines', cost:'700', image: hair7 , id:'7'},
        { category:'Braiding + Cornrows', name:'Twist Braiding', cost:'750', image:hair8, id:'8'},

        { category:'Weaving + Crochets', name:'Spring Twists', cost:'800', image: hair7 , id:'9'},
        { category:'Weaving + Crochets', name:'Chunky Twists', cost:'850', image:hair8, id:'10'},
        { category:'Weaving + Crochets', name:'Nubian Twists', cost:'900', image: hair1 , id:'11'},
        { category:'Weaving + Crochets', name:'Butterfly Locks', cost:'950', image:hair4, id:'12'},
    ]);

  return (
    <section id="services" className="py-16 scroll-m-16">
        <div>
            <div>
                <h1 className="text-primary text-center text-3xl font-semibold">Get Your Next Look</h1>
            </div>

            <div className="py-8">
                <div className="text-primary italic font-semibold">
                    <div className="hidden md:flex justify-center md:justify-between md:px-16 py-4">
                        <p>Service Name</p>
                        <p>Cost (Ksh)</p>
                    </div>
                    <hr className="bg-primary h-0.5 w-3/4 md:w-full mx-auto hidden md:block" />
                </div>

                {/* Service */}
                <>
                    {services.map((service) => (
                        <>
                            <div className="text-primary italic font-semibold py-8 hover-text" key={service.id}>
                                <div className="md:hidden rounded-xl bg-center bg-cover p-36" style={{backgroundImage: `url(${service.image})`,}} alt="Fine Touch Salon Service Attractive Picture" title="Attractive Service Picture">
                                </div>
                                <div className="flex justify-between px-8 md:px-16 py-4 text-xl lg:text-5xl md:font-bold">
                                    <p>{service.name}</p>
                                    <p>{service.cost} /=</p>
                                </div>
                                <span className="absolute hover-img md:py-32 md:px-64 rounded-xl bg-center bg-cover" style={{backgroundImage: `url(${service.image})`,}} alt="Fine Touch Salon Service Attractive Picture" title="Attractive Service Picture">
                                </span>
                            </div>
                            <hr className="bg-primary h-0.5 w-3/4 md:w-full mx-auto" />
                        </>
                    ))}
                </>

            </div>
        </div>
    </section>
  )
}

export default Servicess