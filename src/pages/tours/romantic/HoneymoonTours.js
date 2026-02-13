import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useRef } from "react";

import { useNavigate } from "react-router-dom";

import aboutHero from "../../../assets/honeymoon.jpg";

import dhamma from "../../../assets/honeymoon1.jpg";
import sigiriya from "../../../assets/honeymoon.jpg";
import kandy from "../../../assets/honeymoon2.jpg";
import temple from "../../../assets/honeymoon3.jpg";

import related1 from "../../../assets/wedding.jpg";
import related2 from "../../../assets/RomanticEscape.jpg";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

function HoneymoonTours() {

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
                        Honeymoon Tours
                    </h1>
                    <p
                        data-aos="fade-up"
                        data-aos-delay="150"
                        className="mt-4 sm:mt-6 max-w-full sm:max-w-2xl md:max-w-3xl text-sm sm:text-base md:text-lg"
                    >
                        Honeymoon in Paradise.
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
                        Plan the most romantic island escape with our Sri Lanka honeymoon tour! Indulge in a romantic getaway unlike any other and make treasured memories which will last a life time. Our package offers you the perfect chance to immerse yourself in a magical island experience while offering you the chance to experience luxurious stays at premier resorts, visit top attractions and more.
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
                                <p className="text-xl font-bold">10 Days / 09 Nights</p>
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
                                <span>Day 01 - Pinnawala | Kandalama</span>
                                <span>{day1 ? "−" : "+"}</span>
                            </button>

                            {day1 && (
                                <div className="space-y-4 px-6 py-6 text-gray-700 leading-relaxed">
                                    <p>
                                        Greet, meet and assistance at the Colombo International Airport and proceed to Pinnawala
                                    </p>

                                    <p>
                                        The Pinnawala Elephant Orphanage provides visitors with the best chance of seeing a large number of elephants at close quarters. Established in the year 1975, the sanctuary first provided care to seven orphaned elephants and since then has expanded to house over 70 elephants in need of rehabilitation. The highlight of the visit will undoubtably be adorable baby elephants being bottled fed and the daily bath sessions the herd enjoys twice a day.
                                    </p>

                                    <p>
                                        Proceed to Kandalama and leisure in the evening…
                                    </p>

                                    <p>
                                        Enjoy a unique and a special cave dinner in Kandalama. By the light of flaming torches and candle lanterns, serenaded by a lone flautist, this dinner is sure to bring out the romance in your soul. Crossing the small bridge by the enormous banyan tree, your waiter delivers a succession of gourmet delights such as charcoal-grilled peppered prawns, grilled tournedos of beef on red wine sauce along with black and white chocolate marquise. Stone Age style dining, this is not!
                                    </p>

                                    <p>
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
                                <span>Day 02 - Kandalama | Sigiriya | Kandalama</span>
                                <span>{day2 ? "−" : "+"}</span>
                            </button>

                            {day2 && (
                                <div className="space-y-4 px-6 py-6 text-gray-700 leading-relaxed">
                                    <p>
                                        After breakfast proceed to Sigiriya
                                    </p>

                                    <p>
                                        Climb the fifth century Sigiriya Rock Fortress, built by King Kashyapa (477-495 AD). The ''Lion Rock'' is a citadel of unusual beauty rising 200 metres from the scrub jungle. The rock was the innermost stronghold of the 70-hectare fortified town. A moat, rampart, and extensive lawns including the renowned water gardens decorate the base of the rock. Visit the world-renowned frescoes of the ''Cloud Maidens'' of Sigiriya, nestled in a sheltered pocket of the rock approached by a spiral stairway.
                                    </p>

                                    <p>
                                        In sacred city of Anuradhapura lies the cradle of Buddhism in Sri Lanka, as the stone carvings and unending stairways proclaim a legacy which hinges the philosophy preached by the Lord Buddha.
                                    </p>

                                    <p>
                                        Towards the end of the evening, indulge in a couple’s spa treatments to help rejuvenate mind, body, and soul. The special Aphrodite mix of essential oils sets the mood, while chocolates, fruits, and a bottle of Champagne completes the experience.
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
                                <span>Day 03 - Kandalama | Matale | Kandy</span>
                                <span>{day3 ? "−" : "+"}</span>
                            </button>

                            {day3 && (
                                <div className="space-y-5 px-6 py-6 text-gray-700 leading-relaxed">

                                    <p>
                                        Breakfast at hotel
                                    </p>

                                    <p>
                                        Pay a visit to a spice garden in Matale, to learn more about the various spices that the island of Sri Lanka has long since been famous for. Here you will be able to learn about the cultivation process and more.
                                    </p>

                                    <p>
                                        A World Heritage Site, the hill city of the Kandy embodies a vibrant culture and unique traditions steeped in rich history and heritage. Visitors will be able to take in the Sri Dalada Maligawa, the Temple of the Sacred Tooth Relic and seek the blessings of the Triple Gem. Take a stroll under shady pathways bordering the Kandy Lake and head towards the market to shop at the local bazar and arts & crafts centre along with a visit to a gem museum / lapidary.
                                    </p>

                                    <p>
                                        Thereafter, enjoy a cultural show.
                                    </p>

                                    <p>
                                        Savour a delectable dinner at a hotel in Kandy.
                                    </p>

                                    <p className="font-semibold">Overnight stay in kandy.</p>

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
                                <span>Day 04 - Kandy | Peradeniya | Nuwara Eliya</span>
                                <span>{day4 ? "−" : "+"}</span>
                            </button>

                            {day4 && (
                                <div className="space-y-5 px-6 py-6 text-gray-700 leading-relaxed">

                                    <p>
                                        Breakfast at hotel
                                    </p>

                                    <p>
                                        Visit Peradeniya Botanical Garden.
                                    </p>

                                    <p>
                                        Sprawling across 147 acres, the Peradeniya Botanical Gardens is a walker’s paradise which offers an enjoyable break from bustling streets of the city. Replete with manicured lawns, well-tended pavilions, fernery, flowerbeds bursting with colourful blooms, the site is a definite visit if one is exploring Kandy. The highlights of this attraction are the orchid house and the giant Javan fig tree.
                                    </p>

                                    <p>
                                        Proceed to Nuwara Eliya by Train. Feast your eyes on the scenic views from the comfort of your observation carriage. Enjoy a unique dining experience on board as the train winds its way through the mountain valleys. Your car will be waiting for you at Nanu Oya, the last station before Nuwara Eliya, after which you can proceed to the town by car.
                                    </p>

                                    <p>
                                        Savour a delectable dinner at a hotel in Nuwara Eliya.
                                    </p>

                                    <p className="font-semibold">Overnight stay in Nuwara Eliya.</p>

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
                                <span>Day 05 - Nuwara Eliya</span>
                                <span>{day5 ? "−" : "+"}</span>
                            </button>

                            {day5 && (
                                <div className="space-y-5 px-6 py-6 text-gray-700 leading-relaxed">

                                    <p>
                                        Breakfast at the hotel.
                                    </p>

                                    <p>
                                        Visit a sprawling tea estate and factory, where you will be able to learn how the finest tea in the world is made. Wander among slopes carpeted with lush tea bushes and watch how the delicate buds are plucked, processed graded and packaged. Finish the tour with a freshly brewed cup of fragrant Ceylon tea while enjoying the scenic views.
                                    </p>

                                    <p>
                                        Tour Nuwara Eliya.
                                    </p>

                                    <p>
                                        Nuwara Eliya, with its refreshing mountain air and picturesque vistas, offers visitors the most welcoming getaway from the tropical heat down by the coast. Take a stroll along the banks of Lake Gregory, after which you and yours significant other can take in the emerald links of the Victoria Golf Course, a Donald Steele masterpiece, which is among the finest courses 18-hole golf courses in South Asia. Indulge in some freshly picked strawberries at a local strawberry farm while learning about the local harvesting systems.
                                    </p>

                                    <p>
                                        Savour a delectable dinner at a hotel in Nuwara Eliya.
                                    </p>

                                    <p className="font-semibold">Overnight stay in Nuwara Eliya.</p>

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
                                <span>Day 06 - Nuwara Eliya | Yala</span>
                                <span>{day6 ? "−" : "+"}</span>
                            </button>

                            {day6 && (
                                <div className="space-y-5 px-6 py-6 text-gray-700 leading-relaxed">

                                    <p>
                                        Breakfast at the hotel.
                                    </p>

                                    <p>
                                        Transfer from Nuwara Eliya to Yala
                                    </p>

                                    <p>
                                        Check-in to a Yala hotel.
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
                                <span>Day 07 - Yala | Bentota</span>
                                <span>{day7 ? "−" : "+"}</span>
                            </button>

                            {day7 && (
                                <div className="space-y-5 px-6 py-6 text-gray-700 leading-relaxed">

                                    <p>
                                        Early morning safari in Yala
                                    </p>

                                    <p>
                                        Spanning across 1,259 square kilometres, the Yala National Park is the second largest nature reserve on the island. Located in the Southeast corner, the sanctuary is also home to large herds of wild elephants, wild boars, buffaloes, deer, and crocodiles. It’s also one of the best places to catch a glimpse of the famous Sri Lankan leopard. Bird lovers also can enjoy a spot of bird watching as well!
                                    </p>

                                    <p>
                                        After breakfast proceeds to Bentota for your beach stay. Escape to a secluded heaven.
                                    </p>

                                    <p>
                                        Savour a delectable dinner at a hotel in Bentota.
                                    </p>

                                    <p className="font-semibold">
                                        Overnight stay in Bentota.
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
                                <span>Day 08 - Bentota | Mirissa | Bentota</span>
                                <span>{day8 ? "−" : "+"}</span>
                            </button>

                            {day8 && (
                                <div className="space-y-5 px-6 py-6 text-gray-700 leading-relaxed">

                                    <p>
                                        Start your day early and head to the chic little coastal town of Mirissa. Pristine beaches framed by swaying palm trees kissed by warm azure blue ocean awaits our guests. It’s also among the top hot spots to catch sight of some majestic blue and sperm whales emerging out of the depths just of the coast. You will also be able to watch the frolicking antics of large pods of spinner, bottlenose and striped dolphins as well!
                                    </p>

                                    <p>
                                        Rest of the day at leisure.
                                    </p>

                                    <p>
                                        Savour a delectable dinner at a hotel in Bentota.
                                    </p>

                                    <p className="font-semibold">
                                        Overnight stay in Bentota.
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
                                <span>Day 09 - Bentota | Galle | Madu River Safari | Colombo</span>
                                <span>{day9 ? "−" : "+"}</span>
                            </button>

                            {day9 && (
                                <div className="space-y-5 px-6 py-6 text-gray-700 leading-relaxed">

                                    <p>
                                        Breakfast at the hotel.
                                    </p>

                                    <p>
                                        Tour Galle
                                    </p>

                                    <p>
                                        Head to the historic city of the Galle, where you will get the chance to wander around the UNESCO World Heritage Site, the Dutch Fort. Walk along its cobbled streets lined with carefully preserved colonial buildings, shop at chic little concept stores and pay a visit to the Dutch Church and Museum to learn about the fortification’s rich history.
                                    </p>

                                    <p>
                                        Boat Ride in Madu River
                                    </p>

                                    <p>
                                        Enjoy a serene boat ride down the tranquil, Madu River located in the Southwest of Sri Lanka, which flows to the city of Balapitiya. Bask under the warm tropical sun, as you take in the thriving wildlife inhabiting the shady mangroves which border the water way. Visitors will also be able to visit tiny islands located on the river along with a cinnamon plantation which will give you an insight into the local community.
                                    </p>

                                    <p>
                                        Proceed to Colombo.
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
                                <span>Day 10 - Airport</span>
                                <span>{day10 ? "−" : "+"}</span>
                            </button>

                            {day10 && (
                                <div className="space-y-5 px-6 py-6 text-gray-700 leading-relaxed">

                                    <p>
                                        Breakfast at the hotel.
                                    </p>

                                    <p>
                                        Transfer from Colombo to Airport
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
                                    &waypoints=Pinnawala+Elephant+Orphanage|
                                                Kandalama|
                                                Sigiriya|
                                                Matale|
                                                Kandy|
                                                Peradeniya|
                                                Nuwara+Eliya|
                                                Yala|
                                                Bentota|
                                                Mirissa|
                                                Galle|
                                                Madu+River+Safari|
                                                Colombo
                                `.replace(/\s+/g, '+')}
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
                                "Kandalama",
                                "Sigiriya",
                                "Kandalama",
                                "Matale",
                                "Kandy",
                                "Kandy",
                                "Peradeniya",
                                "Nuwara Eliya",
                                "Nuwara Eliya",
                                "Yala",
                                "Yala",
                                "Bentota",
                                "Bentota",
                                "Mirissa",
                                "Bentota",
                                "Galle",
                                "Madu River Safari",
                                "Colombo",
                                "Airport"
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
                                        Romantic Escape
                                    </h3>
                                    <button
                                        onClick={() => navigate(`/tours/romantic/romantic-escape`)}
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

export default HoneymoonTours;
