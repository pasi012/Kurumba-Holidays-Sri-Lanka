import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useNavigate } from "react-router-dom";

import specialHero from "../../../assets/SpecialInterestTours.png";

import walkingTours from "../../../assets/WalkingTours.jpg";
import bawaTour from "../../../assets/BawaTour.jpg";
import cookingByColours from "../../../assets/CookingbyColours.jpg";
import feminaTour from "../../../assets/FeminaTour.jpg";

function SpecialInterestTours() {

    const navigate = useNavigate();

    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
    }, []);

    const tours = [
        {
            id: 1,
            title: "Walking Tours",
            image: walkingTours,
            slug: "walking-tours",
            description: "Discover Sri Lanka’s streets and heritage sites on foot with expert guides."
        },
        {
            id: 2,
            title: "Bawa Tour",
            image: bawaTour,
            slug: "bawa-tour",
            description: "Explore the iconic architecture and gardens inspired by Geoffrey Bawa."
        },
        {
            id: 3,
            title: "Cooking by Colours",
            image: cookingByColours,
            slug: "cooking-by-colours",
            description: "Learn the art of Sri Lankan cooking with fresh, vibrant ingredients."
        },
        {
            id: 4,
            title: "Femina Tour",
            image: feminaTour,
            slug: "femina-tour",
            description: "A curated experience celebrating women-led arts, crafts, and culture."
        }
    ];

    return (
        <div className="w-full overflow-hidden">

            {/* ================= HERO ================= */}
            <section className="relative h-[40vh] w-full">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${specialHero})` }}
                />
                <div className="absolute inset-0 bg-black/60" />

                <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white">
                    <h1
                        data-aos="fade-up"
                        className="text-center text-3xl sm:text-4xl md:text-5xl lg:text-4xl font-extrabold leading-tight"
                    >
                        Special Interest Tours
                    </h1>
                    <p data-aos="fade-up" data-aos-delay="150" className="mt-6">
                        Walking Tours, Bawa Tour, Cooking by Colours, Femina Tour
                    </p>
                </div>
            </section>

            {/* ================= INTRO ================= */}
            <section className="bg-white py-10">
                <div className="mx-auto max-w-5xl px-6 text-center">
                    <p
                        data-aos="fade-up"
                        data-aos-delay="150"
                        className="mt-8 text-gray-600 leading-relaxed max-w-3xl mx-auto"
                    >
                        The island offers a rich kaleidoscope of colour, culture and cuisine showcased on these special Sri Lanka private tours. Walk through bustling streets and discover colonial influences, learn the art of creating exotic local dishes or go on a girl’s trip for some sightseeing and shopping. Learn more about the country’s rich Buddhist heritage and the unique designs of a celebrated architect as well
                    </p>
                </div>
            </section>

            {/* ================= TOUR RESULTS ================= */}
            <section className="bg-white py-10">
                <div className="mx-auto max-w-7xl px-6 space-y-20">

                    {tours.map((tour, index) => (
                        <div
                            key={tour.id}
                            data-aos="fade-up"
                            className={`relative grid items-center gap-10 md:grid-cols-2 ${index % 2 === 0 ? "" : "md:flex-row-reverse"}`}
                        >
                            {/* IMAGE */}
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

                            {/* TEXT */}
                            <div className={`z-10 ${index % 2 === 0 ? "md:order-2" : "md:order-1"}`}>
                                <h2 className="text-3xl font-bold text-[#0b4c7d] mb-4">
                                    {tour.title}
                                </h2>
                                <p className="text-gray-600 leading-relaxed mb-8">
                                    {tour.description}
                                </p>

                                <button
                                    onClick={() => navigate(`/tours/special-interest-tours/${tour.slug}`)}
                                    className="rounded-full bg-[#00a7c4] px-8 py-2 text-white font-semibold hover:bg-[#008fa8] transition">
                                    View More
                                </button>
                            </div>
                        </div>
                    ))}

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

export default SpecialInterestTours;
