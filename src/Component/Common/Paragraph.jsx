import React from 'react';
import PropTypes from 'prop-types';

const Paragraph = ({ text, variant = 'paragraph-small', className = '' }) => {
  const variants = {
    'paragraph-big': 'text-paragraph-big',
    'paragraph-small': 'text-paragraph-small',
  };

  return (
    <p className={`font-font2 ${variants[variant]} ${className}`}>
      {text}
    </p>
  );
};

Paragraph.propTypes = {
  text: PropTypes.string.isRequired,
  variant: PropTypes.oneOf(['paragraph-big', 'paragraph-small']),
  className: PropTypes.string,
};

export default Paragraph;
