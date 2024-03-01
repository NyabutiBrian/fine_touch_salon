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
            <i className="fa-solid fa-scissors text-8xl"></i>
            <h1 className="text-8xl font-semibold">72</h1>
            <h3 className="font-semibold text-lg italic">Satisfied Customers</h3>
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