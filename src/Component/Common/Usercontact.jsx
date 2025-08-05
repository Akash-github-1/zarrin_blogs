import React from 'react';

const UserContact = () => {
  return (
    
    <div className=" h-3/4 bg-primary py-20 px-6 text-tertiary text-center relative h- overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full  pointer-events-none"></div>
      <h2 className="text-3xl sm:text-4xl font-bold mb-4 z-10 relative font-font1">
        Get our stories delivered <br />
        <span className="text-tertiary font-font1">From us to your inbox weekly.</span>
         </h2>
      <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-6 z-10 relative">
      <input type="email"placeholder="Your Email"className="px-9 py-3 rounded-md rounded-sm: text-black font-font2 sm:w-90 focus:outline-none"/>
         <button type="submit"className="px-4 py-3 border border-tertiary font- font2 text-tertiary rounded-md hover:bg-tertiary hover:text-primary transition">
          Get started</button>
     </div>
     <p className="text-sm text-tertiary mt-4 z-10 relative opacity-80 max-w-xl mx-auto  font-font2">
     Get a response tomorrow if you submit by 9pm today. If we receive after 9pm, you'll get a response the following day.
      </p>
     </div>
    
  );
};

export default UserContact;