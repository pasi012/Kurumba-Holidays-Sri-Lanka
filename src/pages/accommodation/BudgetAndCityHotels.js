import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import experienceHero from "../../assets/budget-city-hotels1.jpg";
import img from "../../assets/Budget & City Hotels.jpg";

function BudgetAndCityHotels() {

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
                        Budget & City Hotels
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

            {/* ================= BUDGET & CITY HOTELS ================= */}
            <section className="bg-white py-16 px-4 sm:px-8 lg:px-20">
                <div className="max-w-7xl mx-auto">

                    {/* Title */}
                    <h2
                        data-aos="fade-up"
                        className="text-center text-2xl sm:text-3xl md:text-4xl font-semibold text-blue-800 tracking-wide"
                    >
                        Budget & City Hotels in Sri Lanka
                    </h2>

                    <p
                        data-aos="fade-up"
                        data-aos-delay="100"
                        className="mt-4 text-center max-w-3xl mx-auto text-gray-600 text-sm sm:text-base"
                    >
                        Comfortable, affordable, and conveniently located hotels for travelers exploring Sri Lanka’s vibrant cities and towns.
                    </p>

                    {/* Content */}
                    <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

                        {/* Text */}
                        <div data-aos="fade-right" className="space-y-5 text-gray-700 text-sm sm:text-base leading-relaxed">

                            <p>
                                Budget and city hotels in Sri Lanka provide excellent value for travelers who want comfort,
                                convenience, and easy access to attractions, shopping, and dining.
                            </p>

                            <p>
                                From Colombo and Negombo to Kandy, Galle, and Nuwara Eliya, these hotels are located close to
                                transport hubs, business districts, and cultural sites.
                            </p>

                            <p>
                                Guests can enjoy clean rooms, friendly service, modern amenities, and affordable rates, making
                                them ideal for solo travelers, families, and business visitors.
                            </p>

                            <p>
                                Whether you're exploring the city or traveling on a budget, these hotels offer a practical and
                                comfortable stay across Sri Lanka.
                            </p>

                        </div>

                        {/* Image */}
                        <div data-aos="fade-left">
                            <img
                                src={img}
                                alt="Budget and City Hotels in Sri Lanka"
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

export default BudgetAndCityHotels;
