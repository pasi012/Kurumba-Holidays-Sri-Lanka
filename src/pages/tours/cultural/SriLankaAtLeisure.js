import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useRef } from "react";

import { useNavigate } from "react-router-dom";

import aboutHero from "../../../assets/Temple-Stay.jpg";

import dhamma from "../../../assets/Sri Lanka at Leisure.jpg";
import sigiriya from "../../../assets/abhayagiri.jpg";
import kandy from "../../../assets/Heritage & Culture.jpg";
import temple from "../../../assets/Temple-Stay.jpg";

import related1 from "../../../assets/temple.jpg";
import related2 from "../../../assets/Sri Lanka Highlights Tour.jpg";
import related3 from "../../../assets/Special Tours To Sri Lanka.jpg";
import related4 from "../../../assets/Mini Tour Packages.jpg";
import related5 from "../../../assets/Exotic Sri Lanka.jpg";
import related6 from "../../../assets/Pearl Of The Indian Ocean.jpg";
import related7 from "../../../assets/Explore Sri Lanka.jpg";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

function SriLankaAtLeisure() {

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
                        SriLanka at Leisure
                    </h1>
                    <p
                        data-aos="fade-up"
                        data-aos-delay="150"
                        className="mt-4 sm:mt-6 max-w-full sm:max-w-2xl md:max-w-3xl text-sm sm:text-base md:text-lg"
                    >
                        Experience the heart of Sri Lanka through its culture and heritage.
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
                        Soak up the island’s magical charm as we, at Aitken Spence Travels whisk you away on some truly memorable Sri Lanka leisure tours. Enjoy visits to heritage sites marked by the legacies of ancient kings and treks in the cool climes of the island’s hill country. Set off on exciting wildlife safaris at some of the best nature reserves on the island, home to an abundance of wildlife including large herds of jumbos and elusive leopards.
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
                                <span>Day 01 - Airport | Kandalama</span>
                                <span>{day1 ? "−" : "+"}</span>
                            </button>

                            {day1 && (
                                <div className="space-y-4 px-6 py-6 text-gray-700 leading-relaxed">
                                    <p>
                                        Arrival and transfer to Kandalama.
                                    </p>

                                    <p>
                                        Savour a delectable dinner in Kandalama.
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
                                <span>Day 02 - Kandalama | Anuradhapura | Mihintale</span>
                                <span>{day2 ? "−" : "+"}</span>
                            </button>

                            {day2 && (
                                <div className="space-y-4 px-6 py-6 text-gray-700 leading-relaxed">
                                    <p>
                                        Breakfast in Kandalama.
                                        Transfer to Anuradhapura
                                    </p>

                                    <p>
                                        The city tour of Anuradhapura, the first capital of the country is a World Heritage Site and offers various ruins of ancient temples, palaces and more for visitors to take in. Many sites such as the Sacred Maha Bodi Tree which is over 2200 years old and the Ruwanweliseya, a famous dagoba in the Buddhist culture, offers an insightful glimpse to the religion and various schools of art which came into being. Other important attractions which one will get the chance to visit include the Isurumuniya Rock Temple which dates back to the third century BC. and the Samadhi Buddha statue.
                                    </p>

                                    <p>
                                        Transfer to Mihintale.
                                    </p>

                                    <p>
                                        Mihintale is where Buddhism was first introduced to the country and is regarded as the cradle of Buddhist culture in Sri Lanka. An ancient stairway hewn out of granite slabs leads to the summit from where one could get a splendid view of the surrounding countryside.
                                    </p>

                                    <p>
                                        On completion, transfer to Kandalama.
                                        Savour a delectable dinner in Kandalama.
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
                                <span>Day 03 - Kandalama | Polonnaruwa | Medirigiriya</span>
                                <span>{day3 ? "−" : "+"}</span>
                            </button>

                            {day3 && (
                                <div className="space-y-5 px-6 py-6 text-gray-700 leading-relaxed">

                                    <p>
                                        Breakfast in Kandalama.
                                    </p>

                                    <p>
                                        Thereafter, transfer to Polonnaruwa, yet another World Heritage Site, and take in the ruins of the Royal Palace and the Gal Viharaya, where four splendid statues of the Lord Buddha carved out of rock showcases the skills of artisans of the old.
                                    </p>

                                    <p>
                                        Transfer to Medirigiriya.
                                    </p>

                                    <p>
                                        Visit Medirigiriya temple, famous for its seventh-century Vatadage Temple which is situated on top of a low rocky point. Three concentric rows of pillars, making a total of 68, surround four large seated Buddha statues facing the four directions.
                                    </p>

                                    <p>
                                        On completion, transfer to Kandalama.
                                        Savour a delectable dinner in Kandalama.
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
                                <span>Day 04 - Kandalama | Sigiriya | Minneriya</span>
                                <span>{day4 ? "−" : "+"}</span>
                            </button>

                            {day4 && (
                                <div className="space-y-5 px-6 py-6 text-gray-700 leading-relaxed">

                                    <p>
                                        Breakfast in Kandalama.
                                    </p>

                                    <p>
                                        Transfer to Sigiriya.
                                    </p>

                                    <p>
                                        One of the most famous UNESCO World Heritage Sites in Sri Lanka, the Sigiriya Rock Fortress, dates backs to the fifth century BC, the onetime royal abode of King Kashyapa (477-495 AD). The fortress features moats, ramparts and extensive manicured grounds with the renowned water gardens taking centre stage. Among the special sites to take in include frescos, the mirror wall and the massive lion paw entrance leading up to the summit where ancient ruins of the palaces can be seen along with panoramic vistas of the surrounding region.
                                    </p>

                                    <p>
                                        Thereafter, transfer to Minneriya.
                                    </p>

                                    <p>
                                        Set off on a jeep safari to the Minneriya National Park, which covers an area of 8,889 hectares. The wetlands in this park have much national importance as its home to many kinds of endemic flora and fauna. About 160 species of birds, both local and migratory, have been spotted here along with nine amphibian species, 25 reptile species, 26 fish species and more than 78 species of butterflies.
                                    </p>

                                    <p>
                                        On completion, transfer to Kandalama.
                                    </p>

                                    <p>
                                        Savour a delectable dinner in Kandalama.
                                    </p>

                                    <p className="font-semibold">Overnight stay in Kandalama.</p>

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
                                <span>Day 05 - Kandalama | Dambulla | Matale | Kandy</span>
                                <span>{day5 ? "−" : "+"}</span>
                            </button>

                            {day5 && (
                                <div className="space-y-5 px-6 py-6 text-gray-700 leading-relaxed">

                                    <p>
                                        Breakfast in Kandalama.
                                    </p>

                                    <p>
                                        The 55-acre forest around the Kandalama tank thrives with medicinal plants along with a various types of birds. Around 90 species of birds including migrants - babbler, blue flycatcher, oriole, paradise flycatcher, warbler, wagtail, barbet, bee-eater, Brahmin kite, owl, teal, pelican, make their home here.
                                    </p>

                                    <p>
                                        Transfer to Dambulla.
                                    </p>

                                    <p>
                                        The Dambulla Cave Temple, yet another UNESCO World Heritage Site, is among the most visited tourist attractions on the island. The complex which consists of five caverns which showcases various paintings, sculptures and over 150 statues of Buddha among a host of other relics which dates back to the first century BC.
                                    </p>

                                    <p>
                                        Thereafter transfer to Matale.
                                    </p>

                                    <p>
                                        In Matale, visitors can take in a spice garden which the county has long since been famous for. Walk among thriving spice cultivations and learn about the manufacturing process. A cookery demonstration too will give you the chance to discover the tantalising taste of the Sri Lankan flavours.
                                    </p>

                                    <p>
                                        On completion, transfer to Kandy.
                                    </p>

                                    <p>
                                        Savour a delectable dinner in Kandy
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
                                <span>Day 06 - Kandy</span>
                                <span>{day6 ? "−" : "+"}</span>
                            </button>

                            {day6 && (
                                <div className="space-y-5 px-6 py-6 text-gray-700 leading-relaxed">

                                    <p>
                                        Breakfast in Kandy
                                    </p>

                                    <p>
                                        A visit to the city of Kandy will let visitors immerse themselves in the rich culture and sense of tradition that pervades it. Explore the bustling bazars and markets a burst with various exotic sights, smells and sounds. Take a stroll under the paved walkways bordering the picturesque Kandy Lake after which one can head to the Sri Dalada Maligawa, the temple that houses the Sacred Tooth Relic of the Lord Buddha to seek the blessing of the Triple Gem.
                                    </p>

                                    <p>
                                        Thereafter watch a cultural show.
                                    </p>

                                    <p>
                                        Savour a delectable dinner in Kandy
                                    </p>

                                    <p className="font-semibold">
                                        Overnight stay in kandy.
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
                                <span>Day 07 - Kandy | Pinnawala | Peradeniya</span>
                                <span>{day7 ? "−" : "+"}</span>
                            </button>

                            {day7 && (
                                <div className="space-y-5 px-6 py-6 text-gray-700 leading-relaxed">

                                    <p>
                                        Breakfast in Kandy.
                                        Thereafter transfer to Pinnawala.
                                    </p>

                                    <p>
                                        Stop by the Pinnawala Elephant Orphanage to interact with some majestic jumbos. Interact with playful baby elephants after their bottled feeding sessions, after which one can head down to the nearby river to watch the large herd enjoy a frolicking bath session.
                                    </p>

                                    <p>
                                        Transfer to Peradeniya.
                                    </p>

                                    <p>
                                        First built by Kandyan royalty for pleasure, the Peradeniya Botanical Garden sprawls across over 147 acres. The well tended manicured lawns features a variety of species of plants and flowers in full bloom along with a plethora of spice trees endemic to the island.
                                    </p>

                                    <p>
                                        On completion, transfer to Kandy.
                                    </p>

                                    <p>
                                        Savour a delectable dinner in Kandy
                                    </p>

                                    <p className="font-semibold">
                                        Overnight stay in kandy.
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
                                <span>Day 08 - Kandy | Tea Plantation | Nuwara Eliya | Kandapola</span>
                                <span>{day8 ? "−" : "+"}</span>
                            </button>

                            {day8 && (
                                <div className="space-y-5 px-6 py-6 text-gray-700 leading-relaxed">

                                    <p>
                                        Breakfast at the hotel.
                                    </p>

                                    <p>
                                        Thereafter, transfer to a Tea Plantation.
                                    </p>

                                    <p>
                                        Visit a tea plantation and walk around the lush slopes and observe how dedicated tea pluckers choose the best buds, which will later be processed to manufacture the world’s finest tea. Afterwards, our guests will get the chance to savour a freshly brewed cup of tea to end the excursion.
                                    </p>

                                    <p>
                                        Transfer to Nuwara Eliya.
                                    </p>

                                    <p>
                                        The little town of Nuwara Eliya is one of the most popular hill country getaways on the island. It offers fresh, invigorating mountain air, scenic vistas of misty mountains and verdant valleys to be appreciated. Sri Lanka’s highest mountain Piduruthalagala (8,282 feet) too is located here. A visit to the Victoria Golf Course, one of the finest golf links in South Asia too will prove to be an enjoyable experience
                                    </p>

                                    <p>
                                        Savour a delectable dinner in Nuwara Eliya.
                                    </p>

                                    <p className="font-semibold">
                                        Overnight stay in Kandapola.
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
                                <span>Day 09 - Kandapola | Horton Plains</span>
                                <span>{day9 ? "−" : "+"}</span>
                            </button>

                            {day9 && (
                                <div className="space-y-5 px-6 py-6 text-gray-700 leading-relaxed">

                                    <p>
                                        Breakfast in Nuwara Eliya
                                    </p>

                                    <p>
                                        Thereafter transfer to Horton Plains.
                                    </p>

                                    <p>
                                        Visit Horton Plains, which is located 2,134 metres above the sea level and offers diverse terrains to explore while trekking. The World’s End, an escarpment offers some spectacular views of the area. The sanctuary is also home to an abundance of wildlife such as leopards, sambhurs, endemic bear among many other species. It’s also home to over 20 endemic bird species including Sri Lanka’s whistling thrush, orange-billed babbler and yellow-eared bulbul.
                                    </p>

                                    <p>
                                        On completion transfer to Kandapola.
                                    </p>

                                    <p>
                                        Savour a delectable dinner in Nuwara Eliya.
                                    </p>

                                    <p className="font-semibold">
                                        Overnight stay in Kandapola.
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
                                <span>Day 10 - Kandapola | Bandarawela | Buduruwagala | Yala</span>
                                <span>{day10 ? "−" : "+"}</span>
                            </button>

                            {day10 && (
                                <div className="space-y-5 px-6 py-6 text-gray-700 leading-relaxed">

                                    <p>
                                        Breakfast in Nuwara Eliya
                                    </p>

                                    <p>
                                        Thereafter transfer to Bandarawela.
                                    </p>

                                    <p>
                                        Bandarawela located at an elevation of 4,000 feet, is a charming hill country getaway.
                                    </p>

                                    <p>
                                        Transfer to Buduruwagala.
                                    </p>

                                    <p>
                                        The great sculptures of Buduruwagala date back to the ninth or tenth century. The central figure of the Buddha is 51 feet (15.5 metres) from head to toe. One can take in the status by making your way through a jungle area after one emerges through the dark arch of the lush growth.
                                    </p>

                                    <p>
                                        Transfer from Buduruwagala to Yala.
                                    </p>

                                    <p>
                                        Embark on an exciting wildlife safari by jeep at the Yala National Park, the second largest national park in Sri Lanka. Stand the chance to catch a glimpse of elusive Ceylon leopard and watch large herds of elephants gather along watering holes while graceful spotted deer graze among wild grass.
                                    </p>

                                    <p>
                                        Savour a delectable dinner in Yala.
                                    </p>

                                    <p className="font-semibold">
                                        Overnight stay in Yala.
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
                                <span>Day 11 - Yala | Galle | Beach Hotel</span>
                                <span>{day11 ? "−" : "+"}</span>
                            </button>

                            {day11 && (
                                <div className="space-y-5 px-6 py-6 text-gray-700 leading-relaxed">

                                    <p>
                                        Breakfast in Yala
                                        Thereafter transfer to Galle.
                                    </p>

                                    <p>
                                        Take in the historic city of Galle, and its many attractions such as the Dutch Fort, a living UNECO World Heritage Site. Walk along the charming cobbled streets of the fortification and take in colonial buildings, churches and the sun-drenched ramparts from which some stunning views of the azure blue Indian Ocean can be enjoyed!
                                    </p>

                                    <p>
                                        On completion, transfer to a Beach hotel in Negombo or in the South coast
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
                                    &origin=Bandaranaike+International+Airport+Sri+Lanka
                                    &destination=Mirissa+Beach+Sri+Lanka
                                    &waypoints=
                                    Kandalama+Sri+Lanka|
                                    Anuradhapura+Sri+Lanka|
                                    Mihintale+Sri+Lanka|
                                    Polonnaruwa+Sri+Lanka|
                                    Medirigiriya+Vatadage|
                                    Sigiriya+Rock+Fortress|
                                    Minneriya+National+Park|
                                    Dambulla+Cave+Temple|
                                    Matale+Sri+Lanka|
                                    Temple+of+the+Tooth+Kandy|
                                    Pinnawala+Elephant+Orphanage|
                                    Peradeniya+Botanical+Garden|
                                    Tea+Plantation+Nuwara+Eliya|
                                    Nuwara+Eliya|
                                    Kandapola|
                                    Horton+Plains+National+Park|
                                    Bandarawela|
                                    Buduruwagala+Temple|
                                    Yala+National+Park|
                                    Galle+Fort"
                                />

                            </div>

                            {/* Route Info */}
                            <div className="route-info w-full h-[120px] lg:w-[300px] flex flex-col items-start gap-3 rounded-lg bg-gray-100 p-5 text-lg shadow">
                                <p><strong>Distance:</strong> ~1,240 km</p>
                                <p><strong>Driving Time:</strong> ~36–40 hours</p>
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
                                "Kandalama",
                                "Anuradhapura",
                                "Mihintale",
                                "Polonnaruwa",
                                "Medirigiriya",
                                "Sigiriya",
                                "Minneriya",
                                "Dambulla",
                                "Matale",
                                "Kandy",
                                "Pinnawala",
                                "Peradeniya",
                                "Nuwara Eliya",
                                "Kandapola",
                                "Horton Plains",
                                "Bandarawela",
                                "Buduruwagala",
                                "Yala National Park",
                                "Galle",
                                "Mirissa Beach"
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
                                        Cultural Highlights Tour
                                    </h3>
                                    <button
                                        onClick={() => navigate(`/tours/cultural/cultural-highlights-tour`)}
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
                                        Sri Lanka Highlights Tours
                                    </h3>
                                    <button
                                        onClick={() => navigate(`/tours/cultural/sri-lanka-highlights-tour`)}
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
                                        Special Tours To SriLanka
                                    </h3>
                                    <button
                                        onClick={() => navigate(`/tours/cultural/special-tours-to-sri-lanka`)}
                                        className="border-b-2 border-[#00A9C7] pb-1 text-sm uppercase tracking-widest text-[#00A9C7] hover:text-white">
                                        View Details
                                    </button>
                                </div>
                            </div>
                        </SwiperSlide>

                        {/* Slide 4 */}
                        <SwiperSlide>
                            <div className="group overflow-hidden rounded-xl shadow-lg">
                                <div className="relative h-[260px] overflow-hidden">
                                    <img
                                        src={related4}
                                        alt="Sri Lanka Highlights Tour"
                                        className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                                    />
                                </div>

                                <div className="bg-[#083A5E] p-6 text-center">
                                    <h3 className="mb-4 text-lg font-semibold text-white">
                                        Mini Tour Packages
                                    </h3>
                                    <button
                                        onClick={() => navigate(`/tours/cultural/mini-tour-packages`)}
                                        className="border-b-2 border-[#00A9C7] pb-1 text-sm uppercase tracking-widest text-[#00A9C7] hover:text-white">
                                        View Details
                                    </button>
                                </div>
                            </div>
                        </SwiperSlide>

                        {/* Slide 5 */}
                        <SwiperSlide>
                            <div className="group overflow-hidden rounded-xl shadow-lg">
                                <div className="relative h-[260px] overflow-hidden">
                                    <img
                                        src={related5}
                                        alt="Sri Lanka Highlights Tour"
                                        className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                                    />
                                </div>

                                <div className="bg-[#083A5E] p-6 text-center">
                                    <h3 className="mb-4 text-lg font-semibold text-white">
                                        Exotic Sri Lanka
                                    </h3>
                                    <button
                                        onClick={() => navigate(`/tours/cultural/exotic-sri-lanka`)}
                                        className="border-b-2 border-[#00A9C7] pb-1 text-sm uppercase tracking-widest text-[#00A9C7] hover:text-white">
                                        View Details
                                    </button>
                                </div>
                            </div>
                        </SwiperSlide>

                        {/* Slide 6 */}
                        <SwiperSlide>
                            <div className="group overflow-hidden rounded-xl shadow-lg">
                                <div className="relative h-[260px] overflow-hidden">
                                    <img
                                        src={related6}
                                        alt="Sri Lanka Highlights Tour"
                                        className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                                    />
                                </div>

                                <div className="bg-[#083A5E] p-6 text-center">
                                    <h3 className="mb-4 text-lg font-semibold text-white">
                                        Pearl Of The Indian Ocean
                                    </h3>
                                    <button
                                        onClick={() => navigate(`/tours/cultural/pearl-of-the-indian-ocean`)}
                                        className="border-b-2 border-[#00A9C7] pb-1 text-sm uppercase tracking-widest text-[#00A9C7] hover:text-white">
                                        View Details
                                    </button>
                                </div>
                            </div>
                        </SwiperSlide>

                        {/* Slide 7 */}
                        <SwiperSlide>
                            <div className="group overflow-hidden rounded-xl shadow-lg">
                                <div className="relative h-[260px] overflow-hidden">
                                    <img
                                        src={related7}
                                        alt="Sri Lanka Highlights Tour"
                                        className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                                    />
                                </div>

                                <div className="bg-[#083A5E] p-6 text-center">
                                    <h3 className="mb-4 text-lg font-semibold text-white">
                                        Explore Sri Lanka
                                    </h3>
                                    <button
                                        onClick={() => navigate(`/tours/cultural/explore-sri-lanka`)}
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

export default SriLankaAtLeisure;
