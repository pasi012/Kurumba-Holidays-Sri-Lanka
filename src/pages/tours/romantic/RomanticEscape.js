import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useRef } from "react";

import { useNavigate } from "react-router-dom";

import aboutHero from "../../../assets/RomanticEscape.jpg";

import dhamma from "../../../assets/RomanticEscape1.jpg";
import sigiriya from "../../../assets/RomanticEscape.jpg";
import kandy from "../../../assets/RomanticEscape2.jpg";
import temple from "../../../assets/RomanticEscape3.jpg";

import related1 from "../../../assets/wedding.jpg";
import related2 from "../../../assets/honeymoon.jpg";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

function RomanticEscape() {

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
    const [day10, setDay10] = useState(false);
    const [day11, setDay11] = useState(false);

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
                        Romantic Escape
                    </h1>
                    <p
                        data-aos="fade-up"
                        data-aos-delay="150"
                        className="mt-4 sm:mt-6 max-w-full sm:max-w-2xl md:max-w-3xl text-sm sm:text-base md:text-lg"
                    >
                        Where Romance Begins.
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
                        Be swept off your feet & experience whirlwind romance with our Sri Lanka honeymoon packages, taking you on a magical journey across the island. Sun-drenched shores, mountain hideaways and cultural treasures all lie in store for this new chapter of your love story.
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
                                <p className="text-xl font-bold">11 Days / 10 Nights</p>
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
                                <span>Day 01 - Airport | Negombo</span>
                                <span>{day1 ? "−" : "+"}</span>
                            </button>

                            {day1 && (
                                <div className="space-y-4 px-6 py-6 text-gray-700 leading-relaxed">
                                    <p>
                                        Meet and assist on arrival at Airport by Aitken Spence Travels Representative
                                    </p>

                                    <p>
                                        Transfer from Airport to Negombo. Just seven kilometres from the Bandaranaike International Airport, at the tip of the Negombo lagoon, lays the pristine Negombo beach. Negombo is a famous fishing village that is proud of its colonial Dutch fort and other Dutch period architecture.
                                    </p>

                                    <p>
                                        Savour a delectable dinner at a hotel in Negombo.
                                    </p>

                                    <p className="font-semibold">Overnight stay in Negombo</p>

                                </div>
                            )}
                        </div>

                        {/* ================= DAY 2 ================= */}
                        <div data-aos="fade-up" data-aos-delay="150" className="overflow-hidden rounded-lg border bg-white shadow">
                            <button
                                onClick={() => setDay2(!day2)}
                                className="flex w-full items-center justify-between bg-gray-100 px-6 py-5 text-left font-semibold text-[#0A3A5E]"
                            >
                                <span>Day 02 - Negombo | Pinnawala | Dambulla | Kandalama</span>
                                <span>{day2 ? "−" : "+"}</span>
                            </button>

                            {day2 && (
                                <div className="space-y-4 px-6 py-6 text-gray-700 leading-relaxed">
                                    <p>
                                        After breakfast, proceed to Dambulla.
                                    </p>

                                    <p>
                                        En-route to the city of Dambulla, stop by the Pinnawala Elephant Orphanage, which was established in 1975. Having first commenced with 7 orphaned elephants in its care, the sanctuary has since then expanded to house over 70 jumbos. Guests can enjoy interactive experiences with these majestic mammals while here. The highlight of the visit is sure to be when adorable baby elephants are bottled fed at specific times of the day. Another is the bath session which happens twice a day, the large herd enjoys in a nearby river.
                                    </p>

                                    <p>
                                        Continuation of Dambulla.
                                    </p>

                                    <p>
                                        The Dambulla Rock Temple has a rich history which dates back to the first century BC. and is a famed World Heritage Site on the island. The most impressive of Sri Lanka’s cave complexes, the temple is made up of five caverns which showcase various paintings, sculptures and over 150 images of Lord Buddha. The highlight is the colossal figure of reclining Buddha which has been carved entirely out of rock and spans 14 meters.
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
                                <span>Day 03 - Kandalama | Sigiriya | Minneriya | Kandalama</span>
                                <span>{day3 ? "−" : "+"}</span>
                            </button>

                            {day3 && (
                                <div className="space-y-5 px-6 py-6 text-gray-700 leading-relaxed">

                                    <p>
                                        After breakfast, climb the fifth century Sigiriya Rock Fortress which is a World Heritage Site, built by King Kashyapa (477-495 AD).
                                    </p>

                                    <p>
                                        Rising grandly amidst scrub jungle, the site features moats, ramparts, extensive water gardens decorating the expanses of its grounds. During your ascent, you will be able to take in the iconic frescos of the cloud maidens, known as the ‘’Apsaras’’, the Mirror Wall and the gigantic lion paws which lead up to the summit. Where one can appreciate the panoramic views of the region along with the ancient ruins of palaces.
                                    </p>

                                    <p>
                                        Evening safari in Minneriya.
                                    </p>

                                    <p>
                                        Spanning over 8,800 hectares, the Minneriya National Park is located alongside the vast, renovated Minneriya Rainwater Reservoir. As a part of the corridor which joins Kaudulla and Wasgomuwa parks, Minneriya offers an amazing sightseeing experience where one may see herds of elephants throughout the year. In October, you will get the chance to observe the famous, ‘’Gathering’’, of wild jumbos, along with the banks of the Minneriya. The park is also home to over 160 species of birds,25 reptile species, 26 fish species and more than 78 butterfly species among an array of abundant wildlife.
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
                                <span>Day 04 - Kandalama | Trincomalee</span>
                                <span>{day4 ? "−" : "+"}</span>
                            </button>

                            {day4 && (
                                <div className="space-y-5 px-6 py-6 text-gray-700 leading-relaxed">

                                    <p>
                                        After breakfast, proceed to Trincomalee
                                    </p>

                                    <p>
                                        Housing one of the largest natural harbours in the world, Trincomalee is home to pristine beaches and an amazing multicultural town with a history dating back to the times of Marco Polo.
                                    </p>

                                    <p>
                                        Savour a delectable dinner at a hotel in Trincomalee.
                                    </p>

                                    <p className="font-semibold">Overnight stay in Trincomalee.</p>

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
                                <span>Day 05 - Trincomalee</span>
                                <span>{day5 ? "−" : "+"}</span>
                            </button>

                            {day5 && (
                                <div className="space-y-5 px-6 py-6 text-gray-700 leading-relaxed">

                                    <p>
                                        After breakfast, full day leisure.
                                    </p>

                                    <p>
                                        Optional
                                    </p>

                                    <p>
                                        Visit Pigeon Island and enjoy a spot of snorkelling in the reef surrounding it. Set off on a boat ride, to get up close to playful pods of spinner dolphins who will perform fun acrobatics to your applause. If you are really lucky, you might even get the chance to catch glimpse of blue whales and humpback whales.
                                    </p>

                                    <p>
                                        Savour a delectable dinner at a hotel in Trincomalee.
                                    </p>

                                    <p className="font-semibold">Overnight stay in Trincomalee.</p>

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
                                <span>Day 06 - Trincomalee | Kandy</span>
                                <span>{day6 ? "−" : "+"}</span>
                            </button>

                            {day6 && (
                                <div className="space-y-5 px-6 py-6 text-gray-700 leading-relaxed">

                                    <p>
                                        After breakfast proceed to Kandy
                                    </p>

                                    <p>
                                        A World Heritage Site, the city of Kandy is a charming destination in Sri Lanka which offers visitors a vibrant culture, a rich heritage and a unique sense of tradition to experience. Pay a visit to the Temple of the Sacred Tooth Relic and seek the blessing of the Triple Gem. Take a relaxing stroll under shady pathways bordering the Kandy Lake, after which you can visit the local markets to soak in the charm of the local community.
                                    </p>

                                    <p>
                                        Evening – Watch a cultural show.
                                    </p>

                                    <p>
                                        SaSavour a delectable dinner at a hotel in Kandy.
                                    </p>

                                    <p className="font-semibold">
                                        Overnight stay in Kandy.
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
                                <span>Day 07 - Kandy | Peradeniya | Nuwara Eliya</span>
                                <span>{day7 ? "−" : "+"}</span>
                            </button>

                            {day7 && (
                                <div className="space-y-5 px-6 py-6 text-gray-700 leading-relaxed">

                                    <p>
                                        After breakfast visit, The Royal Botanical Gardens in Peradeniya which was first built as a pleasure garden by a Sinhala king and was expanded by the British. The grounds which sprawl over 147 acres and features well-tended plants, colourful blooms and a variety of spice trees.
                                    </p>

                                    <p>
                                        Transfer from Kandy to Nuwara Eliya.
                                    </p>

                                    <p>
                                        Visit a sprawling tea plantation and factory, where the best tea in the world is produced. Here, you could observe the manufacturing process which includes grading and packaging. End your excursion with a freshly brewed cup of fragrant Ceylon Tea. Nuwara Eliya has earned a reputation for itself a blissful getaway in the hill country for tourists and locals alike for its cool refreshing climes and scenic vistas.
                                    </p>

                                    <p>
                                        Whilst delighting travellers with its breath-taking beauty, Nuwara Eliya is also home to one of the finest 18-hole golf course in South Asia. This town plays a pivotal role in the world’s tea industry as the tea produced in this region alone accounts for a substantial portion of the tea export market.
                                    </p>

                                    <p>
                                        Savour a delectable dinner at a hotel in Nuwara Eliya.
                                    </p>

                                    <p className="font-semibold">
                                        Overnight stay in Nuwara Eliya.
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
                                <span>Day 08 - Nuwara Eliya | Kitulgala | Ahungalla</span>
                                <span>{day8 ? "−" : "+"}</span>
                            </button>

                            {day8 && (
                                <div className="space-y-5 px-6 py-6 text-gray-700 leading-relaxed">

                                    <p>
                                        Breakfast at the Hotel
                                    </p>

                                    <p>
                                        Transfer from Nuwara Eliya to Bentota. En-route visit St. Clair and Devon waterfalls cascading down majestically amidst verdant splendour.
                                    </p>

                                    <p>
                                        En-route visit Kitulgala. The Kelani River (the broadest river in Sri Lanka) flowing through Kitulgala was the main location where the Oscar-winning movie “Bridge on the River Kwai” was filmed. Get the chance to enjoy the thrilling sense of adventure which comes with a white-water rafting adventure, in a jungle
                                    </p>

                                    <p>
                                        Savour a delectable dinner at a hotel in Ahungalla.
                                    </p>

                                    <p className="font-semibold">
                                        Overnight stay in Ahungalla.
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
                                <span>Day 09 - Ahungalla</span>
                                <span>{day9 ? "−" : "+"}</span>
                            </button>

                            {day9 && (
                                <div className="space-y-5 px-6 py-6 text-gray-700 leading-relaxed">

                                    <p>
                                        After breakfast full day at leisure…
                                    </p>

                                    <p>
                                        Optional
                                    </p>

                                    <p>
                                        Enjoy a relaxing boat ride down Madhu River, visit a mask factory in Ambalangoda, go to a moonstone mine, take a glass bottom boat ride in Hikkaduwa, and try your hand at some fun water sports.
                                    </p>

                                    <p>
                                        Savour a delectable dinner at a hotel in Ahungalla.
                                    </p>

                                    <p className="font-semibold">
                                        Overnight stay in Ahungalla.
                                    </p>

                                </div>
                            )}
                        </div>

                        {/* ================= DAY 10 ================= */}
                        <div
                            data-aos="fade-up"
                            data-aos-delay="1000"
                            className="overflow-hidden rounded-lg border bg-white shadow"
                        >
                            <button
                                onClick={() => setDay10(!day10)}
                                className="flex w-full items-center justify-between bg-gray-100 px-6 py-5 text-left font-semibold text-[#0A3A5E]"
                            >
                                <span>Day 10 - Bentota | Colombo</span>
                                <span>{day10 ? "−" : "+"}</span>
                            </button>

                            {day10 && (
                                <div className="space-y-5 px-6 py-6 text-gray-700 leading-relaxed">

                                    <p>
                                        Breakfast at the Hotel & transfer to Colombo.
                                    </p>

                                    <p>
                                        Colombo is the trade capital of Sri Lanka and is a city that has undergone rapid changes. While most old buildings have been replaced by new apartments and office buildings, some parts in the city yet retain its old- world charm. The 100-year-old clock tower built by the British and some colonial buildings remain as examples. The Independence Square, Nelum Pokuna, Pettah Bazaar, and BMICH are some of the main highlights to be seen. Colombo also provides ample entertainment in terms of an active nightlife as well as a shopping experience you'd never forget.
                                    </p>

                                    <p>
                                        Savour a delectable dinner at a hotel in Colombo.
                                    </p>

                                    <p className="font-semibold">
                                        Overnight stay in Colombo.
                                    </p>

                                </div>
                            )}
                        </div>

                        {/* ================= DAY 11 ================= */}
                        <div
                            data-aos="fade-up"
                            data-aos-delay="1100"
                            className="overflow-hidden rounded-lg border bg-white shadow"
                        >
                            <button
                                onClick={() => setDay11(!day11)}
                                className="flex w-full items-center justify-between bg-gray-100 px-6 py-5 text-left font-semibold text-[#0A3A5E]"
                            >
                                <span>Day 11 - Colombo | Airport</span>
                                <span>{day11 ? "−" : "+"}</span>
                            </button>

                            {day11 && (
                                <div className="space-y-5 px-6 py-6 text-gray-700 leading-relaxed">

                                    <p>
                                        After breakfast proceeds to the airport to connect the departure flight.
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
                                    src={`https://www.google.com/maps/embed/v1/directions?key=AIzaSyBjUk_Sn0lthNO_cpZO9n5hI1lmZPRUB0E
                                    &origin=Bandaranaike+International+Airport+Sri+Lanka
                                    &destination=Bandaranaike+International+Airport+Sri+Lanka
                                    &waypoints=
                                        Negombo|
                                        Pinnawala+Elephant+Orphanage|
                                        Dambulla|
                                        Kandalama|
                                        Sigiriya|
                                        Minneriya+National+Park|
                                        Trincomalee|
                                        Kandy|
                                        Peradeniya+Botanical+Gardens|
                                        Nuwara+Eliya|
                                        Kitulgala|
                                        Ahungalla|
                                        Bentota|
                                        Colombo
                                    `.replace(/\s+/g, '')}
                                />

                            </div>

                            {/* Route Info */}
                            <div className="route-info w-full h-[120px] lg:w-[300px] flex flex-col items-start gap-3 rounded-lg bg-gray-100 p-5 text-lg shadow">
                                <p><strong>Distance:</strong> ~740 km</p>
                                <p><strong>Driving Time:</strong> ~18–21 hours</p>
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
                                "Airport",
                                "Negombo",
                                "Pinnawala",
                                "Dambulla",
                                "Kandalama",
                                "Sigiriya",
                                "Minneriya",
                                "Trincomalee",
                                "Kandy",
                                "Peradeniya",
                                "Nuwara Eliya",
                                "Kitulgala",
                                "Ahungalla",
                                "Bentota",
                                "Colombo"
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
                                        Wedding Sri Lanka
                                    </h3>
                                    <button
                                        onClick={() => navigate(`/tours/romantic/wedding-in-sri-lanka`)}
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
                                        Honeymoon Tours
                                    </h3>
                                    <button
                                        onClick={() => navigate(`/tours/romantic/honeymoon-tours`)}
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

export default RomanticEscape;
