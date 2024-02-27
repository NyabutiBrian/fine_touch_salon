import React from 'react'

import aboutLogo from '../../assets/images/logo-2-8.webp'

const About = () => {
  return (
    <section id="about" className="grid md:grid-cols-3 gap-16 md:gap-8 py-16 scroll-m-24 md:scroll-m-52">
        <div className="flex flex-col items-center space-y-8 md:col-span-1">
            <div>
                <h1 className="text-primary text-3xl font-semibold">Fine Touch Salon</h1>
            </div>
            <div data-aos="flip-left">
                <img src={aboutLogo} alt="Fine Touch About Logo" title="About Logo Fine Touch Salon"/>
            </div>
        </div>
        <div className="flex flex-col items-center space-y-8 md:col-span-2">
            <div>
                <h1 className="text-primary text-3xl font-semibold">What Sets Us Apart</h1>
            </div>
            <div className="flex flex-col space-y-4 text-primary font-medium md:text-lg">
                <p>We offer high-quality hair services and have exceptionally friendly and skilled professionals who take time to understand and meet your needs.</p>
                <p>We work in a clean and calm ambiance that ensures relaxation as you enjoy our services.</p>
                <p>We are honest to offer recommendations that suit your needs, style and matches your unique lifestyle.</p>
            </div>
        </div>
    </section>
  )
}

export default About