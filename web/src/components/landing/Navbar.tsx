import { Link } from "react-router-dom";
import { headerLinks, navLinks } from "../../utils/navLinks";
import Bbutton from "../global/Bbutton";
import BInput from "../global/BInput";
import { Plus, Search } from 'lucide-react';
import { Divider, Image } from "@mantine/core";

export default function Navbar() {
  return (
    <div className="flex flex-col">

      <div className="flex gap-6 justify-center p-2 bg-black text-white">
        <p className="text-2xl font-semibold">
          See Every Side of Every News Story
        </p>

        <Bbutton
          text="Get Started"
          variant="outline"
          color="white"
        />
      </div>

      <div className="flex justify-between w-[80%] mx-auto items-center py-2 sticky z-10 top-0">
        <div className="flex items-center gap-8">
          <Image
            src={"/images/bodh-logo.png"}
            h={40}
          />
          <div className="flex gap-8">
            {
              navLinks.map((object) => (
                <Link to={object.link} key={object.id} className="text-xl font-medium">
                  {object.name}
                </Link>
              )
              )
            }
          </div>
        </div>

        <BInput
          placeholder="Search"
          icon={<Search />}
          size="md"
        />
      </div>

      <Divider />

      <div className="flex w-[80%] gap-6 mx-auto items-center py-3">
        {
          headerLinks.map((object) => (
            <Link to={object.link} key={object.id}>
              <section className="bg-black text-white px-3 py-1 rounded-2xl flex items-center gap-3">
                <span>
                  {object.name}
                </span>
                <Plus />
              </section>
            </Link>
          ))
        }
      </div>

    </div>
  )
}