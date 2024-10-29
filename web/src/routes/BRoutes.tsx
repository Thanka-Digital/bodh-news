import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "../components/pages/LandingPage";

export default function BRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </BrowserRouter>
  )
}