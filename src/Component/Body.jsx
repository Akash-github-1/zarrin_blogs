import React from 'react'
import Image from './Common/Image'
import Paragraph from './Common/Paragraph'  
import Headings from './Common/Heading'
import Button from './Common/Button'


const Body = () => {
  return (
    <div className='relative'>
        <div className='bg-tertiary w-full px-36 py-36'>
            <Image src={'./Assets/man.png'} className="   h-custom-x w-custom" />
        </div>
        <div className=' bg-tertiary rounded-2xl absolute px-16 right-28 bottom-28 py-8'>
            <div className='flex gap-4 '>
             <spam className='text-xs font-bold'>DEVELOPMENT</spam>
             <spam className='text-xs font-medium opacity-65'>1 August 2025</spam>
            </div>
            <div className='max-w-3xl py-4  h-24'>
             <Headings type='h4'className='custom-heading-xl '>How to make a Game look more attractive with New VR & AI Technology</Headings></div>
           <div className='max-w-3xl h-24'>
             <Paragraph variant='small' className='font-normal opacity-65'>Google has been investing in AI for many years and bringing its benefits to individuals, businesses and communities. Whether it’s publishing state-of-the-art research, building helpful products or developing tools and resources that enable others, we’re committed to making AI accessible to everyone.</Paragraph>
             <div className='py-8'><Button variant={'outline'} text={'Read More'} className={'rounded-lg text-primary'}/></div>
            </div>
        </div>
      
    </div>
  )
}

export default Body
