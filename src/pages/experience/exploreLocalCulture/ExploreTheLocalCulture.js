import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { useNavigate } from "react-router-dom";

import experienceHero from "../../../assets/gal-wiharaya.jpg";

import anuradhapura from "../../../assets/anurapura.jpg";
import polonnaruwa from "../../../assets/gal-wiharaya.jpg";
import sigiriya from "../../../assets/sigiriya.jpg";
import dambulla from "../../../assets/dambulla.jpg";
import kandy from "../../../assets/kandy.jpg";
import galle from "../../../assets/galle.jpg";

function ExploreTheLocalCulture() {

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
                        Explore The Local Culture
                    </h1>

                    <p
                        data-aos="fade-up"
                        data-aos-delay="150"
                        className="mt-4 sm:mt-6 max-w-full sm:max-w-2xl md:max-w-3xl text-sm sm:text-base md:text-lg"
                    >
                        Discover the timeless heritage of Sri Lanka
                    </p>
                </div>
            </section>

            {/* ================= EXPLORE LOCAL CULTURE ================= */}
            <section className="bg-white py-16">
                <div className="max-w-7xl mx-auto px-4">

                    <div className="text-center mb-12">
                        <h2 data-aos="fade-up" className="text-3xl md:text-4xl font-bold text-gray-800">
                            Explore the Local Culture
                        </h2>
                        <p data-aos="fade-up" data-aos-delay="100" className="mt-3 text-gray-600">
                            Discover the rich culture of Sri Lanka with Kurumba Holidays Sri Lanka as you journey to historical destinations that showcase the gems of the island’s glorious past. On your adventures you will visit famed archaeological sites, magnificent monuments and stunning landmarks that offer an insight into what life was like back in the days of the ancient kings.
                        </p>
                    </div>

                    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">

                        {/* Anuradhapura */}
                        <div data-aos="fade-up" className="bg-gray-50 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition">
                            <img src={anuradhapura} alt="Anuradhapura" className="h-56 w-full object-cover" />
                            <div className="p-6 text-center">
                                <h3 className="text-xl font-bold text-gray-800">Anuradhapura</h3>
                                <p className="mt-3 text-gray-600">
                                    Sri Lanka’s first ancient capital and sacred Buddhist city.
                                </p>
                                <button
                                    onClick={() => navigate("/experience-sri-lanka/heritage-culture/anuradhapura")}
                                    className="mt-5 px-6 py-2 bg-amber-500 text-white rounded-full hover:bg-amber-600 transition"
                                >
                                    View More
                                </button>
                            </div>
                        </div>

                        {/* Polonnaruwa */}
                        <div data-aos="fade-up" data-aos-delay="100" className="bg-gray-50 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition">
                            <img src={polonnaruwa} alt="Polonnaruwa" className="h-56 w-full object-cover" />
                            <div className="p-6 text-center">
                                <h3 className="text-xl font-bold text-gray-800">Polonnaruwa</h3>
                                <p className="mt-3 text-gray-600">
                                    A beautifully preserved medieval royal city.
                                </p>
                                <button
                                    onClick={() => navigate("/experience-sri-lanka/heritage-culture/polonnaruwa")}
                                    className="mt-5 px-6 py-2 bg-amber-500 text-white rounded-full hover:bg-amber-600 transition"
                                >
                                    View More
                                </button>
                            </div>
                        </div>

                        {/* Sigiriya */}
                        <div data-aos="fade-up" data-aos-delay="200" className="bg-gray-50 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition">
                            <img src={sigiriya} alt="Sigiriya" className="h-56 w-full object-cover" />
                            <div className="p-6 text-center">
                                <h3 className="text-xl font-bold text-gray-800">Sigiriya</h3>
                                <p className="mt-3 text-gray-600">
                                    The iconic Lion Rock fortress rising from the jungle.
                                </p>
                                <button
                                    onClick={() => navigate("/experience-sri-lanka/heritage-culture/sigiriya")}
                                    className="mt-5 px-6 py-2 bg-amber-500 text-white rounded-full hover:bg-amber-600 transition"
                                >
                                    View More
                                </button>
                            </div>
                        </div>

                        {/* Dambulla */}
                        <div data-aos="fade-up" data-aos-delay="300" className="bg-gray-50 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition">
                            <img src={dambulla} alt="Dambulla" className="h-56 w-full object-cover" />
                            <div className="p-6 text-center">
                                <h3 className="text-xl font-bold text-gray-800">Dambulla</h3>
                                <p className="mt-3 text-gray-600">
                                    A sacred cave temple complex filled with ancient murals.
                                </p>
                                <button
                                    onClick={() => navigate("/experience-sri-lanka/heritage-culture/dambulla")}
                                    className="mt-5 px-6 py-2 bg-amber-500 text-white rounded-full hover:bg-amber-600 transition"
                                >
                                    View More
                                </button>
                            </div>
                        </div>

                        {/* Kandy */}
                        <div data-aos="fade-up" data-aos-delay="400" className="bg-gray-50 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition">
                            <img src={kandy} alt="Kandy" className="h-56 w-full object-cover" />
                            <div className="p-6 text-center">
                                <h3 className="text-xl font-bold text-gray-800">Kandy</h3>
                                <p className="mt-3 text-gray-600">
                                    Home to the Temple of the Sacred Tooth Relic.
                                </p>
                                <button
                                    onClick={() => navigate("/experience-sri-lanka/heritage-culture/kandy")}
                                    className="mt-5 px-6 py-2 bg-amber-500 text-white rounded-full hover:bg-amber-600 transition"
                                >
                                    View More
                                </button>
                            </div>
                        </div>

                        {/* Galle */}
                        <div data-aos="fade-up" data-aos-delay="500" className="bg-gray-50 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition">
                            <img src={galle} alt="Galle" className="h-56 w-full object-cover" />
                            <div className="p-6 text-center">
                                <h3 className="text-xl font-bold text-gray-800">Galle</h3>
                                <p className="mt-3 text-gray-600">
                                    A colonial fort city overlooking the Indian Ocean.
                                </p>
                                <button
                                    onClick={() => navigate("/experience-sri-lanka/heritage-culture/galle")}
                                    className="mt-5 px-6 py-2 bg-amber-500 text-white rounded-full hover:bg-amber-600 transition"
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

export default ExploreTheLocalCulture;