import React from 'react'

import tabletpattern from './images/bg-tablet-pattern.svg'

const Service = () => {
  return (
    <div className='flex md:px-28  px-12  md:flex-row flex-col mt-28 relative'>
      {/* <img src={tabletpattern.src} className="absolute -z-50 -bottom-2/3 -left-2/3" /> */}
      <div className="left flex-1 mb-8">
        <div className='md:w-4/5  mx-auto md:m-0 w-full '>
          <h1 className='text-4xl text-blue-950 font-bold text-center md:text-left'>What's different about Manage?</h1>
        </div>
        <div className=' mx-auto md:m-0  w-full' >
          <p className='text-lg text-gray-500 mt-8 md:text-left text-center'>Manage provides all the functionality your team needs, without the complexity. Our software is tailor-made for modern digital product teams.</p>
        </div>
      </div>
      <div className="right flex-1">
        <div className='flex flex-col'>
          <div className='flex mb-12'>
            <div >
              <div className='bg-red-500 px-5 py-2 text-white font-bold rounded-full'>01</div>
            </div>
            <div className='ml-7'>
              <h1 className='mt-2 mb-4 text-blue-950 text-xl font-bold'>Track Company-wide progress</h1>
              <p className='text-lg text-gray-500'>See how your day-to-day tasks fit into the wider vision. Go from tracking progress at milestone level all the way done to the smallest of details. Never lose sight of the bigger picture again.</p>
            </div>
          </div>
          <div className='flex mb-12'>
            <div >
              <div className='bg-red-500 px-5 py-2 text-white font-bold rounded-full'>02</div>
            </div>
            <div className='ml-7'>
              <h1 className='mt-2 mb-4 text-blue-950 text-xl font-bold'>Advanced built-in reports</h1>
              <p className='text-lg text-gray-500'>Set internal delivery estimates and track progress toward company goals. Our customizable dashboard helps you build out the reports you need to keep key stakeholders informed.</p>
            </div>
          </div>
          <div className='flex mb-12'>
            <div >
              <div className='bg-red-500 px-5 py-2 text-white font-bold rounded-full'>03</div>
            </div>
            <div className='ml-7'>
              <h1 className='mt-2 mb-4 text-blue-950 text-xl font-bold'>Everything you need in one place</h1>
              <p className='text-lg text-gray-500'>Stop jumping from one service to another to communicate, store files, track tasks and share documents. Manage offers an all-in-one team productivity solution.</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Service