import React from 'react'
import Navbar from '../component/navbar'
import { Route, Routes } from 'react-router-dom'
import Home from '../views/home'
import Footer from '../component/footer'

const Router = () => {
  return (
    <div>
        <Navbar/>
        <Routes>
        <Route index path="/" element={<Home/>}></Route>
        
      
      </Routes>
      <Footer/>
    </div>
  )
}

export default Router