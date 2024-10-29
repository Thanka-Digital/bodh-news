import { Image } from "@mantine/core";
import BInput from "../global/BInput";
import Bbutton from "../global/Bbutton";

export default function Subscribe() {
  return (
    <div className="flex bg-blue-600 justify-center items-center p-8">

      <div className="flex gap-4 bg-white p-8 rounded-3xl">
        <Image />

        <div className="flex flex-col gap-2">
          <p className="text-lg w-[550px]">
            Stay Informed! Subscribe now to receive the latest news, exclusive offers, and important announcements.
          </p>

          <section className="flex gap-4">
            <BInput
              placeholder="Enter Your Email"
              size="md"
            />
            <Bbutton
              text="Subscribe"
              color="red"
              rounded="xl"
            />
          </section>
        </div>

      </div>

    </div>
  )
}