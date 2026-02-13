import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { useNavigate } from "react-router-dom";

import aboutHero from "../assets/image.png";

import mice from "../assets/mice.jpg";
import transportation from "../assets/Transportation.jpg";
import aircraftHandling from "../assets/Aircraft handling.jpg";
import sportsTours from "../assets/Sports Tours.jpg";
import excursions from "../assets/Excursions1.jpg";
import natureandadventure from "../assets/Wilpattu National Park1.jpg";
import wellness from "../assets/Wellness.jpeg";
import shoreExcursion from "../assets/Shore-Excursion.jpg";
import gemsJewellery from "../assets/gems-jewellery.jpg";

function Expertise() {

    const navigate = useNavigate();

    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
    }, []);

    /* ================= TOUR DATA ================= */
    const tours = [
        {
            id: 1,
            title: "MICE",
            slug: "mice",
            category: "MICE",
            image: mice,
            description: "As the most experienced professional event planners, we offer innovative and complete MICE solutions tailor-made to the needs and wants of our guest."
        },
        {
            id: 2,
            title: "Transportation",
            slug: "transportation",
            category: "Transportation",
            image: transportation,
            description: "Combining our fleet of vehicles with key partnerships, we offer a diverse range of transport options be it cars, micros, SUVs, coaches to luxury vehicles."
        },
        {
            id: 3,
            title: "Aircraft handling",
            slug: "aircraft-handling",
            category: "Aircraft handling",
            image: aircraftHandling,
            description: "From assisting to manage charter operations to aircraft handling, our Aviation Division offers an end to end solution to suit all your aviation related needs."
        },
        {
            id: 4,
            title: "Sports Tours",
            slug: "sports-tours",
            category: "Sports Tours",
            image: sportsTours,
            description: "We organise sports tours for cricket, rugby, netball, hockey, and golf while taking care of all your sporting requirements be it venues, local teams, and logistics."
        },
        {
            id: 5,
            title: "Excursions",
            slug: "excursions",
            category: "Excursions",
            image: excursions,
            description: "Take a day trip offered by us to explore Sri Lanka’s stunning coastline, the highlands, and more."
        },
        {
            id: 6,
            title: "Nature and adventure",
            slug: "nature-and-adventure",
            category: "Nature and adventure",
            image: natureandadventure,
            description: "Let the adrenaline rush through your body with these adventures."
        },
        {
            id: 7,
            title: "Wellness",
            slug: "wellness",
            category: "Wellness",
            image: wellness,
            description: "We organise Ayurvedic and wellness retreats to help you relax and heal."
        },
        {
            id: 8,
            title: "Gems & Jewellery",
            slug: "gems-and-jewellery",
            category: "Gems & Jewellery",
            image: gemsJewellery,
            description: "Explore Sri Lanka’s world-renowned gems and jewellery industry. Visit sapphire mines, gem museums, and certified jewellery boutiques, and even design your own custom-made jewellery with expert craftsmen."
        },
        {
            id: 9,
            title: "Shore Excursion",
            slug: "shore-excursion",
            category: "Shore Excursion",
            image: shoreExcursion,
            description: "Explore Sri Lanka in style with our luxury shore excursions."
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
                    className="absolute inset-0 bg-fill bg-center"
                    style={{ backgroundImage: `url(${aboutHero})` }}
                />
                <div className="absolute inset-0 bg-black/60" />

                <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white">
                    <h1
                        data-aos="fade-up"
                        className="text-center text-3xl sm:text-4xl md:text-5xl lg:text-4xl font-extrabold leading-tight"
                    >
                        Our Expertise
                    </h1>
                    <p data-aos="fade-up" data-aos-delay="150" className="mt-6">
                        Discover Sri Lanka Like Never Before
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
                        <option value="All">All Expertise</option>
                        <option value="MICE">MICE</option>
                        <option value="Transportation">Transportation</option>
                        <option value="Aircraft handling">Aircraft handling</option>
                        <option value="Sports Tours">Sports Tours</option>
                        <option value="Excursions">Excursions</option>
                        <option value="Nature and adventure">Nature and adventure</option>
                        <option value="Wellness">Wellness</option>
                        <option value="Shore Excursion">Shore Excursion</option>
                        <option value="Gems & Jewellery">Gems & Jewellery</option>
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
                                    onClick={() => navigate(`/expertise/${tour.slug}`)}
                                    className="rounded-full bg-[#00a7c4] px-8 py-2 text-white font-semibold hover:bg-[#008fa8] transition"
                                >
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

export default Expertise;
