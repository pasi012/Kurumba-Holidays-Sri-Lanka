import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useRef } from "react";

import { useNavigate } from "react-router-dom";

import aboutHero from "../../../assets/kumana_park.jpg";

import dhamma from "../../../assets/kumana_park.jpg";
import sigiriya from "../../../assets/sathmahala.jpg";
import kandy from "../../../assets/baer.jpg";
import temple from "../../../assets/tea.jpg";

import related1 from "../../../assets/Scenic-train-ride.jpg";
import related2 from "../../../assets/train-sri-lanka.jpg";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

function CultureHillCountryAndWildLifeTour() {

    const swiperRef = useRef(null);

    const navigate = useNavigate();

    const images = [dhamma, sigiriya, kandy, temple];

    const [selectedImage, setSelectedImage] = useState(images[0]);

    const [day1, setDay1] = useState(true);
    const [day2, setDay2] = useState(false);
    const [day3, setDay3] = useState(false);
    const [day4, setDay4] = useState(false);
    const [day5, setDay5] = useState(false);
    const [day6, setDay6] = useState(false);
    const [day7, setDay7] = useState(false);
    const [day8, setDay8] = useState(false);
    const [day9, setDay9] = useState(false);

    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
    }, []);

    return (
        <div className="w-full overflow-hidden">

            {/* ================= HERO ================= */}
            <section className="relative h-[40vh] w-full">
                <div
                    className="absolute inset-0 bg-fill bg-center"
                    style={{ backgroundImage: `url(${aboutHero})` }}
                />
                <div className="absolute inset-0 bg-black/60" />

                <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white">
                    <h1
                        data-aos="fade-up"
                        className="text-3xl sm:text-4xl md:text-5xl lg:text-4xl font-extrabold leading-tight"
                    >
                        Culture, Hill Country And Wild Life Tour
                    </h1>
                    <p
                        data-aos="fade-up"
                        data-aos-delay="150"
                        className="mt-4 sm:mt-6 max-w-full sm:max-w-2xl md:max-w-3xl text-sm sm:text-base md:text-lg"
                    >
                        Where Sri Lanka’s heart meets the hills.
                    </p>
                </div>
            </section>

            {/* ================= CULTURAL HIGHLIGHTS ================= */}
            <section className="bg-white -py-2">
                <div className="mx-auto max-w-7xl px-6 text-center">

                    <p
                        data-aos="fade-up"
                        data-aos-delay="150"
                        className="mx-auto mt-6 max-w-4xl text-gray-600 leading-relaxed"
                    >
                        Our, special Sri Lanka tours and travels, offers you the chance to appreciate just how beautiful and diverse the tropical island is. Pay visits to iconic World Heritage Sites steeped in history and experience the rich sense of culture that pervades local communities. Enjoy intimate mountainside getaways blanketed in lush greenery, and safaris at famed national parks home to thriving wildlife.
                    </p>

                    {/* Duration Bar */}
                    <div
                        data-aos="fade-up"
                        data-aos-delay="250"
                        className="mx-auto mt-10 flex max-w-4xl items-center justify-center rounded-md bg-gradient-to-r from-[#0A3A5E] to-[#1C6EA4] py-5 text-white"
                    >
                        <div className="flex items-center gap-4">
                            <span className="text-3xl">📅</span>
                            <div className="text-left">
                                <p className="text-sm uppercase tracking-widest">Duration</p>
                                <p className="text-xl font-bold">09 Days / 08 Nights</p>
                            </div>
                        </div>
                    </div>

                    {/* Main Image */}
                    <div
                        data-aos="zoom-in"
                        data-aos-delay="300"
                        className="mx-auto mt-10 overflow-hidden rounded-xl shadow-xl"
                    >
                        <img
                            src={selectedImage}
                            alt="Selected Tour"
                            className="h-[420px] w-full object-fill transition duration-500"
                        />
                    </div>

                    {/* Thumbnail Gallery */}
                    <div
                        data-aos="fade-up"
                        data-aos-delay="400"
                        className="mx-auto mt-8 grid max-w-5xl grid-cols-2 gap-4 sm:grid-cols-4"
                    >
                        {images.map((img, index) => (
                            <img
                                key={index}
                                src={img}
                                onClick={() => setSelectedImage(img)}
                                className={`h-28 w-full cursor-pointer rounded-lg object-cover transition-all duration-300 
                                hover:scale-105
                                ${selectedImage === img ? "ring-4 ring-[#0A3A5E]" : "opacity-70"}
                            `}
                            />
                        ))}
                    </div>

                </div>
            </section>

            {/* ================= TOUR ITINERARY ================= */}
            <section className="bg-gray-50 py-10">
                <div className="mx-auto max-w-6xl px-6">

                    <h2
                        data-aos="fade-up"
                        className="text-center text-3xl sm:text-4xl md:text-5xl lg:text-4xl font-extrabold leading-tight"
                    >
                        Tour Itinerary
                    </h2>

                    <div className="mt-12 space-y-6">

                        {/* ================= DAY 1 ================= */}
                        <div data-aos="fade-up" className="overflow-hidden rounded-lg border bg-white shadow">
                            <button
                                onClick={() => setDay1(!day1)}
                                className="flex w-full items-center justify-between bg-gray-100 px-6 py-5 text-left font-semibold text-[#0A3A5E]"
                            >
                                <span>Day 01 - Airport or Beach Hotel | Pinnawala | Kandalama</span>
                                <span>{day1 ? "−" : "+"}</span>
                            </button>

                            {day1 && (
                                <div className="space-y-4 px-6 py-6 text-gray-700 leading-relaxed">
                                    <p>
                                        Pick up from the Airport or from the Beach hotel in Negombo or Ahungalla.
                                    </p>

                                    <p>
                                        Thereafter transfer to Pinnawala.
                                    </p>

                                    <p>
                                        Get the chance to interact with some gentle giants at the Pinnawala Elephant Orphanage which sprawls across a 25 acre property. First established in the year 1975 to rehabilitate and provide care to injured and orphaned elephants, it has since expanded to house a herd of 70 jumbos. The highlight of the visit, of course, will be the daily bath sessions which the elephants enjoy twice a day down by the river.
                                    </p>

                                    <p>
                                        Thereafter transfer to Kandalama.
                                        Savour a delectable dinner at a hotel in Kandalama.
                                    </p>

                                    <p className="font-semibold">Overnight stay in Kandalama</p>

                                </div>
                            )}
                        </div>

                        {/* ================= DAY 2 ================= */}
                        <div data-aos="fade-up" data-aos-delay="150" className="overflow-hidden rounded-lg border bg-white shadow">
                            <button
                                onClick={() => setDay2(!day2)}
                                className="flex w-full items-center justify-between bg-gray-100 px-6 py-5 text-left font-semibold text-[#0A3A5E]"
                            >
                                <span>Day 02 - Kandalama | Anuradhapura | Mihintale | Kandalama</span>
                                <span>{day2 ? "−" : "+"}</span>
                            </button>

                            {day2 && (
                                <div className="space-y-4 px-6 py-6 text-gray-700 leading-relaxed">
                                    <p>
                                        Commanding a rich heritage, Anuradhapura is one of the greatest and oldest civilizations in the world spanning over 1,300 years in its peak. Take in ruins of ancient palaces, temples and more at the very first capital of the country.
                                    </p>

                                    <p>
                                        Transfer to Mihintale.
                                    </p>

                                    <p>
                                        In sacred city of Anuradhapura lies the cradle of Buddhism in Sri Lanka, as the stone carvings and unending stairways proclaim a legacy which hinges the philosophy preached by the Lord Buddha.
                                    </p>

                                    <p>
                                        Savour a delectable dinner at a hotel in Kandalama.
                                    </p>

                                    <p className="font-semibold">Overnight stay in Kandalama.</p>

                                </div>
                            )}
                        </div>

                        {/* ================= DAY 3 ================= */}
                        <div
                            data-aos="fade-up"
                            data-aos-delay="300"
                            className="overflow-hidden rounded-lg border bg-white shadow"
                        >
                            <button
                                onClick={() => setDay3(!day3)}
                                className="flex w-full items-center justify-between bg-gray-100 px-6 py-5 text-left font-semibold text-[#0A3A5E]"
                            >
                                <span>Day 03 - Kandalama | Sigiriya | Polonnaruwa | Kandalama</span>
                                <span>{day3 ? "−" : "+"}</span>
                            </button>

                            {day3 && (
                                <div className="space-y-5 px-6 py-6 text-gray-700 leading-relaxed">

                                    <p>
                                        The fifth-century rock citadel of King Kashyapa and iconic World Heritage Site - Sigiriya – does not only boast of ancient Sri Lankan engineering & urban planning supremacy but also acclaims to be one of the finest monuments to ancient arts and culture.
                                    </p>

                                    <p>
                                        Thereafter, transfer to Polonnaruwa.
                                    </p>

                                    <p>
                                        The city of Polonnaruwa offers a glimpse into the island’s ancient culture and heritage blended with religious beliefs. Wander around the World Heritage Sites taking in various stupas, reclining Buddha statues and more.
                                    </p>

                                    <p>
                                        Savour a delectable dinner at a hotel in Kandalama.
                                    </p>

                                    <p className="font-semibold">Overnight stay in Kandalama.</p>

                                </div>
                            )}
                        </div>

                        {/* ================= DAY 4 ================= */}
                        <div
                            data-aos="fade-up"
                            data-aos-delay="400"
                            className="overflow-hidden rounded-lg border bg-white shadow"
                        >
                            <button
                                onClick={() => setDay4(!day4)}
                                className="flex w-full items-center justify-between bg-gray-100 px-6 py-5 text-left font-semibold text-[#0A3A5E]"
                            >
                                <span>Day 04 - Kandalama | Dambulla | Matale | Kandy</span>
                                <span>{day4 ? "−" : "+"}</span>
                            </button>

                            {day4 && (
                                <div className="space-y-5 px-6 py-6 text-gray-700 leading-relaxed">

                                    <p>
                                        An iconic attraction in Sri Lanka, the Dambulla Rock Temple also known as the Golden Temple houses ancient relics, paintings and over 150 Buddha statues spanning over five caverns which make up the cave complex.
                                    </p>

                                    <p>
                                        Thereafter transfer to Matale.
                                    </p>

                                    <p>
                                        An agricultural zone in the Central Province, Matale seldom drops off the maps due to its remarkable contribution through flagship crops ranging from tea, rubber & vegetables to spices; today, this town takes immense pride in its story woven around spices.
                                    </p>

                                    <p>
                                        Savour a delectable dinner at a hotel in Kandy.
                                    </p>

                                    <p className="font-semibold">Overnight stay in kandy.</p>

                                </div>
                            )}
                        </div>

                        {/* ================= DAY 5 ================= */}
                        <div
                            data-aos="fade-up"
                            data-aos-delay="500"
                            className="overflow-hidden rounded-lg border bg-white shadow"
                        >
                            <button
                                onClick={() => setDay5(!day5)}
                                className="flex w-full items-center justify-between bg-gray-100 px-6 py-5 text-left font-semibold text-[#0A3A5E]"
                            >
                                <span>Day 05 - Kandy | Peradeniya | Kandy</span>
                                <span>{day5 ? "−" : "+"}</span>
                            </button>

                            {day5 && (
                                <div className="space-y-5 px-6 py-6 text-gray-700 leading-relaxed">

                                    <p>
                                        Developed as a pleasure garden under island royalty and later taken over by the British, the Royal Botanical Gardens of Peradeniya offers a blissful escape from the hustle and bustle of the streets. Manicured lawns and well-tended greenery intercepted with lovely blooms make space a welcoming place to relax.
                                    </p>

                                    <p>
                                        Do a city tour of Kandy
                                    </p>

                                    <p>
                                        Visit Kandy, a picturesque hill city and immerse yourself in the vibrant culture, sense of rich history, heritage and the unique traditions that pervade it. Take in the Sri Dalada Maligawa, the Temple of the Sacred Tooth Relic of the Lord Buddha and learn more about the legacies left by the kings of the old.
                                    </p>

                                    <p>
                                        Savour a delectable dinner at a hotel in Kandy.
                                    </p>

                                    <p className="font-semibold">Overnight stay in Kandy.</p>

                                </div>
                            )}
                        </div>

                        {/* ================= DAY 6 ================= */}
                        <div
                            data-aos="fade-up"
                            data-aos-delay="600"
                            className="overflow-hidden rounded-lg border bg-white shadow"
                        >
                            <button
                                onClick={() => setDay6(!day6)}
                                className="flex w-full items-center justify-between bg-gray-100 px-6 py-5 text-left font-semibold text-[#0A3A5E]"
                            >
                                <span>Day 06 - Kandy | Nuwara Eliya | Kandapola</span>
                                <span>{day6 ? "−" : "+"}</span>
                            </button>

                            {day6 && (
                                <div className="space-y-5 px-6 py-6 text-gray-700 leading-relaxed">

                                    <p>
                                        Replete with misty winding roads, slopes blanketed by lush green carpets of tea bushes and invigorating fresh mountain air, the charming little town of Nuwara Eliya offers visitors an intimate getaway experience. Enjoy hikes among grassy slopes and valleys which open up to captivating vistas of a picturesque countryside hamlet.
                                    </p>

                                    <p>
                                        Savour a delectable dinner at a hotel in Kandapola.
                                    </p>

                                    <p className="font-semibold">
                                        Overnight stay in Kandapola.
                                    </p>

                                </div>
                            )}
                        </div>

                        {/* ================= DAY 7 ================= */}
                        <div
                            data-aos="fade-up"
                            data-aos-delay="700"
                            className="overflow-hidden rounded-lg border bg-white shadow"
                        >
                            <button
                                onClick={() => setDay7(!day7)}
                                className="flex w-full items-center justify-between bg-gray-100 px-6 py-5 text-left font-semibold text-[#0A3A5E]"
                            >
                                <span>Day 07 - Kandapola | Horton Plains | Kandapola</span>
                                <span>{day7 ? "−" : "+"}</span>
                            </button>

                            {day7 && (
                                <div className="space-y-5 px-6 py-6 text-gray-700 leading-relaxed">

                                    <p>
                                        Breakfast at hotel
                                    </p>

                                    <p>
                                        Thereafter transfer to Horton Plains.
                                    </p>

                                    <p>
                                        Visit Horton Plains - a UNESCO World Heritage Site & Eco-tourism hideout in the heart of the isle, Endless stretches of green pastures marks one of the healthiest wet montane evergreen forests in Sri Lanka. With an altitude above 7,000 feet, the plateau sweeps to a robust 3,169 hectares sheltering flora and fauna varieties that may be found nowhere else on earth. Take in the majestic Baker’s Falls, gushing down over jagged rock precipices. Trek through the frost covered grass while breathing in fresh air. You may even gaze down World's End, a head-spinning 3,700 feet drop towards the Southern end. Or drive carefully through herds of sambar deer, shy to human touch & birdlife chirping across the plains. If you're lucky enough you may be greeted by the sights of a grunting wild boar, a pouncing fishing cat, otters or even the 'Spotted-Ghost that haunts the plains' - the Sri Lankan Leopard!
                                    </p>

                                    <p>
                                        On completion transfer to Kandapola.
                                    </p>

                                    <p>
                                        Savour a delectable dinner at a hotel in Kandapola.
                                    </p>

                                    <p className="font-semibold">
                                        Overnight stay in Kandapola.
                                    </p>

                                </div>
                            )}
                        </div>

                        {/* ================= DAY 8 ================= */}
                        <div
                            data-aos="fade-up"
                            data-aos-delay="800"
                            className="overflow-hidden rounded-lg border bg-white shadow"
                        >
                            <button
                                onClick={() => setDay8(!day8)}
                                className="flex w-full items-center justify-between bg-gray-100 px-6 py-5 text-left font-semibold text-[#0A3A5E]"
                            >
                                <span>Day 08 - Kandapola | Yala</span>
                                <span>{day8 ? "−" : "+"}</span>
                            </button>

                            {day8 && (
                                <div className="space-y-5 px-6 py-6 text-gray-700 leading-relaxed">

                                    <p>
                                        Breakfast at the hotel.
                                    </p>

                                    <p>
                                        Thereafter transfer to Yala.
                                    </p>

                                    <p>
                                        Set off on a safari to explore Yala National Park by jeep. Sprawling across an area of 1,259 kilometres, Yala – home to rugged terrains including dunes, grass and shrub lands and water holes, has long since is the second largest nature reserve in Sri Lanka. The park is home to large herds of elephant, sloth bear, spotted deer, jackals and to an array of bird species. It’s also one of the best spots to catch a glimpse of the elusive Sri Lankan leopard. Here the cries of the wilderness and you bask under the warmth of the tropical sun as you traverse the jungle.
                                    </p>

                                    <p>
                                        Savour a delectable dinner at a hotel in Yala.
                                    </p>

                                    <p className="font-semibold">
                                        Overnight stay in Yala.
                                    </p>

                                </div>
                            )}
                        </div>

                        {/* ================= DAY 9 ================= */}
                        <div
                            data-aos="fade-up"
                            data-aos-delay="900"
                            className="overflow-hidden rounded-lg border bg-white shadow"
                        >
                            <button
                                onClick={() => setDay9(!day9)}
                                className="flex w-full items-center justify-between bg-gray-100 px-6 py-5 text-left font-semibold text-[#0A3A5E]"
                            >
                                <span>Day 09 - Yala | Galle | Airport or Beach Hotel</span>
                                <span>{day9 ? "−" : "+"}</span>
                            </button>

                            {day9 && (
                                <div className="space-y-5 px-6 py-6 text-gray-700 leading-relaxed">

                                    <p>
                                        Breakfast at the hotel.
                                    </p>

                                    <p>
                                        Thereafter transfer to Galle.
                                    </p>

                                    <p>
                                        Galle is among the most visited cities located on the Southern Coast of the island. The Dutch Fort offers an interesting blend of classic Dutch period architecture and tropical settings, a trademark of a quintessential island experience. Walk along the cobbled streets of the fort, and take in chic cafes, restaurants, museums and more.
                                    </p>

                                    <p>
                                        Check out bastions preserved up to date showcasing evidence of a heritage preserved for more than three and a half centuries, after which you can catch a spectacular sunset from the ramparts overlooking the Indian ocean. Walk clockwise within the fort to observe the 'old gate' carrying the British coat of arms. Flanking the old gate is the Zwart bastion and the lighthouse right next to the Point Utrecht Bastion.
                                    </p>

                                    <p>
                                        On completion, transfer to the airport for departure or to a beach hotel.
                                    </p>

                                </div>
                            )}
                        </div>

                    </div>
                </div>
            </section>

            {/* ================= ROUTE MAP ================= */}
            <section className="bg-white -py-2">
                <div className="mx-auto max-w-7xl px-6">

                    <div
                        className="ch-left mx-auto max-w-5xl"
                        data-aos="fade-right"
                    >
                        <h1
                            data-aos="fade-up"
                            className="mb-6 text-center text-3xl sm:text-4xl md:text-5xl lg:text-4xl font-extrabold leading-tight"
                        >
                            Route
                        </h1>

                        <div className="flex flex-col lg:flex-row gap-6">

                            <div className="map-container flex-1 overflow-hidden rounded-xl shadow-xl border">
                                <iframe
                                    width="100%"
                                    height="450"
                                    style={{ border: 0 }}
                                    loading="lazy"
                                    allowFullScreen
                                    src="https://www.google.com/maps/embed/v1/directions?key=AIzaSyBjUk_Sn0lthNO_cpZO9n5hI1lmZPRUB0E
                                    &origin=Bandaranaike+International+Airport+Sri+Lanka
                                    &destination=Bandaranaike+International+Airport+Sri+Lanka
                                    &waypoints=
                                    Pinnawala+Elephant+Orphanage|
                                    Kandalama+Sri+Lanka|
                                    Anuradhapura+Sri+Lanka|
                                    Mihintale+Sri+Lanka|
                                    Kandalama+Sri+Lanka|
                                    Sigiriya+Rock+Fortress|
                                    Polonnaruwa+Sri+Lanka|
                                    Kandalama+Sri+Lanka|
                                    Dambulla+Cave+Temple|
                                    Matale+Sri+Lanka|
                                    Temple+of+the+Tooth+Kandy|
                                    Peradeniya+Botanical+Garden|
                                    Temple+of+the+Tooth+Kandy|
                                    Nuwara+Eliya|
                                    Kandapola|
                                    Horton+Plains+National+Park|
                                    Kandapola|
                                    Yala+National+Park|
                                    Galle+Fort"
                                />
                            </div>

                            {/* Route Info */}
                            <div className="route-info w-full h-[120px] lg:w-[300px] flex flex-col items-start gap-3 rounded-lg bg-gray-100 p-5 text-lg shadow">
                                <p><strong>Distance:</strong> ~1,060 km</p>
                                <p><strong>Driving Time:</strong> ~30–34 hours</p>
                            </div>

                        </div>

                    </div>

                </div>
            </section>

            {/* ================= IMPORTANT INFO + CTA ================= */}
            <section className="bg-white py-10">
                <div className="mx-auto max-w-7xl px-6">

                    {/* Important Points */}
                    <div data-aos="fade-up" className="mx-auto max-w-4xl">
                        <h3 className="mb-6 text-center text-2xl font-bold text-[#0A3A5E]">
                            Important points to note
                        </h3>

                        <ul className="space-y-4 text-gray-700">
                            <li className="flex items-start gap-3">
                                <span className="mt-1 text-[#0A3A5E]">◆</span>
                                <p>
                                    After making the payment, any booking cannot be cancelled.
                                    Hence, once the payment is made it will not be refunded.
                                </p>
                            </li>

                            <li className="flex items-start gap-3">
                                <span className="mt-1 text-[#0A3A5E]">◆</span>
                                <p>
                                    Additional services and excursions that are optional may be provided,
                                    though for an additional charge.
                                </p>
                            </li>

                            <li className="flex items-start gap-3">
                                <span className="mt-1 text-[#0A3A5E]">◆</span>
                                <p>
                                    The official check-in time at all hotels is at 12:00 pm.
                                </p>
                            </li>

                            <li className="flex items-start gap-3">
                                <span className="mt-1 text-[#0A3A5E]">◆</span>
                                <p>
                                    The official check-out time at all hotels is at 11:00 am.
                                </p>
                            </li>

                            <li className="flex items-start gap-3">
                                <span className="mt-1 text-[#0A3A5E]">◆</span>
                                <p>
                                    Visits to wildlife parks will be at one’s own risk. Jeeps and vehicles
                                    available here are without air conditioning and come with basic insurance
                                    covers (not comprehensive as in the case of vehicles used for our tours).
                                </p>
                            </li>
                        </ul>
                    </div>

                    {/* CTA Box */}
                    <div
                        data-aos="zoom-in"
                        className="mt-10 w-full rounded-lg bg-gray-100 px-6 py-10 text-center shadow"
                    >
                        <h2 className="mb-6 text-xl sm:text-2xl font-semibold text-gray-800">
                            Experience your dream holiday in Sri Lanka!
                        </h2>

                        <button
                            onClick={() => navigate(`/contact`)}
                            className="rounded-full bg-[#00A9C7] px-10 py-3 text-white font-semibold transition hover:bg-[#008eaa]">
                            BEGIN YOUR JOURNEY
                        </button>
                    </div>

                    {/* Related Destinations */}
                    <div data-aos="fade-up" className="mt-10 text-left">
                        <h3 className="mb-6 text-xl font-bold text-gray-700">
                            RELATED DESTINATIONS
                        </h3>

                        <div className="flex flex-wrap justify-start gap-3">
                            {[
                                "Pinnawala",
                                "Kandalama",
                                "Anuradhapura",
                                "Mihintale",
                                "Sigiriya",
                                "Polonnaruwa",
                                "Dambulla",
                                "Matale",
                                "Kandy",
                                "Peradeniya",
                                "Nuwara Eliya",
                                "Kandapola",
                                "Horton Plains",
                                "Yala National Park",
                                "Galle"
                            ].map((place, i) => (
                                <span
                                    key={i}
                                    className="cursor-pointer rounded-full bg-gray-200 px-5 py-2 text-sm font-medium text-gray-700 transition hover:bg-[#0A3A5E] hover:text-white"
                                >
                                    {place}
                                </span>
                            ))}
                        </div>
                    </div>

                </div>
            </section>

            {/* ================= RELATED TOURS ================= */}
            <section className="bg-white py-5">
                <div className="mx-auto max-w-7xl px-6">

                    <div className="mb-5 flex items-center justify-between" data-aos="fade-up">
                        {/* Heading */}
                        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-wide text-gray-800">
                            RELATED TOURS
                        </h2>

                        {/* Slider Arrows */}
                        <div className="flex gap-3">
                            <button
                                onClick={() => swiperRef.current.slidePrev()}
                                className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 transition hover:bg-[#083A5E] hover:text-white"
                            >
                                ‹
                            </button>

                            <button
                                onClick={() => swiperRef.current.slideNext()}
                                className="flex h-10 w-10 items-center justify-center rounded-full bg-[#00A9C7] text-white transition hover:bg-[#008eaa]"
                            >
                                ›
                            </button>
                        </div>
                    </div>

                    <Swiper
                        modules={[Navigation, Autoplay]}
                        onSwiper={(swiper) => (swiperRef.current = swiper)}
                        autoplay={{
                            delay: 3500,
                            disableOnInteraction: false,
                        }}
                        loop={true}
                        spaceBetween={30}
                        breakpoints={{
                            0: { slidesPerView: 1 },
                            640: { slidesPerView: 2 },
                            1024: { slidesPerView: 3 },
                        }}
                    >

                        {/* Slide 1 */}
                        <SwiperSlide>
                            <div className="group overflow-hidden rounded-xl shadow-lg">
                                <div className="relative h-[260px] overflow-hidden">
                                    <img
                                        src={related1}
                                        alt="Special Tours To Sri Lanka"
                                        className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                                    />
                                </div>

                                <div className="bg-[#083A5E] p-6 text-center">
                                    <h3 className="mb-4 text-lg font-semibold text-white">
                                        Sri Lanka Hill Country Tour – 3 Days
                                    </h3>
                                    <button
                                        onClick={() => navigate(`/tours/hill-country/sri-lanka-hill-country-tour-3-days`)}
                                        className="border-b-2 border-[#00A9C7] pb-1 text-sm uppercase tracking-widest text-[#00A9C7] hover:text-white">
                                        View Details
                                    </button>
                                </div>
                            </div>
                        </SwiperSlide>

                        {/* Slide 2 */}
                        <SwiperSlide>
                            <div className="group overflow-hidden rounded-xl shadow-lg">
                                <div className="relative h-[260px] overflow-hidden">
                                    <img
                                        src={related2}
                                        alt="Mini Tour Packages"
                                        className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                                    />
                                </div>

                                <div className="bg-[#083A5E] p-6 text-center">
                                    <h3 className="mb-4 text-lg font-semibold text-white">
                                        Tour in the Hills
                                    </h3>
                                    <button
                                        onClick={() => navigate(`/tours/hill-country/tour-in-the-hills`)}
                                        className="border-b-2 border-[#00A9C7] pb-1 text-sm uppercase tracking-widest text-[#00A9C7] hover:text-white">
                                        View Details
                                    </button>
                                </div>
                            </div>
                        </SwiperSlide>

                    </Swiper>

                </div>
            </section>

            {/* ================= WHATSAPP ================= */}
            <a
                href="https://wa.me/94743412910"
                target="_blank"
                rel="noopener noreferrer"
                className="fixed bottom-5 right-5 z-50"
            >
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/512px-WhatsApp.svg.png"
                    alt="WhatsApp"
                    className="h-12 w-12 rounded-full shadow-lg transition hover:scale-110 sm:h-14 sm:w-14"
                />
            </a>

        </div>
    );
}

export default CultureHillCountryAndWildLifeTour;
