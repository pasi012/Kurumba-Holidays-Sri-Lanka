import { useEffect, useState } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

import experienceHero from "../../../assets/anurapura.jpg";

import anuradhapura1 from "../../../assets/anurapura.jpg";
import anuradhapura2 from "../../../assets/anurapura1.jpg";
import anuradhapura3 from "../../../assets/anurapura2.jpg";

function Anuradhapura() {

    const [activeImage, setActiveImage] = useState(anuradhapura1);

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
                        Anuradhapura
                    </h1>

                    <p
                        data-aos="fade-up"
                        data-aos-delay="150"
                        className="mt-4 sm:mt-6 max-w-full sm:max-w-2xl md:max-w-3xl text-sm sm:text-base md:text-lg"
                    >
                        Explore the Sacred Ancient City of Sri Lanka
                    </p>
                </div>
            </section>

            {/* ================= ANURADHAPURA SECTION ================= */}
            <section className="bg-white py-16 px-4 sm:px-8 lg:px-20">
                <div className="max-w-7xl mx-auto">

                    {/* Title */}
                    <h2
                        data-aos="fade-up"
                        className="text-center text-2xl sm:text-3xl md:text-4xl font-semibold text-blue-900 tracking-wide"
                    >
                        The Ancient City of Anuradhapura
                    </h2>

                    {/* Content */}
                    <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

                        {/* Text Content */}
                        <div data-aos="fade-right" className="space-y-5 text-gray-700 text-sm sm:text-base leading-relaxed">

                            <p>
                                Anuradhapura, one of Sri Lanka’s most sacred and historically rich cities, was the first
                                capital of the ancient Sinhala kingdom and a thriving center of Buddhist civilization
                                for over a thousand years. Today, it stands as a UNESCO World Heritage site filled with
                                awe-inspiring monuments and spiritual landmarks.
                            </p>

                            <p>
                                The city is famous for its massive dagobas (stupas), ancient monasteries, and beautifully
                                engineered irrigation systems that demonstrate the brilliance of ancient Sri Lankan
                                engineering. The sacred Sri Maha Bodhi tree, grown from a cutting of the tree under which
                                the Buddha attained enlightenment, continues to attract pilgrims from around the world.
                            </p>

                            <p>
                                Exploring Anuradhapura is like walking through a living museum — from towering stone
                                structures like Ruwanwelisaya and Jetavanaramaya to serene ruins hidden among shady trees
                                and lotus-filled ponds.
                            </p>

                            <p>
                                Whether you are drawn by history, culture, or spirituality, Anuradhapura offers a
                                powerful and peaceful journey into Sri Lanka’s ancient past.
                            </p>

                        </div>

                        {/* Image Section */}
                        <div data-aos="fade-left" className="relative">

                            {/* Main Image */}
                            <img
                                src={activeImage}
                                alt="Anuradhapura"
                                className="rounded-lg shadow-xl w-full h-[350px] object-cover transition duration-300"
                            />

                            {/* Thumbnail Strip */}
                            <div className="flex gap-3 mt-4 justify-center">

                                {[anuradhapura1, anuradhapura2, anuradhapura3].map((img, index) => (
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

export default Anuradhapura;
