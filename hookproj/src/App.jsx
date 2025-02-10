
// eslint-disable-next-line no-unused-vars
import React from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from './components/Navbar';
import Hero from './components/Hero';

function App() {
 

  return (
    <>
    <BrowserRouter>
      <Navbar/>
      
      <div>
        
        {/* Add padding to avoid overlap with the fixed Navbar */}
        <Routes>
          <Route path="/" element={<Hero/>} />
          {/* Added route for root path */}
          <Route path="/menu" element={<h1>MENU</h1>} />
          <Route path="/location" element={<h1>LOCATION</h1>} />
          <Route path="/about" element={<h1>ABOUT</h1>} />
          
        </Routes>
      </div>
    </BrowserRouter>
      
    </>
  )
}

export default App
