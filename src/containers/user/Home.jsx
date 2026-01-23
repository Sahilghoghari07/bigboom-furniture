import React from 'react'
import { Link } from 'react-router-dom'
import SecondaryButton from '../../components/SecondaryButton'

function Home() {
  return (
    <main>

      {/* Hero Section */}
      <section className="hero-section min-h-screen relative">
        <div className="container mx-auto text-center max-w-3xl text-white py-4 px-4">

          <h2 className='font-bold text-4xl md:text-6xl py-4'>
            Make your interior more minimalistic & modern
          </h2>

          <p className='text-base md:text-lg my-4 opacity-90'>
            Turn your room with panto into a lot more minimalist and modern with ease and speed
          </p>

          <Link to={'/shop'}>
            <SecondaryButton type='button' text='SHOP NOW' className='my-2' />
          </Link>

        </div>

        <div className="absolute bottom-20 md:bottom-36 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <div className="border-2 border-orange-700 rounded-full h-10 w-6 flex justify-center relative overflow-hidden">
            <div className="w-1.5 h-1.5 bg-orange-600 rounded-full absolute top-2 animate-bounce"></div>
          </div>
          <span className="text-xs text-orange-800 tracking-widest">SCROLL</span>
        </div>

      </section>

      {/* Why Us? Section */}
      <section className='container mx-auto px-1 py-8 flex flex-col md:flex-row justify-between items-center gap-x-2'>
        <div className='w-full md:w-[25%] py-3 px-4'>
          <h2 className='text-4xl font-bold'>Why <br /> Choosing Us</h2>
        </div>
        <div className='w-full md:w-[25%] py-3 px-4'>
          <h3 className='text-2xl font-semibold mb-4'>Luxury facilities</h3>
          <p>The advantage of hiring a workspace with us is that givees you comfortable service and all-around facilities.</p>
        </div>
        <div className='w-full md:w-[25%] py-3 px-4'>
          <h3 className='text-2xl font-semibold mb-4'>Affordable Price</h3>
          <p>You can get a workspace of the highst quality at an affordable price and still enjoy the facilities that are oly here.</p>
        </div>
        <div className='w-full md:w-[25%] py-3 px-4'>
          <h3 className='text-2xl font-semibold mb-4'>Many Choices</h3>
          <p>We provide many unique work space choices so that you can choose the workspace to your liking.</p>
        </div>
      </section>

      {/* New Arrivals Section */}
      <section className='bg-[#F7F7F7]'>
        <div className="container mx-auto py-12">
          <div className='text-center uppercase my-3'>
            <h2 className='text-4xl font-bold mb-2'>New Arrivals</h2>
            <p className='text-gray-500'>Shop the new selection of New Arrivals at our store. Fill out your wishlist item.</p>
          </div>
        </div>
      </section>

    </main>
  )
}

export default Home