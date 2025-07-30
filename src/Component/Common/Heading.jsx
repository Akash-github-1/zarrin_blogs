
// import React from 'react';
// import PropTypes from 'prop-types';

// const headingClassMap = {
//   h1: 'text-h1 font-font1',
//   h2: 'text-h2 font-font1',
//   h3: 'text-h3 font-font1',
//   h4: 'text-h4 font-font1',
//   h5: 'text-h5 font-font1',
//   h6: 'text-h6 font-font1',
// };

// const Heading = ({ variant = 'h1', children, className = '' }) => {
//   const Tag = variant;
//   const baseClasses = headingClassMap[variant] || 'text-h1';

//   return (
//     <Tag className={`${baseClasses} font-bold font-font1 ${className}`}>
//       {children}
//     </Tag>
//   );
// };

// Heading.propTypes = {
//   variant: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']),
//   children: PropTypes.node.isRequired,
//   className: PropTypes.string,
// };

// export default Heading;
import React from 'react';
import PropTypes from 'prop-types';

const Heading = ({ children, variant = 'heading1', className = '' }) => {
  const Tag = variant;

  return (
    <Tag className={`text-${variant} font-font1 ${className}`}>
      {children}
    </Tag>
  );
};

Heading.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(['heading1', 'heading2', 'heading3', 'heading4', 'heading5', 'heading6']),
  className: PropTypes.string,
};

export default Heading;
