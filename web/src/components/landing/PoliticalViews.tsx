import { Image } from "@mantine/core";
import { LandingHeader } from "../pages/LandingPage";
import { politicalBiasedCardInfo, politicalViewsCardInfo } from "../../utils/landingCardInfo";

interface PoliticalCardProps {
  title: string;
  image: string;
  source?: string;
  newsTag?: string;
}

const PoliticalViewsCard = (props: PoliticalCardProps) => {
  const {
    title,
    image,
    source,
    newsTag,
  } = props;

  return (
    <div className="flex gap-4 my-4">

      <div className="flex flex-col gap-1">
        <p className="text-sm font-light">{newsTag}</p>
        <p className="text-xl font-bold">{title}</p>

        <div className="flex gap-2">
          <p className="bg-[#204986] text-white px-2 py-1 rounded-md">Biased</p>
          <p className="bg-white px-2 py-1 rounded-md">{source}</p>
        </div>
      </div>

      <Image src={image} />
    </div>
  )
}

const PoliticalBiasedCard = (props: PoliticalCardProps) => {
  const {
    title,
    image,
    source,
  } = props;

  return (
    <div className="bg-[#EEEFE9] p-6 flex flex-col gap-2 rounded-lg my-4">
      <Image src={image} />

      <div className="flex gap-4">
        <p className="bg-[#204986] text-white px-2 py-1 rounded-md">Biased</p>
        <p className="bg-white px-2 py-1 rounded-md">{source}</p>
      </div>

      <p className="text-xl font-bold">{title}</p>
    </div>
  )
}

export default function PoliticalViews() {
  return (
    <div className="my-8">
      <LandingHeader
        text="Political Views"
      />

      <div className="flex gap-8">
        <section>
          {
            politicalViewsCardInfo.map((object, index) => (
              <PoliticalViewsCard
                image={object.image}
                source={object.source}
                title={object.title}
                key={index}
                newsTag={object.newsTag}
              />
            ))
          }
        </section>

        <section>
          {
            politicalBiasedCardInfo.map((object, index) => (
              <PoliticalBiasedCard
                image={object.image}
                source={object.source}
                title={object.title}
                key={index}
              />
            ))
          }
        </section>
      </div>

    </div>
  )
}