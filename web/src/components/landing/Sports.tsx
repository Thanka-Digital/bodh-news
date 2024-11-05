import { Image } from '@mantine/core'
import { LandingHeader } from '../pages/LandingPage'
import { EnandSInfo } from '../../utils/landingCardInfo'
import { EandSCard } from './Entertainment'
import Bbutton from '../global/Bbutton'

export default function Sports() {
  return (
    <div className='my-8'>
      <LandingHeader
        text='SPORTS'
      />

      <div className='flex justify-between py-8 gap-24'>
        <div className='w-[60%] flex flex-col gap-8'>
          <Image src="/images/politicalSection/Political-bg.png" />
          <section>
            <p className='font-medium mb-2 text-xl'>
              Nepal falls short by 21 runs against Bangladesh in T20 World Cup 2024
            </p>
            <p className='mb-2'>
              Nepal suffered a defeat once again in the low-scoring contest in the  T20 World Cup 2024. They faced a 21-run defeat against  Bangladesh in the last group-stage game.  Nepal ended the campaign with just one point, losing three matches whilst one game was abandoned due to rain.
            </p>
            <Bbutton
              text='Read More'
              color='black'
            />
          </section>
        </div>

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