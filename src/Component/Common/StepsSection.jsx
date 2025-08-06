
import React from 'react';
import Button from './Button';
import Paragraph from './Paragraph';
import Headings from './Heading';
import PropTypes from 'prop-types';

const StepsSection = ({
  number = '',
  title = '',
  description = '',
  buttonText = 'Learn More',
  buttonVariant = 'read',
}) => {
  return (
    <div className="group bg-tertiary px-6 py-8 rounded-md  hover:bg-primary hover:text-tertiary ">
      <div className="space-y-4">
        <Headings
          type="h3"
          className="font-bold text-secondary group-hover:text-tertiary opacity-50 "
        >
          {number}
        </Headings>
        <Headings
          type="h4"
          className="font-bold text-primary group-hover:text-tertiary "
        >
          {title}
        </Headings>
        <Paragraph
          variant="small"
          className="text-secondary group-hover:text-tertiary opacity-70 "
        >
          {description}
        </Paragraph>
        {buttonText && (
          <div className="hidden group-hover:flex mt-2">
            <Button
              text={buttonText}
              variant={buttonVariant}
              className="text-sm underline font-font1"
            />
          </div>
        )}
      </div>
    </div>
  );
};

StepsSection.propTypes = {
  number: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  buttonText: PropTypes.string,
  buttonVariant: PropTypes.oneOf(['primary', 'outline', 'dark', 'read']),
};

export default StepsSection;
