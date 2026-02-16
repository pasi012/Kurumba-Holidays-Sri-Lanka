import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useRef } from "react";

import { useNavigate } from "react-router-dom";

import aboutHero from "../../../assets/WalkingTours2.jpg";

import dhamma from "../../../assets/WalkingTours1.jpg";
import sigiriya from "../../../assets/WalkingTours2.jpg";
import kandy from "../../../assets/WalkingTours3.jpg";
import temple from "../../../assets/WalkingTours.jpg";

import related1 from "../../../assets/yala-national-park2.jpg";
import related2 from "../../../assets/cycletour.jpg";
import related3 from "../../../assets/adventuretours.jpg";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

function WalkingTours() {

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
    const [day13, setDay13] = useState(false);

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
                        Walking Tours
                    </h1>
                    <p
                        data-aos="fade-up"
                        data-aos-delay="150"
                        className="mt-4 sm:mt-6 max-w-full sm:max-w-2xl md:max-w-3xl text-sm sm:text-base md:text-lg"
                    >
                        Walk Through Sri Lanka’s Living History
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
                        Endless vistas of tranquil hills, pristine beaches, natures reserves thriving with an abundance of wildlife and various other captivating sights await travellers to satisfy their wanderlust. We, at Aitken Spence Travels, offer you a unique adventure as a part of our special Sri Lanka tours and packages, which givies you the chance to explore a world of contrasts which range from expeditions in the wild to take in the sights of a fast paced city!
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
                                <p className="text-xl font-bold">13 Days / 12 Nights</p>
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
                                        You will arrive at the Bandaranaike International Airport in Katunayake where you will be met and greeted by a representative of Aitken Spence Travels. You will then be taken to your luxury hotel in Negombo to rest and relax in comfort.
                                    </p>

                                    <p>
                                        The city of Negombo is a picturesque one with a golden beach and beautiful churches. Take a relaxing break lulled by the gentle crash of the waves under the warm tropical sun before preparing for an unforgettable adventure!
                                    </p>

                                    <p>
                                        You will get to enjoy a delectable Sri Lankan welcome dinner at a stylish restaurant set against the backdrop of the rolling seas at night.
                                    </p>

                                    <p className="font-semibold">Overnight stay in Negombo.</p>

                                </div>
                            )}
                        </div>

                        {/* ================= DAY 2 ================= */}
                        <div data-aos="fade-up" data-aos-delay="150" className="overflow-hidden rounded-lg border bg-white shadow">
                            <button
                                onClick={() => setDay2(!day2)}
                                className="flex w-full items-center justify-between bg-gray-100 px-6 py-5 text-left font-semibold text-[#0A3A5E]"
                            >
                                <span>Day 02 - Negombo / Mihintale / Anuradhapura</span>
                                <span>{day2 ? "−" : "+"}</span>
                            </button>

                            {day2 && (
                                <div className="space-y-4 px-6 py-6 text-gray-700 leading-relaxed">
                                    <p>
                                        Enjoy a hearty breakfast and travel to the lone mountain of Mihintale which is located in close proximity to Anuradhapura. It is believed that the fateful encounter between the Buddhist monk Mahinda and King Devanampiyatissa, which resulted in the introduction of Buddhism to the island, took place in this sacred mountain. Hence it has been an important pilgrimage site since time immemorial.
                                    </p>

                                    <p>
                                        There are impressive archaeological remains here such as the very first inscription of Sri Lanka which is still quite legible. You will be able to reach the zenith of the rock by ascending a crude flight of stairs that consists of close to 800 steps. The walk will take approximately two to three hours. Should you feel that the climb down is too daunting after the strenuous ascent, let us know and we will bring the vehicle to the middle level for your ease.
                                    </p>

                                    <p>
                                        You will be taken to check in to your hotel in Anuradhapura to enjoy a delicious dinner.
                                    </p>

                                    <p className="font-semibold">Overnight stay in Anuradhapura.</p>

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
                                <span>Day 03 - Anuradhapura</span>
                                <span>{day3 ? "−" : "+"}</span>
                            </button>

                            {day3 && (
                                <div className="space-y-5 px-6 py-6 text-gray-700 leading-relaxed">

                                    <p>
                                        Start your day nice and early with a delicious breakfast and prepare to explore the ancient city of Anuradhapura on foot. You will be entering the site from the town via a simple road that runs alongside paddy fields and glistening manmade reservoirs. The level road is shaded with trees, so the walk will be a very pleasant one. Once you reach the destination, you will be able to take in antique temples, statues, carvings, and murals that have been carefully preserved. You will walk nearly four kilometres in and around the city, discovering its rich culture and tradition.
                                    </p>

                                    <p>
                                        The daytime temperature in the region will vary between 32 and 35 degrees Celsius. You may be a little weary after your explorative tour so we will take you to the banks of the beautiful reservoir to rest for a while. You will be able to taste the tropical tang of local fruits while appreciating the beauty of the birdlife in the vicinity as you take your well-earned break.
                                    </p>

                                    <p>
                                        Lunch will be served at a local restaurant after which the walk will commence. You will be walking three kilometres passing quaint little villages on the way while getting the chance to experience the charm of the local communities.
                                    </p>

                                    <p>
                                        Return to the hotel for a hearty dinner.
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
                                <span>Day 04 - Anuradhapura | Ritigala Nature Reserve | Minneriya National Park</span>
                                <span>{day4 ? "−" : "+"}</span>
                            </button>

                            {day4 && (
                                <div className="space-y-5 px-6 py-6 text-gray-700 leading-relaxed">

                                    <p>
                                        Have your breakfast at the hotel and leave for the Ritigala Nature Reserve which is a biodiversity hotspot in Sri Lanka. Ritigala, which stands at 766 metres above sea level is known to be one of the highest mountains on the island. You will encounter three different climatic conditions as you ascend which will make the climb quite interesting! The lower part of the mountain has a dry zone climate, the middle range represents an intermediate zone climate and the zenith is quite often wet.
                                    </p>

                                    <p>
                                        The pathways that lead you to the top are believed to have been laid out during ancient times. There are close to 400 steps but as they are not steep, the climb will not be very difficult. You will be walking for approximately two to three hours under a canopy of trees serenaded by the bird song.
                                    </p>

                                    <p>
                                        Once you complete the trek, you will head to Habarana where a delicious, Sri Lankan lunch will be served. You can then check-in to your hotel for rest and relaxation.
                                    </p>

                                    <p>
                                        In the afternoon you will go for a safari at the world famous Minneriya National Park where large herds of Sri Lankan elephants roam. If your visit is made during the dry season you may be able to witness ‘’The Gathering’’, which brings together hundreds of elephants to the banks of the reservoir. You can spend the warm hours of the afternoon at the park and return to the hotel after sunset.
                                    </p>

                                    <p>
                                        A special set menu dinner will be served outside the restaurant for you to enjoy.
                                    </p>

                                    <p className="font-semibold">Overnight stay in Sigiriya.</p>

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
                                <span>Day 05 - Sigiriya | Dambulla</span>
                                <span>{day5 ? "−" : "+"}</span>
                            </button>

                            {day5 && (
                                <div className="space-y-5 px-6 py-6 text-gray-700 leading-relaxed">

                                    <p>
                                        Enjoy breakfast at the hotel and after, set off to the iconic Sigiriya Rock Fortress, a UNESCO World Heritage Site. The majestic rock that rises 200 metres above the rugged jungle terrain is one of the most prominent attractions in the country. It is believed that the rock was the stronghold of an ancient town that spanned 70 hectares. The site is complete with moats, gardens, and ramparts too. You will get the chance to appreciate the ethereal beauty of rock frescoes known as the Sigiriya damsels.
                                    </p>

                                    <p>
                                        It is best to climb the rock in the morning before the harsh rays of the sun started beating down. You will have to climb approximately 1,200 steps to reach the summit, which will take you close to two hours.
                                    </p>

                                    <p>
                                        Once you finish the tour of Sigiriya, you will visit a local restaurant and take part in an interesting cookery demonstration. Here a delectable Sri Lankan lunch will be served in a kamatha (the compound where the crop is collected after paddy is harvested).
                                    </p>

                                    <p>
                                        The Popham Arboretum, which is known by locals as ‘Suddage Watta’ is the next attraction on your itinerary for the day. This is a beautiful forest that has grown from trees planted many years ago by a single man. Walk across its sandy terrains and enjoy a peaceful experience amidst the tranquillity of nature.
                                    </p>

                                    <p>
                                        Upon completion, you will return the hotel to rest and relaxation followed by dinner.
                                    </p>

                                    <p className="font-semibold">Overnight stay in Sigiriya.</p>

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
                                <span>Day 06 - Matale | Kandy</span>
                                <span>{day6 ? "−" : "+"}</span>
                            </button>

                            {day6 && (
                                <div className="space-y-5 px-6 py-6 text-gray-700 leading-relaxed">

                                    <p>
                                        Have breakfast at the hotel and then depart to the city of Kandy. En route you will be visiting Matale where a spice garden tour will be arranged. A local tour guide will take you around the garden to show you a large variety of medicinal plants. The spice garden also manufactures many ayurvedic products for export. An authentic Sri Lankan lunch will be served here.
                                    </p>

                                    <p>
                                        You will then proceed to Kandy. Once you reach the city, you can check-in at the hotel and take a short break. You will then start walking to the famed Temple of the Sacred Tooth Relic, where the relic of Lord Buddha’s tooth is enshrined. The walk will mostly be on the pavement that borders the main road. If you think the traffic will bother you, we will take you to the temple in a vehicle. You can walk around the enchanting Kandy Lake too as it glistens in the sun in the heart of the city. Casually stroll along the lake for three kilometres and visit a local food corner maintained by the Agricultural Department of Sri Lanka. Here you will be able to sample a large variety of local delicacies. Show cooking sessions will also help you learn how different types of local dishes are made.
                                    </p>

                                    <p>
                                        After the walk, you can return to where you will be staying. In the late afternoon, visit the Kandyan Art Centre where you will be enthralled by beautiful cultural dance performances.
                                    </p>

                                    <p>
                                        Return to the hotel and relax after your day’s adventures.
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
                                <span>Day 07 - Kandy | Kothmale | Nuwara Eliya</span>
                                <span>{day7 ? "−" : "+"}</span>
                            </button>

                            {day7 && (
                                <div className="space-y-5 px-6 py-6 text-gray-700 leading-relaxed">

                                    <p>
                                        Breakfast will be served at the hotel after which you will be leaving for Kothmale, a village in the Central Province that has charmingly retained its old customs and traditions. The region possesses remarkable natural beauty as well. The Kothmale Reservoir and Dam are also interesting attractions here. Awe-inspiring mountain ranges encircle this quaint village and the experience of exploring it will truly be rewarding.
                                    </p>

                                    <p>
                                        You can witness the beauty of the region from the viewpoint above the dam and then enjoy a small snack before walking towards the Kothmale Chaitya, a pilgrimage site which was built in recent years. The uphill road that leads to the temple is a windy one and runs for approximately two kilometres. The climb down will be difficult as there are many steep steps along the way.
                                    </p>

                                    <p>
                                        However, you will greatly enjoy the experience as you will get to see the unspoiled beauty of nature as well as the simple ways of life of the locals. The region has many vegetable gardens and paddy fields too. Toddy tapping is also quite popular among the villagers.
                                    </p>

                                    <p>
                                        You can enjoy a picnic lunch on the way before you begin your journey to Nuwara Eliya. En route, visit a tea factory where you will learn about the tea making process.
                                    </p>

                                    <p>
                                        Check-in at your hotel in Nuwara Eliya and relax.
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
                                <span>Day 08 - Nuwara Eliya | Horton Plains</span>
                                <span>{day8 ? "−" : "+"}</span>
                            </button>

                            {day8 && (
                                <div className="space-y-5 px-6 py-6 text-gray-700 leading-relaxed">

                                    <p>
                                        In the early morning, with your breakfast packed, drive to the beautiful Horton Plains National Park. The park which is replete with waterfalls, wildlife and cloud forests is one of the most beautiful destinations in Sri Lanka.
                                    </p>

                                    <p>
                                        Many species such as the endemic toque macaque, sambar deer, purple-faced langur, slender loris, fishing cat, and rusty-spotted cat, call this place home; leopards, barking deer, wild boar, long-tailed giant squirrel, bear monkey, stripe-necked mongoose, and horned lizard are some of the other animals that have been recorded here as well. There are also many colourful butterflies throughout the park adding to its charm.
                                    </p>

                                    <p>
                                        The walk will be difficult in certain areas as there are occasional slopes in the park. But the soothing climate of the region, as well as the incredible sights, will make the experience truly enchanting! You will come to the starting point upon completion of the tour and proceed to your hotel.
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
                                <span>Day 09 - Yala National Park</span>
                                <span>{day9 ? "−" : "+"}</span>
                            </button>

                            {day9 && (
                                <div className="space-y-5 px-6 py-6 text-gray-700 leading-relaxed">

                                    <p>
                                        Enjoy a filling breakfast at the hotel and leave for the world famous Yala National Park. This is undoubtedly the most popular national park on the island. The place is replete with not just thriving wildlife, but also many archaeological remains that date back to ancient times. After check-in at the campsite, you will head off on an afternoon safari.
                                    </p>

                                    <p>
                                        Yala National Park is home the highest leopard densities in the world. In addition to these stealthy predators, you will also come across elephants, sloth bears, spotted deer, jackals and a large number of birds during your adventurous safari tour. The journey which takes you through the rugged wilderness that thrives under the tropical sun will truly be exhilarating!
                                    </p>

                                    <p>
                                        Upon completion of the tour, return to the campsite.
                                    </p>

                                    <p className="font-semibold">
                                        Overnight stay in yala.
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
                                <span>Day 10 - Yala National Park</span>
                                <span>{day10 ? "−" : "+"}</span>
                            </button>

                            {day10 && (
                                <div className="space-y-5 px-6 py-6 text-gray-700 leading-relaxed">

                                    <p>
                                        Rouse from your slumber and visit the Yala National Park just when the golden light of dawn starts to gently saturate the sleepy jungle. You will be able to catch glimpses of the nocturnal denizens as they roam amidst the trees before retreating to their hideaways to rest. A two hour safari ride through the park will be followed by breakfast at the campsite.
                                    </p>

                                    <p>
                                        Rest for a while and drive to the Yoda Wewa (lake) and enjoy an idyllic kayak or catamaran ride. You will be taken to a quaint village house, where lunch will be served in a hut. You will then proceed to embark on a village trek that will take you through local settlements bordering the rippling waters of the tank. The experience will surely be an enlightening one as you will get to see the simple lives of locals. The path is quite easy to follow too as it is sandy and level.
                                    </p>

                                    <p>
                                        Return to the campsite when the sun sets to rest and relax.
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
                                <span>Day 11 - Hikkaduwa | Ahangama | Galle</span>
                                <span>{day11 ? "−" : "+"}</span>
                            </button>

                            {day11 && (
                                <div className="space-y-5 px-6 py-6 text-gray-700 leading-relaxed">

                                    <p>
                                        Prepare to leave the campsite after breakfast and drive to the glamorous coastal resort town of Hikkaduwa.
                                    </p>

                                    <p>
                                        The journey will take you past breathtaking ocean vistas. You can stop at the charming town of Ahangama where you will see traditional stilt fishermen, patiently poised on stilts embedded on the shallow seabed, waiting for the ocean to render to them their daily yields.
                                    </p>

                                    <p>
                                        When evening comes, an experienced local tour guide will take you on a walking tour across the imposing Galle Fort. Dinner will be served a popular restaurant located inside the fort.
                                    </p>

                                    <p>
                                        After dinner, it’s time for a blissful night’s sleep at your hotel.
                                    </p>

                                    <p className="font-semibold">
                                        Overnight stay in Hikkaduwa.
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
                                <span>Day 12 - Galle | Colombo</span>
                                <span>{day12 ? "−" : "+"}</span>
                            </button>

                            {day12 && (
                                <div className="space-y-5 px-6 py-6 text-gray-700 leading-relaxed">
                                    <p>
                                        After having a filling breakfast at the hotel you will be transferred to the commercial capital, Colombo. This sensational city is filled with marvellous appeals and you will thoroughly enjoy the walking tours that will be arranged here. Explore the beauty of colonial buildings like the Old Parliament and marvel at the grandeur of famous places of worship such as the Gangaramaya Temple and Sri Kailawasanathan Swami Devasthanam Kovil. The National Museum, Independence Memorial Hall and the Prime Minister’s Office are also prominent landmarks in the city.
                                    </p>

                                    <p>
                                        Savour a delectable dinner which will be served at a local restaurant, before heading to your hotel, for a restful night of sleep.
                                    </p>

                                    <p className="font-semibold">
                                        Overnight stay in Colombo.
                                    </p>
                                </div>
                            )}
                        </div>

                        {/* ================= DAY 13 ================= */}
                        <div
                            data-aos="fade-up"
                            data-aos-delay="1300"
                            className="overflow-hidden rounded-lg border bg-white shadow"
                        >
                            <button
                                onClick={() => setDay13(!day13)}
                                className="flex w-full items-center justify-between bg-gray-100 px-6 py-5 text-left font-semibold text-[#0A3A5E]"
                            >
                                <span>Day 13 - Colombo</span>
                                <span>{day13 ? "−" : "+"}</span>
                            </button>

                            {day13 && (
                                <div className="space-y-5 px-6 py-6 text-gray-700 leading-relaxed">
                                    <p>
                                        Have your breakfast at the hotel and prepare for your journey home. We will transfer you to the Bandaranaike International Airport when it’s time for your flight and bid you adieu, until next time!
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
                                    src={`https://www.google.com/maps/embed/v1/directions?key=AIzaSyBjUk_Sn0lthNO_cpZO9n5hI1lmZPRUB0E
                                    &origin=Negombo+Sri+Lanka
                                    &destination=Colombo+Sri+Lanka
                                    &waypoints=
                                    Mihintale+Sri+Lanka|
                                    Anuradhapura+Sri+Lanka|
                                    Ritigala+Nature+Reserve+Sri+Lanka|
                                    Minneriya+National+Park+Sri+Lanka|
                                    Sigiriya+Sri+Lanka|
                                    Dambulla+Sri+Lanka|
                                    Matale+Sri+Lanka|
                                    Kandy+Sri+Lanka|
                                    Kothmale+Sri+Lanka|
                                    Nuwara+Eliya+Sri+Lanka|
                                    Horton+Plains+Sri+Lanka|
                                    Yala+National+Park+Sri+Lanka|
                                    Hikkaduwa+Sri+Lanka|
                                    Ahangama+Sri+Lanka|
                                    Galle+Sri+Lanka`}
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
                                "Negombo",
                                "Mihintale",
                                "Anuradhapura",
                                "Ritigala Nature Reserve",
                                "Minneriya National Park",
                                "Sigiriya",
                                "Dambulla",
                                "Matale",
                                "Kandy",
                                "Kothmale",
                                "Nuwara Eliya",
                                "Horton Plains",
                                "Yala National Park",
                                "Hikkaduwa",
                                "Ahangama",
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

export default WalkingTours;
