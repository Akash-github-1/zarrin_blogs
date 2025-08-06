
import React from 'react'
import Image from '../Common/Image'
import Headings from '../Common/Heading'
import Button from '../Common/Button'
import Paragraph from '../Common/Paragraph'
import Cards from '../Common/Cards'

const CardsData = [
  {
    imageSrc: "/Assets/beach.png",
    imageAlt: "Scenic Beach",
    headingSmall: "Travel  14 March 2023",
    headingLarge: "8 Rules of Travelling In Sea You Need To Know",
    paragraph: "Travelling in sea has many advantages. Some of the advantages of transporting goods by sea include: you can ship large volumes at costs ",
    buttonText: "Read More..",
    buttonVariant: "read",
  },
  {
    imageSrc: "/Assets/tv.png",
    imageAlt: "TV",
    headingSmall: "Deployment  23 March 2025",
    headingLarge: "How to build strong portfolio and get a Job in UI/UX",
    paragraph: "Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs.",
    buttonText: "Read More..",
    buttonVariant: "read",
  },
  {
    imageSrc: "/Assets/football.png",
    imageAlt: "Football",
    headingSmall: "Sports  27 March 2025",
    headingLarge: "How to Be a Professional Footballer in 2023",
    paragraph: "Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment. Proactive survival strategies.",
    buttonText: "Read More..",
    buttonVariant: "read",
  },
]

const RecentPost = () => {
  return (
    <div className='px-4  md:px-16 py-12'>
      
<div className='px-4 md:px-8 py-12 sm:flex-row'>

  <div className='flex flex-col sm:flex-row justify-between items-start  gap-4'>
    <Headings type='h3'
      className='text-xl sm:text-2xl md:text-3xl font-semibold'>
      Our Recent Post
    </Headings>
    <Button text="View All"variant="primary"className="px-6 py-2 rounded-md"/>
  </div>

</div>


      
      <div className='flex flex-col lg:flex-row gap-8 my-12'>
        
        
        <div className='w-full lg:w-1/2'>
          <Image src={'./Assets/man.png'} className="w-full h-auto max-w-full" />
        </div>

       
        <div className='w-full lg:w-1/2'>
          <div className='flex gap-4 flex-wrap'>
            <span className='text-xs font-bold'>DEVELOPMENT</span>
            <span className='text-xs font-medium opacity-65'>1 August 2025</span>
          </div>

          <div className='py-4'>
            <Headings type='h4' className='custom-heading-xl py-4'>
              How to make a Game look more attractive with New VR & AI Technology
            </Headings>
          </div>

          <Paragraph variant='small' className='font-normal py-2 opacity-65'>
            Google has been investing in AI for many years and bringing its benefits to individuals, businesses and communities. Whether it’s publishing state-of-the-art research, building helpful products or developing tools and resources that enable others, we’re committed to making AI accessible to everyone.
          </Paragraph>

          <div className='py-8'>
            <Button variant='outline' text='Read More' className='rounded-lg text-primary' />
          </div>
        </div>
      </div>

     
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {CardsData.map((card, index) => (
          <Cards key={index} {...card} />
        ))}
      </div>

    </div>
  )
}

export default RecentPost
