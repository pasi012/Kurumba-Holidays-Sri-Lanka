import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import experienceHero from "../../assets/BoutiqueHotels.jpg";
import img from "../../assets/Boutique Hotel.jpg";

function BoutiqueHotels() {

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
                        Boutique Hotels
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

            {/* ================= BOUTIQUE HOTELS ================= */}
            <section className="bg-white py-16 px-4 sm:px-8 lg:px-20">
                <div className="max-w-7xl mx-auto">

                    {/* Title */}
                    <h2
                        data-aos="fade-up"
                        className="text-center text-2xl sm:text-3xl md:text-4xl font-semibold text-blue-900 tracking-wide"
                    >
                        Boutique Hotels in Sri Lanka
                    </h2>

                    <p
                        data-aos="fade-up"
                        data-aos-delay="100"
                        className="mt-4 text-center max-w-3xl mx-auto text-gray-600 text-sm sm:text-base"
                    >
                        Discover intimate, stylish, and uniquely designed boutique hotels that reflect the charm and culture of Sri Lanka.
                    </p>

                    {/* Content */}
                    <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

                        {/* Text */}
                        <div data-aos="fade-right" className="space-y-5 text-gray-700 text-sm sm:text-base leading-relaxed">

                            <p>
                                Boutique hotels in Sri Lanka offer a personalized and elegant travel experience, combining luxury with local character.
                                These properties are carefully designed to reflect Sri Lanka’s heritage, nature, and artistic style.
                            </p>

                            <p>
                                From colonial mansions in Galle and Kandy to jungle hideaways and beachfront villas, boutique hotels provide
                                stylish comfort, privacy, and warm hospitality.
                            </p>

                            <p>
                                Guests enjoy beautifully designed rooms, gourmet dining, private pools, spa treatments, and peaceful surroundings
                                that make every stay feel exclusive.
                            </p>

                            <p>
                                Ideal for honeymooners, couples, and travelers seeking something special, boutique hotels create unforgettable
                                and intimate experiences across Sri Lanka.
                            </p>

                        </div>

                        {/* Image */}
                        <div data-aos="fade-left">
                            <img
                                src={img}
                                alt="Boutique Hotels in Sri Lanka"
                                className="rounded-xl shadow-xl w-full h-[350px] object-cover"
                            />
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

export default BoutiqueHotels;
