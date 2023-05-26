import React from 'react'
import u1 from './images/avatar-ali.png';
import u2 from './images/avatar-anisha.png';
import u3 from './images/avatar-richard.png';
import u4 from './images/avatar-shanai.png';

const Testimonials = () => {
    return (
        <div className='my-12 '>
            <div className='m-12'>
                <h1 className='text-4xl font-semibold text-center text-blue-950 '>What they've said</h1>
            </div>
            <div className="flex pt-12 md:flex-row flex-col">
                <div className='bg-gray-200 px-10 pb-10 pt-12 m-3 rounded-lg relative flex items-center flex-col my-8' >
                    <div className=' flex justify-center w-16 absolute -top-7'>
                        <img src={u1.src} alt="" className=' ' />
                    </div>
                    <h1 className='text-center text-lg font-bold text-blue-950 m-3'>Ali Bravo</h1>
                    <div  className=''>
                    <p className='text-gray-500 text-center'>"we have been able to cancle so many other subscriptions since using Manage. There is no more cross-channel confusion and everyone is much more focused."</p>
                    </div>
                </div>
                <div className='bg-gray-200 px-10 pb-10 pt-12 m-3 rounded-lg relative flex items-center flex-col my-8' >
                    <div className=' flex justify-center w-16 absolute -top-7'>
                        <img src={u2.src} alt="" className=' ' />
                    </div>
                    <h1 className='text-center text-lg font-bold text-blue-950 m-3'>Ali Bravo</h1>
                    <div  className=''>
                    <p className='text-gray-500 text-center'>"we have been able to cancle so many other subscriptions since using Manage. There is no more cross-channel confusion and everyone is much more focused."</p>
                    </div>
                </div>
                <div className='bg-gray-200 px-10 pb-10 pt-12 m-3 rounded-lg relative flex items-center flex-col my-8' >
                    <div className=' flex justify-center w-16 absolute -top-7'>
                        <img src={u3.src} alt="" className=' ' />
                    </div>
                    <h1 className='text-center text-lg font-bold text-blue-950 m-3'>Ali Bravo</h1>
                    <div  className=''>
                    <p className='text-gray-500 text-center'>"we have been able to cancle so many other subscriptions since using Manage. There is no more cross-channel confusion and everyone is much more focused."</p>
                    </div>
                </div>
                <div className='bg-gray-200 px-10 pb-10 pt-12 m-3 rounded-lg  relative flex items-center flex-col my-8' >
                    <div className=' flex justify-center w-16 absolute -top-7'>
                        <img src={u4.src} alt="" className=' ' />
                    </div>
                    <h1 className='text-center text-lg font-bold text-blue-950 m-3'>Ali Bravo</h1>
                    <div  className=''>
                    <p className='text-gray-500 text-center'>"we have been able to cancle so many other subscriptions since using Manage. There is no more cross-channel confusion and everyone is much more focused."</p>
                    </div>
                </div>
            </div>

            <div className='flex justify-center'>        
                <button className=" m-12 button px-6 hover:bg-red-400 bg-red-500 shadow-lg shadow-red-500 py-3 rounded-full text-white font-bold" >Get Started</button>
            </div>

        </div>
    )
}

export default Testimonials