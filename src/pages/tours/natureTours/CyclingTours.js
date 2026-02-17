import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useRef } from "react";

import { useNavigate } from "react-router-dom";

import aboutHero from "../../../assets/cycletour.jpg";

import dhamma from "../../../assets/CyclingTours1.jpg";
import sigiriya from "../../../assets/CyclingTours2.jpg";
import kandy from "../../../assets/CyclingTours3.jpg";
import temple from "../../../assets/cycletour.jpg";

import related1 from "../../../assets/yala-national-park2.jpg";
import related2 from "../../../assets/adventuretours.jpg";
import related3 from "../../../assets/WalkingTours3.jpg";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

function CyclingTours() {

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
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${aboutHero})` }}
                />
                <div className="absolute inset-0 bg-black/60" />

                <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white">
                    <h1
                        data-aos="fade-up"
                        className="text-3xl sm:text-4xl md:text-5xl lg:text-4xl font-extrabold leading-tight"
                    >
                        Cycling Tours
                    </h1>
                    <p
                        data-aos="fade-up"
                        data-aos-delay="150"
                        className="mt-4 sm:mt-6 max-w-full sm:max-w-2xl md:max-w-3xl text-sm sm:text-base md:text-lg"
                    >
                        Ride the Roads of History and Culture
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
                        If you wish to experience everything that this paradisiacal island has to offer ardent explorers why not opt an adventurous cycle tour in Sri Lanka? It’s the ideal way to immerse yourself in the local culture while you ride through majestic mountain ranges, visit heritage sites to take in ancient ruins and more. Get the chance to experience the simple charm of friendly local communities as you travel under the balmy tropical skies.
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
                                <span>Day 01 - Colombo | Anamaduwa</span>
                                <span>{day1 ? "−" : "+"}</span>
                            </button>

                            {day1 && (
                                <div className="space-y-4 px-6 py-6 text-gray-700 leading-relaxed">
                                    <p>
                                        Once you arrive at the Bandaranaike International Airport in Katunayake, you will be greeted by an Kurumba Holidays Sri Lanka representative. After which you will be transferred to a hotel in Anamaduwa, where you will be able to rest and relax in comfort. During the day you will also get the chance to enjoy a two hour dolphin watching tour along with an invigorating two hour nature walk.
                                    </p>

                                    <p className="font-semibold">Overnight stay in Anamaduwa.</p>

                                </div>
                            )}
                        </div>

                        {/* ================= DAY 2 ================= */}
                        <div data-aos="fade-up" data-aos-delay="150" className="overflow-hidden rounded-lg border bg-white shadow">
                            <button
                                onClick={() => setDay2(!day2)}
                                className="flex w-full items-center justify-between bg-gray-100 px-6 py-5 text-left font-semibold text-[#0A3A5E]"
                            >
                                <span>Day 02 - Anamaduwa | Yapahuwa</span>
                                <span>{day2 ? "−" : "+"}</span>
                            </button>

                            {day2 && (
                                <div className="space-y-4 px-6 py-6 text-gray-700 leading-relaxed">
                                    <p>
                                        After enjoying breakfast at the hotel, you will receive bikes for the journey. You will start the tour from the hotel and reach Yapahuwa via a tarmac road that runs alongside scenic vistas which include fertile paddy fields, vast man made reservoirs glistening under the sun and quaint little villages. The daytime temperature in the region usually fluctuates between 27 and 34 degrees Celsius. The ride will be an easy one as the terrain is void of any slopes and hills.
                                    </p>

                                    <p>
                                        Once you reach Yapahuwa, you will get some rest after which you can take the opportunity to pay a visit to take in the ancient ruins strewn throughout this one time capital. In the old city, you will find many caves, shrines, moats, ramparts as well as the remnants of a temple built to house the sacred tooth relic of the Lord Buddha. Yapahuwa is a paradise for bird lovers too!
                                    </p>

                                    <p>
                                        After your excursion, you will check-in to your hotel in Yapahuwa.
                                    </p>

                                    <p className="font-semibold">Overnight stay in Yapahuwa.</p>

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
                                <span>Day 03 - Yapahuwa | Anuradhapura</span>
                                <span>{day3 ? "−" : "+"}</span>
                            </button>

                            {day3 && (
                                <div className="space-y-5 px-6 py-6 text-gray-700 leading-relaxed">

                                    <p>
                                        After breakfast at the hotel, you will be transferred to Anuradhapura via a comfortable air-conditioned vehicle. Check-in at the hotel, take a short break and then mount your bicycles and start exploring the region! The cycling tour from your hotel to the ancient city of Anuradhapura will take you across rural sceneries. Anuradhapura is one of the most remarkable destinations in the country as it was one of the first capitals in the olden days. Our guests will be visiting the Atamasthana, a collection of eight prominent places of Buddhist worship, during the day as well.
                                    </p>

                                    <p>
                                        The temperature in the city averages between 32 to 34 degrees Celsius so you will naturally yearn for a good thirst quencher! You can try out the local favourite, a king coconut drink and rest by shady trees.
                                    </p>

                                    <p>
                                        After your tour, you will arrive check – in to a hotel in Anuradhapura.
                                    </p>

                                    <p className="font-semibold">Overnight stay in Anuradhapura.</p>

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
                                <span>Day 04 - Anuradhapura | Trincomalee</span>
                                <span>{day4 ? "−" : "+"}</span>
                            </button>

                            {day4 && (
                                <div className="space-y-5 px-6 py-6 text-gray-700 leading-relaxed">

                                    <p>
                                        After enjoying a hearty breakfast at the hotel you will leave Anuradhapura and travel to Trincomalee. This is an enchanting destination that is resplendent with white sandy beaches, ancient colonial monuments and temples. Trincomalee has been an important trading port in the region since time immemorial. You can visit the natural harbour, do some sightseeing, explore the Kanniya Hot Springs and relax on the famed beaches of Nilaveli and Uppuveli.
                                    </p>

                                    <p>
                                        As the day draws to a close head over to your hotel in Trincomalee for dinner.
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
                                        Enjoy breakfast at the hotel and prepare to explore the marvels of Trincomalee! If you visit between the months of May and October you will be able to enjoy enthralling dolphin watching tours. Snorkelling in Pigeon Island is a delightful indulgence that is available throughout the year. The coral reef here spans a length of 200 metres and a width of 100 metres. Approximately 100 species of coral and 300 species of reef fish have been recorded in this marine national park. The island itself is quite fascinating, home to large flocks of rock pigeons. Hawksbill turtles, green turtles and Olive Ridley turtles also visit the shores of the island to lay their eggs.
                                    </p>

                                    <p>
                                        Return to Pigeon Island Resort and unwind with a relaxing ayurvedic massage.
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
                                <span>Day 06 - Trincomalee | Gal Oya</span>
                                <span>{day6 ? "−" : "+"}</span>
                            </button>

                            {day6 && (
                                <div className="space-y-5 px-6 py-6 text-gray-700 leading-relaxed">

                                    <p>
                                        Enjoy breakfast at the hotel and leave for Gal Oya. Upon arrival, you will visit the famous Gal Oya National Park and enjoy a day of exploration. The elevation of this beautiful park varies between 30 to 900 metres. The region is rich with thriving flora and fauna. You can explore the territories of the park on a jeep or opt for a boat safari; it will often give you the opportunity to witness elephants frolicking in a picturesque reservoir locally known as the Senanayake Samudra. Boat safaris will also take you to the enchanting Bird Island where you will see get the chance to see multitudes of winged beings flying amidst the trees.
                                    </p>

                                    <p>
                                        Return to the Gal Oya Lodge after the safari and relax for the rest of the day.
                                    </p>

                                    <p className="font-semibold">
                                        Overnight stay in Gal Oya.
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
                                <span>Day 07 - Gal Oya | Mahiyanganaya</span>
                                <span>{day7 ? "−" : "+"}</span>
                            </button>

                            {day7 && (
                                <div className="space-y-5 px-6 py-6 text-gray-700 leading-relaxed">

                                    <p>
                                        Treat yourself to a good breakfast at the hotel and prepare to embark on a cycling expedition from Gal Oya to Mahiyanganaya. You will be passing forests and small villages as you pedal steadily on the level tarmac road. The temperatures would fluctuate between 26 and 32 degrees Celsius during the dry season and between 25 and 26 degrees Celsius during the rainy season. Battle your exhaustion with fresh local fruits sold by friendly roadside vendors as you journey on!
                                    </p>

                                    <p>
                                        Enjoy a well-deserved rest and a hearty dinner at a hotel in Mahiyanganaya.
                                    </p>

                                    <p className="font-semibold">
                                        Overnight stay in Mahiyanganaya.
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
                                <span>Day 08 - Knuckles Mountain Range</span>
                                <span>{day8 ? "−" : "+"}</span>
                            </button>

                            {day8 && (
                                <div className="space-y-5 px-6 py-6 text-gray-700 leading-relaxed">

                                    <p>
                                        Enjoy a picnic breakfast and get ready to explore the majestic Knuckles Mountain Range. You will be taking a relatively easy route, which is called the Dothalugala trek to reach the zenith of the mountain.
                                    </p>

                                    <p>
                                        The Knuckles Mountain Range is home to 128 species of birds, 288 species of amphibians, 60 species of butterflies and 31 species of mammals. 1,033 flowering plant species have also been recorded in the region. Needless to say, this certainly is a nature lover’s paradise! The cool climate of Kandy will make the trekking experience quite a delight too. Once you reach the peak you will be able to feast your eyes on the astounding natural splendour of the surrounding region.
                                    </p>

                                    <p>
                                        Descend the mountain against the winds and reach the mossy banks of a glistening river. Here you can rest and relax while munching on a delicious picnic lunch. After your meal, you will leave for your hotel in Kandy.
                                    </p>

                                    <p className="font-semibold">
                                        Overnight stay in kandy.
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
                                <span>Day 09 - Kandy</span>
                                <span>{day9 ? "−" : "+"}</span>
                            </button>

                            {day9 && (
                                <div className="space-y-5 px-6 py-6 text-gray-700 leading-relaxed">

                                    <p>
                                        Commence your day with a delicious breakfast at the hotel. You will be enjoying a day filled with marvellous explorations! A UNESCO World Heritage Site, the ancient city of Kandy offers much in terms of vibrant culture, rich tradition and history. As part of your exploration, you will be visiting the Arts & Crafts Centre, Kandy Town and Bazaar, a lapidary and a gem museum.
                                    </p>

                                    <p>
                                        When the sun sets over the hills, you will visit the Sri Dalada Maligawa, where the Sacred Tooth Relic of Lord Buddha is housed. It’s one of the most prominent places of worship among the Buddhists in the island. End your day with a brilliant cultural show featuring traditional Sri Lankan dancers.
                                    </p>

                                    <p>
                                        Head back to your hotel to unwind and relax in comfort and to savour a hearty meal.
                                    </p>

                                    <p className="font-semibold">
                                        Overnight stay in kandy.
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
                                <span>Day 10 - Kandy | Colombo</span>
                                <span>{day10 ? "−" : "+"}</span>
                            </button>

                            {day10 && (
                                <div className="space-y-5 px-6 py-6 text-gray-700 leading-relaxed">

                                    <p>
                                        Treat yourself to a good breakfast at the hotel and prepare to embark on a cycling expedition from Gal Oya to Mahiyanganaya. You will be passing forests and small villages as you pedal steadily on the level tarmac road. The temperatures would fluctuate between 26 and 32 degrees Celsius during the dry season and between 25 and 26 degrees Celsius during the rainy season. Battle your exhaustion with fresh local fruits sold by friendly roadside vendors as you journey on!
                                    </p>

                                    <p>
                                        Enjoy a well-deserved rest and a hearty dinner at a hotel in Mahiyanganaya.
                                    </p>

                                    <p className="font-semibold">
                                        Overnight stay in Mahiyanganaya.
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
                                <span>Day 11 - Colombo</span>
                                <span>{day11 ? "−" : "+"}</span>
                            </button>

                            {day11 && (
                                <div className="space-y-5 px-6 py-6 text-gray-700 leading-relaxed">

                                    <p>
                                        You will be transferred to the Bandaranaike International Airport in Katunayake from the hotel in Colombo.
                                    </p>

                                    <p>
                                        It’s time to bid adieu to the gorgeous island of Sri Lanka!
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

                            {/* Map */}
                            <div className="map-container flex-1 overflow-hidden rounded-xl shadow-xl border">
                                <iframe
                                    width="100%"
                                    height="450"
                                    style={{ border: 0 }}
                                    loading="lazy"
                                    allowFullScreen
                                    src="https://www.google.com/maps/embed/v1/directions?key=AIzaSyBjUk_Sn0lthNO_cpZO9n5hI1lmZPRUB0E
                                    &origin=Colombo+Sri+Lanka
                                    &destination=Colombo+Sri+Lanka
                                    &waypoints=
                                    Anamaduwa+Sri+Lanka|
                                    Yapahuwa+Sri+Lanka|
                                    Anuradhapura+Sri+Lanka|
                                    Trincomalee+Sri+Lanka|
                                    Gal+Oya+National+Park|
                                    Mahiyanganaya+Sri+Lanka|
                                    Knuckles+Mountain+Range+Sri+Lanka|
                                    Kandy+Sri+Lanka"
                                />

                            </div>

                            {/* Route Info */}
                            <div className="route-info w-full h-[120px] lg:w-[300px] flex flex-col items-start gap-3 rounded-lg bg-gray-100 p-5 text-lg shadow">
                                <p><strong>Distance:</strong> ~1,080 km</p>
                                <p><strong>Driving Time:</strong> ~28–32 hours</p>
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
                                "Colombo",
                                "Anamaduwa",
                                "Yapahuwa",
                                "Anuradhapura",
                                "Trincomalee",
                                "Gal Oya National Park",
                                "Mahiyanganaya",
                                "Knuckles Mountain Range",
                                "Kandy"
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
                                        Wild Life Tour
                                    </h3>
                                    <button
                                        onClick={() => navigate(`/tours/nature-tours/wild-life-tour`)}
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
                                        Adventure Tours
                                    </h3>
                                    <button
                                        onClick={() => navigate(`/tours/nature-tours/adventure-tours`)}
                                        className="border-b-2 border-[#00A9C7] pb-1 text-sm uppercase tracking-widest text-[#00A9C7] hover:text-white">
                                        View Details
                                    </button>
                                </div>
                            </div>
                        </SwiperSlide>

                        {/* Slide 3 */}
                        <SwiperSlide>
                            <div className="group overflow-hidden rounded-xl shadow-lg">
                                <div className="relative h-[260px] overflow-hidden">
                                    <img
                                        src={related3}
                                        alt="Sri Lanka Highlights Tour"
                                        className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                                    />
                                </div>

                                <div className="bg-[#083A5E] p-6 text-center">
                                    <h3 className="mb-4 text-lg font-semibold text-white">
                                        Walking Tour
                                    </h3>
                                    <button
                                        onClick={() => navigate(`/tours/nature-tours/walking-tours`)}
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

export default CyclingTours;
