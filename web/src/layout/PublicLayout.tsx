import Footer from "../components/landing/Footer";
import Navbar from "../components/landing/Navbar";
import Subscribe from "../components/landing/Subscribe";

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main>
      <div className="w-[80%] mx-auto">{children}</div>
    </main>
  );
}
