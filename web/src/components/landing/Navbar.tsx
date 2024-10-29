import { Link } from "react-router-dom";
import navLinks from "../../utils/navLinks";
import Bbutton from "../global/Bbutton";
import BInput from "../global/BInput";

export default function Navbar() {
  return (
    <div>

      <div className="flex flex-col">

        <div className="flex gap-4 items-center justify-center p-2 bg-black text-white">
          <p className="text-xl font-semibold">
            See Every Side of Every News Story
          </p>

          <Bbutton
            text="Get Started"
            variant="outline"
          />
        </div>

        <div className="flex justify-between min-w-[80%] mx-auto items-center py-2 sticky">
          <div className="flex gap-8">
            {
              navLinks.map((object) => (
                <Link to={object.link} key={object.id} className="text-lg font-medium">
                  {object.name}
                </Link>
              )
              )
            }
          </div>
          <BInput
            placeholder="Search"
          />
        </div>

        <hr />
      </div>

    </div>
  )
}