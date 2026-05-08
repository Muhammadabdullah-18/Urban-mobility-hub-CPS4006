import { Route, Routes, useLocation } from "react-router-dom";
import Home from "@/pages/Home";
import TravelModes from "@/pages/Travel-modes";
import FareEstimator from "@/pages//Fare-estimiator";
import { Navbar } from "./components/navbar";
import { Footer } from "./components/footer";
import { useEffect } from "react";
import JourneyPlanner from "./pages/JourneyPlanner";
import NearbyStops from "./pages/NearbyStops";
import Bikes from "./pages/Bikes";
import PageLoader from "./components/PageLoader";
import ServiceUpdatesToast from "./pages/ServiceUpdates";
import { Toaster } from "react-hot-toast";

function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [pathname]);
  return (
    <>
      <Navbar />
      <PageLoader>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/travel-modes" element={<TravelModes />} />
          <Route path="/fare-estimator" element={<FareEstimator />} />
          <Route path="/journey-planner" element={<JourneyPlanner />} />
          <Route path="/stops" element={<NearbyStops />} />
          <Route path="/bikes" element={<Bikes />} />
        </Routes>
      </PageLoader>
      <Footer />
      <ServiceUpdatesToast />
      <Toaster position="top-right" reverseOrder={false} />
    </>
  );
}

export default App;
