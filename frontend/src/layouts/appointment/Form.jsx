import React, { useState } from 'react'

const Form = () => {

    const [services, setServices] = useState([
        { category:'Hairworks', name:'Relaxing', cost:'350', id:'1'},
        { category:'Hairworks', name:'Texturizing', cost:'400', id:'2'},
        { category:'Hairworks', name:'Hair Treatment', cost:'450', id:'3'},
        { category:'Hairworks', name:'Hair Coloring', cost:'500', id:'4'},

        { category:'Braiding + Cornrows', name:'Knotless', cost:'550', id:'5'},
        { category:'Braiding + Cornrows', name:'Lemonade', cost:'600', id:'6'},
        { category:'Braiding + Cornrows', name:'Stitch Lines', cost:'700', id:'7'},
        { category:'Braiding + Cornrows', name:'Twist Braiding', cost:'750', id:'8'},

        { category:'Weaving + Crochets', name:'Spring Twists', cost:'800', id:'9'},
        { category:'Weaving + Crochets', name:'Chunky Twists', cost:'850', id:'10'},
        { category:'Weaving + Crochets', name:'Nubian Twists', cost:'900', id:'11'},
        { category:'Weaving + Crochets', name:'Butterfly Locks', cost:'950', id:'12'},
    ]);

  return (
    <section id="contacts" className="py-16 scroll-m-16">
        <div className="grid md:grid-cols-2">
            <div className="flex items-center justify-center">
                <h1 className="text-primary text-3xl font-semibold">Appointment Centre</h1>
            </div>
        </div>
        <div className="grid lg:grid-cols-3 items-center py-8">
            <div className="lg:col-span-1 px-8 sm:flex flex-col items-center justify-center">
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
                    <div className="py-2">
                        <p className="italic text-sm font-semibold">
                            Kindly fill in your details in the provided form.
                            We will get in touch with you as soon as possible.
                        </p>
                    </div>
                </div>
            </div>

            <div className="lg:col-span-2 mt-8 xl:border-l-2 px-8 border-primary">
                <p className="mb-4 text-primary text-center font-semibold text-lg">Appointment Form</p>
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
                        <label htmlFor="price" className="block mb-2 text-sm font-medium text-primary">Phone:</label>
                        <input type="number" name="price" id="price" className="bg-white border border-primary text-primary text-sm rounded-lg focus:ring-whity focus:border-whity block w-full p-2.5" placeholder="07......97" required="" />
                    </div>
                    <div className="relative z-0 w-full mb-6 group">
                        <label htmlFor="category" className="block mb-2 text-sm font-medium text-primary">Select Service:</label>
                        <select id="category" className="bg-white border border-primary text-primary text-sm rounded-lg focus:ring-whity focus:border-whity block w-full p-2.5">
                            <option defaultValue="">Select Service</option>
                            {services.map((service) => (
                                <>
                                    <option key={service.id} value={service.name}>{service.name}</option>
                                </>
                            ))}
                        </select>
                    </div>
                    <div className="relative z-0 w-full mb-6 group">
                        <textarea type="text" name="floating_text" id="floating_text" className="textarea textarea-bordered h-24 block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 border-primary text-primary appearance-none  focus:outline-none focus:ring-0 focus:border-primary peer" placeholder="" spellCheck="true" required ></textarea>
                        <label htmlFor="floating_text" className="peer-focus:font-medium absolute text-sm text-primary duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Message</label>
                    </div>
                    <div className="text-end">
                        <button value="submit" className="text-whity/80 bg-primary hover:text-whity focus:ring-4 focus:outline-none focus:ring-warmy font-medium rounded-lg sm:w-auto px-5 py-2.5 text-center transition duration-200 transform hover:scale-110">Submit</button>
                    </div>
                </form>
            </div>
        
        </div>
    </section>
  )
}

export default Form