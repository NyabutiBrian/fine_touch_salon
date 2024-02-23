import React from 'react'

const Values = () => {
  return (
    <section className="py-8">
        <div className="bg-whity rounded-3xl shadow-2xl p-4 sm:px-8">
            <div>
                <div className="flex justify-start px-8 md:px-16">
                    <h1 className="-mt-12 text-3xl sm:text-4xl text-primary italic py-4 px-6 font-semibold bg-whity rounded-3xl shadow-2xl">CORE VALUES</h1>
                </div>
                <div className="py-4 flex items-center justify-evenly flex-wrap px-2 text-sm text-primary font-semibold space-x-1 space-y-2">
                    <p className="bg-gradient-to-br from-whity to-warmy py-3 px-6 rounded-3xl shadow-xl">Creativity</p>
                    <p className="bg-gradient-to-br from-whity to-warmy py-3 px-6 rounded-3xl shadow-xl">Integrity</p>
                    <p className="bg-gradient-to-br from-whity to-warmy py-3 px-6 rounded-3xl shadow-xl">Community</p>
                    <p className="bg-gradient-to-br from-whity to-warmy py-3 px-6 rounded-3xl shadow-xl">Empowerment</p>
                    <p className="bg-gradient-to-br from-whity to-warmy py-3 px-6 rounded-3xl shadow-xl">Professionalism</p>
                    <p className="bg-gradient-to-br from-whity to-warmy py-3 px-6 rounded-3xl shadow-xl">Passion for Beauty</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Values