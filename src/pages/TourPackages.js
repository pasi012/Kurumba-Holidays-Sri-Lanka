import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useNavigate } from "react-router-dom";

import aboutHero from "../assets/hero1.jpg";

import cultural from "../assets/Cultural-Dance.jpg";
import hillCountry from "../assets/tea-estate.jpg";
import romantic from "../assets/Romantic.jpg";
import ayurveda from "../assets/tour2.jpg";
import excursions from "../assets/Excursions.jpg";
import beach from "../assets/Beach.jpg";
import specialTours from "../assets/SpecialInterestTours.png";
import seatInCoachTours from "../assets/tours.jpg";
import ramayanaTrails from "../assets/Ramayana Trails in Sri Lanka.jpeg";
import natureTours from "../assets/Nature Tours.jpg";

function TourPackages() {

    const navigate = useNavigate();

    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
    }, []);

    /* ================= TOUR DATA ================= */
    const tours = [
        {
            id: 1,
            title: "Cultural",
            category: "Cultural",
            slug: "cultural",
            image: cultural,
            description: "Explore ancient sites seemingly lost in time, uncover the stories behind local legends and be awed by monuments that are intertwined with the island’s culture."
        },
        {
            id: 2,
            title: "Hill Country",
            category: "Hill Country",
            slug: "hill-country",
            image: hillCountry,
            description: "A perfect blend of beauty, history and culture, the hill country emulates the very essence of authentic Sri Lanka, tucked away amidst emerald covered mountains."
        },
        {
            id: 3,
            title: "Romantic",
            category: "Romantic",
            slug: "romantic",
            image: romantic,
            description: "From weddings packages tailor-made just for you and intimate honeymoon experiences, we offer you the chance to celebrate your love in style!"
        },
        {
            id: 4,
            title: "Ayurveda & Wellness",
            category: "Ayurveda & Wellness",
            slug: "ayurveda-wellness",
            image: ayurveda,
            description: "Indulge in an integrated wellness and Ayurveda retreat where your health and complete well-being is at the centre of a relaxing holiday experience."
        },
        {
            id: 5,
            title: "Excursions",
            category: "Excursions",
            slug: "excursions",
            image: excursions,
            description: "Immerse yourself in truly enriching adventures that let you experience the island’s scenic landscapes, traditional culture and exotic wildlife."
        },
        {
            id: 6,
            title: "Beach",
            category: "Beach",
            slug: "beach",
            image: beach,
            description: "Surrounded by the Indian Ocean, Sri Lanka has some of the best beaches to discover with pristine shores of paradise amidst seaside serenades."
        },
        {
            id: 7,
            title: "Special Interest Tours",
            category: "Special Interest Tours",
            slug: "special-interest-tours",
            image: specialTours,
            description: "Unique perspectives of cultural richness & diversity"
        },
        {
            id: 8,
            title: "Seat-In-Coach Tours in Sri Lanka",
            category: "Seat-In-Coach Tours in Sri Lanka",
            slug: "seat-in-coach-tours",
            image: seatInCoachTours,
            description: "Embark on a memorable expedition as part of a group tour where you will not only visit sites rich in culture and natural wonder but build new friendships as well."
        },
        {
            id: 9,
            title: "Ramayana Trails in Sri Lanka",
            category: "Ramayana Trails in Sri Lanka",
            slug: "ramayana-trails-in-sri-lanka",
            image: ramayanaTrails,
            description: "Follow the legends of Ramayana trails"
        },
        {
            id: 10,
            title: "Nature Tours",
            category: "Nature Tours",
            slug: "nature-tours",
            image: natureTours,
            description: "Embark on discovering a treasured journey of nature!"
        }

    ];

    const [category, setCategory] = useState("All");

    const filteredTours =
        category === "All"
            ? tours
            : tours.filter((tour) => tour.category === category);

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
                        Tours
                    </h1>

                    <p
                        data-aos="fade-up"
                        data-aos-delay="150"
                        className="mt-4 sm:mt-6 max-w-full sm:max-w-2xl md:max-w-3xl text-sm sm:text-base md:text-lg"
                    >
                        Explore the best of Sri Lanka
                    </p>
                </div>
            </section>

            {/* ================= CATEGORY FILTER ================= */}
            <section className="bg-[#f7f9fc] py-5">
                <div className="mx-auto max-w-6xl px-6 flex justify-center">
                    <select
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        className="w-full max-w-md rounded-lg border px-4 py-3 text-lg shadow-md"
                    >
                        <option value="All">All Tours</option>
                        <option value="Cultural">Cultural</option>
                        <option value="Hill Country">Hill Country</option>
                        <option value="Romantic">Romantic</option>
                        <option value="Ayurveda & Wellness">Ayurveda & Wellness</option>
                        <option value="Excursions">Excursions</option>
                        <option value="Beach">Beach</option>
                        <option value="Special Interest Tours">Special Interest Tours</option>
                        <option value="Vacation Sri Lanka">Vacation Sri Lanka</option>
                        <option value="Seat-In-Coach Tours in Sri Lanka">Seat-In-Coach Tours in Sri Lanka</option>
                        <option value="Ramayana Trails in Sri Lanka">Ramayana Trails in Sri Lanka</option>
                        <option value="Nature Tours">Nature Tours</option>
                    </select>
                </div>
            </section>

            {/* ================= TOUR RESULTS ================= */}
            <section className="bg-white py-10">
                <div className="mx-auto max-w-7xl px-6 space-y-20">

                    {filteredTours.map((tour, index) => (
                        <div
                            key={tour.id}
                            data-aos="fade-up"
                            className={`relative grid items-center gap-10 md:grid-cols-2 ${index % 2 === 0 ? "" : "md:flex-row-reverse"
                                }`}
                        >

                            {/* IMAGE BLOCK */}
                            <div className={`relative ${index % 2 === 0 ? "md:order-1" : "md:order-2"}`}>
                                <div
                                    className={`absolute -inset-y-6 w-[300px] bg-[#0b4c7d] z-0 ${index % 2 === 0 ? "-left-6" : "-right-6"}`}
                                ></div>
                                <img
                                    src={tour.image}
                                    alt={tour.title}
                                    className="relative z-10 h-[330px] w-full object-fill shadow-xl"
                                />
                            </div>

                            {/* TEXT BLOCK */}
                            <div className={`z-10 ${index % 2 === 0 ? "md:order-2" : "md:order-1"}`}>
                                <h2 className="text-3xl font-bold text-[#0b4c7d] mb-4">
                                    {tour.title}
                                </h2>
                                <p className="text-gray-600 leading-relaxed mb-8">
                                    {tour.description}
                                </p>

                                <button
                                    onClick={() => navigate(`/tours/${tour.slug}`)}
                                    className="rounded-full bg-[#00a7c4] px-8 py-2 text-white font-semibold hover:bg-[#008fa8] transition">
                                    View More
                                </button>
                            </div>

                        </div>
                    ))}

                </div>
            </section>

            {/* ================= WHATSAPP BUTTON ================= */}
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

export default TourPackages;
