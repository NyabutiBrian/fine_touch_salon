import React from 'react'

const Contact = () => {
  return (
    <section id="contacts" className="py-16 scroll-m-16">
        <div>
            <h1 className="text-primary text-center text-3xl font-semibold">Contact Us</h1>
        </div>

        {/* Left */}
        <div className="grid xl:grid-cols-3 md:grid-cols-2 items-center py-8">
            <div className="xl:col-span-1 md:col-span-1 px-8 sm:flex flex-col items-center justify-center">
                <div className="text-primary text-center sm:text-start">
                    <div className="py-1">
                        <p className="font-semibold text-lg">Working Hours</p>
                        <p className="italic">Monday - Saturday : 8am - 8pm </p>
                        <p className="italic">Sunday : Closed </p>
                    </div>
                    <div className="py-1">
                        <p className="font-semibold text-lg">Contacts</p>
                        <p className="italic">Phone : +254 (700 013 897)</p>
                        <p className="italic">Email : finetouch@gmail.com</p>
                    </div>
                    <div className="py-1">
                        <p className="font-semibold text-lg">Location</p>
                        <p className="italic">Utawala, Opposite ACK Church</p>
                    </div>
                </div>
            </div>

            {/* Center */}
            <div className="xl:col-span-1 md:col-span-1 mt-8 xl:border-x-2 px-8 border-primary">
                <p className="mb-4 text-primary text-center font-semibold text-lg">Get in Touch with Us!</p>
                <form>
                    <div className="relative z-0 w-full mb-6 group">
                        <input type="text" name="floating_text" id="floating_text" className="block py-2.5 px-0 w-full text-sm text-primary bg-transparent border-0 border-b-2 border-primary appearance-none  focus:outline-none focus:ring-0 focus:border-primary peer" placeholder=" " required />
                        <label htmlFor="floating_text" className="peer-focus:font-medium absolute text-sm text-primary duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Name</label>
                    </div>
                    <div className="relative z-0 w-full mb-6 group">
                        <input type="email" name="floating_email" id="floating_email" className="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 border-primary text-primary appearance-none  focus:outline-none focus:ring-0 focus:border-primary peer" placeholder=" " required />
                        <label htmlFor="floating_email" className="peer-focus:font-medium absolute text-sm text-primary duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email Address</label>
                    </div>
                    <div className="relative z-0 w-full mb-6 group">
                        <textarea type="text" name="floating_text" id="floating_text" className="textarea textarea-bordered h-24 block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 border-primary text-primary appearance-none  focus:outline-none focus:ring-0 focus:border-primary peer" placeholder="" spellCheck="true" required></textarea>
                        <label htmlFor="floating_text" className="peer-focus:font-medium absolute text-sm text-primary duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Message</label>
                    </div>
                    <div className="text-end">
                        <button value="submit" className="text-whity/80 bg-primary hover:text-whity focus:ring-4 focus:outline-none focus:ring-warmy font-medium rounded-lg md:w-full sm:w-auto px-5 py-2.5 text-center transition duration-200 transform hover:scale-110">Submit</button>
                    </div>
                </form>
            </div>

            <div className="xl:col-span-1 md:col-span-2 mt-8 px-8 text-center">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d498.60242340697096!2d36.97020802709274!3d-1.2821485069650393!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f6ca38b2f8bcf%3A0x82e3c4af7350c455!2sFINE%20TOUCH%20SALON!5e0!3m2!1sen!2ske!4v1705263157109!5m2!1sen!2ske" style={{border: 0}} allowFullScreen="" loading="async" async defer referrerPolicy="no-referrer-when-downgrade" className="rounded-lg w-full"></iframe>
            </div>
        </div>
    </section>
  )
}

export default Contact