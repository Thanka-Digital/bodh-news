import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "../components/pages/LandingPage";
import Navbar from "../components/landing/Navbar";
import Subscribe from "../components/landing/Subscribe";
import Footer from "../components/landing/Footer";

export default function BRoutes() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
      </Routes>
      <Subscribe />
      <Footer />
    </BrowserRouter>
  );
}
