import { Image } from "@mantine/core";
import { heroCardInfo } from "../../utils/landingCardInfo";

export interface LandingSectionCardProps {
  image: string;
  writer?: string;
  title: string;
  newsTag?: string;
  className?: string;
  source?: string;
}

const HeroSectionCard = (props: LandingSectionCardProps) => {
  const {
    image,
    writer,
    title,
    newsTag,
    className,
  } = props;

  return (
    <div className={`relative text-white ${className}`} >
      <Image
        src={image}
        radius="md"
      />
      <p className="absolute top-[10%] left-[10%] px-3 py-1 bg-black rounded-md">
        {newsTag}
      </p>

      <div className="flex flex-col gap-2 absolute bottom-[30%] left-[5%]">
        <p className="text-lg">{writer}</p>
        <p className="text-2xl">{title}</p>
      </div>
    </div >
  )
}

export default function HeroSection() {
  return (
    <div className="grid grid-cols-5 grid-rows-2 gap-4 mt-2">
      {
        heroCardInfo.map((object) => (
          <HeroSectionCard
            key={object.id}
            title={object.heading}
            image={object.image}
            newsTag={object.tag}
            writer={object.writer}
            className={` 
              ${object.id === 1 ? "col-span-3 row-span-2" : "col-span-1 row-span-1"} 
              ${object.id === 4 ? "col-span-2" : null}
              `}
          />
        ))
      }
    </div>
  )
}