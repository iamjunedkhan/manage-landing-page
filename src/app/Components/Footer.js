import logo from './images/logo-white.svg'
import facebook from './images/icon-facebook.svg'
import instagram from './images/icon-instagram.svg'
import pinterest from './images/icon-pinterest.svg'
import twitter from './images/icon-twitter.svg'
import youtube from './images/icon-youtube.svg'

import React from 'react'

const Footer = () => {
    return (
        <div className='md:px-28 bg-blue-950 flex justify-between  py-20 flex-col-reverse md:flex-row  md:items-stretch items-center  border border-white' >
            <div className='flex flex-col-reverse  md:flex-col md:justify-between md:py-8 '>
                <div className='my-9 md:my-0 flex justify-center'>
                    <img src={logo.src} alt=""  className='text-white'/>
                </div>
                <div className='flex md:space-x-3 space-x-7 my-4 md:my-0 '>
                    <img src={facebook.src} alt="" className='w-8' />
                    <img src={instagram.src} alt="" className='w-8' />
                    <img src={pinterest.src} alt="" className='w-8' />
                    <img src={twitter.src} alt="" className='w-8' />
                    <img src={youtube.src} alt="" className='w-8' />
                </div>
            </div>
            <div className='flex  justify-between w-3/5 mx-12  my-6 md:justify-around'>

            <div className='flex text-white flex-col space-y-3 font-semibold'>
                    <span>Home</span>
                    <span>Pricing</span>
                    <span>Products</span>
                    <span>About Us</span>
            </div>
            <div className='flex text-white flex-col space-y-3 font-semibold ' >
                <span>Careers</span>
                <span>Community</span>
                <span>Privacy Policy</span>
            </div>
            </div>

            <div className='flex flex-col items-end justify-between m-6 '>
                <div className='md:flex '>
                    <input type="text" className='outline-none focus:outline-none rounded-full py-2 px-3  w-56 mx-2' placeholder='Updates in your inbox...' />
                    <button className='bg-red-500 px-4 py-2 focus:outline-none rounded-full text-white font-bold' >Go</button>
                </div>
                <div>
                    <span className='text-gray-500 md:block hidden'>Copyright 2023. All rights Reserved</span>
                </div>
            </div>
        </div>
    )
}

export default Footer