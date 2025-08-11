import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ text, variant, className, children }) => {
  const variants = {
    primary: 'bg-primary text-tertiary ',
    dark: 'bg-dark text-tertiary',
    outline: 'bg-tertiary text-dark border-primary',

    read: 'bg-tertiary text-primary border-transparent font-base font-bold',
  };

  return (
    <button className={`py-2 px-4 rounded border  ${variants[variant]} ${className}`}>
      {children}
      {text}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  variant: PropTypes.oneOf(['primary', 'outline', 'dark', 'read']).isRequired,
  className: PropTypes.string,
  children: PropTypes.node, 
};

export default Button;

