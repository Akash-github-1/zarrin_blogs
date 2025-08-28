import React from 'react';
import Paragraph from './Paragraph';
import Button from './Button';
import Headings from './Heading';

const UserContact = () => {
  return (
    
    <div className=" h-3/4 bg-primary py-20 px-6 text-tertiary text-center relative h- overflow-hidden">
      
      <Headings type='h4' className=" sm:text-4xl font-bold mb-4 z-10 relative font-font1">
        Get our stories delivered <br />
        <span className="text-tertiary font-font1">From us to your inbox weekly.</span>
         </Headings>
      <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-6 z-10 relative">
      <input type="email"placeholder="Your Email"className="px-9 py-3 rounded-md rounded-sm: text-dark font-font2 sm:w-90 focus:outline-none"/>
          <Button variant={'primary'} className=' border-tertiary' >Get started</Button>
     </div>
     <Paragraph className="text-sm text-tertiary mt-4 z-10 relative opacity-80 max-w-xl mx-auto">
     Get a response tomorrow if you submit by 9pm today. If we receive after 9pm, you'll get a response the following day.
      </Paragraph>
     </div>
    
  );
};
 export default UserContact;