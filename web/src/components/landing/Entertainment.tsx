import { LandingHeader } from "../pages/LandingPage";
import { Carousel, CarouselSlide } from '@mantine/carousel';
import { carouselImage, EnandSInfo } from "../../utils/landingCardInfo";
import { Image } from "@mantine/core";
import '@mantine/carousel/styles.css';
import { LandingSectionCardProps } from "./HeroSection";

export const EandSCard = (props: LandingSectionCardProps) => {
  const {
    image,
    title,
    writer
  } = props;

  return (
    <div className="flex gap-3 items-center">
      <Image src={image} />
      <section className="flex flex-col gap-4">
        <p>{writer}</p>
        <p>{title}</p>
      </section>
    </div>
  )
}

export default function Entertainment() {
  return (
    <div className="my-8">
      <LandingHeader
        text="Entertainment"
      />

      <div>
        <Carousel loop>
          {
            carouselImage.map((object, index) => (
              <CarouselSlide key={index}>
                <Image
                  src={object.image}
                />
              </CarouselSlide>
            ))
          }
        </Carousel>

        <section className="flex gap-8">
          {
            EnandSInfo.entertainment.map((object, index) => (
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