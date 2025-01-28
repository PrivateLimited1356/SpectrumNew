import React from 'react'

const LastSection = () => {
  return (
    <div className='px-[12vw] mt-20'>
      <div className='flex border-2  p-8 rounded-2xl'>
        <div className='w-full mt-8'>
         <p  className='text-6xl font-medium '>Quick and Easy Install</p>
         <p className='text-3xl mt-5'>Set up your Internet connection in minutes with our</p>
         <p className='text-3xl'>convenient self-install kit. </p>
         <ol className='list-disc text-2xl p-8'>
            <li className=''>No appointment needed</li>
            <li className=''>Pick up your self-install kit in-store or we’ll mail it to you</li>
            <li className=''>Set up Advanced WiFi with a quick step-by-step guide</li>
         </ol>
         <button className='text-2xl bg-blue-700 text-white font-medium mt-10 w-52 h-14 rounded-full'>Shop Internet</button>
        </div>
        <div>
           <img className='mt-10' src="./images/img-6.webp" alt="" />
        </div>
      </div>

      <div className='mt-20'>
       <h3 className='text-lg font-medium'>Bundled Offer Details</h3>
       <p className='mt-4'>Limited time offer; subject to change; offer applies to new Mobile customers without any outstanding obligation to Spectrum. Limited to one promotional line per account. Mobile devices excluded from offer. Offer reflected with up to 12 months credit on bill statement. Standard rates apply after promo period or if qualifying services not maintained. Offer cannot be applied to existing lines on customer account. Tablets not eligible for promotion. Reduced speeds after 30 GB of usage per line. Services subject to all applicable service terms and conditions, subject to change. Not available in all areas. Auto Pay required. Restrictions apply.</p>
       <h3 className='text-lg font-medium mt-4'>Internet Offer Details</h3>
       <p className='mt-4'>Limited time offer; subject to change; new residential customers only (no Spectrum services within past 30 days) and in good standing with Spectrum. Taxes and fees extra in select states. SPECTRUM INTERNET: Standard rates apply after promo period. Additional charge for installation. Speeds based on wired connection. Actual speeds (including wireless) vary and are not guaranteed. Capable modem required for all Gig speeds. For a list of capable modems, visit spectrum.net/modem. Services subject to all applicable service terms and conditions, subject to change. Not available in all areas. Restrictions apply.</p>
       <h3 className='text-lg font-medium mt-4'>Cable TV Offer Details</h3>
       <p  className='mt-4'>XUMO STREAM BOX: Offer limited to one box per account; must be redeemed at same time as qualifying Spectrum TV service. Spectrum Internet required. Separate subscriptions are required to view content through various paid applications. Standard rates apply after promo period or if qualifying services not maintained. Xumo Stream Box and all other Xumo product names, logos, slogans and marks are the trademarks of Xumo or its licensors.</p>
       <h3 className='text-lg font-medium mt-4'>Performance Details</h3>
       <p className='mt-4'>Fastest Speeds claim based on Broadband Download Speed among the top 5 national providers in Opensignal USA: Fixed Broadband Experience Report – National View, May 2024. Most reliable Internet claim based on Broadband Reliability Experience among top 5 national providers in Opensignal USA: Fixed Broadband Reliability Report – National View, August 2024. © 2024 Opensignal Limited.</p>
       <h3 className='text-lg font-medium mt-4'>Restrictions Apply</h3>
       <p className='mt-4'>Limited time offer; subject to change; new residential customers only (no Spectrum services within past 30 days) and in good standing with Spectrum. SPECTRUM TV: Price and surcharges subject to change. TV equipment may be required, charges apply. Channel availability based on level of service and not all channels available in all markets or locations. All trademarks are the property of their respective owners. Services subject to all applicable service terms and conditions, subject to change. Services not available in all areas. Restrictions apply.</p>
      </div>

    </div>
  )
}

export default LastSection
