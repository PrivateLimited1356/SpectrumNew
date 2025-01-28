import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-[#001B33] rounded-lg ">
        <div className="px-[12vw] mt-5 p-2">
        <h1 className="text-white text-4xl font-medium">Spectrum</h1>
        </div>
      
      <div className=" flex flex-col sm:grid grid-cols-[3fr_2fr_2fr_2fr]  my-10 ">
        <div className="px-[12vw]">
          <p className="text-xl font-bold mb-5 text-white">COMPANY</p>
           <ol className="text-white text-lg">
            <li className="mt-2">About Charter</li>
            <li className="mt-2">About Commitment</li>
            <li className="mt-2">Careers</li>
            <li className="mt-2">Spectrum Enterprise Solutions</li>
            <li className="mt-2">Spectrum Reach</li>
            <li className="mt-2">Spectrum Community Solutions</li>
            <li className="mt-2">Spectrum Business</li>
           </ol>
        </div>

        <div>
          <p className="text-xl font-bold mb-5 text-white">SHOP</p>
          <ul className=" text-white text-lg">
              <li className="mt-4">Bundles & Promotions</li>
              <li className="mt-4">Internet</li>
              <li className="mt-4">TV</li>
              <li className="mt-4">Home Phone</li>
              <li className="mt-4">Mobile</li>
              <li className="mt-4">Spectrum Internet Assist</li>
          </ul>
        </div>
        <div>
          <p className="text-xl font-bold mb-5 text-white">EXPLORE</p>
          <ul className="text-white  text-lg">
            <li className="mt-2">Spectrum Apps</li>
            <li className="mt-2">Spectrum WiFi Access Points</li>
            <li className="mt-2">Resource Center</li>
            <li className="mt-2">Test Your Internet Speed</li>
            <li className="mt-2">Contract Buyout</li>
            <li className="mt-2">Channel Lineup</li>
            <li className="mt-2">Why Spectrum?</li>
            <li className="mt-2">Services In Your Area</li>
            <li className="mt-2">Rural Broadband Expansion</li>
          </ul>
        </div>
        <div>
          <p className="text-xl font-bold mb-5 text-white">HELP & SUPPORT</p>
          <ul className=" text-white text-lg">
          <li className="mt-2">Contact Spectrum</li>
          <li className="mt-2">Manage Account</li>
          <Link to='paybill'>
          <li className="mt-2">PayYour Bill</li>
          </Link>
          <li className="mt-2">Support</li>
          <li className="mt-2">Store Locator</li>
          <li className="mt-2">Upgrade</li>
          <li className="mt-2">Move Your Services</li>
          <li className="mt-2">Service Rates & Disclosures</li>
          <li className="mt-2">Rural Carrier Call Completion</li>
          </ul>
        </div>
      </div>
      <div className="px-[12vw]">
        <p className="text-white text-lg">Terms of Service/Policies | Your Privacy Rights | Accessibility | California Privacy Policy | Do Not Sell or Share My Personal Information/Opt-Out of Targeted Advertising | California Consumer Limit the Use of My Sensitive Personal Information</p>
        <p className="text-white text-lg mt-5">Not all products, pricing, and services are available in all areas. Pricing and actual speeds may vary. Internet speeds based on wired connection. Restrictions apply.</p>

        <p className="py-5 text-lg text-white">
        ©2025 Charter Communications. All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;

