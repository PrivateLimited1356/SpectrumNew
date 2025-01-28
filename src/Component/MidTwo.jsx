import React from 'react'

const MidTwo = () => {
  return (
    <div className='px-[12vw] mt-20'>
        <p className='text-7xl font-medium '>A Connection Built for Everywhere</p>
        <p className='text-3xl mt-3 text-gray-700'>Take on your day with a reliable connection that keeps you ready for anything.</p>
      <div className='flex gap-14 mt-10'>
        <div className='border-2 rounded-2xl'>
           <img className='rounded-2xl' src="./images/img-3.webp" alt="" />
           <div className='p-10'>
           <p className='text-gray-700 text-xl'>SPECTRUM INTERNET®</p>
           <p className='text-4xl'>Experience the Fastest, Most Reliable</p>
           <p className='text-4xl'>Internet</p>
           <p className='text-xl mt-2'>Fast, reliable and secure Internet is just a click away.</p>
           <p className='text-blue-700 text-2xl mt-10'>Shop Internet</p>
           </div>
        </div>
        <div className='border-2 rounded-2xl'>
        <img className='rounded-2xl' src="./images/img-4.webp" alt="" />
        <div className='p-10'>
           <p className='text-gray-700 text-xl'>SPECTRUM Mobile®</p>
           <p className='text-4xl'>Try Spectrum Mobile for a Full Year</p>
          
           <p className='text-xl mt-2'>One full year of Spectrum Mobile service is included when you get</p>
           <p  className='text-xl mt-2'>Spectrum Internet. That’s a $360 value!</p>
           <p className='text-blue-700 text-2xl mt-10'>Shop Mobile</p>
           </div>
        </div>
      </div>
      <div className='bg-[#EDEEEF] rounded-2xl mt-20 flex'>
        <div className='w-full'>
        <img className='rounded-2xl mt-14' src="./images/img-5.webp" alt="" />
        </div>
        <div className='w-full'>
            <div className='p-10 mt-16'>
           <img src="./images/Xumo_Logo.webp" alt="" />
           <p className='text-6xl font-semibold'>Live TV and Streaming</p>
           <p className='text-6xl font-semibold'>Apps</p>
           <p className='text-2xl mt-5'>Sign up for any Spectrum TV® plan and get Xumo</p>
           <p className='text-2xl '>Stream Box included.</p>

           <button className='mt-10  w-48 h-14 font-medium rounded-full bg-white text-blue-700 text-2xl'>Shop TV plans</button>
           </div>
        </div>
      </div>
    </div>
  )
}

export default MidTwo
