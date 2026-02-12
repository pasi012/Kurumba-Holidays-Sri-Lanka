import { useEffect, useState } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

import experienceHero from "../../../assets/Knuckles.jpg";

import kithulgala1 from "../../../assets/Knuckles.jpg";
import kithulgala2 from "../../../assets/Knuckles1.jpg";
import kithulgala3 from "../../../assets/Knuckles2.jpg";

function Knuckles() {

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
                        Knuckles
                    </h1>

                    <p
                        data-aos="fade-up"
                        data-aos-delay="150"
                        className="mt-4 sm:mt-6 max-w-full sm:max-w-2xl md:max-w-3xl text-sm sm:text-base md:text-lg"
                    >
                        Discover the Wild Beauty of the Knuckles Mountains
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
                        Knuckles Mountain Range
                    </h2>

                    {/* Content */}
                    <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

                        {/* Text Content */}
                        <div data-aos="fade-right" className="space-y-5 text-gray-700 text-sm sm:text-base leading-relaxed">

                            <p>
                                The Knuckles Mountain Range, located in the central highlands of Sri Lanka, is a breathtaking
                                UNESCO World Heritage site that attracts nature lovers, hikers, and adventure seekers from
                                around the world. Surrounded by mist-covered peaks, dense forests, and cascading waterfalls,
                                this region offers an unforgettable escape into the wild.
                            </p>

                            <p>
                                Visitors to Knuckles can experience a variety of outdoor adventures including trekking through
                                cloud forests, exploring remote villages, and discovering hidden streams and panoramic viewpoints.
                                The region’s rich biodiversity makes it one of the most ecologically significant areas in the country.
                            </p>

                            <p>
                                The Knuckles range features dozens of trails suitable for both beginners and experienced hikers.
                                Whether you choose a short nature walk or a multi-day trek, every journey promises stunning
                                landscapes and fresh mountain air.
                            </p>

                            <p>
                                Beyond hiking, travelers can enjoy bird watching, camping, river bathing, and photography.
                                For those seeking deeper exploration, guided treks provide insight into the region’s unique
                                flora, fauna, and traditional village life.
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

export default Knuckles;