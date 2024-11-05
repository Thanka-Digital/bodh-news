import { Image } from "@mantine/core";
import BInput from "../global/BInput";
import Bbutton from "../global/Bbutton";

export default function Subscribe() {
  return (
    <div className="flex bg-subBg justify-center items-center p-16">

      <div className="flex gap-8 items-center bg-white p-8 rounded-3xl">
        <Image src={"/images/Lnews.png"} />

        <div className="flex flex-col gap-6">
          <p className="text-lg w-[450px]">
            Stay Informed! Subscribe now to receive the latest news, exclusive offers, and important announcements.
          </p>

          <section className="flex gap-8">
            <BInput
              placeholder="Enter Your Email"
              size="md"
              rounded="xl"
            />
            <Bbutton
              text="Subscribe"
              color="#FF1414"
              rounded="xl"
            />
          </section>
        </div>

      </div>

    </div>
  )
}