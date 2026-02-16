import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useRef } from "react";

import { useNavigate } from "react-router-dom";

import aboutHero from "../../../assets/ExploreEnchanting.jpg";

import dhamma from "../../../assets/RomanticEscape1.jpg";
import sigiriya from "../../../assets/sigiriya.jpg";
import kandy from "../../../assets/kandy.jpg";
import temple from "../../../assets/Surfing.png";

import related1 from "../../../assets/Beaches & Sunsets.jpg";
import related2 from "../../../assets/turyaa-kalutara.jpg";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

function ExploreEnchantingSrilanka() {

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
    const [day12, setDay12] = useState(false);

    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
    }, []);

    return (
        <div className="w-full overflow-hidden">

            {/* ================= HERO ================= */}
            <section className="relative h-[40vh] w-full">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${aboutHero})` }}
                />
                <div className="absolute inset-0 bg-black/60" />

                <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white">
                    <h1
                        data-aos="fade-up"
                        className="text-3xl sm:text-4xl md:text-5xl lg:text-4xl font-extrabold leading-tight"
                    >
                        Explore Enchanting Sri Lanka
                    </h1>
                    <p
                        data-aos="fade-up"
                        data-aos-delay="150"
                        className="mt-4 sm:mt-6 max-w-full sm:max-w-2xl md:max-w-3xl text-sm sm:text-base md:text-lg"
                    >
                        Discover pure wonder.
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
                        Many avid holidaymakers from abroad arrive at our tropical island every year lured by the tantalising promise of sun, sand and surf. Offering only the very best of tour packages in Sri Lanka, we, at Aitken Spence Travels offers you a culturally diverse tour across the country from sunny beaches, cool climes amidst lush hills, iconic heritage sites to nature reserves home to thriving wildlife.
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
                                <p className="text-xl font-bold">12 Days / 11 Nights</p>
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
                                        Meet and assist on arrival at the airport by Aitken Spence Travels representatives.
                                        Proceed to Negombo.
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
                                <span>Day 02 - Negombo | Sigiriya</span>
                                <span>{day2 ? "−" : "+"}</span>
                            </button>

                            {day2 && (
                                <div className="space-y-4 px-6 py-6 text-gray-700 leading-relaxed">
                                    <p>
                                        After breakfast proceeds to Sigiriya and checks in to the hotel.
                                    </p>

                                    <p>
                                        Located within a fairly close distance to Bandaranaike International Airport, Negombo offers some of the most exciting diving stretches in the country. Its known for the pristine stretches of shores and sandy bottomed lagoon. Its also quite well known for offering fresh catches of lobster, jumbo prawns and crabs. If your hoping to enjoy some thrilling water sports why not try your hand at kitesurfing or jet skiing? Negombo also offered visitors great entertainment options such as bars, discos and clubs for a frolicking good time out in the town.
                                    </p>

                                    <p>
                                        Return to the hotel for overnight accommodation.
                                    </p>

                                    <p className="font-semibold">Overnight stay in Sigiriya.</p>

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
                                <span>Day 03 - Sigiriya | Polonnaruwa</span>
                                <span>{day3 ? "−" : "+"}</span>
                            </button>

                            {day3 && (
                                <div className="space-y-5 px-6 py-6 text-gray-700 leading-relaxed">

                                    <p>
                                        After breakfast proceeds to climb the Sigiriya Rock Fortress.
                                    </p>

                                    <p>
                                        Climb Sigiriya rock fortress which is a UNESCO World Heritage Site, built by King Kashyapa (477-495 AD). The 'Lion Rock' is a citadel of unusual beauty rising 200 metres from the scrub jungle. The rock was the innermost stronghold of the 70-hectare fortified town. A moat, rampart and extensive grounds including the renowned water gardens ring the base of the rock. Take a close look at the iconic frescos of the lovely cloud maidens of Sigiriya, which have been drawn by artisans of the old in a sheltered pocket on the rock which can be reached via a spiral stairway.
                                    </p>

                                    <p>
                                        Thereafter proceed to Polonnaruwa
                                    </p>

                                    <p>
                                        Polonnaruwa was the second capital city in Sri Lanka which saw its prime in the 11th and 12th century AD. Yet another UNESCO World Heritage Site, here visitors will be able to take the ruins of a Royal Palace and of ancient temples such as the Gal Viharaya and more!
                                    </p>

                                    <p className="font-semibold">Overnight stay in Sigiriya.</p>

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
                                <span>Day 04 - Sigiriya | Trincomalee</span>
                                <span>{day4 ? "−" : "+"}</span>
                            </button>

                            {day4 && (
                                <div className="space-y-5 px-6 py-6 text-gray-700 leading-relaxed">

                                    <p>
                                        After breakfast proceed to Trincomalee
                                    </p>

                                    <p>
                                        A port city located on the East Coast of the island, Trincomelee has and continuous to play a major role in maritime and international tradition in Sri Lanka. The city is built on a peninsula which divides the inner and outer harbours and makes for an interesting place to visit. The bay is renowned for its vast size, security and the ease of access it offers a range of vessels during all kinds of weather. The pristine beaches famed for its fine powdery shores and calm waters are ideal to enjoy a spot of scuba diving, wind surfing and more! A must visit site also includes Fort Fredrick, a Dutch stronghold built during colonial times.
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
                                        Visit Fort Fredrick, Koneswaram Temple, the war cemetery and enjoy a boat ride to Pigeon Island.
                                    </p>

                                    <p>
                                        A short boat ride to Pigeon Island, a famous bid sanctuary in Sri Lanka will let nature lovers enjoy a spot of bird watching. A cooling dip in the reef surrounding the island is a great way to beat the tropical heat while taking in the rich marine life teeming among the corals.
                                        it.
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
                                <span>Day 06 - Trincomalee | Dambulla | Matale | Kandy</span>
                                <span>{day6 ? "−" : "+"}</span>
                            </button>

                            {day6 && (
                                <div className="space-y-5 px-6 py-6 text-gray-700 leading-relaxed">

                                    <p>
                                        The Dambulla Rock Cave Temple is among the most visited UNESCO World Heritage Sites in Sri Lanka. The complex features five caves, with a rich history which dates back to the first century BC. Visitors can take in a series of paintings, over 150 images of the Lord Buddha in various poses and various ancient artefacts and more!
                                    </p>

                                    <p>
                                        Proceed to Matale
                                    </p>

                                    <p>
                                        In Matale, visitors will be able to learn about the exotic spices for which Sri Lanka has been famous for since ancient times. One will also be able to see how they are cultivated and processed.
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
                                <span>Day 07 - Kandy | Pinnawala | Kandy</span>
                                <span>{day7 ? "−" : "+"}</span>
                            </button>

                            {day7 && (
                                <div className="space-y-5 px-6 py-6 text-gray-700 leading-relaxed">

                                    <p>
                                        After breakfast proceed to Pinnawala
                                    </p>

                                    <p>
                                        The Pinnawala Elephant Orphanage, established in 1975, commenced with seven orphans. Today some of these orphans enjoy the fortune of seeing their grandchildren born in the same location. The original objective of establishing the orphanage inclined more towards tourism but is soon became a conservation and educational centre. With the help of local and foreign experts, Pinnawala started a scientific breeding programme for elephants. The free movement of the herd enhanced the chances for respective individuals of both sexes to get together and mate. The nearby river played a dominant role in this regard, and in 1984, the first baby of Pinnawala was born.
                                    </p>

                                    <p>
                                        The success story of Pinnawala has drawn the attention of scientists from all over the world. A considerable number of books and research articles on it has been published in several languages. The members of the Pinnawala herd have been filmed, videoed and photographed thousands of times by professionals.
                                    </p>

                                    <p>
                                        Thereafter return to Amaya Hills
                                        In the evening do a Kandy city tour
                                    </p>

                                    <p>
                                        The last stronghold of Sri Lankan kings, the city of Kandy is a World Heritage Site which lays claime to the rich history, tradition and a vibrant culture. Drive around the Kandy lake built by the last Sinhala king, Sri Wickrama Rajasinghe in 1798. Visit the Kandy town and bazaar, the arts and crafts centre, a gem museum and a lapidary. Also, visit the Temple of the Tooth Relic in Kandy. Thereafter witness a cultural show.
                                    </p>

                                    <p className="font-semibold">
                                        Overnight stay in Kandy.
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
                                <span>Day 08 - Kandy | Peradeniya | Tea Plantation | Nuwara Eliya</span>
                                <span>{day8 ? "−" : "+"}</span>
                            </button>

                            {day8 && (
                                <div className="space-y-5 px-6 py-6 text-gray-700 leading-relaxed">

                                    <p>
                                        After breakfast proceed to Peradeniya
                                    </p>

                                    <p>
                                        Peradeniya botanical garden was first built as a pleasure garden by a Sinhala king and was expanded by the British. It is 147 acres in extent and provides an amazing variety of trees, plants and flowers.
                                    </p>

                                    <p>
                                        Thereafter proceed to Nuwara Eliya via a tea plantation.
                                    </p>

                                    <p>
                                        Here visitors will be able to walk among slopes lush with tea bushes and observe how the delicate buds are plucked. A tour in the factory will offer you the chance to learn about how the world’s finest tea is manufactured, graded and packaged. End the day with a fragrant cup of pure Ceylon tea while feasting your eyes on verdant valleys and peaks.
                                    </p>

                                    <p className="font-semibold">
                                        Overnight stay in Nuwara Eliya.
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
                                <span>Day 09 - Nuwara Eliya | Kataragama</span>
                                <span>{day9 ? "−" : "+"}</span>
                            </button>

                            {day9 && (
                                <div className="space-y-5 px-6 py-6 text-gray-700 leading-relaxed">

                                    <p>
                                        After breakfast proceed to Nuwara Eliya
                                    </p>

                                    <p>
                                        Nestled amidst majestic mountains, the retort town of Nuwara Eliya attracts many travellers with its refreshing climate and scenic attractions. Walk among beautiful plantations with flourishing tea bushes, manicured gardens with colourful blooms and more. Explore Sri Lanka’s highest mountain, Pidurangala which towers at a dizzying height of 8,282 ft. Golf fans will also be able to take in the Victoria Golf Course, a Donald Steele masterpiece, which is considered to be one of the finest in South Asia.
                                    </p>

                                    <p>
                                        Thereafter proceed to Nanu Oya and board the train to Haputale.
                                    </p>

                                    <p>
                                        ** Please note that the train tickets can only be confirmed 10 days prior to the train ride and is purely based on availability
                                    </p>

                                    <p>
                                        Pick up the clients and proceed to Kataragama.
                                    </p>

                                    <p className="font-semibold">
                                        Overnight stay in Katharagama.
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
                                <span>Day 10 - Kataragama | Yala</span>
                                <span>{day10 ? "−" : "+"}</span>
                            </button>

                            {day10 && (
                                <div className="space-y-5 px-6 py-6 text-gray-700 leading-relaxed">

                                    <p>
                                        After breakfast proceeds to a Yala safari.
                                    </p>

                                    <p>
                                        Set off on an adventurous safari at the Yala National Park by jeep. Get the chance to catch a glimpse of the famous Ceylon leopard, herds of wild jumbos, wild buffaloes and crocodiles. Bird spotting too is a great activity nature lovers can enjoy.
                                    </p>

                                    <p className="font-semibold">
                                        Overnight stay in Katharagama.
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
                                <span>Day 11 - Kataragama | Galle</span>
                                <span>{day11 ? "−" : "+"}</span>
                            </button>

                            {day11 && (
                                <div className="space-y-5 px-6 py-6 text-gray-700 leading-relaxed">

                                    <p>
                                        After breakfast proceed to Galle
                                    </p>

                                    <p>
                                        The historic city of Galle offers many interesting sites to visit. The Dutch Galle Fort which was built in 1663 is a UNESCO World Heritage Site which still retains its colonial charm.
                                    </p>

                                    <p>
                                        Optional dolphin and whale watching
                                    </p>

                                    <p>
                                        Sri Lanka is situated within the International Whaling Commission’s protected zone in the Indian Ocean. Of the 80 species of cetaceans observed and identified worldwide, 26 are found in the Indian Ocean and the Bay of Bengal.
                                    </p>

                                    <p>
                                        **Dolphin and whale watching can be done in Mirissa during the periods of November to April **Whale and Dolphin watching: US$ 110.00 per person
                                    </p>

                                    <p className="font-semibold">
                                        Overnight stay in Galle.
                                    </p>

                                </div>
                            )}
                        </div>

                        {/* ================= DAY 12 ================= */}
                        <div
                            data-aos="fade-up"
                            data-aos-delay="1200"
                            className="overflow-hidden rounded-lg border bg-white shadow"
                        >
                            <button
                                onClick={() => setDay12(!day12)}
                                className="flex w-full items-center justify-between bg-gray-100 px-6 py-5 text-left font-semibold text-[#0A3A5E]"
                            >
                                <span>Day 12 – Galle | Kosgoda | Airport</span>
                                <span>{day12 ? "−" : "+"}</span>
                            </button>

                            {day12 && (
                                <div className="space-y-5 px-6 py-6 text-gray-700 leading-relaxed">

                                    <p>
                                        After breakfast proceeds to the airport via Kosgoda.
                                    </p>

                                    <p>
                                        Visit the Turtle hatchery in Kosgoda which is operated by the Wild Life Protection Society of Sri Lanka. Several species of turtles, especially the endangered hawksbill is protected here. Most vulnerable of all are their eggs, which are left uncovered on beaches all around the coast. The goodwill of Kosgoda area fishermen who bring these eggs to the centre has led to the successful release of over 100,000 young turtles in only two years since the hatchery opened.
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
                                    &origin=Bandaranaike+International+Airport,Sri+Lanka
                                    &destination=Bandaranaike+International+Airport,Sri+Lanka
                                    &waypoints=
                                    Negombo|
                                    Sigiriya|
                                    Polonnaruwa|
                                    Trincomalee|
                                    Dambulla|
                                    Matale|
                                    Kandy|
                                    Pinnawala+Elephant+Orphanage|
                                    Peradeniya+Botanical+Gardens|
                                    Nuwara+Eliya|
                                    Kataragama|
                                    Yala+National+Park|
                                    Galle|
                                    Kosgoda
                                    `.replace(/\s+/g, '')}
                                />


                            </div>

                            {/* Route Info */}
                            <div className="route-info w-full h-[120px] lg:w-[300px] flex flex-col items-start gap-3 rounded-lg bg-gray-100 p-5 text-lg shadow">
                                <p><strong>Distance:</strong> ~1,050 km</p>
                                <p><strong>Driving Time:</strong> ~26–30 hours</p>
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
                                "Sigiriya",
                                "Polonnaruwa",
                                "Trincomalee",
                                "Dambulla",
                                "Matale",
                                "Kandy",
                                "Pinnawala",
                                "Peradeniya",
                                "Nuwara Eliya",
                                "Kataragama",
                                "Yala",
                                "Galle",
                                "Kosgoda"
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
                                        Beach Hopping Adventures
                                    </h3>
                                    <button
                                        onClick={() => navigate(`/tours/beach/beach-hopping-adventures`)}
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
                                        Sun and Fun at Turyaa Kalutara
                                    </h3>
                                    <button
                                        onClick={() => navigate(`/tours/beach/sun-and-fun-at-turyaa-kalutara`)}
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

export default ExploreEnchantingSrilanka;
