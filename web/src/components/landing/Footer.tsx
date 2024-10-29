

const FooterHeader = ({ children }: { children: React.ReactNode }) => {
  return (
    <p className="font-semibold text-xl">
      {children}
    </p>
  )
}

export default function Footer() {
  return (
    <div className="flex justify-between">

      <div className="flex flex-col gap-4">
        <FooterHeader>
          Bodh News
        </FooterHeader>
        <p>
          Stay updated with the latest news from a wide range of trusted publications. We provide direct links to the original articles, ensuring you have access to diverse perspectives and reliable information on current events.
        </p>
      </div>

      <div className="flex flex-col gap-4">
        <FooterHeader>
          Bodh News
        </FooterHeader>
        <p>
          Stay updated with the latest news from a wide range of trusted publications. We provide direct links to the original articles, ensuring you have access to diverse perspectives and reliable information on current events.
        </p>
      </div>

      <div className="flex flex-col gap-4">
        <FooterHeader>
          Bodh News
        </FooterHeader>
        <p>
          Stay updated with the latest news from a wide range of trusted publications. We provide direct links to the original articles, ensuring you have access to diverse perspectives and reliable information on current events.
        </p>
      </div>

    </div>
  )
}