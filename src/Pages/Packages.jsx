import React from 'react'

import Navbar from '../Component/Navbar'
import NavbarTop from '../Component/NavbarTop'


const Packages = () => {
  return (
    <div>
     <NavbarTop/>
     <Navbar/>

     <div className='px-[12vw] mt-20 '>
        
        <p className='text-3xl flex justify-center text-blue-600 font-medium'>SPECTRUM PACKAGES</p>
        <p className='text-6xl flex justify-center mt-5 font-medium'>Save More When You Bundle</p>
        <p className='text-2xl text-gray-700 flex justify-center mt-5'>
        Start with fast, reliable Internet and build your plan from there. Add Mobile or TV for monthly savings and a multi-year price guarantee.
        </p>
          
          <div className='flex gap-10 justify-center mt-20'>
            <div className='items-center border-2 p-4 '>
                <img className='ml-20' src="./images/laptop.svg" alt="" />
                <p className='flex justify-center text-xl font-medium'>500 Mbps Internet</p>
                <div className='flex justify-center'>
                 <p className='font-medium'>$</p>
                <p className='text-5xl font-medium'>50</p>
                <p>/mo</p>
                </div>
                <p className='flex justify-center'>for 1Year </p>
                
                <p className='mt-5'>Add Mobile + TV for a three-year price</p>
                <p className='flex justify-center'>guarantee</p>
            </div>

            <div className='items-center border-2 p-4 '>
                <img className='ml-20' src="./images/mobile.svg" alt="" />
                <p className='flex justify-center text-xl font-medium'>Unlimited Mobile</p>
                <div className='flex justify-center'>
                 <p className='font-medium'>$</p>
                <p className='text-5xl font-medium'>30</p>
                <p>/mo</p>
                </div>
                <p className='flex justify-center'>per additional line </p>
                
                <p className='mt-5'>One Unlimited Mobile line is included for a</p>
                <p className='flex justify-center'>full year with Spectrum Internet®</p>
            </div>
            <div className='items-center border-2 p-4 '>
                <img className='ml-24' src="./images/tv.svg" alt="" />
                <p className='flex justify-center text-xl font-medium'>TV Stream</p>
                <div className='flex justify-center'>
                 <p className='font-medium'>$</p>
                 <p className='text-5xl font-medium'>45</p>
                <p>/mo</p>
                </div>
                <p className='mt-8'>Stream 85+ channels anywhere you go with</p>
                <p className='flex justify-center'>the Spectrum TV App</p>
            </div>
            <div className='items-center border-2 pl-14 pr-14'>
                <img className='ml-10' src="./images/homePhone.svg" alt="" />
                <p className='flex justify-center text-xl font-medium'>Home Phone</p>
                <div className='flex justify-center'>
                 <p className='font-medium'>$</p>
                <p className='text-5xl font-medium'>15</p>
                <p>/mo <br/> for 3 years<br/> when bundled</p>
                </div>
                <p className='flex justify-center'>for 1Year </p>
                
                <p className='mt-5'>Unlimited nationwide calling</p>
                
            </div>
               
          </div>
           <div className='flex justify-center '>
          <button className='rounded-full h-14 text-2xl bg-blue-700 w-48 text-white mt-20'>Show Results</button>
        </div>
        <p className='flex justify-center mt-6'>Availability varies by location.</p>
         
         <div className='mt-28'>
            <p>Bundled Offer Details</p>
            <p className='mt-8'>Limited time offer; subject to change; new residential customers only (no Spectrum services within past 30 days) and in good standing with Spectrum. Taxes and fees extra in select states. Standard rates apply after promo period or if qualifying services not maintained. Offer subject to qualifying services being ordered on the same day. SPECTRUM INTERNET: Additional charge for installation. Speeds based on wired connection. Actual speeds (including wireless) vary and are not guaranteed. Capable modem required for all Gig speeds. For a list of capable modems, visit spectrum.net/modem. Services subject to all applicable service terms and conditions, subject to change. Not available in all areas. Restrictions apply.</p>
            <p className='mt-8'>Limited time offer; subject to change; offer applies to new Mobile customers without any outstanding obligation to Spectrum. Limited to one promotional line per account. Mobile devices excluded from offer. Offer reflected with up to 12 months credit on bill statement. Standard rates apply after promo period or if qualifying services not maintained. Offer cannot be applied to existing lines on customer account. Tablets not eligible for promotion. Reduced speeds after 30 GB of usage per line. Services subject to all applicable service terms and conditions, subject to change. Not available in all areas. Auto Pay required. Restrictions apply.</p>
            <p className='mt-8'>Cable TV Offer Details</p>
            <p className='mt-8'>Eligible customers only. Must be 18 years of age or older to redeem offer. For existing Disney+ subscribers, this is an offer for an additional Disney+ subscription. This will not replace any existing Disney+ subscriptions you may already have (except for upgrades made through Spectrum to Disney+ Premium, Disney Bundle Duo Basic, or Disney Bundle Duo Premium from your Disney+ Basic (With Ads) received through Spectrum). All other accounts must be managed separately. You must remain on an eligible plan to retain your offer. If you cancel your eligible plan or switch to a non-eligible plan, your access to Disney+ will end at the end of your eligible plan. One offer per eligible Spectrum account. Use of Disney+ are subject to the Disney+ and ESPN+ Subscriber Agreement. © 2025 Disney and its related entities.</p>
            <p className='mt-8'>Limited time offer; subject to change; new residential customers only (no Spectrum services within past 30 days) and in good standing with Spectrum. SPECTRUM TV SELECT SIGNATURE/SPECTRUM TV SELECT PLUS: Standard rates apply after promo period. TV equipment may be required, charges apply. Channel availability based on level of service and not all channels available in all markets or locations. Services subject to all applicable service terms and conditions, subject to change. Services not available in all areas. Restrictions apply.</p>
            <p className='mt-8'>Mobile Offer Details</p>
            <p className='mt-8'>Limited time offer; subject to change; offer applies to qualified residential customers without any outstanding obligation to Spectrum. Mobile devices excluded from offer. SPECTRUM MOBILE: Offer valid for new customers adding lines or for current mobile customers adding Unlimited lines to existing service. Smartwatch does not qualify as a line. UNLIMITED: Reduced speeds after 30 GB of usage per line. 5 GB for Mobile Hotspots. UNLIMITED PLUS: Reduced speeds after 50 GB of usage per line.10 GB for Mobile Hotspots. Services subject to all applicable service terms and conditions, subject to change. Not available in all areas. Per line activation fee, Spectrum Internet and Auto Pay required. Restrictions apply.</p>
            <p className='mt-8'>Home Phone Offer Details</p>
            <p className='mt-8'>Limited time offer; subject to change; new residential customers only (no Spectrum services within past 30 days) and in good standing with Spectrum. SPECTRUM VOICE: Standard rates apply after promo period and if qualifying services not maintained. Additional charge for installation. Unlimited calling includes calls within the U.S., Canada, Mexico, Puerto Rico, Guam, the Virgin Islands and more. Services subject to all applicable service terms and conditions, subject to change. Not available in all areas. Restrictions apply.</p>
         </div>
     </div>
    </div>
  )
}

export default Packages