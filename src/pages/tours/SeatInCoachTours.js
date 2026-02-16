import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { useNavigate } from "react-router-dom";

import aboutHero from "../../assets/tours.jpg";

import "swiper/css";
import "swiper/css/navigation";

function SeatInCoachTours() {

    const navigate = useNavigate();

    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
    }, []);

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
                    <h1
                        data-aos="fade-up"
                        className="text-3xl sm:text-4xl md:text-5xl lg:text-4xl font-extrabold leading-tight"
                    >
                        Seat in Coach Tours
                    </h1>
                    <p
                        data-aos="fade-up"
                        data-aos-delay="150"
                        className="mt-4 sm:mt-6 max-w-full sm:max-w-2xl md:max-w-3xl text-sm sm:text-base md:text-lg"
                    >
                        Discover Sri Lanka Together
                    </p>
                </div>
            </section>

            {/* ================= TOUR INFO ================= */}
            <section className="bg-white py-16 px-4">
                <div className="max-w-6xl mx-auto">

                    {/* Description */}
                    <div className="text-center max-w-4xl mx-auto mb-10">
                        <p className="text-gray-600 leading-relaxed">
                            Prepare to embark on a remarkable adventure in Seat-In-Coach (SIC) tours with Aitken Spence Travels, the most convenient journey to explore the country. Indulge your wanderlust by exploring the captivating south coast, where pristine beaches and azure waters await your arrival. Dive into the awe-inspiring hill country and witness breathtaking landscapes, lush tea plantations, and charming colonial architecture. Immerse yourself in the rich heritage of the Cultural Triangle, where ancient cities, sacred sites, and UNESCO World Heritage sites unravel fascinating stories of the island’s past.
                        </p>

                        <p className="text-gray-600 leading-relaxed">
                            Our SIC tours offer an unbeatable opportunity to witness the country’s beauty and culture firsthand. Not only are these tours remarkably cost-effective and comfortable, but they also provide a wonderful opportunity to create lasting connections and share unique experiences with your fellow travelers. Rest assured that your comfort is our top priority. Hop on board our comfortable coaches, equipped with modern amenities, and enjoy a hassle-free journey throughout the country.
                        </p>

                        <p className="text-gray-600 leading-relaxed">
                            Grab your opportunity and get ready to explore the wonders of Sri Lanka like never before.
                        </p>
                    </div>

                    {/* Book Now Button */}
                    <div className="flex justify-center mb-14">
                        <button
                            onClick={() => navigate("/contact")}
                            className="rounded-full bg-[#00a8c9] px-10 py-3 text-white font-semibold shadow hover:bg-[#0288a3] transition"
                        >
                            BOOK NOW
                        </button>
                    </div>

                    {/* Info Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-white shadow rounded-xl p-10 text-center">
                        <div>
                            <h4 className="text-[#7aa13d] font-semibold uppercase">Availability</h4>
                            <p className="mt-2 text-gray-600">From July to October 2023</p>
                        </div>

                        <div>
                            <h4 className="text-[#7aa13d] font-semibold uppercase">Duration</h4>
                            <p className="mt-2 text-gray-600">4 Nights / 5 Days – 5 Nights / 6 Days</p>
                        </div>

                        <div>
                            <h4 className="text-[#7aa13d] font-semibold uppercase">Accommodation</h4>
                            <p className="mt-2 text-gray-600">3 to 4-Star Hotel Accommodation</p>
                        </div>

                        <div>
                            <h4 className="text-[#7aa13d] font-semibold uppercase">Scheduled Departure Days</h4>
                            <p className="mt-2 text-gray-600">Monday, Wednesday, Friday, Sunday</p>
                        </div>

                        <div>
                            <h4 className="text-[#7aa13d] font-semibold uppercase">Departure Location</h4>
                            <p className="mt-2 text-gray-600">Negombo</p>
                        </div>

                        <div>
                            <h4 className="text-[#7aa13d] font-semibold uppercase">Return Location</h4>
                            <p className="mt-2 text-gray-600">Colombo</p>
                        </div>
                    </div>

                    {/* Highlights */}
                    <div className="mt-16 text-center">
                        <h3 className="text-2xl font-semibold mb-8">Highlights</h3>

                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 text-gray-700">
                            {[
                                "Pinnawala",
                                "Sigiriya",
                                "Hiriwadunna",
                                "Dambulla",
                                "Matale",
                                "Kandy",
                                "Nuwara Eliya",
                                "Kalutara",
                            ].map((place, index) => (
                                <div key={index} className="flex items-center gap-2 justify-center">
                                    <span className="h-3 w-3 rounded-full bg-[#00a8c9]"></span>
                                    <span>{place}</span>
                                </div>
                            ))}
                        </div>

                        <div className="flex justify-center mt-12">
                            <button
                                onClick={() => navigate("/contact")}
                                className="rounded-full bg-[#00a8c9] px-10 py-3 text-white font-semibold shadow hover:bg-[#0288a3] transition"
                            >
                                BOOK NOW
                            </button>
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
                    className="h-12 w-12 rounded-full shadow-lg transition hover:scale-110 sm:h-14 sm:w-14"
                />
            </a>

        </div>
    );
}

export default SeatInCoachTours;
