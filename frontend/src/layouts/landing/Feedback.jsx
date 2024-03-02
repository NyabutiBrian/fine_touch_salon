import React, { useState } from 'react'

import client1 from '../../assets/images/customers/hair10.webp'
import client2 from '../../assets/images/customers/hair4.webp'
import client3 from '../../assets/images/customers/hair7.webp'

const Feedback = () => {

    const [feedbacks, setFeedbacks] = useState([
        {id: 1, image:client1, name:'Stacy', message:'Awsome, I look like a proper working model'},
        {id: 2, image:client2, name:'Karen', message:'I was skeptic at first, now i have no words. I like it.'},
        {id: 3, image:client3, name:'Jane', message:'Time to rock that school look! This is a unique design.'},
    ]);

  return (
    <section id="customer" className="grid grid-cols-2 md:grid-cols-4 gap-4 py-16">
        {/* Details */}
        <div className="flex flex-col items-center justify-center space-y-4 text-primary md:border-r-4 border-primary">
            <svg xmlns="http://www.w3.org/2000/svg" fill='#1F0B0B' width='8rem' viewBox="0 0 512 512"><path d="M256 192l-39.5-39.5c4.9-12.6 7.5-26.2 7.5-40.5C224 50.1 173.9 0 112 0S0 50.1 0 112s50.1 112 112 112c14.3 0 27.9-2.7 40.5-7.5L192 256l-39.5 39.5c-12.6-4.9-26.2-7.5-40.5-7.5C50.1 288 0 338.1 0 400s50.1 112 112 112s112-50.1 112-112c0-14.3-2.7-27.9-7.5-40.5L499.2 76.8c7.1-7.1 7.1-18.5 0-25.6c-28.3-28.3-74.1-28.3-102.4 0L256 192zm22.6 150.6L396.8 460.8c28.3 28.3 74.1 28.3 102.4 0c7.1-7.1 7.1-18.5 0-25.6L342.6 278.6l-64 64zM64 112a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm48 240a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"/></svg>
            <h1 className="text-8xl font-semibold">72</h1>
            <h5 className="font-semibold text-lg italic">Satisfied Customers</h5>
        </div>

        {/* Customer 1 */}
        <>
            {feedbacks.map((feedback) => (
                <div data-aos="fade-up" className="flex flex-col space-y-2 text-primary shadow-2xl rounded-3xl" key={feedback.id}>
                    <div className="relative px-auto py-36 xl:py-48 rounded-t-3xl bg-center bg-cover" style={{backgroundImage: `url(${feedback.image})`}} alt="Fine Touch Client Testimonial" title="Client Testimonial Fine Touch Salon" loading = "lazy"></div>
                    <div className="p-4 flex flex-col space-y-2">
                        <h3 className="font-semibold text-lg">{feedback.name}</h3>
                        <p className="italic text-sm">" {feedback.message} "</p>
                    </div>
                </div>
            ))}
        </>
    </section>
  )
}

export default Feedback