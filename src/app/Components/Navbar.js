"use client"
import React, { useState } from 'react'
import logo from './images/logo.svg'
import tabletpattern from './images/bg-tablet-pattern.svg'
import iconclose from './images/icon-close.svg'
import iconhamburger from './images/icon-hamburger.svg'
const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);

  const toggleNavBar = () => {
    setNavOpen(!navOpen);
  }
  return (
    <>
    <div className={`fixed w-full h-full bg-red-100/90 flex flex-col items-center justify-start transition-all duration-200  ${navOpen?'left-0':'left-full'}`}>
        <div className="menu  flex flex-col space-y-6   mt-32 text-xl">
          <span className='hover:text-gray-500  text-center'>Pricing</span>
          <span className='hover:text-gray-500  text-center'>Product</span>
          <span className='hover:text-gray-500  text-center'>About Us</span>
          <span className='hover:text-gray-500  text-center'>Careers</span>
          <span className='hover:text-gray-500  text-center'>Community</span>

        </div>
        <button className=" m-12 button px-6 bg-red-500 shadow-lg shadow-red-500 py-3 rounded-full text-white font-bold" >Get Started</button>

      </div>
    <div className='flex justify-between px-12 md:px-28  py-12 items-center relative ' >
      <img src={tabletpattern.src} className="absolute -top-32 -right-32 -z-40 overflow-" />

      {navOpen && <img src={iconclose.src} className="block md:hidden absolute top-1/2 right-12 -translate-y-1/2 transition-all duration-300 " onClick={toggleNavBar} />}
      {!navOpen && <img src={iconhamburger.src} className="block md:hidden absolute top-1/2 right-12 -translate-y-1/2 transition-all duration-300 " onClick={toggleNavBar} />}

      <div className="logo">
        <img src={logo.src} />
      </div>

      <div className="menu  space-x-7 md:flex hidden ">
        <span>Pricing</span>
        <span>Product</span>
        <span>About Us</span>
        <span>Careers</span>
        <span>Community</span>

      </div>
      <button className="md:flex hidden button px-6 bg-red-500 shadow-lg shadow-red-500 py-3 rounded-full text-white font-bold" >Get Started</button>

      {/* mobile friendly navbar */}
      

    </div>
    </>
  )
}

export default Navbar