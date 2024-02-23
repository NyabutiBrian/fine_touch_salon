import React, { useState } from 'react'

import hair1 from '../../assets/images/services/hair1.webp';
import hair4 from '../../assets/images/services/hair4.webp';
import hair7 from '../../assets/images/services/hair7.webp';
import hair8 from '../../assets/images/services/hair8.webp';

import LandingList from '../../components/LandingList';

const Services = () => {

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
    <section id="services" className="flex flex-col space-y-8 items-center py-16">
        <div>
            <h1 className="text-primary text-3xl font-semibold">Our Services</h1>
        </div>
        <div className="grid lg:grid-cols-3 gap-8 lg:gap-4">
            {/* CARD 1 */}
            <LandingList services={services.filter((blog) => blog.category === 'Hairworks')} title ='Hairworks'/>
            <LandingList services={services.filter((blog) => blog.category === 'Braiding + Cornrows')} title ='Braiding + Cornrows'/>
            <LandingList services={services.filter((blog) => blog.category === 'Weaving + Crochets')} title ='Weaving + Crochets'/>
        </div>
    </section>
  )
}

export default Services