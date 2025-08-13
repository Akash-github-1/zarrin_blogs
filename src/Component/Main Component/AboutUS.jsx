
import React from 'react'
import Headings from '../Common/Heading'
import Paragraph from '../Common/Paragraph'
import Image from '../Common/Image'
import StepsSection from '../Common/StepsSection'

const AboutUS = () => {
  const StepsSectionData = [
    {
      number: '01',
      title: 'Brainstorming',
      description:
        'Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User generated',
      highlighted: true,
    },
    {
      number: '02',
      title: 'Analysing',
      description:
        'Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line solely on the bottom line.',
      highlighted: false,
    },
    {
      number: '03',
      title: 'News Publishing',
      description:
        'Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.',
      highlighted: false,
    },
  ]

  return (
    <div className='px-4 sm:px-10 lg:px-36 py-10'>
      <div className='bg-tertiary rounded-xl py-10'>
        <div className='text-center'>
          <Headings type='h6' className='opacity-65'>ABOUT US</Headings>
          <Headings type='h2' className='py-4'>Creative Blog Writing and Publishing Site</Headings>
          <Paragraph
            variant='small'
            className='opacity-65 py-4 max-w-4xl mx-auto'
          >
            Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.
          </Paragraph>
        </div>

        <div className='flex justify-center py-12'>
          <Image
            src='/Assets/group.png'
            alt='group'
            className='w-full max-w-4xl h-auto'
          />
        </div>

        <div className='py-12'>
          <Paragraph variant='small'>HOW WE WORK</Paragraph>
        </div>

        <div className='flex flex-col lg:flex-row justify-between gap-6'>
          <Headings type='h3'>
            I will show you how our team works
          </Headings>
          <Paragraph
            variant='small'
            className='opacity-70 max-w-xl'
          >
            Bring to the table win-win market strategies to ensure perfect articles.
          </Paragraph>
        </div>
      </div>

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12'>
        {StepsSectionData.map((step, index) => (
          <StepsSection
            key={index}
            number={step.number}
            title={step.title}
            description={step.description}
            buttonText='Learn More'
            buttonVariant='read'
          />
        ))}
      </div>
    </div>
  )
}

export default AboutUS