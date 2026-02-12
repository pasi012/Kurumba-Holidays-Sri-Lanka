import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { useNavigate } from "react-router-dom";

import experienceHero from "../../../assets/Beach.jpg";

import negombo from "../../../assets/negombo.jpg";
import kalpitiya from "../../../assets/kalpitiya1.jpg";
import kalutara from "../../../assets/kaluthara.jpg";
import bentota from "../../../assets/Bentota1.jpg";
import hikkaduwa from "../../../assets/Hikkaduwa1.jpg";
import unawatuna from "../../../assets/Unawatuna.jpg";
import koggala from "../../../assets/koggala.jpg";
import tangalle from "../../../assets/Tangalle.jpg";
import mirissa from "../../../assets/mirissa.jpg";
import arugamBay from "../../../assets/Arugam-Bay.jpg";
import pasikudah from "../../../assets/Pasikuda.jpg";

function BeachesAndSunsets() {

    const navigate = useNavigate();

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
                    <h1 data-aos="fade-up" className="text-3xl sm:text-4xl md:text-5xl font-extrabold">
                        Beaches & Sunsets
                    </h1>

                    <p data-aos="fade-up" data-aos-delay="150" className="mt-4 max-w-3xl">
                        Discover Sri Lanka’s most beautiful coastlines, golden beaches and breathtaking sunsets
                    </p>
                </div>
            </section>

            {/* ================= BEACHES ================= */}
            <section className="bg-white py-16">
                <div className="max-w-7xl mx-auto px-4">

                    <div className="text-center mb-12">
                        <h2 data-aos="fade-up" className="text-3xl md:text-4xl font-bold text-gray-800">
                            Explore Sri Lanka’s Beaches
                        </h2>
                        <p data-aos="fade-up" data-aos-delay="100" className="mt-3 text-gray-600">
                            Boasting year-round sunshine and breathtaking sceneries, beach holidays in Sri Lanka offer a laidback coastal escape. Those on a getaway with Aitken Spence Travels can enjoy lazing on soft sandy beaches, get the perfect tan, delight in magical sunsets and the thrills of water sports; a perfect holiday be it with the whole family or that special someone.
                        </p>
                    </div>

                    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">

                        {[
                            ["Negombo", negombo, "A lively beach town near Colombo with golden sands and fishing villages."],
                            ["Kalpitiya", kalpitiya, "A paradise for dolphin watching, kite surfing and untouched beaches."],
                            ["Kalutara", kalutara, "A peaceful coastal town known for its palm-lined beaches."],
                            ["Bentota", bentota, "Famous for luxury beach resorts and water sports."],
                            ["Hikkaduwa", hikkaduwa, "A vibrant beach destination with coral reefs and nightlife."],
                            ["Unawatuna", unawatuna, "One of Sri Lanka’s most beautiful crescent-shaped beaches."],
                            ["Koggala", koggala, "Serene beaches and iconic stilt fishermen."],
                            ["Tangalle", tangalle, "Quiet and scenic beaches perfect for relaxation."],
                            ["Mirissa", mirissa, "Popular for whale watching and stunning sunsets."],
                            ["Arugam Bay", arugamBay, "Sri Lanka’s surfing capital on the east coast."],
                            ["Pasikudah", pasikudah, "Shallow turquoise waters and soft white sands."]
                        ].map(([name, image, desc], index) => (
                            <div key={name} data-aos="fade-up" data-aos-delay={index * 50} className="bg-gray-50 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition">
                                <img src={image} alt={name} className="h-56 w-full object-cover" />
                                <div className="p-6 text-center">
                                    <h3 className="text-xl font-bold text-gray-800">{name}</h3>
                                    <p className="mt-3 text-gray-600">{desc}</p>
                                    <button
                                        onClick={() => navigate(`/experience-sri-lanka/beaches-sunsets/${name.toLowerCase().replace(" ", "-")}`)}
                                        className="mt-5 px-6 py-2 bg-amber-500 text-white rounded-full hover:bg-amber-600 transition"
                                    >
                                        View More
                                    </button>
                                </div>
                            </div>
                        ))}

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
                    className="h-12 w-12 rounded-full shadow-lg transition hover:scale-110"
                />
            </a>

        </div>
    );
}

export default BeachesAndSunsets;
