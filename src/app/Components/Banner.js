import React from 'react'
import tabletpattern from './images/bg-tablet-pattern.svg'

const Banner = () => {
  return (
    <div className='bg-red-500 relative overflow-hidden p-10 flex flex-col md:flex-row  justify-between md:px-28 items-center'>
        <img src={tabletpattern.src} className="hidden md:block absolute opacity-10 -top-16 -left-2" />
        <img src={tabletpattern.src} className="hidden md:block absolute opacity-10 bottom-20 -right-1/3" />
        <img src={tabletpattern.src} className="absolute opacity-10 top-20 -left-3/4 md:hidden" />
        <div className='w-full md:w-2/5 '>
            <h1 className='text-white text-5xl text-center md:text-left font-semibold'>Simplify how your team works today.</h1>
        </div>
        <div>
        <button className=" m-12 button px-6 text-red-500 bg-white shadow-lg shadow-red-500 py-3 rounded-full  font-bold" >Get Started</button>
        </div>
    </div>
  )
}

export default Banner