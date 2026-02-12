import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { useNavigate } from "react-router-dom";

import experienceHero from "../../../assets/elephant.jpg";

import bundala from "../../../assets/bundala.jpg";
import galoya from "../../../assets/GalOya.jpg";
import wilpattu from "../../../assets/wilpaththu.jpg";
import yala from "../../../assets/Wildlife & Adventure.jpg";
import udawalawa from "../../../assets/elephant.jpg";
import minneriya from "../../../assets/minneriya.jpg";

function WildlifeAndAdventure() {

    const navigate = useNavigate();

    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
    }, []);

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
                    <h1 data-aos="fade-up" className="text-3xl sm:text-4xl md:text-5xl font-extrabold">
                        Wildlife & Adventure
                    </h1>

                    <p data-aos="fade-up" data-aos-delay="150" className="mt-4 max-w-3xl">
                        Experience Sri Lanka’s rich wildlife, elephants, leopards and pristine wilderness
                    </p>
                </div>
            </section>

            {/* ================= PARKS ================= */}
            <section className="bg-white py-16">
                <div className="max-w-7xl mx-auto px-4">

                    <div className="text-center mb-12">
                        <h2 data-aos="fade-up" className="text-3xl md:text-4xl font-bold text-gray-800">
                            Explore Sri Lanka’s National Parks
                        </h2>
                        <p data-aos="fade-up" data-aos-delay="100" className="mt-3 text-gray-600">
                            From elephant herds and leopards to wetlands and bird sanctuaries, Sri Lanka’s national parks offer unforgettable wildlife encounters.
                        </p>
                    </div>

                    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">

                        {[
                            ["Bundala National Park", bundala, "A world-renowned wetland sanctuary and birdwatcher’s paradise."],
                            ["Gal Oya National Park", galoya, "Famous for boat safaris and swimming elephants."],
                            ["Wilpattu National Park", wilpattu, "Sri Lanka’s largest national park, rich in wildlife and lakes."],
                            ["Yala National Park", yala, "Home to one of the world’s highest leopard densities."],
                            ["Udawalawa National Park", udawalawa, "Best place in Sri Lanka to see large herds of elephants."],
                            ["Minneriya National Park", minneriya, "World-famous for the Gathering of hundreds of elephants."]
                        ].map(([name, image, desc], index) => (
                            <div key={name} data-aos="fade-up" data-aos-delay={index * 100} className="bg-gray-50 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition">
                                <img src={image} alt={name} className="h-56 w-full object-cover" />
                                <div className="p-6 text-center">
                                    <h3 className="text-xl font-bold text-gray-800">{name}</h3>
                                    <p className="mt-3 text-gray-600">{desc}</p>
                                    <button
                                        onClick={() => navigate(`/experience-sri-lanka/wild-life-adventure/${name.toLowerCase().replace(/ /g, "-")}`)}
                                        className="mt-5 px-6 py-2 bg-green-600 text-white rounded-full hover:bg-green-700 transition"
                                    >
                                        View More
                                    </button>
                                </div>
                            </div>
                        ))}

                    </div>
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
                    className="h-12 w-12 rounded-full shadow-lg transition hover:scale-110"
                />
            </a>

        </div>
    );
}

export default WildlifeAndAdventure;
