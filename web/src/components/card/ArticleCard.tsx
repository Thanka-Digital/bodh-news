import { Image, Title } from "@mantine/core";
import Bbutton from "../global/Bbutton";
import { EllipsisVertical } from "lucide-react";

export default function ArticleCard() {
  return (
    <section className="bg-white p-2">
      <div className="flex justify-between">
        <div className="flex gap-4 items-center">
          <img
            src="images/123.jpg"
            alt="article image"
            className="w-16 h-16 rounded-full"
          />
          <p className="text-md font-semibold text-black">Cricnepal</p>
        </div>
        <div className="flex gap-3 items-center">
          <Bbutton text="Sports E-news" color="#000000" />
          <Bbutton text="Lean Left" color="#003893" />
          <span>
            <EllipsisVertical />
          </span>
        </div>
      </div>
      <Title order={4} my="lg">
        Nepal Narrowly Defeated by Bangladesh, 21 Runs Short in T20 World Cup
        2024
      </Title>
      <p>
        Nepal lost to Bangladesh by 21 runs in their final group-stage game of
        the 2024 T20 World Cup, finishing with one point. Nepal bowled out
        Bangladesh for 106, with Sandeep Lamichhane taking 2 wickets for 14
        runs.
      </p>
      <div className="flex justify-between my-2">
        <div className="flex gap-4">
          <p className="font-semibold text-lg">cricnepal.com</p>
          <p>2 hours ago</p>
        </div>
        <p className="underline">Read Full Article</p>
      </div>
    </section>
  );
}
