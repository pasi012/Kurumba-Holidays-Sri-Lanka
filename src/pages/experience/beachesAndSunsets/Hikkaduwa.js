import { useEffect, useState } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

import experienceHero from "../../../assets/hikkaduwa.jpg";

import hikkaduwa1 from "../../../assets/hikkaduwa.jpg";
import hikkaduwa2 from "../../../assets/Hikkaduwa1.jpg";
import hikkaduwa3 from "../../../assets/Hikkaduwa2.jpg";

function Hikkaduwa() {

    const [activeImage, setActiveImage] = useState(hikkaduwa1);

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
                        Hikkaduwa
                    </h1>

                    <p
                        data-aos="fade-up"
                        data-aos-delay="150"
                        className="mt-4 sm:mt-6 max-w-full sm:max-w-2xl md:max-w-3xl text-sm sm:text-base md:text-lg"
                    >
                        Sri Lanka’s Surfing and Coral Reef Paradise
                    </p>
                </div>
            </section>

            {/* ================= HIKKADUWA SECTION ================= */}
            <section className="bg-white py-16 px-4 sm:px-8 lg:px-20">
                <div className="max-w-7xl mx-auto">

                    {/* Title */}
                    <h2
                        data-aos="fade-up"
                        className="text-center text-2xl sm:text-3xl md:text-4xl font-semibold text-blue-900 tracking-wide"
                    >
                        Discover Hikkaduwa
                    </h2>

                    {/* Content */}
                    <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

                        {/* Text Content */}
                        <div data-aos="fade-right" className="space-y-5 text-gray-700 text-sm sm:text-base leading-relaxed">

                            <p>
                                Hikkaduwa is one of Sri Lanka’s most famous beach destinations, known for its beautiful
                                coral reefs, vibrant marine life, and lively beach atmosphere. Located on the southern
                                coast, it attracts surfers, snorkelers, and beach lovers from all over the world.
                            </p>

                            <p>
                                The Hikkaduwa Marine National Park offers colorful coral gardens and tropical fish,
                                making it one of the best places in Sri Lanka for snorkeling and glass-bottom boat
                                rides.
                            </p>

                            <p>
                                Hikkaduwa is also famous for its surf breaks, beachside cafés, and energetic nightlife.
                                Visitors can enjoy fresh seafood, sunset views, and relaxed tropical vibes along the
                                palm-lined shore.
                            </p>

                            <p>
                                Whether you want to explore underwater wonders or enjoy a fun-filled beach holiday,
                                Hikkaduwa offers an unforgettable coastal experience.
                            </p>

                        </div>

                        {/* Image Section */}
                        <div data-aos="fade-left" className="relative">

                            {/* Main Image */}
                            <img
                                src={activeImage}
                                alt="Hikkaduwa"
                                className="rounded-lg shadow-xl w-full h-[350px] object-cover transition duration-300"
                            />

                            {/* Thumbnail Strip */}
                            <div className="flex gap-3 mt-4 justify-center">

                                {[hikkaduwa1, hikkaduwa2, hikkaduwa3].map((img, index) => (
                                    <img
                                        key={index}
                                        src={img}
                                        onClick={() => setActiveImage(img)}
                                        className={`w-20 h-14 object-cover rounded-md shadow cursor-pointer transition
                                        ${activeImage === img
                                                ? "ring-2 ring-blue-600 scale-105"
                                                : "opacity-70 hover:opacity-100"
                                            }`}
                                        alt="thumbnail"
                                    />
                                ))}

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

export default Hikkaduwa;
