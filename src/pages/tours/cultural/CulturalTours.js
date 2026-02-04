import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useNavigate } from "react-router-dom";

import aboutHero from "../../../assets/image.png";

import culturalHighlightsTour from "../../../assets/temple.jpg";
import sriLankaHighlightsTour from "../../../assets/Sri Lanka Highlights Tour.jpg";
import specialToursToSriLanka from "../../../assets/Special Tours To Sri Lanka.jpg";
import miniTourPackages from "../../../assets/Mini Tour Packages.jpg";
import exoticSriLanka from "../../../assets/Exotic Sri Lanka.jpg";
import sriLankaatLeisure from "../../../assets/Sri Lanka at Leisure.jpg";
import pearlOfTheIndianOcean from "../../../assets/Pearl Of The Indian Ocean.jpg";
import exploreSriLanka from "../../../assets/Explore Sri Lanka.jpg";

function CulturalTours() {

    const navigate = useNavigate();

    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
    }, []);

    /* ================= TOUR DATA ================= */
    const tours = [
        {
            id: 1,
            title: "Cultural Highlights Tour",
            image: culturalHighlightsTour,
            slug: "cultural-highlights-tour",
            description: "Visit renowned cultural sites on the island and experience a rich heritage."
        },
        {
            id: 2,
            title: "Sri Lanka Highlights Tour",
            image: sriLankaHighlightsTour,
            slug: "sriLanka-highlights-tour",
            description: "Explore the sights and delights of Sri Lanka on this five-day long highlights tour."
        },
        {
            id: 3,
            title: "Special Tours To Sri Lanka",
            image: specialToursToSriLanka,
            slug: "special-tours-to-srilanka",
            description: "Unique travel packages to help you explore tropical paradise."
        },
        {
            id: 4,
            title: "Mini Tour Packages",
            image: miniTourPackages,
            slug: "mini-tour-packages",
            description: "We bring you closer to our world, culture, its people, and their way of life."
        },
        {
            id: 5,
            title: "Exotic Sri Lanka",
            image: exoticSriLanka,
            slug: "exotic-srilanka",
            description: "Our tours of Sri Lanka promise to deliver all that you seek, and more."
        },
        {
            id: 6,
            title: "Sri Lanka at Leisure",
            image: sriLankaatLeisure,
            slug: "srilanka-at-leisure",
            description: "A panoramic tour that leads you to the most iconic spots in Sri Lanka."
        },
        {
            id: 7,
            title: "Pearl Of The Indian Ocean",
            image: pearlOfTheIndianOcean,
            slug: "pearl-of-the-indian-ocean",
            description: "From historic sites, lush mountains to pristine beaches, Sri Lanka has it all!"
        },
        {
            id: 8,
            title: "Explore Sri Lanka",
            image: exploreSriLanka,
            slug: "explore-srilanka",
            description: "Delve deeper into Sri Lanka’s culture and discover the island’s rich heritage."
        }
    ];

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
                    <h1 data-aos="fade-up" className="text-5xl font-extrabold">
                        Cultural Tours
                    </h1>
                    <p data-aos="fade-up" data-aos-delay="150" className="mt-6">
                        Experience the heart of Sri Lanka through its culture and heritage.
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
                        Known by such names as Taprobane, Serendib and Ceylon in times past, Sri Lanka lays claim to a fascinating history. Cultural tours in Sri Lanka offer a glimpse of the rich heritage and help find the meaning behind local traditions and folklore.
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
                                onClick={() => navigate(`/tours/cultural/${tour.slug}`)}
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

export default CulturalTours;
