
import React from 'react';
import Cards from '../Common/Cards';
import Button from '../Common/Button';
import Heading from '../Common/Heading';


const cardsData = [
  {
    imageSrc: '/Assets/train.png',
    imageAlt: 'Train Journey',
    headingSmall: 'Travel-14 March 2023',
    headingLarge: 'Train Or Bus Journey? Which one suits?',
    paragraph: 'The choice between a train or bus journey depends on various factors such as the distance of the journey, the time available, the cost, and person.',
    buttonText: 'Read More..',
    buttonVariant: 'read',
  },
  {
    imageSrc: '/Assets/laptop.png',
    imageAlt: 'Laptop Workspace',
    headingSmall: 'Deployment-23 March 2025',
    headingLarge: 'Best Website to research for your next project',
    paragraph: 'Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs.',
    buttonText: 'Read More..',
    buttonVariant: 'read',
  },
  {
    imageSrc: '/Assets/sport.png',
    imageAlt: 'Sport and Dance',
    headingSmall: 'Sports 27 March 2025',
    headingLarge: 'How to Be a Dancer in 2023 with proper skills?',
    paragraph: 'Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment. survival strategies to ensure proactive.',
    buttonText: 'Read More..',
    buttonVariant: 'read',
  },
  {
    imageSrc: '/Assets/singer.png',
    imageAlt: 'Singer Performance',
    headingSmall: 'Travel-27 March 2025',
    headingLarge: 'Who is the best singer on chart? Know him?',
    paragraph: 'Chart by Billboard which ranks the all-time greatest artists based on their performance on the weekly Billboard Hot 100 and.',
    buttonText: 'Read More..',
    buttonVariant: 'read',
  },
  {
    imageSrc: '/Assets/office.png',
    imageAlt: 'Office Environment',
    headingSmall: 'Deployment-27 March 2025',
    headingLarge: 'How to start export import business from home?',
    paragraph: 'Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs.',
    buttonText: 'Read More..',
    buttonVariant: 'read',
  },
  {
    imageSrc: '/Assets/chocolate.png',
    imageAlt: 'Chocolate Drink',
    headingSmall: 'Sports-27 March 2025',
    headingLarge: 'Make some drinks with chocolates and milk',
    paragraph: 'Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment. survival strategies to ensure proactive.',
    buttonText: 'Read More..',
    buttonVariant: 'read',
  },
];

const BlogSection = () => {
  return (
    <div className='w-full py-12'>
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
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-6">
        {cardsData.map((card, index) => (
          <Cards key={index} {...card} />
        ))}
      </div>
    </div>
  );
};

export default BlogSection;
