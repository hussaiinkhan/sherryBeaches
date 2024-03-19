import React from 'react'
import {BsPerson} from 'react-icons/bs'
import {BiSearch} from 'react-icons/bi'
import {AiOutlineClose} from 'react-icons/ai'
import {HiOutlineMenuAlt4} from 'react-icons/hi'
import {FaFacebook, FaTwitter, FaInstagram, FaPinterest, FaYoutube} from 'react-icons/fa'
import { useState } from 'react'


function Navbar() {
    const [nav, setNav] = useState(false)
    const [logo, setLogo] = useState(false)
    const handleNav = ()=>{
        setNav(!nav)
        setLogo(!logo)
    }
  return (
    <div className='flex justify-between items-center w-full h-20 px-4 absolute z-10 text-white'>
        <div>
            <h1 onClick={handleNav} className={logo?'hidden':'block mx-4'}>sherryBEACHES.</h1>
        </div>
        <ul className='hidden md:flex'>
            <li>Home</li>
            <li>Destinations</li>
            <li>Travel</li>
            <li>Views</li>
            <li>Book</li>
        </ul>
        <div className='hidden md:flex'>
            <BiSearch className='mr-2' size={20}/>
            <BsPerson size={20}/>
        </div>
        <div onClick={handleNav} className='md:hidden z-10'>
            {nav?<AiOutlineClose className='text-black' size={20}/>:<HiOutlineMenuAlt4 size={20}/>}
        </div>
        {/* Hamburger Menu */}
        <div onClick={handleNav} className={nav?'absolute text-black left-0 top-0 w-full bg-gray-100/90 px--4 py-7 flex flex-col':'hidden'}>
            <ul>
                <h1 className='mx-2'>sherryBEACHES.</h1>
                <li className='border-b'>Home</li>
                <li className='border-b'>Destinations</li>
                <li className='border-b'>Travel</li>
                <li className='border-b'>Views</li>
                <li className='border-b'>Book</li>
            </ul>
            <div className='flex flex-col'>
                <button className='my-4'>Search</button>
                <button>Account</button>
            </div>
            <div className='flex justify-between my-6'>
                <FaFacebook className='icon'/>
                <FaTwitter className='icon'/>
                <FaInstagram className='icon'/>
                <FaPinterest className='icon'/>
                <FaYoutube className='icon'/>
            </div>
        </div>
    </div>
  )
}

export default Navbar