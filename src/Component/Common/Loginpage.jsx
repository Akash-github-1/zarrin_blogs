
import { FcGoogle } from 'react-icons/fc';
import { FaApple } from 'react-icons/fa';
import Paragraph from './Paragraph';
import Headings from './Heading';
import Button from './Button';

import Logo from './Logo';
import { Link } from 'react-router-dom';


const Login = () => {
  

  return (
    <div className="min-h-screen flex items-center justify-center bg-tertiary px-4 font-font2">
      <div className="max-w-md w-full space-y-6 bg-tertiary p-8 rounded-xl shadow-md">
        
        
        <div className="flex items-center justify-center gap-2 mb-6">
          <Headings type='h4' className=" font-bold text-dark font-font1">
            Zarrrin Blog
          </Headings>
          <Logo size="text-3xl" className="text-secondary" />
        </div>

        
        <div className="text-center">
          <Headings 
            type='h4' 
            className="mt-6 text-3xl font-bold text-dark font-font1 leading-custom-heading"
          >
            Welcome 
          </Headings>
          <Paragraph className="mt-2 text-sm text-secondary leading-custom-para">
            Enter your email and password to access your account.
          </Paragraph>
        </div>

        
        <form className="mt-8 space-y-6">
          <div className="space-y-4">
          
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-secondary">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                autoComplete="email"
                required
                className="mt-1 w-full px-4 py-2 border border-secondaryGray rounded-md shadow-sm focus:ring-primary focus:border-primary"
              />
            </div>

            
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-secondary">
                Password
              </label>
              <div className="relative">
                <input
                  type= "password"
                  id="password"
                  name="password"
                  autoComplete="current-password"
                  required
                  className="mt-1 w-full px-4 py-2 border border-secondaryGray rounded-md shadow-sm focus:ring-primary focus:border-primary"
                />
              
              </div>
            </div>

            
            <div className="flex items-center justify-between">
              <label className="flex items-center text-sm text-secondary">
                <input type="checkbox" className="mr-2 h-4 w-4 text-primary" />
                Remember Me
              </label>
              <Link  to="/Forgot" className="text-sm text-primary hover:underline">
                Forgot Your Password?
              </Link>
            </div>
          </div>

         
          <div>
            <Button 
              text="Log In" 
              variant="primary" 
              className="w-full font-semibold"
            />
          </div>
        </form>

       
        <div className="flex items-center justify-center space-x-2">
          <span className="text-secondaryGray text-sm">Or Login With</span>
        </div>
        <div className="flex space-x-4 justify-center">
          <Button text="Google" variant="outline" className="flex items-center gap-2">
            <FcGoogle className="text-xl" />
          </Button>
          <Button text="Apple" variant="outline" className="flex items-center gap-2">
            <FaApple className="text-xl" />
          </Button>
        </div>

        
        <Paragraph className="text-center text-sm text-secondary">
          Don’t Have An Account?{' '}
          <Link to="/Signup" className="text-primary hover:underline">
            Register Now.
          </Link>
        </Paragraph>

       
        <div className="text-xs text-center text-secondaryGray pt-4">
          © 2025 Sellora Enterprises LTD.{' '}
          <Link to="/Policy" className="hover:underline text-primary">Privacy Policy</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
