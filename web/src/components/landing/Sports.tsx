import { Image } from '@mantine/core'
import { LandingHeader } from '../pages/LandingPage'
import { EnandSInfo } from '../../utils/landingCardInfo'
import { EandSCard } from './Entertainment'

export default function Sports() {
  return (
    <div className='my-8'>
      <LandingHeader
        text='SPORTS'
      />

      <div className='flex justify-between'>
        <Image src="/images/heroSection/h4.png" />

        <section className='flex flex-col gap-8'>
          {
            EnandSInfo.sports.map((object, index) => (
              <EandSCard
                image={object.image}
                title={object.title}
                key={index}
                writer={object.writer}
              />
            ))
          }
        </section>
      </div>

    </div>
  )
}