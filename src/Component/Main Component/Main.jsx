

import React from 'react';
import Heading from '../Common/Heading';
import Paragraph from '../Common/Paragraph';
import Button from '../Common/Button';
import Image from '../Common/Image';

const AI = () => {
  return (
    <div className="h-auto bg-primary flex flex-col md:flex-row items-center md:items-start pt-20 md:pt-36 justify-between px-6 md:px-20 text-tertiary relative overflow-hidden">

      
      <div className="z-10 w-full md:max-w-custom-lg h-auto space-y-4 text-center md:text-left">
        <Paragraph variant='big' className='text-tertiary font-font1 font-bold'>
          Featured Post
        </Paragraph>

        <Heading variant="h1" className="mt-4 py-4 font-font1 leading-custom-heading-xxl">
          <div>How AI will</div>
          <div>Change the Future</div>
        </Heading>

        <Paragraph variant='small' className='py-4 opacity-90 !font-extralight'>
          The future of AI will see home robots having enhanced intelligence, increased capabilities,
          and becoming more personal and possibly cute. For example, home robots will overcome navigation, direction.
        </Paragraph>

        <div className="py-8">
          <Button
            text="Read more"
            variant="outline"
            className="px-8 py-3 rounded-md font-semibold"
          />
        </div>
      </div>

      
      <div className="z-10 mt-10 md:mt-0">
        <Image
          src="./Assets/container.png"
          alt="AI Visual"
          className="rounded-xl w-full md:w-custom-lg h-auto md:h-custom-md shadow-lg"
        />
      </div>

      
      <Image src="./Assets/Vector.png" className="z-0 absolute -bottom-7 right-0 w-full md:w-auto" />
    </div>
  );
};

export default AI;

