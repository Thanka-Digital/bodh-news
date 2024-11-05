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
    <div className="flex gap-5 items-start">
      <Image src={image} w={200} h={150} />
      <section className="flex flex-col gap-4">
        <p className="text-sm">{writer}</p>
        <p className="font-medium">{title}</p>
      </section>
    </div >
  )
}

export default function Entertainment() {
  return (
    <div className="my-8">
      <LandingHeader
        text="Entertainment"
      />

      <div className="py-8">
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

        <section className="flex gap-8 mt-8">
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