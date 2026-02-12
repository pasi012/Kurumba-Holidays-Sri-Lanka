import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useRef } from "react";

import { useNavigate } from "react-router-dom";

import aboutHero from "../../../assets/awkana.jpg";

import dhamma from "../../../assets/Pearl Of The Indian Ocean.jpg";
import sigiriya from "../../../assets/awkana.jpg";
import kandy from "../../../assets/sathmahala.jpg";
import temple from "../../../assets/gal-wiharaya.jpg";

import related1 from "../../../assets/temple.jpg";
import related2 from "../../../assets/Sri Lanka Highlights Tour.jpg";
import related3 from "../../../assets/Special Tours To Sri Lanka.jpg";
import related4 from "../../../assets/Mini Tour Packages.jpg";
import related5 from "../../../assets/Exotic Sri Lanka.jpg";
import related6 from "../../../assets/Sri Lanka at Leisure.jpg";
import related7 from "../../../assets/Explore Sri Lanka.jpg";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

function PearlOfTheIndianOcean() {

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
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${aboutHero})` }}
                />
                <div className="absolute inset-0 bg-black/60" />

                <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white">
                    <h1
                        data-aos="fade-up"
                        className="text-3xl sm:text-4xl md:text-5xl lg:text-4xl font-extrabold leading-tight"
                    >
                        Pearl Of The Indian Ocean
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
                        Sri Lanka is a country that ignites travellers senses with its natural beauty, rich culture, and incredibly hospitable people. Find out just why this paradise isle is known as the Pearl of the Indian Ocean as we offer some truly memorable Sri Lanka vacation packages with excursions to the Cultural Triangle, the verdant peaks of the Hill Country and to pristine sun drenched shores of the famed Southern Coast.
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
                                <span>Day 01 - Airport | Pinnawala | Kandalama</span>
                                <span>{day1 ? "−" : "+"}</span>
                            </button>

                            {day1 && (
                                <div className="space-y-4 px-6 py-6 text-gray-700 leading-relaxed">
                                    <p>
                                        Arrival and transfer to Pinnawala.
                                    </p>

                                    <p>
                                        Visit the Elephant Orphanage at Pinnawala.
                                    </p>

                                    <p>
                                        Interact with playful jumbo and watch how adorable baby elephants are bottle fed at the Pinnawala Elephant Orphanage. Established in the year 1975, the sanctuary provides care and rehabilitates orphaned or injured elephants. The highlight of the visit is, of course, the feedings which take place daily at 09:15 am, 12:15 pm & 05:00 pm. The river bath, the herd indulges in twice a day at 10:00 am & 02:00 pm makes for a must see experience!
                                    </p>

                                    <p>
                                        Lunch in Pinnawala.
                                    </p>

                                    <p>
                                        Thereafter transfer to Kandalama.
                                    </p>

                                    <p>
                                        Savour a delectable dinner in Kandalama
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
                                <span>Day 02 - Kandalama | Anuradhapura | Mihintale | Aukana | Kandalama</span>
                                <span>{day2 ? "−" : "+"}</span>
                            </button>

                            {day2 && (
                                <div className="space-y-4 px-6 py-6 text-gray-700 leading-relaxed">
                                    <p>
                                        BAfter breakfast transfer to Anuradhapura.
                                    </p>

                                    <p>
                                        Take a city tour of Anuradhapura.
                                    </p>

                                    <p>
                                        Transfer to Mihintale.
                                    </p>

                                    <p>
                                        Commanding a rich Sri Lankan heritage, Anuradhapura - one of the greatest and oldest civilizations in the world spanning over 1,300 years in its peak. The jewel of its crown is certainly the Sri Maha Bodhi - the sacred Bo sapling extracted from the tree under which Lord Buddha attained enlightenment - standing more than 2,200 years in its pride. Stroll through the sacred trails of the venerated city to adore the legacy that interweaves a distinguished culture and heritage.
                                    </p>

                                    <p>
                                        Lunch in Anuradhapura.
                                        Thereafter, transfer to Mihintale.
                                    </p>

                                    <p>
                                        Just 16km off the sacred city of Anuradhapura lies the cradle of Buddhism, Mihintale. It’s the sacred site where Arahath Mahinda preached the first Buddhist sermon to King Devanampiya Thissa on a Poson.(a full moon night). Upon visiting, walk pass a massive fountain and head towards the renowned staircase of the temple. Feel the coolness of granite slabs as you take in the the ruins of a hospital and the Kantaka Stupa built in first century B.C.The highlights of this location are the Maha Seya - the main dagoba - and Aradhana Gala, the peak of the rock assuring breathtaking viewpoints of the Kingdom of Lakes, Anuradhapura.
                                    </p>

                                    <p>
                                        On completion transfer to Kandalama.
                                    </p>

                                    <p>
                                        Savour a delectable dinner in Kandalama
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
                                <span>Day 03 - Kandalama | Polonnaruwa | Sigiriya</span>
                                <span>{day3 ? "−" : "+"}</span>
                            </button>

                            {day3 && (
                                <div className="space-y-5 px-6 py-6 text-gray-700 leading-relaxed">

                                    <p>
                                        Breakfast in Kandalama.
                                    </p>

                                    <p>
                                        Thereafter, transfer to Polonnaruwa.
                                    </p>

                                    <p>
                                        Do a city tour of Polonnaruwa. Rising with the decline of Anuradhapura, the city of Polonnaruwa - medieval capital & crown jewel of King Parakramabahu I - remains superior proof of ancient culture & heritage blended with religious beliefs. Walk across its scattered walls of the World Heritage Site - blessed by stupas, resting Buddha statues, irrigation canals, and fantastically carved Hindu sculptures - while observing the relic house - Watadage - which boasts of beautiful stone carvings.
                                    </p>

                                    <p>
                                        Transfer to Sigiriya. Climb the fifth century Sigiriya Rock Fortress.
                                    </p>

                                    <p>
                                        The fifth century rock citadel of King Kasyapa and World Heritage Site - Sigiriya - doesn't only boasts of ancient Sri Lankan engineering & urban planning supremacy but also acclaims to be one of the finest monuments of art & culture. Step through the gigantic 'Lion Paws' - overlooking the symmetrical royal gardens below - to comprehend the absolute splendour that once dominated this rock fortress. Surrounded by ramparts & moats the Lion Rock - resembling the mythological 'City of Gods' - is decorated with frescoes that relate to Gupta style paintings found in Ajanta caves of India.
                                    </p>

                                    <p>
                                        Walk in the shade of an eminent 'mirror wall' embracing the Western face of Sigiriya representing an artistic hundred meters laminated with graffiti. Wander into the well-fabricated museum downstairs to learn more about the epic saga this location lays claim to.
                                    </p>

                                    <p>
                                        On completion transfer to Kandalama.
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
                                        Breakfast in Kandalama
                                    </p>

                                    <p>
                                        Transfer to Dambulla.
                                    </p>

                                    <p>
                                        Explore the Dambulla Cave Temple, one of the most visited tourist attractions on the island, which also happens to be UNESCO World Heritage Site. With a history dating back to the first century BC. the complex which consists of five caves showcase intricately painted murals on the rock interface, over 150 statues of the Lord Buddha and various other artefacts and more!
                                    </p>

                                    <p>
                                        Thereafter transfer to Matale.
                                    </p>

                                    <p>
                                        An agricultural zone in the Central Province, Matale seldom drops off the maps due to its remarkable contribution through flagship crops of the island extending from tea, rubber & vegetables to spices. Stop by the side of a spice garden - into which you will be most welcome - and learn about the therapeutic values of spices & various regional cultivation processes over a refreshing cup of herbal tea!
                                    </p>

                                    <p>
                                        On completion, continue to Kandy.
                                    </p>

                                    <p>
                                        Lunch in Kandy.
                                    </p>

                                    <p>
                                        Immerse yourself in the vibrant culture and rich tradition that pervades the city of Kandy. Take a lazy stroll along the shady pathways bordering the Kandy Lake and pay a visit to the Sri Dalada Maligawa, the sacred temple which houses the tooth relic of the Lord Buddha. Experience true spirituality and seek blessing from the triple gem. After which one can take to the winding streets of the city and take in the bustling markets filled with a cacophony of exotic sights, smells, and colours. End your evening to the beat of drumming and more at an engaging cultural shore which offers you a tantalising glimpse into our culture.
                                    </p>

                                    <p>
                                        Savour a delectable dinner in Kandy
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
                                <span>Day 05 - Kandy | Peradeniya | Nuwara Eliya | Kandapola</span>
                                <span>{day5 ? "−" : "+"}</span>
                            </button>

                            {day5 && (
                                <div className="space-y-5 px-6 py-6 text-gray-700 leading-relaxed">

                                    <p>
                                        Breakfast at the hotel.
                                        Transfer to Peradeniya.
                                    </p>

                                    <p>
                                        First developed as a pleasure garden under royalty and later harmonized by the British, the Royal Botanical Gardens of Peradeniya is a flourishing national asset. Wander around the finely manicured 147 acre ground and take in terraced pavilions and an octagon conservatory. Towards the North of the entrance, a café offers refreshments to indulge in while taking in the sights. After which you can take a closer look at the famous orchid houses and giant Javan fig tree, charming high lights of the gardens in their own right.
                                    </p>

                                    <p>
                                        Thereafter, transfer to Nuwara Eliya.
                                    </p>

                                    <p>
                                        Lunch in Ramboda
                                    </p>

                                    <p>
                                        Continue to Nuwara Eliya.
                                    </p>

                                    <p>
                                        Take in the quaint little town of Nuwara Eliya and enjoy its old world charm. Walk around lush tea estates and watch how the delicate buds are picked and later processed in factories to create the world’s finest tea. Relax by the banks of Lake Gregory and breath in the invigorating mountain air!
                                    </p>

                                    <p>
                                        On completion, transfer to Kandapola.
                                    </p>

                                    <p className="font-semibold">Overnight stay in Kandapola.</p>

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
                                <span>Day 06 - Kandapola | Udawalawe</span>
                                <span>{day6 ? "−" : "+"}</span>
                            </button>

                            {day6 && (
                                <div className="space-y-5 px-6 py-6 text-gray-700 leading-relaxed">

                                    <p>
                                        Breakfast at the hotel.
                                    </p>

                                    <p>
                                        Then transfer to Udawalawe.
                                    </p>

                                    <p>
                                        Embark on an exciting safari at The Udawalawe National Park by jeep. Marked by relatively large herds of elephants, the national park proves to be one of the best places one could observe them in their natural habitat. Be ready to spot other species - such as spotted deer, barking deer, water buffalo and jackal that call the reserve home.
                                    </p>

                                    <p>
                                        Meanwhile, Udawalawe Elephant Transit Home bears a different story. Established in 1995, it caters to all injured elephants found in the area before releasing them into their natural habitat. So, make sure to just watch - rather than touch - these gentle giants as they feed, play and mingle with each other.
                                    </p>

                                    <p className="font-semibold">
                                        Overnight stay in Udawalawe.
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
                                <span>Day 07 - Ahungalla</span>
                                <span>{day7 ? "−" : "+"}</span>
                            </button>

                            {day7 && (
                                <div className="space-y-5 px-6 py-6 text-gray-700 leading-relaxed">

                                    <p>
                                        Breakfast at the hotel.
                                    </p>

                                    <p>
                                        Set off on a relaxing boat ride in Madhu River and make a brief stop at Kotu Duwa, a small island housing a temple that dates back to ancient times. Relish the cool shade provided by mangrove which shelters an array of flora and fauna including over 70 species of freshwater fish.
                                    </p>

                                    <p className="font-semibold">
                                        Overnight stay in Ahungalla.
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
                                <span>Day 08 - Mirissa | Ambalangoda | Kosgoda</span>
                                <span>{day8 ? "−" : "+"}</span>
                            </button>

                            {day8 && (
                                <div className="space-y-5 px-6 py-6 text-gray-700 leading-relaxed">

                                    <p>
                                        Rise before the sun and leave for Mirissa
                                    </p>

                                    <p>
                                        The chic little town of Mirissa, a beach side haven which offers travellers a quintessential tropical holiday. It’s also famed for being among the 'Top Hot Spots' for Sperm and Blue whale sightings. Some of the types of marine life you might catch a sight of include blue whales, sperm whales, common dolphins, bottlenose dolphins, spinner dolphins, Risso's dolphins, and striped dolphins.
                                    </p>

                                    <p>
                                        Visit the mask factory in Ambalangoda.
                                    </p>

                                    <p>
                                        Faces carved into perfection on solid wood and painted cobra hoods are common sites along the seaside suburbs of Ambalangoda. Visit the mask museum - or simply stop by at workshop abuzz with cutting, moulding and painting masks. You might also be able to tune into the mysteries that surround Ambalangoda's heritage of mask making, that acts as the backdrop of folk dances and rituals which takes place across the country.
                                    </p>

                                    <p>
                                        Visit Kosgoda Turtle Hatchery.
                                    </p>

                                    <p>
                                        Kosgoda is a vibrant tourist destination sitting calm along the Southern coast of Sri Lanka. Apart from its various traditional industries of fishing and cinnamon cultivation, the area is famous for its Sea Turtle Conservation Project.
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
                                <span>Day 09 - Colombo | Airport</span>
                                <span>{day9 ? "−" : "+"}</span>
                            </button>

                            {day9 && (
                                <div className="space-y-5 px-6 py-6 text-gray-700 leading-relaxed">

                                    <p>
                                        After breakfast transfer to the Airport for departure.
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
                                    &destination=Bandaranaike+International+Airport+Sri+Lanka
                                    &waypoints=
                                    Pinnawala+Elephant+Orphanage|
                                    Kandalama+Sri+Lanka|
                                    Anuradhapura+Sri+Lanka|
                                    Mihintale+Sri+Lanka|
                                    Aukana+Buddha+Statue|
                                    Kandalama+Sri+Lanka|
                                    Polonnaruwa+Sri+Lanka|
                                    Sigiriya+Rock+Fortress|
                                    Dambulla+Cave+Temple|
                                    Matale+Sri+Lanka|
                                    Kandy+Sri+Lanka|
                                    Peradeniya+Botanical+Garden|
                                    Nuwara+Eliya+Sri+Lanka|
                                    Kandapola+Sri+Lanka|
                                    Udawalawe+National+Park|
                                    Ahungalla+Sri+Lanka|
                                    Mirissa+Beach+Sri+Lanka|
                                    Ambalangoda+Sri+Lanka|
                                    Kosgoda+Sri+Lanka|
                                    Colombo+Sri+Lanka"
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
                                "Pinnawala",
                                "Kandalama",
                                "Anuradhapura",
                                "Mihintale",
                                "Aukana",
                                "Polonnaruwa",
                                "Sigiriya",
                                "Dambulla",
                                "Matale",
                                "Kandy",
                                "Peradeniya",
                                "Nuwara Eliya",
                                "Kandapola",
                                "Udawalawe",
                                "Ahungalla",
                                "Mirissa",
                                "Ambalangoda",
                                "Kosgoda",
                                "Colombo",
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
                                        Sri Lanka at Leisure
                                    </h3>
                                    <button
                                        onClick={() => navigate(`/tours/cultural/sri-lanka-at-leisure`)}
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

export default PearlOfTheIndianOcean;
