import { Link } from "react-router-dom"
import footer from "../../utils/footer"
import { Divider } from "@mantine/core"

const FooterHeader = ({ children }: { children: React.ReactNode }) => {
  return (
    <p className="font-semibold text-xl">
      {children}
    </p>
  )
}

export default function Footer() {
  return (
    <div className="flex flex-col bg-black text-white">

      <div className="flex justify-between mx-auto w-[80%] py-8">
        <div className="flex flex-col gap-4 w-1/4">
          <FooterHeader>
            Bodh News
          </FooterHeader>
          <p>
            Stay updated with the latest news from a wide range of trusted publications. We provide direct links to the original articles, ensuring you have access to diverse perspectives and reliable information on current events.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <FooterHeader>
            Tags
          </FooterHeader>
          <div className="grid grid-cols-3 gap-2">
            {
              footer.Tags.map((object, index) => (
                <Link to={object.link} key={index} className="border-2 rounded-3xl px-3 py-1">
                  {object.name}
                </Link>
              ))
            }
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <FooterHeader>
            Easy Links
          </FooterHeader>
          {
            footer.EasyLinks.map((object, index) => (
              <Link to={object.link} key={index}>
                {object.name}
              </Link>
            ))
          }
        </div>
      </div>

      <div className="flex flex-col gap-2 py-4">
        <Divider />
        <p className="text-center">@2024. All Rights Reserved</p>
      </div>

    </div>
  )
}