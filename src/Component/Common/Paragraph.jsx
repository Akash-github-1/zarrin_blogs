import React from 'react';
import PropTypes from 'prop-types';

const Paragraph = ({ children, variant = 'small', className = '' }) => {
  const variants = {
    'big': 'text-lg ',
    'small': 'text-base',
  };

  return (
    <p className={`font-font2 ${variants[variant]} ${className}`}>
      {children}
    </p>
  );
};

Paragraph.propTypes = {
  children: PropTypes.string.isRequired,
  variant: PropTypes.oneOf(['big', 'small']),
  className: PropTypes.string,
};

export default Paragraph;
