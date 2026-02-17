import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useRef } from "react";

import { useNavigate } from "react-router-dom";

import aboutHero from "../../../assets/yala-national-park2.jpg";

import dhamma from "../../../assets/baer.jpg";
import sigiriya from "../../../assets/bundala-national-park1.jpg";
import kandy from "../../../assets/bundala-national-park2.jpg";
import temple from "../../../assets/wilpaththu.jpg";

import related1 from "../../../assets/cycletour.jpg";
import related2 from "../../../assets/adventuretours.jpg";
import related3 from "../../../assets/WalkingTours3.jpg";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

function WildLifeTour() {

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
                        Wild Life Tour
                    </h1>
                    <p
                        data-aos="fade-up"
                        data-aos-delay="150"
                        className="mt-4 sm:mt-6 max-w-full sm:max-w-2xl md:max-w-3xl text-sm sm:text-base md:text-lg"
                    >
                        Beyond Wildlife — Into Sri Lanka’s Heart
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
                        Explore the spectacular beauty of nature in Sri Lanka and create memories that will last a lifetime. Kurumba Holidays Sri Lanka offers comprehensive Sri Lanka nature tours that provide ample opportunities to witness the marvellous appeal of this land’s flourishing wildlife. Discover the country’s many remarkable national parks like Yala, Wilpattu, Minneriya, Kaudulla, and Gal Oya and treat yourself to a truly unforgettable holiday experience!
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
                                <span>Day 01 - Negombo</span>
                                <span>{day1 ? "−" : "+"}</span>
                            </button>

                            {day1 && (
                                <div className="space-y-4 px-6 py-6 text-gray-700 leading-relaxed">
                                    <p>
                                        You will be arriving at the Bandaranaike International Airport in Katunayake where a representative of Kurumba Holidays Sri Lanka will meet you.
                                    </p>

                                    <p>
                                        Transfer to the city of Negombo. Check-in at the hotel and rest by the gorgeous sea while preparing for your exciting adventure!
                                    </p>

                                    <p>
                                        Negombo is a city that is tinged with the charm of a diverse ethnicity. You will find many beautiful churches across its territories. The beach here is also immensely famous.
                                    </p>

                                    <p>
                                        A delicious seafood dinner by the ocean will be served at a hotel in Negombo.
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
                                <span>Day 02 - Wilpattu National Park</span>
                                <span>{day2 ? "−" : "+"}</span>
                            </button>

                            {day2 && (
                                <div className="space-y-4 px-6 py-6 text-gray-700 leading-relaxed">
                                    <p>
                                        Have breakfast at your hotel and visit the famous fishing market in Negombo, which is very active in the morning.
                                    </p>

                                    <p>
                                        You will then leave the hotel and go to the world famous Wilpattu National Park. Witness the magical beauty of the ‘willus’, which are sand rimmed basins that naturally collect groundwater and provide refreshing habitats for reptiles and birds in the region.
                                    </p>

                                    <p>
                                        Many species of animals can be witnessed within the territories of Wilpattu National Park and among these, the Sri Lankan sloth bear takes a prominent place. You will also come across many archaeological sites of interest here including the ruins of what is known as the Palace of Kuweni. When the evening comes, take a safari tour to see the white sands of the national park. You may witness leopards lazing upon the dazzling sands so come prepared with your cameras!
                                    </p>

                                    <p>
                                        Return to your campsite and enjoy a delicious barbeque dinner and an overnight stay at a campsite.
                                    </p>

                                    <p className="font-semibold">Overnight stay near Wilpattu National Park.</p>

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
                                <span>Day 03 - Wilpattu National Park | Anuradhapura</span>
                                <span>{day3 ? "−" : "+"}</span>
                            </button>

                            {day3 && (
                                <div className="space-y-5 px-6 py-6 text-gray-700 leading-relaxed">

                                    <p>
                                        Witness the ethereal charm of the Wilpattu National Park in the golden light of the morning sun. Many herds of deer are quite commonly spotted in the early hours of the day. You will also see flocks of birds flying in the brilliant blue skies, welcoming the new day with their songs of joy. You can spend a few hours in the park looking out for sloth bears and leopards.
                                    </p>

                                    <p>
                                        Return to the campsite to have your breakfast. Take a shower and prepare to leave for Anuradhapura. You will be enjoying an idyllic cycling tour through this city, passing paddy fields and manmade reservoirs to reach the ancient city. Here you will find the Jaya Sri Maha Bodhi, which originated from a branch of the sacred bo tree in India under which Lord Buddha attained enlightenment. A few pagodas, ancient ruins as well as a local village will be included in the tour.
                                    </p>

                                    <p>
                                        In spite of the direct rays of the sun, you will find yourself thoroughly enjoying this bike tour as you will be riding along a shaded tarmac road. You can cool off with a refreshing drink of king coconut too!
                                    </p>

                                    <p>
                                        Return to the hotel in Anuradhapura and enjoy your dinner in a large garden amidst serenity and an old world charm.
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
                                <span>Day 04 - Hiriwadunna Village | Minneriya National Park</span>
                                <span>{day4 ? "−" : "+"}</span>
                            </button>

                            {day4 && (
                                <div className="space-y-5 px-6 py-6 text-gray-700 leading-relaxed">

                                    <p>
                                        Relish a delicious breakfast at your hotel and travel to the local village of Hiriwadunna. Witness the charming simplicity of the lives of the locals while exploring historic manmade reservoirs. Traverse across the village by foot and savour mouth watering traditional fare prepared by the locals. A delightful catamaran ride will complete your tour of the village.
                                    </p>

                                    <p>
                                        In the afternoon, you will visit the Minneriya National Park which is quite famous for its large herds of elephants. Quite a number of visitors have very close encounters with these majestic giants of the jungles in this national park. There are many species of mammals, birds, butterflies, and fish in the region and you will most likely come across a good sample of these during the tour.
                                    </p>

                                    <p>
                                        After your safari return to your hotel in Dehigaha Ela, Sigiriya which is a tranquil nature resort.
                                    </p>

                                    <p className="font-semibold">Overnight stay in Dehigaha Ela.</p>

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
                                <span>Day 05 - Minneriya National Park | Kaudulla National Park</span>
                                <span>{day5 ? "−" : "+"}</span>
                            </button>

                            {day5 && (
                                <div className="space-y-5 px-6 py-6 text-gray-700 leading-relaxed">

                                    <p>
                                        Start the day with a jeep safari in the Minneriya National Park. Spend the early morning hours with the beautiful wildlife of this stunning destination. You may come across endemic mammals like the purple-faced langur, Sri Lankan sambar deer, and grey slender loris during the tour. Enjoy a packed breakfast within the park and return to the hotel for a shower and lunch.
                                    </p>

                                    <p>
                                        In the afternoon you will visit Kaudulla National Park for your second safari trip for the day. This enchanting national park nurtures 24 species of mammals out of which the most prominent one is the Sri Lankan elephant. It is estimated that close to 200 elephants occupy the lush green territories of the park. 435 species of birds have also been recorded in the Kaudulla National Park which is recognised as an Important Bird Area in the country.
                                    </p>

                                    <p>
                                        Return to Dehigaha Ela at the end of your safari tour and tempt your taste buds with exquisite Sri Lankan fare.
                                    </p>

                                    <p className="font-semibold">Overnight stay at a hotel in Dehigaha Ela.</p>

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
                                <span>Day 06 - Gal Oya National Park</span>
                                <span>{day6 ? "−" : "+"}</span>
                            </button>

                            {day6 && (
                                <div className="space-y-5 px-6 py-6 text-gray-700 leading-relaxed">

                                    <p>
                                        Feast on a good breakfast at your hotel and set off to explore the beautiful Gal Oya National Park. En route, you can relish a good local meal for lunch too.
                                    </p>

                                    <p>
                                        You can enjoy boat safaris and jeep safaris at the Gal Oya National Park. If you take the boat ride, you will be able to visit the beautiful Bird Island, where large flocks of gorgeous birds abound. You will also get the opportunity to witness the enchanting spectacle of swimming elephants in the glistening reservoir known as the Senanayake Samudra!
                                    </p>

                                    <p>
                                        Return to the hotel, after the safari and relax.
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
                                <span>Day 07 - Gal Oya National Park</span>
                                <span>{day7 ? "−" : "+"}</span>
                            </button>

                            {day7 && (
                                <div className="space-y-5 px-6 py-6 text-gray-700 leading-relaxed">

                                    <p>
                                        Leave your hotel with your packed breakfast and lunch to visit the Gal Oya National Park. Embark on an enchanting boat safari in the park and visit the Bird Island. Morning hours are perfect to observe the breath-taking beauty of the many flocks of birds here. Keep your cameras ready to capture sensational shots!
                                    </p>

                                    <p>
                                        Have your breakfast on board and go to the Nilgala entrance of the Gal Oya National Park. You will be taking an exciting jeep safari through the rugged terrain of this region that is teeming with birds and butterflies. You could also visit the Makara place where an underground river starts.
                                    </p>

                                    <p>
                                        You can enjoy your lunch during the safari and return to the hotel on completion of the tour.
                                    </p>

                                    <p className="font-semibold">
                                        Overnight stay in Gal Oya.
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
                                <span>Day 08 - Yala National Park</span>
                                <span>{day8 ? "−" : "+"}</span>
                            </button>

                            {day8 && (
                                <div className="space-y-5 px-6 py-6 text-gray-700 leading-relaxed">

                                    <p>
                                        Have your breakfast and enjoy a relaxing time exploring the beauty of the environs of the hotel and the village.
                                    </p>

                                    <p>
                                        Today you will be driving to Yala via Monaragala. En route enjoy a delicious lunch at a local restaurant.
                                    </p>

                                    <p className="font-semibold">
                                        Overnight stay near Yala National Park.
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
                                <span>Day 09 - Yala National Park</span>
                                <span>{day9 ? "−" : "+"}</span>
                            </button>

                            {day9 && (
                                <div className="space-y-5 px-6 py-6 text-gray-700 leading-relaxed">

                                    <p>
                                        Leave your hotel with a packed breakfast to the world renowned Yala National Park. This mesmerising destination has one of the highest leopard densities in the world, so your chances of spotting these apex predators roaming stealthily in their natural habitats will remain quite high. The area has a rich biodiversity so you will see many species of flora and fauna during your safari tour. There is also a remarkable array of archaeological sites of interest, wrapped in thick foliage within the territories of the national park.
                                    </p>

                                    <p>
                                        You can relish your lunch at the beach inside the park.
                                    </p>

                                    <p>
                                        Spend the warm hours of the afternoon witnessing the raw, unspoiled beauty of this enchanting destination and the wildlife that call it home.
                                    </p>

                                    <p>
                                        Return to the campsite after your tour.
                                    </p>

                                    <p className="font-semibold">
                                        Overnight stay near Yala National Park.
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
                                <span>Day 10 - Galle | Colombo</span>
                                <span>{day10 ? "−" : "+"}</span>
                            </button>

                            {day10 && (
                                <div className="space-y-5 px-6 py-6 text-gray-700 leading-relaxed">

                                    <p>
                                        Enjoy your breakfast at the campsite and prepare to leave for Galle.
                                    </p>

                                    <p>
                                        En route you will visit the quaint town of Ahangama. Here you will see stilt fishermen, patiently waiting for a catch while the brutal sun relentlessly browns their bare backs. It’s an age-old method of fishing that generations of fishermen in the region have been using. Continue on your journey to reach the iconic city of Galle which is a UNESCO World Heritage Site. You will see remnants of a rich colonial past scattered lavishly within its borders. Take time to visit the Galle Fort which was built by the Portuguese back in the year 1588. Other prominent attractions in the city include the Dutch Museum and the Dutch Reformed Church.
                                    </p>

                                    <p>
                                        Upon completion, proceed to the city of Colombo, the commercial capital of Sri Lanka. Witness the amazing beauty of this place that fosters a richly diverse population. Visit the Old Parliament, Independence Memorial Hall, Colombo City Hall, National Museum, Khan Clock Tower, Gangaramaya Temple, Red Mosque and the Pettah Bazaar while you are here.
                                    </p>

                                    <p>
                                        Enjoy a farewell dinner at a local restaurant, renowned for its authentic Sri Lankan cusine. Following that you can look forward to a blissful night’s sleep at Galle Face Hotel.
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
                                <span>Day 11 - Colombo</span>
                                <span>{day11 ? "−" : "+"}</span>
                            </button>

                            {day11 && (
                                <div className="space-y-5 px-6 py-6 text-gray-700 leading-relaxed">

                                    <p>
                                        It’s time to say goodbye to the glorious paradise island until you visit again for yet another fascinating tour!
                                    </p>

                                    <p>
                                        Check-out from your hotel and proceed from Colombo to the Bandaranaike International Airport.
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
                                    &destination=Colombo+Sri+Lanka
                                    &waypoints=
                                    Negombo+Sri+Lanka|
                                    Wilpattu+National+Park|
                                    Anuradhapura+Sri+Lanka|
                                    Hiriwadunna+Village|
                                    Minneriya+National+Park|
                                    Kaudulla+National+Park|
                                    Gal+Oya+National+Park|
                                    Yala+National+Park|
                                    Galle+Sri+Lanka"
                                />

                            </div>

                            {/* Route Info */}
                            <div className="route-info w-full h-[120px] lg:w-[300px] flex flex-col items-start gap-3 rounded-lg bg-gray-100 p-5 text-lg shadow">
                                <p><strong>Distance:</strong> ~935 km</p>
                                <p><strong>Driving Time:</strong> ~23–26 hours</p>
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
                                "Negombo",
                                "Wilpattu National Park",
                                "Anuradhapura",
                                "Hiriwadunna Village",
                                "Minneriya National Park",
                                "Kaudulla National Park",
                                "Gal Oya National Park",
                                "Yala National Park",
                                "Galle",
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
                                        Cycling Tours
                                    </h3>
                                    <button
                                        onClick={() => navigate(`/tours/nature-tours/cycling-tours`)}
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

export default WildLifeTour;
