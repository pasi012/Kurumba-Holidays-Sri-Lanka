import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { useNavigate } from "react-router-dom";

import aboutHero from "../assets/accommodation.jpg";

import luxury from "../assets/Luxury Beach Resorts.jpg";
import boutique from "../assets/Boutique Hotel.jpg";
import eco from "../assets/Eco Lodges & Nature Stays.jpg";
import villas from "../assets/Villas & Private Bungalows.jpg";
import budget from "../assets/Budget & City Hotels.jpg";

function Accommodation() {

    const navigate = useNavigate();

    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
    }, []);

    /* ================= ACCOMMODATION DATA ================= */
    const accommodations = [
        {
            id: 1,
            title: "Luxury Beach Resorts",
            slug: "luxury-beach-resorts",
            category: "Luxury",
            image: luxury,
            description:
                "Enjoy world-class beachfront resorts in Sri Lanka with infinity pools, spa treatments, fine dining and breathtaking ocean views. Ideal for honeymooners and luxury travelers."
        },
        {
            id: 2,
            title: "Boutique Hotels",
            slug: "boutique-hotels",
            category: "Boutique",
            image: boutique,
            description:
                "Stylish boutique hotels offering personalized service, elegant rooms and authentic Sri Lankan hospitality in cities, beaches and hill country."
        },
        {
            id: 3,
            title: "Eco Lodges & Nature Stays",
            slug: "eco-lodges-nature-stays",
            category: "Eco",
            image: eco,
            description:
                "Stay close to nature in eco-friendly lodges, jungle retreats and wildlife resorts near national parks, waterfalls and rainforests."
        },
        {
            id: 4,
            title: "Villas & Private Bungalows",
            slug: "villas-private-bungalows",
            category: "Villas",
            image: villas,
            description:
                "Relax in private villas and holiday bungalows with swimming pools, ocean or mountain views — perfect for families and group travelers."
        },
        {
            id: 5,
            title: "Budget & City Hotels",
            slug: "budget-city-hotels",
            category: "Budget",
            image: budget,
            description:
                "Affordable and comfortable hotels in Colombo, Kandy, Galle and other cities for business travelers, families and backpackers."
        }
    ];

    const [category, setCategory] = useState("All");

    const filteredAccommodations =
        category === "All"
            ? accommodations
            : accommodations.filter((item) => item.category === category);

    return (
        <div className="w-full overflow-hidden">

            {/* ================= HERO ================= */}
            <section className="relative h-[40vh] w-full">
                <div
                    className="absolute inset-0 bg-fill bg-center"
                    style={{ backgroundImage: `url(${aboutHero})` }}
                />
                <div className="absolute inset-0 bg-black/60" />

                <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white px-6">
                    <h1
                        data-aos="fade-up"
                        className="text-3xl sm:text-4xl md:text-5xl lg:text-4xl font-extrabold leading-tight"
                    >
                        Accommodation
                    </h1>

                    <p
                        data-aos="fade-up"
                        data-aos-delay="150"
                        className="mt-4 sm:mt-6 max-w-full sm:max-w-2xl md:max-w-3xl text-sm sm:text-base md:text-lg"
                    >
                        Luxury resorts, villas & eco-friendly stays across Sri Lanka.
                    </p>

                </div>
            </section>

            {/* ================= CATEGORY FILTER ================= */}
            <section className="bg-[#f7f9fc] py-6">
                <div className="mx-auto max-w-6xl px-6 flex justify-center">
                    <select
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        className="w-full max-w-md rounded-lg border px-4 py-3 text-lg shadow-md"
                    >
                        <option value="All">All Accommodations</option>
                        <option value="Luxury">Luxury Resorts</option>
                        <option value="Boutique">Boutique Hotels</option>
                        <option value="Eco">Eco Lodges</option>
                        <option value="Villas">Villas</option>
                        <option value="Budget">Budget Hotels</option>
                    </select>
                </div>
            </section>

            {/* ================= ACCOMMODATION LIST ================= */}
            <section className="bg-white py-12">
                <div className="mx-auto max-w-7xl px-6 space-y-20">

                    {filteredAccommodations.map((item, index) => (
                        <div
                            key={item.id}
                            data-aos="fade-up"
                            className="relative grid items-center gap-10 md:grid-cols-2"
                        >

                            {/* IMAGE */}
                            <div className={`relative ${index % 2 === 0 ? "md:order-1" : "md:order-2"}`}>
                                <div
                                    className={`absolute -inset-y-6 w-[300px] bg-[#0b4c7d] z-0 ${index % 2 === 0 ? "-left-6" : "-right-6"
                                        }`}
                                ></div>

                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="relative z-10 h-[330px] w-full object-cover shadow-xl"
                                />
                            </div>

                            {/* TEXT */}
                            <div className={`z-10 ${index % 2 === 0 ? "md:order-2" : "md:order-1"}`}>
                                <h2 className="text-3xl font-bold text-[#0b4c7d] mb-4">
                                    {item.title}
                                </h2>
                                <p className="text-gray-600 leading-relaxed mb-8">
                                    {item.description}
                                </p>

                                <button
                                    onClick={() => navigate(`/accommodation/${item.slug}`)}
                                    className="rounded-full bg-[#00a7c4] px-8 py-3 text-white font-semibold hover:bg-[#008fa8] transition"
                                >
                                    View Hotels
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

export default Accommodation;
