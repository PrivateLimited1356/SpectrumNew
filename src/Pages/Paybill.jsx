import React from "react";
import NavbarTop from "../Component/NavbarTop";
import { Link } from "react-router-dom";

const Paybill = () => {
  return (
    <div>
      <NavbarTop />
      <div className="flex">
        <div className="w-[300px]  border-2  ">
          <ul className="text-xl p-10 mt-20 ">
            <li>Home</li>
            <li className="mt-5">Support</li>
            <li className="mt-5">More</li>
          </ul>
        </div>

        <div className="">
          <Link to="/">
          <div className="bg-blue-950 flex justify-center h-14">
            <img src="./images/spectrum-logo.svg" alt="" />
          </div>
          </Link>
          <div className="flex mt-14 m-4 border-2 ">
            <div className="w-full p-4 mt-20">
              <p className="text-5xl ">Your Account at Your Fingertips</p>
              <p className="text-xl mt-5">
                Sign in for the easiest way to pay your bill, manage your
                account, watch TV
              </p>
              <p className="text-xl mt-1">anywhere and more.</p>

              <div className=" mt-10 ">
                <button className="border-2 text-xl h-14 w-60 text-blue-700">
                  Create Username
                </button>
                <button className="border-2 text-xl h-14 w-60 bg-blue-700 text-white ml-10">
                  Sign In
                </button>

                <p className="mt-4 text-xl">
                  Not a Spectrum Customer?
                  <span className="text-blue-700">Get Started</span>
                </p>
              </div>
            </div>
            <div className="w-full">
              <img src="./images/All.jpg" alt="" />
            </div>
          </div>
          <div className="flex h-[500px] m-4 border-2 mt-14">
           <div className="w-full ">
            <img className="h-[500px]" src="./images/crop-1.jpg" alt="" />
           </div>
           <div className="w-full ml-10 mt-20"> 
             <p className="text-5xl font-medium">Reliably Fast Internet.</p>
             <p className="text-5xl font-medium mt-3">Incredible Savings.</p>
             <p className="text-xl mt-5">Switch to Spectrum for the fastest, most reliable Internet. Add Spectrum</p>
             <p className="text-xl mt-2">Mobile® to enjoy seamless connectivity wherever you go.</p>

             <button className="mt-10 bg-blue-700 text-white w-52 text-xl h-14 rounded-lg">See My Deals</button>
             <p className="text-xl mt-5">Services not available in all areas. Restrictions apply.</p>
           </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Paybill;
