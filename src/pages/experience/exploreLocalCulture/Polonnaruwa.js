import { useEffect, useState } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

import experienceHero from "../../../assets/gal-wiharaya.jpg";

import polonnaruwa1 from "../../../assets/gal-wiharaya.jpg";
import polonnaruwa2 from "../../../assets/Heritage & Culture.jpg";
import polonnaruwa3 from "../../../assets/awkana.jpg";

function Polonnaruwa() {

    const [activeImage, setActiveImage] = useState(polonnaruwa1);

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
                        Polonnaruwa
                    </h1>

                    <p
                        data-aos="fade-up"
                        data-aos-delay="150"
                        className="mt-4 sm:mt-6 max-w-full sm:max-w-2xl md:max-w-3xl text-sm sm:text-base md:text-lg"
                    >
                        Discover Sri Lanka’s Medieval Royal Capital
                    </p>
                </div>
            </section>

            {/* ================= POLONNARUWA SECTION ================= */}
            <section className="bg-white py-16 px-4 sm:px-8 lg:px-20">
                <div className="max-w-7xl mx-auto">

                    {/* Title */}
                    <h2
                        data-aos="fade-up"
                        className="text-center text-2xl sm:text-3xl md:text-4xl font-semibold text-blue-900 tracking-wide"
                    >
                        The Ancient City of Polonnaruwa
                    </h2>

                    {/* Content */}
                    <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

                        {/* Text Content */}
                        <div data-aos="fade-right" className="space-y-5 text-gray-700 text-sm sm:text-base leading-relaxed">

                            <p>
                                Polonnaruwa was Sri Lanka’s second ancient capital and remains one of the best-preserved
                                archaeological cities in South Asia. This UNESCO World Heritage site reflects a golden
                                age of art, architecture, and Buddhist culture.
                            </p>

                            <p>
                                The city is filled with impressive ruins including royal palaces, grand stupas, audience
                                halls, and beautifully carved stone statues. The Gal Vihara, featuring four magnificent
                                Buddha statues carved from a single granite rock, is one of the most iconic landmarks
                                in the country.
                            </p>

                            <p>
                                Ancient irrigation systems such as Parakrama Samudra demonstrate the engineering genius
                                of the Polonnaruwa kings, supplying water to the dry zone and transforming it into a
                                thriving agricultural region.
                            </p>

                            <p>
                                Walking through Polonnaruwa offers a peaceful blend of history and nature, with ancient
                                ruins surrounded by green landscapes, lakes, and wildlife — making it one of Sri Lanka’s
                                most beautiful cultural destinations.
                            </p>

                        </div>

                        {/* Image Section */}
                        <div data-aos="fade-left" className="relative">

                            {/* Main Image */}
                            <img
                                src={activeImage}
                                alt="Polonnaruwa"
                                className="rounded-lg shadow-xl w-full h-[350px] object-cover transition duration-300"
                            />

                            {/* Thumbnail Strip */}
                            <div className="flex gap-3 mt-4 justify-center">

                                {[polonnaruwa1, polonnaruwa2, polonnaruwa3].map((img, index) => (
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

export default Polonnaruwa;
