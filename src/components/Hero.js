import React from 'react'
import beachVid from '../assets/beachVid.mp4'
import { AiOutlineSearch } from 'react-icons/ai'

function Hero() {
  return (
    <div className='w-full h-screen relative'>
        <video className='w-full h-full object-cover' src={beachVid} autoPlay loop muted/>
        <div className='absolute w-full h-full top-0 left-0 bg-gray-900/30'></div>
        <div className='absolute top-0 w-full h-full flex flex-col justify-center text-center text-white font-[Poppins] '>
            <h1>First Class Travel</h1>
            <h2 className='py-4'>Top 1% Locations Worldwide</h2>
            <form className='border flex justify-between items-center max-w-[700px] mx-auto w-full p-1 rounded-md bg-gray-100/90 text-black'>
                <div>
                    <input className='bg-transparent w-[300px] sm:w-[400px] font-[Poppins] focus:outline-none' type="text" placeholder='Search Destination' />
                </div>
                <div>
                    <button><AiOutlineSearch size={20} className='icon' style={{'color':'white'}}/></button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Hero