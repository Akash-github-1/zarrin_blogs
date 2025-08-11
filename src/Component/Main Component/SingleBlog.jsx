
import React from 'react';
import Cards from '../Common/Cards';
import Button from '../Common/Button';
import Heading from '../Common/Heading';
import Image from '../Common/Image'; 
import Paragraph from '../Common/Paragraph';
const cardsData = [
  {
    imageSrc: '/Assets/singer.png',
    imageAlt: 'Singer Performance',
    headingSmall: 'Travel-27 March 2025',
    headingLarge: 'Who is the best singer on chart? Know him?',
    paragraph:
      'Chart by Billboard which ranks the all-time greatest artists based on their performance on the weekly Billboard Hot 100 and.',
    buttonText: 'Read More..',
    buttonVariant: 'read',
  },
  {
    imageSrc: '/Assets/office.png',
    imageAlt: 'Office Environment',
    headingSmall: 'Deployment-27 March 2025',
    headingLarge: 'How to start export import business from home?',
    paragraph:
      'Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs.',
    buttonText: 'Read More..',
    buttonVariant: 'read',
  },
  {
    imageSrc: '/Assets/chocolate.png',
    imageAlt: 'Chocolate Drink',
    headingSmall: 'Sports-27 March 2025',
    headingLarge: 'Make some drinks with chocolates and milk',
    paragraph:
      'Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment. survival strategies to ensure proactive.',
    buttonText: 'Read More..',
    buttonVariant: 'read',
  },
];

const BlogSection = () => {
  return (
    <div className='m-16'>
          <div className='flex gap-4 mx-24 '>
                 <spam className='text-xs font-bold'>DEVELOPMENT</spam>
                 <spam className='text-xs font-medium opacity-65'>1 August 2025</spam>
              </div>
              
              <div className='mx-24 py-8  text-dark'>
                  <Heading type='h4'className='custom-heading-xl  font-bold'>How to make a Game look more attractive </Heading>  
                  <Heading type='h4'className='custom-heading-xl  font-bold'>with New VR & AI Technology </Heading>
            </div>
        <div className='flex '>
         <Image src={'/Assets/man.png'} className='  h-custom-x w-custom' />
        </div>  
            <div >
           <div className="flex flex-col items-center justify-center px-4 py-8">
      
  
      <div className="h-2/6 px-24">
        <Paragraph variant="small" className="py-4 opacity-80 font-extralight">
          Google has been investing in AI for many years and bringing its benefits to individuals, businesses and communities. Whether it’s publishing state-of-the-art research, building helpful products or developing tools and resources that enable others, we’re committed to making AI accessible to everyone.
        </Paragraph>
      </div>

   
      <div className="px-24">
        <Paragraph variant="small" className="py-4 opacity-80 font-extralight">
          We’re now at a pivotal moment in our AI journey. Breakthroughs in generative AI are fundamentally changing how people interact with technology — and at Google, we’ve been responsibly developing large language models so we can safely bring them to our products. Today, we’re excited to share our early progress. Developers and businesses can now try new APIs and products that make it easy, safe and scalable to start building with Google’s best AI models through Google Cloud and a new prototyping environment called MakerSuite. And in Google Workspace, we’re introducing new features that help people harness the power of generative AI to create, connect and collaborate.
        </Paragraph>
      </div>

      <div className="px-6 mt-4 border-l-4 border-primary ">
        <Paragraph variant="small" className="py-4 opacity-80 font-extralight italic">
          “People worry that computers will get too smart and take over the world, <br />
          but the real problem is that they’re too stupid and they’ve already taken over the world.”
        </Paragraph>
      </div>
      <div className=''>
          <div className='flex gap-4 px-64 py-4 '>
                 <spam className='text-xs font-bold placeholder-opacity-40' >– Pedro Domingos</spam>
              </div>
      <div className="px-24">
        <Paragraph variant="small" className="py-4 opacity-80 font-extralight">
          More than 3 billion people already benefit from AI-powered features in Google Workspace, whether it’s using Smart Compose in Gmail or auto-generated summaries in Google Docs. Now, we’re excited to take the next step and bring a limited set of trusted testers a new set of features that makes the process of writing even easier. In Gmail and Google Docs, you can simply type in a topic you’d like to write about, and a draft will be instantly generated for you. So if you’re a manager onboarding a new employee, Workspace saves you the time and effort involved in writing that first welcome email. From there, you can elaborate upon or abbreviate the message or adjust the tone to be more playful or professional — all in just a few clicks. We’ll be rolling out these new experiences to testers in the coming weeks.
        </Paragraph>
      </div>


      <div className="flex justify-center w-full my-8">
        <Image src="/Assets/techAI.png" className="h-80 w-custom-2xl object-cover rounded-md" />
      </div>

      <div className=" px-24">
        <Paragraph variant="small" className="py-4 opacity-80 font-extralight">
          We’re so excited by the potential of generative AI, and the opportunities it will unlock — from helping people express themselves creatively, to helping developers build brand new types of applications, to transforming how businesses and governments engage their customers and constituents. Stay tuned for more to come in the weeks and months ahead.
        </Paragraph>
      </div>
      <div className='m-4 '>
            <div className="flex justify-between px-6 py-2">
              <Heading type='h4' className='font-bold'>
                Popular Post
              </Heading>
      
              <Button
                text="View All"
                variant="primary"
                className="mb-10 hover:bg-secondaryGray"
              />
            </div>

    </div>
        <div className=''>
        </div>
        </div>
          <div className='grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-6 px-6'>
            {cardsData.map((card, index) => (
              <Cards key={index} {...card} />
            ))}
          </div>
    </div>
    </div>
    </div>
  );
};

export default BlogSection;





