import { useEffect, useState } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

import hero from "../assets/PropertyBuyingAndSelling.jpg";

function PropertyBuyingAndSelling() {

    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
    }, []);

    return (
        <div className="w-full overflow-hidden">

            {/* ================= HERO ================= */}
            <section className="relative h-[40vh] w-full">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${hero})` }}
                />
                <div className="absolute inset-0 bg-black/70" />

                <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white">
                    <h1
                        data-aos="fade-up"
                        className="text-3xl sm:text-4xl md:text-5xl lg:text-4xl font-extrabold leading-tight"
                    >
                        Property Buying & Selling
                    </h1>

                    <p
                        data-aos="fade-up"
                        data-aos-delay="150"
                        className="mt-4 sm:mt-6 max-w-full sm:max-w-2xl md:max-w-3xl text-sm sm:text-base md:text-lg"
                    >
                        Professional Ground Handling Services in Sri Lanka
                    </p>
                </div>
            </section>

            {/* ================= PROPERTY SERVICES ================= */}
            <section className="bg-gray-50 py-16 sm:py-20">
                <div className="max-w-7xl mx-auto px-6">

                    <div className="text-center mb-12">
                        <h2
                            data-aos="fade-up"
                            className="text-3xl sm:text-4xl font-bold text-gray-800"
                        >
                            Buy & Sell Properties in Sri Lanka
                        </h2>
                        <p
                            data-aos="fade-up"
                            data-aos-delay="150"
                            className="mt-4 max-w-3xl mx-auto text-gray-600"
                        >
                            We help you buy, sell, and invest in premium lands, luxury villas, beachfront properties,
                            boutique hotels, and commercial real estate across Sri Lanka with full legal and professional support.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

                        {/* Lands */}
                        <div data-aos="fade-up" className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition">
                            <div className="p-6">
                                <h3 className="text-xl font-semibold mb-3">Land Sales & Purchases</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    Agricultural lands, beachfront plots, residential blocks and commercial land with clear titles and legal verification.
                                </p>
                            </div>
                        </div>

                        {/* Villas */}
                        <div data-aos="fade-up" data-aos-delay="150" className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition">
                            <div className="p-6">
                                <h3 className="text-xl font-semibold mb-3">Villas & Luxury Homes</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    Fully furnished villas, holiday homes, ocean-view residences and private estates ready for living or rental income.
                                </p>
                            </div>
                        </div>

                        {/* Hotels */}
                        <div data-aos="fade-up" data-aos-delay="300" className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition">
                            <div className="p-6">
                                <h3 className="text-xl font-semibold mb-3">Hotels & Resorts</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    Boutique hotels, eco-lodges, guesthouses and luxury resorts available for sale or investment partnerships.
                                </p>
                            </div>
                        </div>

                    </div>

                    {/* CTA */}
                    <div data-aos="zoom-in" className="mt-14 text-center">
                        <h3 className="text-2xl font-bold text-gray-800 mb-4">
                            Want to Buy or Sell a Property?
                        </h3>
                        <p className="text-gray-600 mb-6">
                            Chat with our property consultants directly on WhatsApp for listings, prices and private viewings.
                        </p>

                        <a
                            href="https://wa.me/94743412910?text=Hello%20I%20am%20interested%20in%20buying%20or%20selling%20a%20property%20in%20Sri%20Lanka"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg transition transform hover:scale-105"
                        >
                            💬 Chat on WhatsApp
                        </a>
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

export default PropertyBuyingAndSelling;
