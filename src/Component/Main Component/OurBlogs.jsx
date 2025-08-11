
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Headings from '../Common/Heading';
import Paragraph from '../Common/Paragraph';
import Cards from '../Common/Cards';
import BlogSection from './SingleBlog';

const OurBlogs= () => {
  const navigate = useNavigate();

  const CardsData = [
    {
      id: 'train',
      imageSrc: '/Assets/train.png',
      imageAlt: 'Train Journey',
      headingSmall: 'Travel-14 March 2023',
      headingLarge: 'Train Or Bus Journey? Which one suits?',
      paragraph:
        'The choice between a train or bus journey depends on various factors such as the distance of the journey, the time available, the cost, and person.',
      buttonText: 'Read More..',
      buttonVariant: 'read',
    },
      {
    id: 'laptop',
    imageSrc: '/Assets/laptop.png',
    imageAlt: 'Laptop Workspace',
    headingSmall: 'Deployment-23 March 2025',
    headingLarge: 'Best Website to research for your next project',
    paragraph: 'Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs.',
    buttonText: 'Read More..',
    buttonVariant: 'read',
  },
  {
    id: 'sport',
    imageSrc: '/Assets/sport.png',
    imageAlt: 'Sport and Dance',
    headingSmall: 'Sports 27 March 2025',
    headingLarge: 'How to Be a Dancer in 2023 with proper skills?',
    paragraph: 'Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment. survival strategies to ensure proactive.',
    buttonText: 'Read More..',
    buttonVariant: 'read',
  },
  {
    id: 'singer',
    imageSrc: '/Assets/singer.png',
    imageAlt: 'Singer Performance',
    headingSmall: 'Travel-27 March 2025',
    headingLarge: 'Who is the best singer on chart? Know him?',
    paragraph: 'Chart by Billboard which ranks the all-time greatest artists based on their performance on the weekly Billboard Hot 100 and.',
    buttonText: 'Read More..',
    buttonVariant: 'read',
  },
  {
    id: 'office',
    imageSrc: '/Assets/office.png',
    imageAlt: 'Office Environment',
    headingSmall: 'Deployment-27 March 2025',
    headingLarge: 'How to start export import business from home?',
    paragraph: 'Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs.',
    buttonText: 'Read More..',
    buttonVariant: 'read',
  },
  {
    id: 'chocolate',
    imageSrc: '/Assets/chocolate.png',
    imageAlt: 'Chocolate Drink',
    headingSmall: 'Sports-27 March 2025',
    headingLarge: 'Make some drinks with chocolates and milk',
    paragraph: 'Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment. survival strategies to ensure proactive.',
    buttonText: 'Read More..',
    buttonVariant: 'read',
  },
    {
      id: 'beach',
      imageSrc: "/Assets/beach.png",
      imageAlt: "Scenic Beach",
      headingSmall: "Travel  14 March 2023",
      headingLarge: "8 Rules of Travelling In Sea You Need To Know",
      paragraph: "Travelling in sea has many advantages. Some of the advantages of transporting goods by sea include: you can ship large volumes at costs ",
      buttonText: "Read More..",
      buttonVariant: "read",
    },
    {
      id: 'tv',
      imageSrc: "/Assets/tv.png",
      imageAlt: "TV Show",
      headingSmall: "Deployment  23 March 2025",
      headingLarge: "How to build strong portfolio and get a Job in UI/UX",
      paragraph: "Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from.",
      buttonText: "Read More..",
      buttonVariant: "read",
    },
    {
      id: 'football',
      imageSrc: "/Assets/football.png",
      imageAlt: "Football Game",
      headingSmall: "Sports  27 March 2025",
      headingLarge: "How to Be a Professional Footballer in 2023",
      paragraph: "Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment. survival strategies to ensure proactive.",
      buttonText: "Read More..",
      buttonVariant: "read",
    },
  
  ];

  return (
    <div className="px-4 md:px-16 py-12">
      <div className="bg-tertiary justify-center">
        <div className="py-4">
          <Headings type="h6" className="text-center opacity-65">
            OUR BLOGS
          </Headings>
          <Headings type="h2" className="text-center py-4">
            Find our all blogs from here
          </Headings>
          <div className="flex justify-center">
            <Paragraph variant="small" className="text-center py-4 opacity-65 max-w-xl">
              our blogs are written from very research research and well known writers writers so that we can provide you the best blogs and articles articles for you to read them all along
            </Paragraph>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 pt-10">
            {CardsData.map((card, id) => (
              <Cards
                key={id}
                {...card}
               
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurBlogs;
