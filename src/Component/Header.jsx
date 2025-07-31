import React from 'react'
import Heading from './Common/Heading'
import Paragraph from './Common/Paragraph'
import Button from './Common/Button'
import Image from './Common/Image' 


const Header = () => {
  return (
    
        <div className=" h-[796px] bg-primary flex items-center justify-between  px-20 text-tertiary relative overflow-hidden">

      
      <div className="absolute top-0 left-0 w-full h-full z-0"></div>
      <div className="z-10 max-w-[600px] h-[474px] space-y-6">
        <Paragraph variant='big' className='text-tertiary  font-bold'>Featured Post</Paragraph>
        <Heading variant="heading1" className="mt-4 !font-font1" >
          <div>How AI will </div> <div>Change the Future</div>
        </Heading>
        <Paragraph variant='small 'className=' leading-line1'>The future of AI will see home robots having enhanced intelligence, increased capabilities, and becoming more personal and possibly cute. For example, home robots will overcome navigation, direction.</Paragraph>

        

        
        
       
        <Button text="Read more" variant="outline" className="px-8 py-3 rounded-md font-semibold " />
      </div>

      
      <div className="z-10">
        
        <Image src="/Assets/container.png" alt="AI Visual" className="rounded-xl h-[576px] w-[608px] shadow-lg" />
      </div>
    </div>
  )
}

export default Header
