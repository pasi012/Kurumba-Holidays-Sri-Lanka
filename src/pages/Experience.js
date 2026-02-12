import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { useNavigate } from "react-router-dom";

import experienceHero from "../assets/experience-sri-lanka-hero.jpg";

import exploreNature from "../assets/Explore Nature.jpg";
import heritageCulture from "../assets/Heritage & Culture.jpg";
import beachesSunsets from "../assets/Beaches & Sunsets.jpg";
import wildlifeAdventure from "../assets/Wildlife & Adventure.jpg";
import religious from "../assets/Religious.jpg";

function Experience() {

    const navigate = useNavigate();

    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
    }, []);

    /* ================= TOUR DATA ================= */
    const tours = [
        {
            id: 1,
            title: "Explore Nature",
            category: "Explore Nature",
            image: exploreNature,
            slug: "explore-nature",
            description: "From trekking amidst lush green backdrops to riding the rapids on a thrilling rafting experience, embark on unforgettable island adventures."
        },
        {
            id: 2,
            title: "Heritage & Culture",
            category: "Heritage & Culture",
            image: heritageCulture,
            slug: "heritage-culture",
            description: "Set off on a journey back in time as you discover ancient kingdoms and historical destinations that are very much a part of the country’s heritage and culture."
        },
        {
            id: 3,
            title: "Beaches & Sunsets",
            category: "Beaches & Sunsets",
            image: beachesSunsets,
            slug: "beaches-sunsets",
            description: "Surrounded by the Indian Ocean, Sri Lanka boasts of white & golden sandy beaches to explore in different parts of the isle each offering distinctive experiences."
        },
        {
            id: 4,
            title: "Wildlife & Adventure",
            category: "Wildlife & Adventure",
            image: wildlifeAdventure,
            slug: "wild-life-adventure",
            description: "Embark on an exciting journey into the wild and amidst nature’s tranquillity spot everything from elusive leopards and majestic elephants to colourful avifauna."
        },
        {
            id: 5,
            title: "Religious",
            category: "Religious",
            image: religious,
            slug: "religious",
            description: "Embark on an epic journey of discovery and explore marvellous sites of religious significances to Buddhist, Hindu’s, Christians and Muslims that are scattered across the country."
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
                    style={{ backgroundImage: `url(${experienceHero})` }}
                />
                <div className="absolute inset-0 bg-black/60" />

                <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white">
                    <h1
                        data-aos="fade-up"
                        className="text-3xl sm:text-4xl md:text-5xl lg:text-4xl font-extrabold leading-tight"
                    >
                        Experience Sri Lanka
                    </h1>

                    <p
                        data-aos="fade-up"
                        data-aos-delay="150"
                        className="mt-4 sm:mt-6 max-w-full sm:max-w-2xl md:max-w-3xl text-sm sm:text-base md:text-lg"
                    >
                        Discover the gems of Sri Lanka
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
                        <option value="All">All Experience</option>
                        <option value="Explore Nature">Explore Nature</option>
                        <option value="Heritage & Culture">Heritage & Culture</option>
                        <option value="Beaches & Sunsets">Beaches & Sunsets</option>
                        <option value="Wildlife & Adventure">Wildlife & Adventure</option>
                        <option value="Religious">Religious</option>
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
                                    onClick={() => navigate(`/experience-sri-lanka/${tour.slug}`)}
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

export default Experience;
