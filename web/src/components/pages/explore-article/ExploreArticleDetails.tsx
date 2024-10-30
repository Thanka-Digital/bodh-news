import { Flex, Group, Image, Tabs, TabsList, Text, Title } from "@mantine/core";
import React from "react";
import PublicLayout from "../../../layout/PublicLayout";
import ArticleCard from "../../card/ArticleCard";
import Bbutton from "../../global/Bbutton";
import RelatedNewsCard from "../../card/RelatedNewsCard";

export default function ExploreArticleDetails() {
  return (
    <main className="bg-[#F9F9F9]">
      <section className="h-64 bg-black flex flex-col items-center justify-center">
        <div className="max-w-[70%]">
          <p className="text-slate-200 text-lg">
            Home/Sports/Icc World Cup Nepal Men News
          </p>
          <Title order={1} className="text-white">
            Nepal falls short by 21 runs against Bangladesh in T20 World Cup
            2024
          </Title>
        </div>
      </section>

      <PublicLayout>
        <section className="flex flex-col gap-6 my-12 ">
          <Image src="images/npb.png" />
          <p className="text-justify">
            Nepal lost to Bangladesh by 21 runs in their final group-stage game
            of the 2024 T20 World Cup, finishing with one point. Nepal bowled
            out Bangladesh for 106, with Sandeep Lamichhane taking 2 wickets for
            14 runs. However, Nepal's batting struggled, collapsing to 85 all
            out in 19.2 overs. Tanzim Hasan Sakib (4-2-7-4) and Mustafizur
            Rahman (4-1-7-3) led Bangladesh's bowling attack. Despite a 51-run
            partnership between Dipendra Singh Airee (25) and Kushal Malla (27),
            Nepal couldn't chase the target, extending their losing streak
            against Test-playing nations to 13 matches.
          </p>
        </section>

        <section className="flex flex-col gap-8">
          <Title order={2}>
            For the In-Depth Coverage of Nepal's T20 World Cup Performance
            Against Bangladesh , Click on the Links Below :
          </Title>
          <Tabs defaultValue="All" m={0} p={0}>
            <Tabs.List justify="space-around">
              <Tabs.Tab value="11 Articles">
                <p className="text-lg font-bold">11 Articles</p>
              </Tabs.Tab>
              <Tabs.Tab value="All">
                <p className="text-xl font-bold">All</p>
              </Tabs.Tab>
              <Tabs.Tab value="Left">
                <p className="text-xl font-bold">Left</p>
              </Tabs.Tab>
              <Tabs.Tab value="Center">
                <p className="text-xl font-bold">Center</p>
              </Tabs.Tab>
              <Tabs.Tab value="Right">
                <p className="text-xl font-bold">Right</p>
              </Tabs.Tab>
            </Tabs.List>

            <Tabs.Panel value="11 Articles">11 articles tab content</Tabs.Panel>

            <Tabs.Panel value="All" my={16}>
              <section className="flex flex-col gap-12">
                <ArticleCard />
                <ArticleCard />
                <ArticleCard />
                <ArticleCard />
              </section>
            </Tabs.Panel>

            <Tabs.Panel value="Left">
              <p>Left tab content</p>
            </Tabs.Panel>
            <Tabs.Panel value="Center">center tab content</Tabs.Panel>
            <Tabs.Panel value="Right">right tab content</Tabs.Panel>
          </Tabs>

          <Bbutton text="Show More Articles" />
        </section>

        <section className="flex gap-6 my-14">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col border bg-white p-4">
              <Title order={2}>Distribution Of Sources</Title>
              <div className="flex justify-between mt-4">
                <div className="bg-red-50">
                  <div className="flex max-w-52 flex-wrap gap-4 justify-center items-center p-2">
                    <img
                      src="images/123.jpg"
                      alt="article image"
                      className="w-16 h-16 rounded-full"
                    />
                    <img
                      src="images/123.jpg"
                      alt="article image"
                      className="w-16 h-16 rounded-full"
                    />
                    <img
                      src="images/123.jpg"
                      alt="article image"
                      className="w-16 h-16 rounded-full"
                    />
                    <img
                      src="images/123.jpg"
                      alt="article image"
                      className="w-16 h-16 rounded-full"
                    />
                    <img
                      src="images/123.jpg"
                      alt="article image"
                      className="w-16 h-16 rounded-full"
                    />
                    <img
                      src="images/123.jpg"
                      alt="article image"
                      className="w-16 h-16 rounded-full"
                    />
                    <img
                      src="images/123.jpg"
                      alt="article image"
                      className="w-16 h-16 rounded-full"
                    />
                  </div>
                  <div className="h-8 bg-red-500 flex justify-center items-center">
                    <p className="text-center text-white">Left 43%</p>
                  </div>
                </div>

                <div className="">
                  <div className="flex max-w-52 flex-wrap gap-4 justify-center items-center p-2">
                    <img
                      src="images/123.jpg"
                      alt="article image"
                      className="w-16 h-16 rounded-full"
                    />
                    <img
                      src="images/123.jpg"
                      alt="article image"
                      className="w-16 h-16 rounded-full"
                    />
                    <img
                      src="images/123.jpg"
                      alt="article image"
                      className="w-16 h-16 rounded-full"
                    />
                    <img
                      src="images/123.jpg"
                      alt="article image"
                      className="w-16 h-16 rounded-full"
                    />
                    <img
                      src="images/123.jpg"
                      alt="article image"
                      className="w-16 h-16 rounded-full"
                    />
                    <img
                      src="images/123.jpg"
                      alt="article image"
                      className="w-16 h-16 rounded-full"
                    />
                    <img
                      src="images/123.jpg"
                      alt="article image"
                      className="w-16 h-16 rounded-full"
                    />
                  </div>
                  <div className="h-8 flex bg-gray-200 justify-center items-center">
                    <p className="text-center text-black">Center 40%</p>
                  </div>
                </div>

                <div className="bg-slate-100">
                  <div className="flex max-w-52 flex-wrap gap-4 justify-center items-center p-2">
                    <img
                      src="images/123.jpg"
                      alt="article image"
                      className="w-16 h-16 rounded-full"
                    />
                    <img
                      src="images/123.jpg"
                      alt="article image"
                      className="w-16 h-16 rounded-full"
                    />
                    <img
                      src="images/123.jpg"
                      alt="article image"
                      className="w-16 h-16 rounded-full"
                    />
                    <img
                      src="images/123.jpg"
                      alt="article image"
                      className="w-16 h-16 rounded-full"
                    />
                    <img
                      src="images/123.jpg"
                      alt="article image"
                      className="w-16 h-16 rounded-full"
                    />
                    <img
                      src="images/123.jpg"
                      alt="article image"
                      className="w-16 h-16 rounded-full"
                    />
                    <img
                      src="images/123.jpg"
                      alt="article image"
                      className="w-16 h-16 rounded-full"
                    />
                  </div>
                  <div className="h-8 flex bg-blue-500 justify-center items-center">
                    <p className="text-center text-white">Right 40%</p>
                  </div>
                </div>
              </div>
              <div className="mt-2">
                <p className="font-semibold">
                  43% of the sources have a left-leaning perspective, 40% are
                  neutral or centrist, and 17% lean to the right.
                </p>
              </div>
            </div>

            <div className="flex flex-col p-4 bg-white border gap-4">
              <Title order={2}>News Coverage Information</Title>
              <div className="flex flex-col gap-3">
                <Group justify="space-between">
                  <Text fw={600}>Left Leaning</Text>
                  <Text fw={600}>5</Text>
                </Group>
                <Group justify="space-between">
                  <Text fw={600}>Right Leaning</Text>
                  <Text fw={600}>4</Text>
                </Group>
                <Group justify="space-between">
                  <Text fw={600}>Center/Neutral</Text>
                  <Text fw={600}>2</Text>
                </Group>
                <Group justify="space-between">
                  <Text fw={600}>Most Recent Updates</Text>
                  <Text fw={600}>1 hour ago</Text>
                </Group>
              </div>
            </div>
          </div>

          <div className="min-w-64 bg-white p-4 border flex-1">
            <Title order={2}>Trending Topics</Title>
            <Flex direction="column" gap={20} wrap="wrap" mt={20}>
              <Text fw={600}>#Prime Minister Kp Oli</Text>
              <Text fw={600}>#Nepali Police</Text>
              <Text fw={600}>#Weather</Text>
              <Text fw={600}>#SAFF Women Football</Text>
              <Text fw={600}>#Tihar Special</Text>
              <Text fw={600}>#Trade Market</Text>
              <Text fw={600}>#Mountain</Text>
              <Text fw={600}>#Prime Minister Kp Oli</Text>
              <Text fw={600}>#Nepali Police</Text>
              <Text fw={600}>#Weather</Text>
              <Text fw={600}>#SAFF Women Football</Text>
              <Text fw={600}>#Tihar Special</Text>
              <Text fw={600}>#Trade Market</Text>
              <Text fw={600}>#Mountain</Text>
            </Flex>
          </div>
        </section>
        <section className=" my-14">
          <Title order={3} my={4}>
            Related News
          </Title>
          <Flex justify="space-between" gap={20}>
            <RelatedNewsCard />
            <RelatedNewsCard />
            <RelatedNewsCard />
          </Flex>
        </section>
      </PublicLayout>
    </main>
  );
}
