
import { Heading, Heading1, Heading5 } from "lucide-react";
 import { Link } from 'react-router-dom';
import React from "react";
import {
  FaFacebookF,FaInstagram,FaLinkedinIn, FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-tertiary text-center py-6 max-h-96  border-primary">
      <div className="flex flex-col items-center space-y-4">
        <div className="flex items-center space-x-2">
          <div>
            <img
              src="\Assets\logo.png" alt="Zarrin Logo" className="h-10 w-10"
            />
          </div>
          <h1 className="text-2xl font-bold text-black">Zarrin</h1>
          </div>
          <nav className="space-x-6 text-sm font-font1 text-secoinadry-700">
          <a href="#" className="hover:text-primary">
            Home
          </a>
          <a href="#" className="hover:text-primary">
            Blog
          </a>
          <a href="#" className="hover:text-primary">
            About
          </a>
          <a href="#" className="hover:text-primary font-font1">
            Contact Us
          </a>
         
        </nav>
        <div className="flex space-x-4 mt-4">
          <a
            href="#"
              className="bg-primary text-tertiary p-2 rounded-full hover:bg-dark"
            >
            <FaFacebookF size={16} />
          </a>
          <a
            href="#"
            className="bg-primary text-tertiary p-2 rounded-full hover:bg-dark"
            >
            <FaInstagram size={16} />
          </a>
          <a
            href="#"
            className="bg-primary text-tertiary p-2 rounded-full hover:bg-dark"
          >
            <FaLinkedinIn size={16} />
          </a>
          <a
            href="#"
            className="bg-primary text-tertiary p-2 rounded-full hover:bg-dark"
          >
            <FaYoutube size={16} />
          </a>
        </div>
      </div>

      <hr className="border-t border-primary my-6 mx-auto w-4/5" />

      <p className="text-xs font-font1 text-secondary -500">
        Copyright Ideapeel Inc © 2023. All Right Reserved
      </p>
    </footer>
  );
};

export default Footer;
