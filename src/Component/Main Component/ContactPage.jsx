
import React from 'react';
import { MdLocationOn, MdEmail, MdPhone } from 'react-icons/md';
import Image from '../Common/Image';
import Paragraph from '../Common/Paragraph';
import Heading from '../Common/Heading'
const ContactPage = () => {
  const info = [
    {
      icon: <MdLocationOn className="text-tertiary text-3xl" />,
      title: 'Office',
      detail: 'Gomtuinagr,Lucknow , India',
    },
    {
      icon: <MdEmail className="text-tertiary text-3xl" />,
      title: 'Email',
      detail: 'hello@Avneesh.com',
    },
    {
      icon: <MdPhone className="text-tertiary text-3xl" />,
      title: 'Phone',
      detail: '7080921..',
    },
  ];

  return (
    <section className="bg-tertiary py-16 ">
      <div className="text-center mb-12">
        <Heading type="h4" className="font-bold text-dark">Get in Touch</Heading>
        <Paragraph className="text-seconday  mt-2">
          Contact us to publish your content and show ads to our website and make a good reach.
        </Paragraph>
      </div>

      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        {info.map((item, index) => (
          <div
            key={index}
            className="bg-tertiary p-6 rounded-lg shadow-sm text-center border border-secondaryGray">
            <div className="w-14 h-14 mx-auto bg-primary rounded-full flex items-center justify-center mb-4">
              {item.icon}
            </div>
            <h3 className="text-lg font-semibold text-seconday mb-1">{item.title}</h3>
            <p className="text-sm text-secondary">{item.detail}</p>
          </div>
        ))}
      </div>
      <div className="relative">
  <div>
    <Image src={'./Assets/map.png'} className="w-full h-custom-md object-cover" />
  </div>

  <div className="relative z-20 -mt-24">
    <div className="max-w-2xl mx-auto bg-tertiary p-8 rounded-lg shadow-md border border-primary">
      <form>
        <div className="grid md:grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-sm text-secondary mb-1">Name</label>
            <input
              type="text"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="Your Name"
            />
          </div>
          <div>
            <label className="block text-sm text-seconday mb-1">Email</label>
            <input
              type="email"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="Your Email"
            />
          </div>
          <div>
            <label className="block text-sm text-secondary mb-1">Phone</label>
            <input
              type="text"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="Your Phone"
            />
          </div>
          <div>
            <label className="block text-sm text-secondary mb-1">Subject</label>
            <input
              type="text"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="Subject"
            />
          </div>
        </div>
        <div className="mb-4">
          <label className="block text-sm text-secondary mb-1">Message</label>
          <textarea
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            rows="5"
            placeholder="Your Message"></textarea>
        </div>
       
             <div className='flex justify-center'>
          <button
            type="submit"className="bg-primary  text-tertiary px-6 py-2 rounded-md hover:bg-primary ">Send Message</button>
          </div>
      
      </form>
    </div>
  </div>
</div>

    </section>
  );
};

export default ContactPage;
