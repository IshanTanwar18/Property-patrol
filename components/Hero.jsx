import React from 'react'
import PropertySearchForm from './PropertySearchForm';

const Hero = () => {
  return (
       <section className="bg-[#ECE6E7] py-10 mb-4">
      <div
        className="max-w-[90%] rounded-2xl bg-white  mx-auto px-6 py-13 sm:px-6 lg:px-8  flex flex-col items-center"
      >
        <div className="text-center">
          <h1
            className="text-4xl font-extrabold text-black sm:text-5xl md:text-6xl"
          >
            Find The Perfect Rental
          </h1>
          <p className="my-4 text-xl text-black">
            Discover the perfect property that suits your needs.
          </p>
        </div>
        <PropertySearchForm/>
      </div>
    </section>
  )
}

export default Hero;