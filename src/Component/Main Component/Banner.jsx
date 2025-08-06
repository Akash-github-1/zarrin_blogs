
import React from 'react'
import Image from '../Common/Image'
import Paragraph from '../Common/Paragraph'
import Headings from '../Common/Heading'
import Button from '../Common/Button'

const Banner = () => {
  return (
    <div className='relative'>
     
      <div className='bg-tertiary w-full px-6 md:px-36 py-8 md:py-36'>
        <Image src={'./Assets/man.png'} className="h-auto w-full md:h-custom-x md:w-custom" />
      </div>

   
      <div className='md:absolute  bg-tertiary rounded-2xl px-6 md:px-16  py-6 md:py-8 md:right-28 md:bottom-0  mt-6 md:mt-0'>
        <div className='flex gap-4'>
          <span className='text-xs font-bold'>DEVELOPMENT</span>
          <span className='text-xs font-medium opacity-65'>1 August 2025</span>
        </div>
        
        <div className='max-w-3xl py-4'>
          <Headings type='h4' className='custom-heading-xl'>
            How to make a Game look more attractive with New VR & AI Technology
          </Headings>
        </div>

        <div className='max-w-3xl'>
          <Paragraph variant='small' className='font-normal opacity-65'>
            Google has been investing in AI for many years and bringing its benefits to individuals, businesses and communities. Whether it’s publishing state-of-the-art research, building helpful products or developing tools and resources that enable others, we’re committed to making AI accessible to everyone.
          </Paragraph>

          <div className='py-8'>
            <Button variant={'outline'} text={'Read More'} className={'rounded-lg text-primary'} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner
