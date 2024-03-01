import React, { useState } from 'react'

import relaxing from '../../assets/images/services/relaxed.webp'
import texturizing from '../../assets/images/services/hair4.webp';
import treatment from '../../assets/images/services/treatment.webp';
import coloring from '../../assets/images/services/colored.webp';
import knotless from '../../assets/images/services/knotless.webp'
import lemonade from '../../assets/images/services/hair8.webp';
import lines from '../../assets/images/services/stitchlines.webp';
import twists from '../../assets/images/services/twists.webp';
import spring from '../../assets/images/services/spring.webp'
import chunky from '../../assets/images/services/chunky.webp';
import nubian from '../../assets/images/services/nubian.webp';
import butterfly from '../../assets/images/services/butterfly.webp';

const Servicess = () => {

    const [services, setServices] = useState([
        { category:'Hairworks', name:'Relaxing', cost:'350', image: relaxing , id:'1'},
        { category:'Hairworks', name:'Texturizing', cost:'400', image:texturizing, id:'2'},
        { category:'Hairworks', name:'Hair Treatment', cost:'450', image: treatment , id:'3'},
        { category:'Hairworks', name:'Hair Coloring', cost:'500', image:coloring, id:'4'},

        { category:'Braiding + Cornrows', name:'Knotless', cost:'550', image: knotless , id:'5'},
        { category:'Braiding + Cornrows', name:'Lemonade', cost:'600', image:lemonade, id:'6'},
        { category:'Braiding + Cornrows', name:'Stitch Lines', cost:'700', image: lines , id:'7'},
        { category:'Braiding + Cornrows', name:'Twist Braiding', cost:'750', image:twists, id:'8'},

        { category:'Weaving + Crochets', name:'Spring Twists', cost:'800', image: spring , id:'9'},
        { category:'Weaving + Crochets', name:'Chunky Twists', cost:'850', image:chunky, id:'10'},
        { category:'Weaving + Crochets', name:'Nubian Twists', cost:'900', image: nubian , id:'11'},
        { category:'Weaving + Crochets', name:'Butterfly Locks', cost:'950', image:butterfly, id:'12'},
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
                                <div data-aos="flip-up" className="md:hidden rounded-xl bg-center bg-cover p-36" style={{backgroundImage: `url(${service.image})`,}} alt="Fine Touch Salon Service Attractive Picture" title="Attractive Service Picture">
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