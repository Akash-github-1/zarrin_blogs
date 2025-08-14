import React, { useState, useRef, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

import Heading from '../Common/Heading';
import { Search, Menu, X } from 'lucide-react';
import Button from '../Common/Button';
import Logo from '../Common/Logo';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const searchInputRef = useRef(null);

  useEffect(() => {
    if (showSearch && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [showSearch]);

  return (
    <div className="bg-tertiary top-0 w-full z-50 shadow-md">

      <div className="flex justify-between items-center mx-6 md:mx-10 py-6 px-4 relative">
 
        <NavLink to="/">
          <div className="flex items-center gap-2 z-50">
            <Logo size="text-3xl"  />
            <Heading type="h4">Zarrin</Heading>
          </div>
        </NavLink>

        <div className="hidden md:flex items-center gap-6">
          <NavLink to="/Blog" className={({ isActive }) => isActive ? "text-primary font-bold" : "text-dark"}>Blog</NavLink>
          <NavLink to="/About" className={({ isActive }) => isActive ? "text-primary font-bold" : "text-dark"}>About</NavLink>


         
          <NavLink to="/Contact" className={({ isActive }) => isActive ? "text-primary font-bold" : "text-dark"}>Contact Us</NavLink>
          
          <div className="relative flex items-center gap-2">
            <Search
              className="w-5 h-5 text-dark cursor-pointer hover:text-primary"
              onClick={() => setShowSearch(!showSearch)}
            />
            {showSearch && (
              <input
                ref={searchInputRef}
                type="text"
                placeholder="Search..."
                className="border border-sec rounded-md px-3 py-1 text-sm outline-none transition w-40"
              />
            )}
          </div>
          <NavLink to="/login">
            <Button
              text="Login"
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
        className={`md:hidden fixed top-0 right-0 h-full w-3/4 bg-tertiary shadow-lg z-40 transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col gap-6 p-6 mt-16">
          <NavLink to="/Blog" onClick={() => setIsOpen(false)} className="text-dark text-base">
            Blog
          </NavLink>
          <NavLink to="/About" onClick={() => setIsOpen(false)} className="text-dark text-base">
            About
          </NavLink>


          <div className="flex items-center gap-2">
            <Search
              className="w-5 h-5 text-dark cursor-pointer hover:text-primary"
              onClick={() => setShowSearch(!showSearch)}
            />
            {showSearch && (
              <input
                ref={searchInputRef}
                type="text"
                placeholder="Search..."
                className="border border-gray-300 rounded-md px-3 py-1 text-sm outline-none w-full"
              />
            )}
          </div>

          <NavLink to="/Contact">
            <Button
              text="Contact Us"
              variant="primary"
              className="w-full py-2 rounded-md text-sm font-medium hover:bg-primary transition"
            />
          </NavLink>
        </div>
      </div>
      {isOpen && (
        <div
          className="fixed inset-0 bg-dark bg-opacity-30 z-30 md:hidden"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </div>
  );
};

export default Navbar;
