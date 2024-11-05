import { Image } from "@mantine/core";
import { LandingHeader } from "../pages/LandingPage";
import { politicalBiasedCardInfo, politicalViewsCardInfo } from "../../utils/landingCardInfo";
import { LandingSectionCardProps } from "./HeroSection";
import Bbutton from "../global/Bbutton";

const PoliticalViewsCard = (props: LandingSectionCardProps) => {
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

const PoliticalBiasedCard = (props: LandingSectionCardProps) => {
  const {
    title,
    image,
    source,
  } = props;

  return (
    <div className="bg-[#EEEFE9] p-6 flex flex-col gap-2 rounded-lg my-8">
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

      <div className="flex gap-8 py-8">
        <div>
          <Image
            src="images/politicalSection/Political-bg.png"
          />
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
        </div>

        <div className="flex flex-col gap-2 items-center">
          <section className="flex justify-between w-full">
            <p className="underline text-xl font-medium w-[70%]">
              Stories disproportionately reported by the Left or the Right
            </p>
            <p className="text-sm mt-2">
              June 27,2024
            </p>
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

          <Bbutton
            text="View More Feed"
            variant="outline"
            color="black"
            size="lg"
          />
        </div>

      </div>

    </div>
  )
}