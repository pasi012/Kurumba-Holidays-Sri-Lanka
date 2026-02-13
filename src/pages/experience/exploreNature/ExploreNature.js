import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { useNavigate } from "react-router-dom";

import experienceHero from "../../../assets/Beach.jpg";

import knuckles from "../../../assets/Knuckles.jpg";
import kithulgala from "../../../assets/colomboKithulgala1.jpg";
import horton from "../../../assets/hortan-paint.jpg";
import sinharaja from "../../../assets/sinharaja.jpg";

function ExploreNature() {

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

            {/* ================= EXPLORE NATURE ================= */}
            <section className="bg-gray-50 py-16">
                <div className="max-w-7xl mx-auto px-4">

                    <div className="text-center mb-12">
                        <h2 data-aos="fade-up" className="text-3xl md:text-4xl font-bold text-gray-800">
                            Explore Nature
                        </h2>
                        <p data-aos="fade-up" data-aos-delay="100" className="mt-3 text-gray-600">
                            Observe the intricacies of tea making or better yet, why not savour a cup of Ceylon Tea? For something more action-packed, visit Kitulgala where the pastime of white water rafting can be enjoyed. Experience thrilling adventure tours in Sri Lanka and the chance to explore this magical island with Kurumba Holidays Sri Lanka.
                        </p>
                    </div>

                    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">

                        {/* Knuckles */}
                        <div data-aos="fade-up" className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition">
                            <img
                                src={knuckles}
                                alt="Knuckles"
                                className="h-56 w-full object-cover"
                            />
                            <div className="p-6 text-center">
                                <h3 className="text-xl font-bold text-gray-800">Knuckles</h3>
                                <p className="mt-3 text-gray-600">
                                    Explore the Knuckles Mountain Range, a trekker’s paradise.
                                </p>
                                <button
                                    onClick={() => navigate("/experience-sri-lanka/explore-nature/knuckles")}
                                    className="mt-5 px-6 py-2 bg-sky-500 text-white rounded-full hover:bg-sky-600 transition"
                                >
                                    View More
                                </button>
                            </div>
                        </div>

                        {/* Kitulgala */}
                        <div data-aos="fade-up" data-aos-delay="150" className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition">
                            <img
                                src={kithulgala}
                                alt="Kitulgala"
                                className="h-56 w-full object-cover"
                            />
                            <div className="p-6 text-center">
                                <h3 className="text-xl font-bold text-gray-800">Kitulgala</h3>
                                <p className="mt-3 text-gray-600">
                                    Battle with the rush of waters and enjoy an epic adventure.
                                </p>
                                <button
                                    onClick={() => navigate("/experience-sri-lanka/explore-nature/kitulgala")}
                                    className="mt-5 px-6 py-2 bg-sky-500 text-white rounded-full hover:bg-sky-600 transition"
                                >
                                    View More
                                </button>
                            </div>
                        </div>

                        {/* Horton Plains */}
                        <div data-aos="fade-up" data-aos-delay="300" className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition">
                            <img
                                src={horton}
                                alt="Horton Plains"
                                className="h-56 w-full object-cover"
                            />
                            <div className="p-6 text-center">
                                <h3 className="text-xl font-bold text-gray-800">Horton Plains</h3>
                                <p className="mt-3 text-gray-600">
                                    Be enthralled by the untouched beauty of the outdoors.
                                </p>
                                <button
                                    onClick={() => navigate("/experience-sri-lanka/explore-nature/horton-plains")}
                                    className="mt-5 px-6 py-2 bg-sky-500 text-white rounded-full hover:bg-sky-600 transition"
                                >
                                    View More
                                </button>
                            </div>
                        </div>

                        {/* Sinharaja */}
                        <div data-aos="fade-up" data-aos-delay="450" className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition lg:col-span-3 max-w-md mx-auto">
                            <img
                                src={sinharaja}
                                alt="Sinharaja"
                                className="h-56 w-full object-cover"
                            />
                            <div className="p-6 text-center">
                                <h3 className="text-xl font-bold text-gray-800">Sinharaja</h3>
                                <p className="mt-3 text-gray-600">
                                    A UNESCO World Heritage tropical rainforest with rare wildlife.
                                </p>
                                <button
                                    onClick={() => navigate("/experience-sri-lanka/explore-nature/sinharaja")}
                                    className="mt-5 px-6 py-2 bg-sky-500 text-white rounded-full hover:bg-sky-600 transition"
                                >
                                    View More
                                </button>
                            </div>
                        </div>

                    </div>
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

export default ExploreNature;