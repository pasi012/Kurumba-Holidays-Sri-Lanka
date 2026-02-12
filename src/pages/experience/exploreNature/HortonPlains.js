import { useEffect, useState } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

import experienceHero from "../../../assets/hortan-paint.jpg";

import kithulgala1 from "../../../assets/hortan-paint.jpg";
import kithulgala2 from "../../../assets/Horton-Plains1.png";
import kithulgala3 from "../../../assets/Horton-Plains2.jpg";

function HortonPlains() {

    const [activeImage, setActiveImage] = useState(kithulgala1);

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
                        Horton Plains
                    </h1>

                    <p
                        data-aos="fade-up"
                        data-aos-delay="150"
                        className="mt-4 sm:mt-6 max-w-full sm:max-w-2xl md:max-w-3xl text-sm sm:text-base md:text-lg"
                    >
                        Discover the Untamed Beauty of Horton Plains
                    </p>
                </div>
            </section>

            {/* ================= RAFTING IN KITULGALA ================= */}
            <section className="bg-white py-16 px-4 sm:px-8 lg:px-20">
                <div className="max-w-7xl mx-auto">

                    {/* Title */}
                    <h2
                        data-aos="fade-up"
                        className="text-center text-2xl sm:text-3xl md:text-4xl font-semibold text-blue-900 tracking-wide"
                    >
                        Horton Plains
                    </h2>

                    {/* Content */}
                    <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

                        {/* Text Content */}
                        <div data-aos="fade-right" className="space-y-5 text-gray-700 text-sm sm:text-base leading-relaxed">

                            <p>
                                Horton Plains National Park, located in Sri Lanka’s central highlands, is a breathtaking
                                UNESCO World Heritage site known for its rolling grasslands, cloud forests, and dramatic
                                escarpments. Sitting at an elevation of over 2,000 meters, it offers a refreshing climate
                                and some of the most stunning landscapes in the country.
                            </p>

                            <p>
                                One of the park’s most famous attractions is World’s End, a sheer cliff that drops nearly
                                900 meters, providing spectacular panoramic views across the lowlands. Baker’s Falls,
                                another highlight, adds to the park’s charm with its powerful cascades set against lush
                                greenery.
                            </p>

                            <p>
                                Horton Plains is home to a remarkable variety of wildlife including sambar deer, endemic
                                birds, and unique plant species found nowhere else on Earth. Nature lovers will enjoy
                                spotting rare flora and fauna while walking along the well-maintained trails.
                            </p>

                            <p>
                                Whether you’re hiking through misty plains, photographing scenic viewpoints, or simply
                                enjoying the cool mountain air, Horton Plains offers a peaceful and unforgettable
                                experience for travelers seeking Sri Lanka’s natural beauty.
                            </p>

                        </div>

                        {/* Image Section */}
                        <div data-aos="fade-left" className="relative">

                            {/* Main Image */}
                            <img
                                src={activeImage}
                                alt="Rafting in Kitulgala"
                                className="rounded-lg shadow-xl w-full h-[350px] object-cover transition duration-300"
                            />

                            {/* Thumbnail Strip */}
                            <div className="flex gap-3 mt-4 justify-center">

                                {[kithulgala1, kithulgala2, kithulgala3].map((img, index) => (
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

export default HortonPlains;