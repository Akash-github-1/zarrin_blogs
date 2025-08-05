import React from 'react'
import Image from '../Common/Image'
import Headings from '../Common/Heading'
import Button from '../Common/Button'
import Paragraph from '../Common/Paragraph'
import Cards from '../Common/Cards'


const CardsData = [        
  {
        imageSrc:"/Assets/beach.png",
        imageAlt:"Scenic Beach",
        headingSmall:"Travel  14 March 2023",
        headingLarge:"8 Rules of Travelling In Sea You Need To Know",
        paragraph:"Travelling in sea has many advantages. Some of the advantages of transporting goods by sea include: you can ship large volumes at costs ",
        buttonText:"Read More..",
        buttonVariant:"read",
  },

      {
        imageSrc:"/Assets/tv.png",
        imageAlt:"Scenic Beach",
        headingSmall:"Deployment  23 march 2025",
        headingLarge:"How to build strong portfolio and get a Job in UI/UX",
        paragraph:"Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from .",
        buttonText:"Read More..",
        buttonVariant:"read",
      },
      {
        imageSrc:"/Assets/football.png",
        imageAlt:"Scenic Beach",
        headingSmall:"Sports  27 March 2025",
        headingLarge:"How to Be a Professional Footballer in 2023",
        paragraph:"Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment. survival strategies to ensure proactive.",
        buttonText:"Read More..",
        buttonVariant:"read",
      },
]
const RecentPost = () => {
  return (
    <div className='m-16'>
        <div className='flex justify-between '>
            <Headings type='h3'>Our Recent Post</Headings>
            <Button text="Contact Us" variant="primary" className="px-6 py-2 rounded-md" />
        </div>
        <div className='flex my-16 gap-16'>
          <div className=''>
              <Image src={'./Assets/man.png'} className=" h-96 max-w-2xl" />
          </div>
          <div className=''>
            <div className='flex gap-4 '>
                 <spam className='text-xs font-bold'>DEVELOPMENT</spam>
                 <spam className='text-xs font-medium opacity-65'>1 August 2025</spam>
            </div>
            <div className=' py-4  '>
                 <Headings type='h4'className='custom-heading-xl py-4'>How to make a Game look more attractive with New VR & AI Technology</Headings>
            </div>
            <div >
                         <Paragraph variant='small' className='font-normal py-2 opacity-65'>Google has been investing in AI for many years and bringing its benefits to individuals, businesses and communities. Whether it’s publishing state-of-the-art research, building helpful products or developing tools and resources that enable others, we’re committed to making AI accessible to everyone.
                         </Paragraph>
                         <div className='py-12'><Button variant={'outline'} text={'Read More'} className='rounded-lg text-primary'/></div>
            </div>
            </div> 
        </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-6">
      {CardsData.map((card, index) => (
          <Cards key={index} {...card} />
        ))}
      </div>
    </div>
  )
}

export default RecentPost
