import React, { useState } from "react";
import "./Navbar.css"; 
import { MdShoppingCart } from "react-icons/md";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="px-[8vw] z-50 ">
    <nav className="navbar ">
      <Link to="/">
      <div className="logo text-blue-950">Spectrum
      </div>
      </Link>
      <ul className="nav-links">
        <Link to="package">
        <Dropdown title="Packages">
          <a href="/">Shop Packages</a>
          <a href="/">Best Deals</a>
          <a href="/">Shop Spectrum</a>
        </Dropdown>
        </Link>
        <Link to="">
        <Dropdown title="Internet">
          <a href="/">Spectrum Internet</a>
          <a href="/">Internet Plans</a>
          <a href="/">Spectrum WiFi</a>
          <a href="/">Available Speeds</a>
          <a href="/">Internet Gig</a>
        </Dropdown>
        </Link>
        <Link to="">
        <Dropdown title="TV">
          <a href="/">Spectrum Cable TV</a>
          <a href="/">TV Plans</a>
          <a href="/">Spectrum Streaming</a>
          <a href="/">Xumo Stream Box</a>
          <a href="/">Spectrum TV App</a>
          <a href="/">Live Sports & Premium Movies</a>
          <a href="/">Latino TV Plans</a>
          <a href="/">Channel Lineup</a>
        </Dropdown>
        </Link>
        <Link to="">
        <Dropdown title="Mobile">
        <a href="/">Spectrum Mobile</a>
        <a href="/">Mobile Data Plans</a>
        <a href="/">Mobile Phones</a>
        <a href="/">Tablets</a>
        <a href="/">Smartwatches</a>
        <a href="/">Bring Your Device</a>
        <a href="/">Trade In</a>
        </Dropdown>
        </Link>
        <Link to="">
        <Dropdown title="Home Phone">
        <a href="/">Spectrum Voice</a>  
        </Dropdown>
        </Link>
         <p className="flex p-3 items-center text-xl cursor-pointer hover:bg-[#555] hover:text-white">Bussiness</p>
         <p className="flex p-3 items-center text-xl cursor-pointer  ml-5 hover:bg-[#555] hover:text-white">Contact Us</p>
      </ul>
      <div>
      <MdShoppingCart className="text-blue-700 text-3xl" />
      </div>
    </nav>
    </div>
  );
};

const Dropdown = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <li
      className="dropdown"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button className="dropbtn">{title}</button>
      {isOpen && <ul className="dropdown-content">{children}</ul>}
    </li>
  );
};

export default Navbar;

