import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useRef } from "react";

import { useNavigate } from "react-router-dom";

import aboutHero from "../../../assets/turyaa-kalutara.jpg";

import dhamma from "../../../assets/kaluthara.jpg";
import sigiriya from "../../../assets/turyaa-kalutara.jpg";
import kandy from "../../../assets/Kaluthara1.jpg";
import temple from "../../../assets/Kaluthara2.jpg";

import related1 from "../../../assets/Arugam Bay1.jpg";
import related2 from "../../../assets/Beaches & Sunsets.jpg";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

function SunAndFunTuryaa() {

    const swiperRef = useRef(null);

    const navigate = useNavigate();

    const images = [dhamma, sigiriya, kandy, temple];

    const [selectedImage, setSelectedImage] = useState(images[0]);

    const [day1, setDay1] = useState(true);
    const [day2, setDay2] = useState(false);
    const [day3, setDay3] = useState(false);
    const [day4, setDay4] = useState(false);

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
                        Sun and Fun at Turyaa Kalutara
                    </h1>
                    <p
                        data-aos="fade-up"
                        data-aos-delay="150"
                        className="mt-4 sm:mt-6 max-w-full sm:max-w-2xl md:max-w-3xl text-sm sm:text-base md:text-lg"
                    >
                        Endless sun, endless fun.
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
                        Lazy, hazy beach days are spent in dreamlike bliss on the golden-tinged beaches and turquoise depths bordering the island’s south coast. Let Kurumba Holidays Sri Lanka help you experience the best beach holidays in Sri Lanka amidst the charms of picturesque Kalutara. Be it sublime wellness, thrilling recreation or laid-back relaxation, there is much to look forward to on a getaway by the shore.
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
                                <p className="text-xl font-bold">04 Days / 03 Nights</p>
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
                                <span>Day 01 - Airport | Kalutara</span>
                                <span>{day1 ? "−" : "+"}</span>
                            </button>

                            {day1 && (
                                <div className="space-y-4 px-6 py-6 text-gray-700 leading-relaxed">
                                    <p>
                                        On arrival at the airport, you will be met by a representative of Kurumba Holidays Sri Lanka. You will then proceed to your hotel in Kalutara. Sprawled on six acres of oceanfront land, Turyaa Kalutara is a five-star hotel with two wings, six floors, two swimming pools, and a host of other facilities. This includes a gym, spa, sauna, business centre, nightclub and a library. With a total of 199 rooms complete with private balconies, the hotel also features a host of recreational activities; enjoy everything from playing badminton to taking on friends in a competitive game of pool.
                                    </p>

                                    <p>
                                        In terms of gastronomic variety, Turyaa Kalutara hosts seven restaurants each offering exclusive menus to flatter an assortment of tastes and culinary preferences. The conveniences at the hotel extend beyond 24 hour in-room dining, on-call doctor and a 24 hour coffee shop. Besides the hypnotic rhythms of the ocean waves, it also gives guests the chance to relax to live music and band performances at its restaurant's lobby area.
                                    </p>

                                    <p>
                                        Be it on an exquisite sun-soaked day or on a magical star-filled night, Turyaa Kalutara is a luxurious sanctuary by the sea where true rest is never hard to find.
                                    </p>

                                    <p className="font-semibold">Overnight stay in Kalutara</p>

                                </div>
                            )}
                        </div>

                        {/* ================= DAY 2 ================= */}
                        <div data-aos="fade-up" data-aos-delay="150" className="overflow-hidden rounded-lg border bg-white shadow">
                            <button
                                onClick={() => setDay2(!day2)}
                                className="flex w-full items-center justify-between bg-gray-100 px-6 py-5 text-left font-semibold text-[#0A3A5E]"
                            >
                                <span>Day 02 - Kalutara | Balapitiya | Kalutara</span>
                                <span>{day2 ? "−" : "+"}</span>
                            </button>

                            {day2 && (
                                <div className="space-y-4 px-6 py-6 text-gray-700 leading-relaxed">
                                    <p>
                                        Savour a delicious breakfast at Turyaa Kalutara and afterwards, you are free to enjoy your own activities.
                                    </p>

                                    <p>
                                        In the afternoon embark on a mangrove boat ride along the Madu River in Balapitiya.
                                    </p>

                                    <p>
                                        Balapitiya is where one can just sit back and observe how ecology and culture combine under the sun! Cut through the clear water of the Madu River - a lifeline of Balapitiya - and head towards Kotu Duwa; this small island houses a temple that dates back to the time of ancient Sinhalese kings.
                                    </p>

                                    <p>
                                        Alternatively, sail through tunnels of shady mangroves swaying alongside the Madu River, hiding an ecological treasure; witness the tranquillity of this biodiversity hotspot home to reptiles, molluscs and over 70 species of freshwater fish. Today, the region, which has a strong presence of rural folk life, does not only boast cinnamon plantations in abundance but also something unique. Here you will find “fish pedicure centres” – experience one of the most potent and rejuvenating wellness techniques involving fish nibbling away at the dead cells of your feet! Apart from these highlights, Balapitiya has also become a household name amongst birdwatchers who are ensured of a captivating offshore expedition and the chance to observe the many avifauna species that frequent the area.
                                    </p>

                                    <p>
                                        Head back to the hotel for some rest and relaxation.
                                    </p>

                                    <p className="font-semibold">Overnight stay in Kalutara.</p>

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
                                <span>Day 03 - Kalutara</span>
                                <span>{day3 ? "−" : "+"}</span>
                            </button>

                            {day3 && (
                                <div className="space-y-5 px-6 py-6 text-gray-700 leading-relaxed">

                                    <p>
                                        Breakfast at Turyaa Kalutara and a full day at leisure enjoying the hotel facilities.
                                    </p>

                                    <p>
                                        Turyaa Kalutara takes pride in offering you the best leisure vacation during your stay with a comprehensive range of facilities and amenities.
                                    </p>

                                    <p>
                                        Aayu Spa offers a sensuous range of relaxing treatments administered by Balinese therapists. Each session is performed using a blend of herbal massage oils and scrubs; these are made exclusively from pure and natural Sri Lankan herbs and other curative ingredients. Guests are also welcome to further unwind in the calming environs of a steam room or jacuzzi, or simply swim their stress away in one of the outdoor swimming pools.
                                    </p>

                                    <p>
                                        For the more active guest, the Aayu Gym is equipped with a comprehensive cardio station, including treadmills, weights and cycles. Qualified trainers are also on hand to supervise guests during their workout regimes.
                                    </p>

                                    <p>
                                        Turyaa Kalutara facilitates a host of sporting activities that include water polo, badminton, beach volleyball and football, mini golf, water aerobics and table tennis. Those interested in a more relaxed and spiritually uplifting experience can take part in yoga sessions too. For the more adventurous, the hotel organises elephant rides, excursions and other exhilarating outdoor activities upon request.
                                    </p>

                                    <p>
                                        Guests planning to dance the night away can do so at 'Table Tango', the hotel’s own nightclub with DJ music and live bands. It also has a karaoke bar where you can sing all your personal favourites.
                                    </p>

                                    <p>
                                        'Stories', the onsite library and relaxation lounge offers an exclusive working hub to resident guests. It also features a harmonious space where you can pick books off the shelves and drift away into oblivion, with complimentary coffee and tea.
                                    </p>

                                    <p>
                                        As a beachfront family-friendly resort, there is much on offer for children too. Recreational opportunities can be enjoyed at the children's playground and kiddies' pool, while a professional animations team provides spectacular entertainment. There is even an exclusive kiddies menu, especially for young guests.
                                    </p>

                                    <p className="font-semibold">Overnight stay in Kalutara.</p>

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
                                <span>Day 04 - Kalutara | Colombo | Airport</span>
                                <span>{day4 ? "−" : "+"}</span>
                            </button>

                            {day4 && (
                                <div className="space-y-5 px-6 py-6 text-gray-700 leading-relaxed">

                                    <p>
                                        After breakfast at Turyaa Kalutara, transfer to Colombo for a city and shopping tour.
                                    </p>

                                    <p>
                                        Colombo, the commercial hub of the country, is a pulsating city where east meets west amidst a melting pot of cultures. For the shopaholic there is much to look forward to; designer brands, accessories, jewellery, clothes and handicrafts can be found at such retail hubs as Arcade Independence Square, the Colombo Racecourse and the Dutch Hospital.
                                    </p>

                                    <p>
                                        Other sites of interest include the well-known BMICH (Bandaranaike Memorial International Conference Hall) which hosts various exhibitions throughout the year and the Nelum Pokuna performance centre. Not to be missed is a visit to the Gangarama Temple and the Pettah area, chock-full of activity and one of the best spots for some bargaining shopping.
                                    </p>

                                    <p>
                                        Once done with your exploration, head to the airport to connect to your flight.
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
                                    &waypoints=Kalutara|Balapitiya|Kalutara|Kalutara|Colombo`.replace(/\s+/g, '')}
                                />
                            </div>

                            {/* Route Info */}
                            <div className="route-info w-full h-[120px] lg:w-[300px] flex flex-col items-start gap-3 rounded-lg bg-gray-100 p-5 text-lg shadow">
                                <p><strong>Distance:</strong> ~259 km</p>
                                <p><strong>Driving Time:</strong> ~6–6.5 hours</p>
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
                                "Kalutara",
                                "Balapitiya",
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
                                        Explore Enchanting Sri Lanka
                                    </h3>
                                    <button
                                        onClick={() => navigate(`/tours/beach/explore-enchanting-srilanka`)}
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

export default SunAndFunTuryaa;
