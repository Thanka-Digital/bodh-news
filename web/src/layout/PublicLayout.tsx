import Footer from "../components/landing/Footer";
import Navbar from "../components/landing/Navbar";

export default function PublicLayout({ children }: { children: React.ReactNode }) {
  return (
    <main>
      <Navbar />
      <div className="min-w-[80%] mx-auto">
        {children}
      </div>
      <Footer />
    </main>
  )
}