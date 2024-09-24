import React from 'react'
import HeroImg from '../../assets/hero_img.png'


const Home = () => {
  return (
    <div className='min-h-[550px] sm:min-h-[600px] bg-brandDark flex justify-center items-center text-white'>
    <div className='container pb-8 sm:pb-0'>
        <div className='grid grid-cols-1 sm:grid-cols-2'>
            {/* text content section */}
            <div className='order-2 sm:order-1'>
                <h1 className='text-7xl font-bold'> BrewHouse </h1>
                <p className='text-2xl font-cursive'> a modern cafe specializing in craft coffee and beer. With a focus on quality and sustainability, Brewhouse sources its beans and hops from local farmers and roasters. The cafe's inviting atmosphere and knowledgeable staff make it a popular destination for coffee and beer enthusiasts alike. </p>
                <br />
                <div>
                <button className='bg-white/30 px-6 py-2 rounded-3xl hover:scale-105 duration-200' > Order Now </button>
                </div>
            </div>
            {/* image  section */}
            <div className='min-h [450px] flex justify-center items-center order-1 sm:order-2'>
                <img src={HeroImg} alt="" className=' w-[300px] sm:w-[450px] sm:scale-110 mx-auto spin' />
            </div>
        </div>
    </div>
    </div>
  )
}

export default Home