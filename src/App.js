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
import SriLankaHighlightsTour from "./pages/tours/cultural/SriLankaHighlightsTour";
import SpecialToursToSriLanka from "./pages/tours/cultural/SpecialToursToSriLanka";
import MiniTourPackages from "./pages/tours/cultural/MiniTourPackages";
import ExoticSriLanka from "./pages/tours/cultural/ExoticSriLanka";
import SriLankaAtLeisure from "./pages/tours/cultural/SriLankaAtLeisure";
import PearlOfTheIndianOcean from "./pages/tours/cultural/PearlOfTheIndianOcean";
import ExploreSriLanka from "./pages/tours/cultural/ExploreSriLanka";
import HillCountry from "./pages/tours/hillcountry/HillCountry";
import CultureHillCountryAndWildLifeTour from "./pages/tours/hillcountry/CultureHillCountryAndWildLifeTour";
import SriLankaHillCountryTour from "./pages/tours/hillcountry/SriLankaHillCountryTour";
import TourInTheHills from "./pages/tours/hillcountry/TourInTheHills";
import ExploreNature from "./pages/experience/exploreNature/ExploreNature";
import Kithulgala from "./pages/experience/exploreNature/Kithulgala";
import Knuckles from "./pages/experience/exploreNature/Knuckles";
import HortonPlains from "./pages/experience/exploreNature/HortonPlains";
import Sinharaja from "./pages/experience/exploreNature/Sinharaja";
import ExploreTheLocalCulture from "./pages/experience/exploreLocalCulture/ExploreTheLocalCulture";
import Anuradhapura from "./pages/experience/exploreLocalCulture/Anuradhapura";
import Polonnaruwa from "./pages/experience/exploreLocalCulture/Polonnaruwa";
import Sigiriya from "./pages/experience/exploreLocalCulture/Sigiriya";
import Dambulla from "./pages/experience/exploreLocalCulture/Dambulla";
import Kandy from "./pages/experience/exploreLocalCulture/Kandy";
import Galle from "./pages/experience/exploreLocalCulture/Galle";
import BeachesAndSunsets from "./pages/experience/beachesAndSunsets/BeachesAndSunsets";
import Negombo from "./pages/experience/beachesAndSunsets/Negombo";
import Kalpitiya from "./pages/experience/beachesAndSunsets/Kalpitiya";
import Kalutara from "./pages/experience/beachesAndSunsets/Kalutara";
import Bentota from "./pages/experience/beachesAndSunsets/Bentota";
import Hikkaduwa from "./pages/experience/beachesAndSunsets/Hikkaduwa";
import Unawatuna from "./pages/experience/beachesAndSunsets/Unawatuna";
import Koggala from "./pages/experience/beachesAndSunsets/Koggala";
import Tangalle from "./pages/experience/beachesAndSunsets/Tangalle";
import Mirissa from "./pages/experience/beachesAndSunsets/Mirissa";
import ArugamBay from "./pages/experience/beachesAndSunsets/ArugamBay";
import Pasikudah from "./pages/experience/beachesAndSunsets/Pasikudah";
import WildlifeAndAdventure from "./pages/experience/wildlifeAndAdventure/WildlifeAndAdventure";
import Bundala from "./pages/experience/wildlifeAndAdventure/BundalaNationalPark";
import GalOya from "./pages/experience/wildlifeAndAdventure/GalOyaNationalPark";
import Wilpattu from "./pages/experience/wildlifeAndAdventure/WilpattuNationalPark";
import Yala from "./pages/experience/wildlifeAndAdventure/YalaNationalPark";
import Udawalawe from "./pages/experience/wildlifeAndAdventure/UdawalawaNationalPark";
import Minneriya from "./pages/experience/wildlifeAndAdventure/MinneriyaNationalPark";
import Religious from "./pages/experience/religious/Religious";
import JosephVaz from "./pages/experience/religious/JosephVaz";
import LuxuryBeachResorts from "./pages/accommodation/LuxuryBeachResorts";
import BoutiqueHotels from "./pages/accommodation/BoutiqueHotels";
import EcoLodgesNatureStays from "./pages/accommodation/EcoLodgesNatureStays";
import VillasPrivateBungalows from "./pages/accommodation/VillasPrivateBungalows";
import BudgetAndCityHotels from "./pages/accommodation/BudgetAndCityHotels";
import FoodDrinks from "./pages/travelGuide/FoodDrinks";
import ThingsToDo from "./pages/travelGuide/ThingsToDo";
import MICE from "./pages/expertise/Mice";
import Transportation from "./pages/expertise/Transportation";
import AircraftHandling from "./pages/expertise/AircraftHandling";
import SportsTours from "./pages/expertise/SportsTours";
import Excursions from "./pages/expertise/Excursions";
import NatureAndAdventure from "./pages/expertise/NatureAndAdventure";
import Wellness from "./pages/expertise/Wellness";
import ShoreExcursion from "./pages/expertise/ShoreExcursion";
import PropertyBuyingAndSelling from "./pages/PropertyBuyingAndSelling";
import GemsAndJewellery from "./pages/expertise/GemsAndJewellery";
import Romantic from "./pages/tours/romantic/Romantic";
import WeddingSriLanka from "./pages/tours/romantic/WeddingSriLanka";
import HoneymoonTours from "./pages/tours/romantic/HoneymoonTours";
import RomanticEscape from "./pages/tours/romantic/RomanticEscape";
import AyurvedaWellness from "./pages/tours/ayurvedawellness/AyurvedaWellness";
import AyurvedicHealingRetreats from "./pages/tours/ayurvedawellness/AyurvedicHealingRetreats";
import Meditation from "./pages/tours/ayurvedawellness/Meditation";
import Yoga from "./pages/tours/ayurvedawellness/Yoga";
import Beach from "./pages/tours/beach/Beach";
import ExploreEnchantingSrilanka from "./pages/tours/beach/ExploreEnchantingSrilanka";
import BeachHoppingAdventures from "./pages/tours/beach/BeachHoppingAdventures";
import SunAndFunTuryaa from "./pages/tours/beach/SunAndFunTuryaa";
import SpecialInterestTours from "./pages/tours/specialinteresttours.js/SpecialInterestTours";
import WalkingTours from "./pages/tours/specialinteresttours.js/WalkingTours";
import CookingByColours from "./pages/tours/specialinteresttours.js/CookingByColours";
import BawaTours from "./pages/tours/specialinteresttours.js/BawaTours";
import FeminaTour from "./pages/tours/specialinteresttours.js/FeminaTour";
import SeatInCoachTours from "./pages/tours/SeatInCoachTours";
import RamayanaTrails from "./pages/tours/ramayanatrails/RamayanaTrails";
import NatureTours from "./pages/tours/natureTours/NatureTours";
import WildLifeTour from "./pages/tours/natureTours/WildLifeTour";
import CyclingTours from "./pages/tours/natureTours/CyclingTours";
import AdventureTours from "./pages/tours/natureTours/AdventureTours";
import WalkingTour from "./pages/tours/natureTours/WalkingTours";

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
                <Route path="/property-buying-and-selling" element={<PropertyBuyingAndSelling />} />

                {/* tours/cultural */}
                <Route path="/tours/cultural" element={<CulturalTours />} />
                <Route path="/tours/cultural/cultural-highlights-tour" element={<CulturalHighlightsTour />} />
                <Route path="/tours/cultural/sri-lanka-highlights-tour" element={<SriLankaHighlightsTour />} />
                <Route path="/tours/cultural/special-tours-to-sri-lanka" element={<SpecialToursToSriLanka />} />
                <Route path="/tours/cultural/mini-tour-packages" element={<MiniTourPackages />} />
                <Route path="/tours/cultural/exotic-sri-lanka" element={<ExoticSriLanka />} />
                <Route path="/tours/cultural/sri-lanka-at-leisure" element={<SriLankaAtLeisure />} />
                <Route path="/tours/cultural/pearl-of-the-indian-ocean" element={<PearlOfTheIndianOcean />} />
                <Route path="/tours/cultural/explore-sri-lanka" element={<ExploreSriLanka />} />

                {/* tours/hillcountry */}
                <Route path="/tours/hill-country" element={<HillCountry />} />
                <Route path="/tours/hill-country/culture-hill-country-and-wild-life-tour" element={<CultureHillCountryAndWildLifeTour />} />
                <Route path="/tours/hill-country/sri-lanka-hill-country-tour-3-days" element={<SriLankaHillCountryTour />} />
                <Route path="/tours/hill-country/tour-in-the-hills" element={<TourInTheHills />} />

                {/* tours/romantic */}
                <Route path="/tours/romantic" element={<Romantic />} />
                <Route path="/tours/romantic/wedding-in-sri-lanka" element={<WeddingSriLanka />} />
                <Route path="/tours/romantic/honeymoon-tours" element={<HoneymoonTours />} />
                <Route path="/tours/romantic/romantic-escape" element={<RomanticEscape />} />

                {/* tours/AyurvedaWellness */}
                <Route path="/tours/ayurveda-wellness" element={<AyurvedaWellness />} />
                <Route path="/tours/ayurveda-wellness/ayurvedic-healing-retreats" element={<AyurvedicHealingRetreats />} />
                <Route path="/tours/ayurveda-wellness/meditation" element={<Meditation />} />
                <Route path="/tours/ayurveda-wellness/yoga" element={<Yoga />} />

                {/* tours/beach */}
                <Route path="/tours/beach" element={<Beach />} />
                <Route path="/tours/beach/explore-enchanting-srilanka" element={<ExploreEnchantingSrilanka />} />
                <Route path="/tours/beach/beach-hopping-adventures" element={<BeachHoppingAdventures />} />
                <Route path="/tours/beach/sun-and-fun-at-turyaa-kalutara" element={<SunAndFunTuryaa />} />

                {/* tours/special-interest-tours */}
                <Route path="/tours/special-interest-tours" element={<SpecialInterestTours />} />
                <Route path="/tours/special-interest-tours/walking-tours" element={<WalkingTours />} />
                <Route path="/tours/special-interest-tours/bawa-tour" element={<BawaTours />} />
                <Route path="/tours/special-interest-tours/cooking-by-colours" element={<CookingByColours />} />
                <Route path="/tours/special-interest-tours/femina-tour" element={<FeminaTour />} />

                {/* tours/SeatInCoachTours */}
                <Route path="/tours/seat-in-coach-tours" element={<SeatInCoachTours />} />

                {/* tours/Ramayana Trails */}
                <Route path="/tours/ramayana-trails-in-sri-lanka" element={<RamayanaTrails />} />

                {/* tours/Nature Tours */}
                <Route path="/tours/nature-tours" element={<NatureTours />} />
                <Route path="/tours/nature-tours/wild-life-tour" element={<WildLifeTour />} />
                <Route path="/tours/nature-tours/cycling-tours" element={<CyclingTours />} />
                <Route path="/tours/nature-tours/adventure-tours" element={<AdventureTours />} />
                <Route path="/tours/nature-tours/walking-tours" element={<WalkingTour />} />

                {/* experience-sri-lanka */}
                <Route path="/experience-sri-lanka/explore-nature" element={<ExploreNature />} />
                <Route path="/experience-sri-lanka/explore-nature/knuckles" element={<Knuckles />} />
                <Route path="/experience-sri-lanka/explore-nature/kitulgala" element={<Kithulgala />} />
                <Route path="/experience-sri-lanka/explore-nature/horton-plains" element={<HortonPlains />} />
                <Route path="/experience-sri-lanka/explore-nature/sinharaja" element={<Sinharaja />} />

                <Route path="/experience-sri-lanka/heritage-culture" element={<ExploreTheLocalCulture />} />
                <Route path="/experience-sri-lanka/heritage-culture/anuradhapura" element={<Anuradhapura />} />
                <Route path="/experience-sri-lanka/heritage-culture/polonnaruwa" element={<Polonnaruwa />} />
                <Route path="/experience-sri-lanka/heritage-culture/sigiriya" element={<Sigiriya />} />
                <Route path="/experience-sri-lanka/heritage-culture/dambulla" element={<Dambulla />} />
                <Route path="/experience-sri-lanka/heritage-culture/kandy" element={<Kandy />} />
                <Route path="/experience-sri-lanka/heritage-culture/galle" element={<Galle />} />

                <Route path="/experience-sri-lanka/beaches-sunsets" element={<BeachesAndSunsets />} />
                <Route path="/experience-sri-lanka/beaches-sunsets/negombo" element={<Negombo />} />
                <Route path="/experience-sri-lanka/beaches-sunsets/kalpitiya" element={<Kalpitiya />} />
                <Route path="/experience-sri-lanka/beaches-sunsets/kalutara" element={<Kalutara />} />
                <Route path="/experience-sri-lanka/beaches-sunsets/bentota" element={<Bentota />} />
                <Route path="/experience-sri-lanka/beaches-sunsets/hikkaduwa" element={<Hikkaduwa />} />
                <Route path="/experience-sri-lanka/beaches-sunsets/unawatuna" element={<Unawatuna />} />
                <Route path="/experience-sri-lanka/beaches-sunsets/koggala" element={<Koggala />} />
                <Route path="/experience-sri-lanka/beaches-sunsets/tangalle" element={<Tangalle />} />
                <Route path="/experience-sri-lanka/beaches-sunsets/mirissa" element={<Mirissa />} />
                <Route path="/experience-sri-lanka/beaches-sunsets/arugam-bay" element={<ArugamBay />} />
                <Route path="/experience-sri-lanka/beaches-sunsets/pasikudah" element={<Pasikudah />} />

                <Route path="/experience-sri-lanka/wild-life-adventure" element={<WildlifeAndAdventure />} />
                <Route path="/experience-sri-lanka/wild-life-adventure/bundala-national-park" element={<Bundala />} />
                <Route path="/experience-sri-lanka/wild-life-adventure/gal-oya-national-park" element={<GalOya />} />
                <Route path="/experience-sri-lanka/wild-life-adventure/wilpattu-national-park" element={<Wilpattu />} />
                <Route path="/experience-sri-lanka/wild-life-adventure/yala-national-park" element={<Yala />} />
                <Route path="/experience-sri-lanka/wild-life-adventure/udawalawa-national-park" element={<Udawalawe />} />
                <Route path="/experience-sri-lanka/wild-life-adventure/minneriya-national-park" element={<Minneriya />} />

                <Route path="/experience-sri-lanka/religious" element={<Religious />} />
                <Route path="/experience-sri-lanka/religious/ramayana-trails" element={<RamayanaTrails />} />
                <Route path="/experience-sri-lanka/religious/st-joseph-vaz" element={<JosephVaz />} />


                {/* accommodation */}
                <Route path="/accommodation/luxury-beach-resorts" element={<LuxuryBeachResorts />} />
                <Route path="/accommodation/boutique-hotels" element={<BoutiqueHotels />} />
                <Route path="/accommodation/eco-lodges-nature-stays" element={<EcoLodgesNatureStays />} />
                <Route path="/accommodation/villas-private-bungalows" element={<VillasPrivateBungalows />} />
                <Route path="/accommodation/budget-city-hotels" element={<BudgetAndCityHotels />} />

                {/* Travel Guide */}
                <Route path="/travel-guide/food-drinks" element={<FoodDrinks />} />
                <Route path="/travel-guide/things-to-do" element={<ThingsToDo />} />

                {/* expertise */}
                <Route path="/expertise/mice" element={<MICE />} />
                <Route path="/expertise/transportation" element={<Transportation />} />
                <Route path="/expertise/aircraft-handling" element={<AircraftHandling />} />
                <Route path="/expertise/sports-tours" element={<SportsTours />} />
                <Route path="/expertise/excursions" element={<Excursions />} />
                <Route path="/expertise/nature-and-adventure" element={<NatureAndAdventure />} />
                <Route path="/expertise/wellness" element={<Wellness />} />
                <Route path="/expertise/shore-excursion" element={<ShoreExcursion />} />
                <Route path="/expertise/gems-and-jewellery" element={<GemsAndJewellery />} />

            </Routes>
            <Footer />
        </Router>
    );
}

export default App;
