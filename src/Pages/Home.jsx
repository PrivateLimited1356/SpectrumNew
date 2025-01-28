import React from 'react'
import Navbar from '../Component/Navbar'
import NavbarTop from '../Component/NavbarTop'
import Hero from '../Component/Hero'
import MidSection from '../Component/MidSection'
import MidTwo from '../Component/MidTwo'
import LastSection from '../Component/LastSection'
import Footer from '../Component/Footer'

const Home = () => {
  return (
    <div>
      <NavbarTop/>
      <Navbar/>
      <Hero/>
      <MidSection/>
      <MidTwo/>
      <LastSection/>
    </div>
  )
}

export default Home
