// eslint-disable-next-line no-unused-vars
import React from 'react'
import logo from "../assets/logo.png"
import { Link } from "react-router-dom";


const Navbar = () => {
  return (
    <>
    <div className='navbar w-full h-[72px] px-10 bg-white flex items-center'>
        {/*logo */}
        <div className='logo'>
            <img src={logo}></img>
        </div>

         {/*li list */}
         <ul className='flex justify-between items-center space-x-6 ml-auto'>
         <li><Link to="/" className="hover:text-gray-600">HOME</Link></li>
        <li><Link to="/menu" className="hover:text-gray-600">MENU</Link></li>
        <li><Link to="/location" className="hover:text-gray-600">LOCATION</Link></li>
        <li><Link to="/about" className="hover:text-gray-600">ABOUT</Link></li>
        <li><Link to="/contact" className="hover:text-gray-600">CONTACT</Link></li>
         </ul>

    </div>
    </>
  )
}

export default Navbar