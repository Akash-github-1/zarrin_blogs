

import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Image from '../Common/Image';
import Heading from '../Common/Heading';
import { Search, Menu, X } from 'lucide-react';
import Button from '../Common/Button';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-tertiary top-0 w-full z-50">

      
      <div className="flex justify-between items-center mx-6 md:mx-10 py-6 px-4 relative">
        
        <NavLink to="/">
          <div className="flex items-center gap-2 z-50">
            <Image src="/Assets/logo.png" alt="Zarrin Logo" className="w-10 h-10" />
            <Heading type='h4'>Zarrin</Heading>
          </div>
        </NavLink>

        
        <div className="hidden md:flex items-center gap-6">
          <NavLink to="/Blog" className={({ isActive }) => isActive ? "text-primary font-bold" : "text-dark"}>Blog</NavLink>
          <NavLink to="/About" className={({ isActive }) => isActive ? "text-primary font-bold" : "text-dark"}>About</NavLink>
          <Search className="w-5 h-5 text-dark cursor-pointer hover:text-primary" />
          <NavLink to="/Contact">
          

            <Button
              text="Contact Us"
              variant="primary"
              className="px-6 py-2 rounded-md text-sm font-medium hover:bg-primary transition"
            />
          </NavLink>
        </div>

        
        <div className="md:hidden z-50">
          {isOpen ? (
            <X className="w-6 h-6 text-dark cursor-pointer" onClick={() => setIsOpen(false)} />
          ) : (
            <Menu className="w-6 h-6 text-dark cursor-pointer" onClick={() => setIsOpen(true)} />
          )}
        </div>
      </div>

      
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-tertiary shadow-lg z-40 transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col gap-4 p-6 pt-24">
          <NavLink
            to="/Blog"
            className={({ isActive }) => isActive ? "text-primary font-bold" : "text-dark"}
            onClick={() => setIsOpen(false)}
          >
            Blog
          </NavLink>
          <NavLink
            to="/About"
            className={({ isActive }) => isActive ? "text-primary font-bold" : "text-dark"}
            onClick={() => setIsOpen(false)}
          >
            About
          </NavLink>
          <Search className="w-5 h-5 text-dark cursor-pointer hover:text-primary" />
          <NavLink to="/Contact" onClick={() => setIsOpen(false)}>
            <Button
              text="Contact Us"
              variant="primary"
              className="px-6 py-2 rounded-md text-sm font-medium hover:bg-primary transition"
            />
          </NavLink>
        </div>
      </div>

      
      {isOpen && (
        <div
        
          className="fixed inset-0 bg-black bg-opacity-30 z-30 md:hidden"
          onClick={() => setIsOpen(false)} />
      )}
    </div>
  );
};

export default Navbar;