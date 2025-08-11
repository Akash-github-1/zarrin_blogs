
import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import { FaApple } from 'react-icons/fa';
import Paragraph from './Paragraph';
import Button from './Button';
import Headings from './Heading';
const Signup = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-tertiary px-4">
      <div className="w-full max-w-md p-8 rounded-lg shadow-lg bg-tertiary">
        
     
        <div className="flex items-center justify-center gap-2 mb-6">
          <Headings type='h4' className="text-2xl font-bold text-dark font-font1">Zarrrin Blog</Headings>
          <img
            src="/Assets/logo.png"
            alt="Logo"
            className="h-6 w-auto"
          />
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

         
        </form>

        <div className="my-6 text-center text-secondary text-sm">or continue with</div>

 <div className="flex space-x-4 justify-center">
       <Button 
       text="Google" 
       variant="outline" 
       className="flex items-center gap-2">
       <FcGoogle className="text-xl" />
       </Button>

       <Button 
       text="Apple" 
       variant="outline" 
       className="flex items-center gap-2">
       <FaApple className="text-xl" />
       </Button>
       </div>

       
        <Paragraph className="mt-6 text-sm text-center text-secondary">
          Already have an account?{' '}
          <a href="/login" className="text-primary font-medium hover:underline">
            Sign in
          </a>
        </Paragraph>
      </div>
    </div>
  );
};

export default Signup;
