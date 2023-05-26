import React from 'react'
import illustrationintro from './images/illustration-intro.svg'
const Section = () => {
  return (
    <div className='flex px-12 md:px-28 flex-col-reverse md:flex-row'>
        <div className="left flex-1  flex  flex-col justify-center">
            <h1 className='md:text-6xl md:text-left text-4xl text-center text-blue-950 font-bold mb-8'> Bring everyone together to build better products.</h1>
            <p className='text-lg text-gray-500 w-full text-center md:text-left  md:w-2/3 mb-8'>Manage makes it simple for software teams to plan day-to-day task while keeping the larger team goals in view.</p>
            <div>
            <button className="button px-6  bg-red-500 shadow-lg shadow-red-500 py-3 rounded-full text-white font-bold md:mx-0 mx-auto block" >Get Started</button>
            </div>
        </div>
        <div className="right flex-1 ">
            <img src={illustrationintro.src} alt="" className='mt-12' />
        </div>
    </div>
  )
}

export default Section