import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";

import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsAndCondition from "./pages/TermsAndCondition";
import TourPackages from "./pages/TourPackages";
import Experience from "./pages/Experience";
import RentVehicle from "./pages/RentVehicle";
import Expertise from "./pages/Expertise";
import TravelGuide from "./pages/TravelGuide";
import Accommodation from "./pages/Accommodation";
import CulturalTours from "./pages/tours/cultural/CulturalTours";
import CulturalHighlightsTour from "./pages/tours/cultural/CulturalHighlightsTour";

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>

                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/terms-condition" element={<TermsAndCondition />} />
                <Route path="/privacy-policy" element={<PrivacyPolicy />} />

                <Route path="/tour-packages" element={<TourPackages />} />
                <Route path="/experience-sri-lanka" element={<Experience />} />
                <Route path="/rent-vehicle" element={<RentVehicle />} />
                <Route path="/expertise" element={<Expertise />} />
                <Route path="/travel-guide" element={<TravelGuide />} />
                <Route path="/accommodation" element={<Accommodation />} />

                {/* tours */}
                <Route path="/tours/cultural" element={<CulturalTours />} />

                <Route path="/tours/cultural/cultural-highlights-tour" element={<CulturalHighlightsTour />} />
                
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;
