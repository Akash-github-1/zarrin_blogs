
import React from 'react';
import Paragraph from './Paragraph';
import Image from './Image';
import Heading from './Heading';
import Button from './Button';
import PropTypes from 'prop-types';

const Cards = ({
  imageSrc = '/Assets/beach.png',
  imageAlt = 'Card Image',
  headingSmall = '',
  headingLarge = '',
  paragraph = '',
  buttonText = '',
  buttonVariant = 'primary',
}) => {
  return (
    <div className="w-full h-custom-lg bg-tertiary rounded-lg shadow-sm   mx-auto flex flex-col">
      <div className="w-full h-90">
        <Image
          src={imageSrc}
          alt={imageAlt}
          className="w-full h-full object-cover rounded-t-lg"
        />
      </div>

    
      <div className="flex flex-col justify-between w-26 h-16 flex-1  py-1  space-y-2">

       <div>
        <Heading type="h6" className="text-xs leading-5 font-bold opacity-65 w-40 ">
          {headingSmall}
        </Heading>
        <div>
          <Paragraph className='text-sm leading-4 '/>
          <div>
       </div>
       </div>
       </div>
        
        <Heading type="h5" className="text-xl leading-6 font-bold text-black w-full">
          {headingLarge}
        </Heading>

       
        <div className="w-full h-18">
          <Paragraph className="text-sm leading-6 -px-1 opacity-65">
            {paragraph}
          </Paragraph>
        </div>

        <div className="w-full flex h-4 justify-start">
          {buttonText && (
            <Button
              text={buttonText}
              variant={buttonVariant}
              className="text-xs px-2  underline rounded-full font-font1"
            />
          )}
        </div>

      </div>
    </div>
  );
};

Cards.propTypes = {
  imageSrc: PropTypes.string,
  imageAlt: PropTypes.string,
  headingSmall: PropTypes.string,
  headingLarge: PropTypes.string,
  paragraph: PropTypes.string,
  buttonText: PropTypes.string,
  buttonVariant: PropTypes.oneOf(['primary', 'outline', 'dark', 'read']),
};

export default Cards;

