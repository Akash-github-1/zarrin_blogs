import React from 'react'
 import { NavLink } from 'react-router-dom';
import Image from './Common/Image'; 
import Heading from './Common/Heading';
import Button from './Common/Button';
import { Search } from 'lucide-react';


const Navbar = () => {
  return (
    <div className="bg-tertiary ">
      <div className=" flex justify-between items-center mx-10  py-6 p-4">

      <div className="flex items-center gap-2">
        
        <Image src="/Assets/logo.png" alt="Zarrin Logo" className="w-10 h-10" />
        <Heading variant="heading4" className="text-2xl font-bold text-dark">Zarrin</Heading>
      </div>
       
      

      
      <div className="flex items-center gap-6">

        <NavLink to="/Blog" className={({ isActive }) => isActive ? "text-primary font-bold" : "text-dark"}>Blog</NavLink>
        <NavLink to="/About" className={({ isActive }) => isActive ? "text-primary font-bold" : "text-dark"}>About</NavLink>


        {/* <a href="#" className="text-dark text-sm font-medium hover:text-primary">Blog</a>
        <a href="#" className="text-dark text-sm font-medium hover:text-primary">About</a> */}
        <Search className="w-5 h-5 text-dark cursor-pointer hover:text-primary" />

        <NavLink to="/Contact" className={({ isActive }) => isActive ? "text-primary font-bold" : "text-dark"}><Button text="Contact Us" variant="primary" className="px-6 py-2 rounded-md text-sm font-medium hover:bg-primary transition" /></NavLink>
        
      </div>
    </div>
    </div>
  )
} 

export default Navbar