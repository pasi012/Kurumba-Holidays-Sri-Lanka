import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { useNavigate } from "react-router-dom";

import experienceHero from "../../../assets/ramayana.jpg";

import ramayana from "../../../assets/ramayana.jpg";
import josephVaz from "../../../assets/joseph-vaz.jpg";

function Religious() {

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
                <div className="absolute inset-0 bg-black/70" />

                <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white">
                    <h1 data-aos="fade-up" className="text-3xl sm:text-4xl md:text-5xl font-extrabold">
                        Religious
                    </h1>

                    <p data-aos="fade-up" data-aos-delay="150" className="mt-4 max-w-3xl">
                        Journey through Sri Lanka’s sacred landscapes, legends, and spiritual heritage
                    </p>
                </div>
            </section>

            {/* ================= TRAILS ================= */}
            <section className="bg-white py-16">
                <div className="max-w-6xl mx-auto px-4">

                    <div className="text-center mb-12">
                        <h2 data-aos="fade-up" className="text-3xl md:text-4xl font-bold text-gray-800">
                            Sacred Trails of Sri Lanka
                        </h2>
                        <p data-aos="fade-up" data-aos-delay="100" className="mt-3 text-gray-600">
                            Explore Sri Lanka’s deep spiritual history through ancient legends and Christian heritage routes.
                        </p>
                    </div>

                    <div className="grid gap-10 md:grid-cols-2">

                        {/* Ramayana Trails */}
                        <div data-aos="fade-up" className="bg-gray-50 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition">
                            <img src={ramayana} alt="Ramayana Trails" className="h-64 w-full object-cover" />
                            <div className="p-8 text-center">
                                <h3 className="text-2xl font-bold text-gray-800">Ramayana Trails</h3>
                                <p className="mt-4 text-gray-600">
                                    Follow the legendary journey of Lord Rama and Sita across Sri Lanka, visiting ancient sites believed to be part of the epic Ramayana, from Seetha Amman Temple to Ashok Vatika and Ravana Falls.
                                </p>
                                <button
                                    onClick={() => navigate("/experience-sri-lanka/religious/ramayana-trails")}
                                    className="mt-6 px-8 py-3 bg-amber-500 text-white rounded-full hover:bg-amber-600 transition"
                                >
                                    Explore Trail
                                </button>
                            </div>
                        </div>

                        {/* St. Joseph Vaz */}
                        <div data-aos="fade-up" data-aos-delay="150" className="bg-gray-50 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition">
                            <img src={josephVaz} alt="St. Joseph Vaz" className="h-64 w-full object-cover" />
                            <div className="p-8 text-center">
                                <h3 className="text-2xl font-bold text-gray-800">
                                    In the Footsteps of St. Joseph Vaz
                                </h3>
                                <p className="mt-4 text-gray-600">
                                    Discover the sacred journey of Sri Lanka’s apostle, St. Joseph Vaz, visiting churches, shrines and historic locations where he spread Christianity across the island.
                                </p>
                                <button
                                    onClick={() => navigate("/experience-sri-lanka/religious/st-joseph-vaz")}
                                    className="mt-6 px-8 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition"
                                >
                                    Explore Trail
                                </button>
                            </div>
                        </div>

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

export default Religious;
