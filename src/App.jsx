import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Packages from './Pages/Packages'
import Paybill from './Pages/Paybill'
import Footer from './Component/Footer'

const App = () => {
  return (
    <div>
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path='package' element={<Packages/>}/>
      <Route path='paybill' element={<Paybill/>}/>
     </Routes>
     <Footer/>
    </div>
  )
}

export default App
