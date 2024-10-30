import { Divider } from "@mantine/core";
import PublicLayout from "../../layout/PublicLayout";
import HeroSection from "../landing/HeroSection";
import PoliticalViews from "../landing/PoliticalViews";
import Entertainment from "../landing/Entertainment";
import Sports from "../landing/Sports";

export const LandingHeader = ({ text }: { text: string }) => {
  return (
    <>
      <p className="font-bold text-3xl mb-2">{text}</p>
      <Divider size="sm" color="black" />
    </>
  )
}

export default function LandingPage() {
  return (
    <div>
      <PublicLayout>
        <HeroSection />
        <PoliticalViews />
        <Entertainment />
        <Sports />
      </PublicLayout>
    </div>
  )
}