import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ text, variant, className }) => {
  const variants = {
    primary: 'bg-primary text-tertiary border-transparent',
    dark: 'bg-dark text-tertiary ',
    outline: 'bg-tertiary text-dark border-dark ',
    read: 'bg-tertiary text-primary border-transparent font-base font-bold',
  };

  console.log('Variant:', variant);

  return (
    <button className={`py-2 px-4 rounded border ${variants[variant]} ${className}`}>
      {text}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  variant: PropTypes.oneOf(['primary', 'outline', 'dark', 'read']).isRequired,
  className: PropTypes.string,
};

export default Button;
