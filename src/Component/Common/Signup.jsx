
import React from 'react';

import Paragraph from './Paragraph';
import Button from './Button';
import Headings from './Heading';
import Logo from './Logo';
import { Link } from "react-router-dom";
const Signup = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-tertiary px-4">
      <div className="w-full max-w-md p-8 rounded-lg shadow-lg bg-tertiary">
        
     
        <div className="flex items-center justify-center gap-2 mb-6">
          <Headings type='h4' className="text-2xl font-bold text-dark font-font1">Zarrrin Blog</Headings>
          <Logo size="text-3xl" className="text-secondary" />
        </div>

        <Headings type='h5' className="text-3xl font-bold text-dark font-font1 mb-6 text-center">
          Create your account
        </Headings>

        <form className="space-y-4">
          <div>
            <label className="block text-secondary text-sm mb-1" htmlFor="name">
              Name
            </label>
            <input
              id="name"
              type="text"
              placeholder="Enter your name"
              className="w-full px-4 py-3 border border-secondaryGray rounded-md focus:outline-none focus:ring-2 focus:ring-primary text-dark"
            />
          </div>

          <div>
            <label className="block text-secondary text-sm mb-1" htmlFor="email">
              Email<span className="text-red-500">*</span>
            </label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-3 border border-secondaryGray rounded-md focus:outline-none focus:ring-2 focus:ring-primary text-dark"
            />
          </div>

          <div>
            <label className="block text-secondary text-sm mb-1" htmlFor="password">
              Password<span className="text-red-500">*</span>
            </label>
            <input
              id="password"
              type="password"
              placeholder="Create password"
              className="w-full px-4 py-3 border border-secondaryGray rounded-md focus:outline-none focus:ring-2 focus:ring-primary text-dark"
            />
            <Paragraph className="text-xs text-secondary mt-1">Must be at least 8 characters.</Paragraph >
          </div>
           <div>
            <Button 
              text="Sign up" 
              variant="primary" 
              className="w-full font-semibold"
            />
          </div>
        </form>

        <Paragraph className="mt-6 text-sm text-center text-secondary">
          Already have an account?{' '}
         
          <Link to="/login" className="text-primary font-medium hover:underline">
            Sign in
          </Link>
        </Paragraph>
      </div>
    </div>
  );
};

export default Signup;
