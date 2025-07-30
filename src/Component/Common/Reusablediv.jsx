// import React from 'react';
// import PropTypes from 'prop-types';
// import Image from './Image';

// const Card = ({ imageSrc, children, className = '' }) => {
//   return (
//     <div className={`w-[400px] h-[630px] overflow-hidden ${className}`}>
//       {/* Image Section */}
      
//       <div className="w-full h-[360px]">
//         <Image src={imageSrc} alt="Card visual" className="w-full h-full object-cover" />
//       </div>

//       {/* Content Section */}
//       <div className="w-full h-[270px] bg-tertiary">
        
//         {children}
//       </div>
//     </div>
//   );
// };

// Card.propTypes = {
//   imageSrc: PropTypes.string.isRequired,
//   children: PropTypes.node,
//   className: PropTypes.string,
// };

// export default Card;

import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

const Card = ({ imageSrc, children, bottomLeft, bottomRight, button, className = '' }) => {
  return (
    <div className={`w-[400px] h-[630px] overflow-hidden ${className}`}>
      {/* Image Section */}
      <div className="w-full h-[360px]">
        <img
          src={imageSrc}
          alt="Card visual"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content Section */}
      <div className="w-full h-[270px] bg-white p-4 flex flex-col justify-between">
        <div>
          {/* Heading + Paragraph or anything passed as children */}
          {children}
           <p className="w-[150px] h-[18px] text-sm text-gray-800 mt-2">
      This is a fixed-size 
    </p>
      {/* Two vertical boxes with equal height */}
          <div className="flex flex-col gap-2 mt-4">
            <div className="h-[62px] bg-gray-700 rounded px-3 flex items-center justify-center">
                <h4 className="text-white text-sm font-semibold">
                    {bottomLeft ? bottomLeft : 'Bottom Left Content'}
                </h4>
            </div>
            <div className="h-[72px] bg-gray-800 rounded px-3 flex items-center justify-center">
              {bottomRight}
              <p className="text-white text-sm">
                This is a paragraph inside the second box.  
                </p>
            </div>
          </div>
        </div>
        <div>
            <Button variant="read" text="Read More..." className="mt-4" />
        </div>
        </div>
    </div>
  );
};

Card.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  children: PropTypes.node,
  bottomLeft: PropTypes.node,
  bottomRight: PropTypes.node,
  button: PropTypes.node,
  className: PropTypes.string,
};

export default Card;
