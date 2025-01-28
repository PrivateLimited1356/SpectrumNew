import React from 'react'

const Hero = () => {
  return (
    <div className='mt-10 '>
      <div className='relative '>
        <img src="./images/img-1.webp" alt="" />
        <div className='px-[12vw] absolute top-28  '>
            <p className='text-7xl tracking-tight font-bold'>Fast,Reliable Internet for</p>
            <p className='text-7xl font-bold'>Home Connectivity</p>
           <p className='text-3xl mt-8'>Choose Spectrum for the fastest, most reliable home Internet. Bundle with</p>
           <p className='text-3xl '>Mobile or TV for monthly savings and a multi-year price guarantee.</p>
            <div className='border-blue-950 border-l-4 mt-10 '>
                <p className='text-2xl font-medium mt-5 ml-4'>Internet Starting at</p>
                <div className='flex ml-4'>
                    <p className='text-xl font-medium'>$</p>
                    <p className='text-6xl font-medium'>50<sub className='text-xl'>/mo</sub></p>
                </div>
                <p className='ml-4 text-gray-500'>for 1 year</p>
            </div>

            <button className='text-2xl bg-blue-700 text-white font-medium mt-20 w-52 h-14 rounded-full'>Shop Internet</button>
        </div>
      </div>
    </div>
  )
}

export default Hero
