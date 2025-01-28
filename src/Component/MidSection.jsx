import React from 'react'

const MidSection = () => {
  return (
    <div className='px-[12vw] mt-20'>
      <div>
          <h1 className='text-7xl font-medium '>Internet Service Built For You</h1>
          <p className='text-3xl mt-3 text-gray-700'>Explore affordable Internet plans designed for speed, reliability ​and security.</p>
          <div className='flex gap-10'>
            <div className='mt-10 border-2  p-10 rounded-2xl'>
                <p className='text-2xl text-gray-700 mt-8'>INTERNET PREMIER</p>
                <p className='text-3xl'>500 Mbps Internet</p>
                <p className='text-gray-700 text-xl'>Internet speeds that can handle it all.</p>
                <div className='flex mt-16'>
                    <p className='text-xl font-medium'>$</p>
                    <p className='text-6xl font-medium'>50<sub className='text-xl'>/mo</sub></p>
                </div>
                <p className='ml-4 text-gray-500'>for 1 year</p>

                <button className='text-2xl bg-blue-700 text-white font-medium mt-10 w-52 h-14 rounded-full'>Shop now</button>
                <hr className='mt-5'/>
                <ol className='list-disc mt-8 text-xl'>
                    <li>Spectrum Mobile® included for 1 year</li>
                    <li>Add <span className='text-blue-700'>Advanced WiFi</span>  for $10/mo</li>
                    <li>No contracts</li>
                </ol>
            </div>
            <div className='mt-10 border-2  rounded-2xl'>
                <div className=' w-28 p-1 rounded-br-2xl rounded-tl-2xl  text-xl bg-yellow-400 text-gray-700'>Best Value</div>
                <div className='p-8'>
                <p className='text-2xl text-gray-700'>INTERNET GIG</p>
                <p className='text-3xl'>1 Gig Internet</p>
                <p className='text-gray-700 text-xl'>Get the ultimate experience ideal for<br/> serious gamers, streamers and large homes.</p>
                <div className='flex mt-10'>
                    <p className='text-xl font-medium'>$</p>
                    <p className='text-6xl font-medium'>70<sub className='text-xl'>/mo</sub></p>
                </div>
                <p className='ml-4 text-gray-500'>for 1 year</p>

                <button className='text-2xl bg-blue-700 text-white font-medium mt-10 w-52 h-14 rounded-full'>Shop now</button>
                <hr className='mt-5'/>
                <ol className='list-disc mt-8 text-xl'>
                    <li>Spectrum Mobile® included for 1 year</li>
                    <li>Add <span className='text-blue-700'>Advanced WiFi</span> include</li>
                    <li>No contracts</li>
                </ol>
                </div>
            </div>
          </div>
      </div>
      <div  className='mt-20 flex border-2 rounded-2xl'>
        <div className='w-full mt-20 ml-28'>
            <p className='text-5xl font-medium '>Save on Internet When You</p>
            <p className='text-5xl font-medium'>Bundle</p>
            <p className='text-2xl mt-5 text-gray-800'>Unlock the best value when you combine Mobile or TV <br/> with Spectrum Internet®.</p>

            <p className='text-blue-700 text-xl font-medium mt-10'>Shop now </p>
        </div>
      <div className='w-full'>
        <img className='h-[400px]' src="./images/img-2.png" alt="" />
      </div>
      </div>
    </div>
  )
}

export default MidSection
