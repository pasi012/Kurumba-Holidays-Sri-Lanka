import { useEffect, useState } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

import experienceHero from "../../../assets/Kithulgala1.jpg";

import kithulgala1 from "../../../assets/colomboKithulgala1.jpg";
import kithulgala2 from "../../../assets/Kithulgala1.jpg";
import kithulgala3 from "../../../assets/Kithulgala2.jpg";

function Kithulgala() {

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
                        Kithulgala
                    </h1>

                    <p
                        data-aos="fade-up"
                        data-aos-delay="150"
                        className="mt-4 sm:mt-6 max-w-full sm:max-w-2xl md:max-w-3xl text-sm sm:text-base md:text-lg"
                    >
                        Experience the Thrill of White-Water Rafting
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
                        RAFTING IN KITULGALA
                    </h2>

                    {/* Content */}
                    <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

                        {/* Text Content */}
                        <div data-aos="fade-right" className="space-y-5 text-gray-700 text-sm sm:text-base leading-relaxed">

                            <p>
                                The town of Kitulgala that lies quietly in the Sabaragamuwa Province of Sri Lanka
                                is a place that many adventure sports enthusiasts and adrenaline junkies steadily visit.
                                While the lives of the locals unfold at a steady pace around the region, at the heart
                                of this little town, the Kelani River offers spectacular thrills to adventure seekers.
                            </p>

                            <p>
                                Large numbers of locals and tourists visit the town to enjoy the epic thrills on offer
                                along the frenetic waters of the Kelani River. White water rafting in Kitulgala is a
                                well-established industry and the services provided can truly be called world-class.
                            </p>

                            <p>
                                The Kelani River has five major rapids and four minor rapids. Choose a package that suits
                                your level of skill and confidence. The rides are suitable for anyone above the age of 10.
                            </p>

                            <p>
                                If the rushing river waters fail to quench your thirst for thrills, you can try adventure
                                jumps and waterfall abseiling. For nature lovers, bird watching, jungle trekking and
                                mountain biking are also available.
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

export default Kithulgala;