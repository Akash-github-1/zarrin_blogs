
import React from 'react';
import Headings from '../Common/Heading';
import Image from '../Common/Image';
import Paragraph from '../Common/Paragraph';
import Button from '../Common/Button';
import { NavLink } from 'react-router-dom';

const Error = () => {
  return (
    <div className="bg-tertiary text-tertiary px-4 sm:px-10 md:px-20 lg:px-64 py-12 sm:py-20">
      <div className="bg-primary flex flex-col items-center text-center rounded-xl shadow-lg py-10 px-4 sm:px-8 md:px-16">
        <div className="w-full max-w-full">
          <Image
            src="/Assets/Vector.png"
            alt="vector"
            className="w-full max-h-52 object-cover object-bottom"
          />
          <Headings
            type="h1"
            className="text-tertiary py-10 font-bold text-5xl sm:text-6xl md:text-7xl lg:text-8xl"
          >
            404
          </Headings>
        </div>

        <div className="space-y-2">
          <Paragraph variant="big">Sorry!</Paragraph>
          <Paragraph variant="big">
            The link is broken, try to refresh or go to home
          </Paragraph>
        </div>

        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? 'text-primary font-bold' : 'text-dark'
          }
        >
          <div className="py-8">
            <Button text="Go To Home" variant="outline" />
          </div>
        </NavLink>
      </div>
    </div>
  );
};

export default Error;

