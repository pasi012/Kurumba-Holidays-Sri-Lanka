import { useEffect, useState } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

import experienceHero from "../../../assets/Pasikuda.jpg";

import pasikudah1 from "../../../assets/Pasikuda.jpg";
import pasikudah2 from "../../../assets/pasikuda1.jpg";
import pasikudah3 from "../../../assets/pasikuda2.jpg";

function Pasikudah() {

    const [activeImage, setActiveImage] = useState(pasikudah1);

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
                        Pasikudah
                    </h1>

                    <p
                        data-aos="fade-up"
                        data-aos-delay="150"
                        className="mt-4 sm:mt-6 max-w-full sm:max-w-2xl md:max-w-3xl text-sm sm:text-base md:text-lg"
                    >
                        Home to Sri Lanka’s Shallowest and Calmest Beach
                    </p>
                </div>
            </section>

            {/* ================= PASIKUDAH SECTION ================= */}
            <section className="bg-white py-16 px-4 sm:px-8 lg:px-20">
                <div className="max-w-7xl mx-auto">

                    {/* Title */}
                    <h2
                        data-aos="fade-up"
                        className="text-center text-2xl sm:text-3xl md:text-4xl font-semibold text-blue-900 tracking-wide"
                    >
                        Discover Pasikudah
                    </h2>

                    {/* Content */}
                    <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

                        {/* Text Content */}
                        <div data-aos="fade-right" className="space-y-5 text-gray-700 text-sm sm:text-base leading-relaxed">

                            <p>
                                Pasikudah is one of Sri Lanka’s most beautiful beach destinations, famous for its shallow
                                and calm waters that stretch far into the sea. It is ideal for swimming, wading, and
                                relaxing in crystal-clear turquoise waters.
                            </p>

                            <p>
                                The beach is protected by coral reefs, making it perfect for snorkeling and enjoying
                                vibrant marine life. Its gentle waves make it one of the safest beaches in Sri Lanka
                                for families and children.
                            </p>

                            <p>
                                Pasikudah is also known for its luxury beach resorts, peaceful atmosphere, and stunning
                                sunrise views over the Indian Ocean. Visitors can enjoy boat rides, diving, and
                                peaceful beach walks.
                            </p>

                            <p>
                                Whether you are looking for a romantic getaway or a relaxing tropical escape, Pasikudah
                                offers one of the finest beach experiences on Sri Lanka’s east coast.
                            </p>

                        </div>

                        {/* Image Section */}
                        <div data-aos="fade-left" className="relative">

                            {/* Main Image */}
                            <img
                                src={activeImage}
                                alt="Pasikudah"
                                className="rounded-lg shadow-xl w-full h-[350px] object-cover transition duration-300"
                            />

                            {/* Thumbnail Strip */}
                            <div className="flex gap-3 mt-4 justify-center">

                                {[pasikudah1, pasikudah2, pasikudah3].map((img, index) => (
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

export default Pasikudah;
