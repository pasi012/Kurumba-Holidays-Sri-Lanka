import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import travelGuideHero from "../../assets/Things-To-Do-In-Sri-Lanka.jpg";

function ThingsToDo() {

    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
    }, []);

    return (
        <div className="w-full overflow-hidden">

            {/* ================= HERO ================= */}
            <section className="relative h-[40vh] w-full">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${travelGuideHero})` }}
                />
                <div className="absolute inset-0 bg-black/60" />

                <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white">
                    <h1
                        data-aos="fade-up"
                        className="text-3xl sm:text-4xl md:text-5xl lg:text-4xl font-extrabold leading-tight"
                    >
                        Things To Do
                    </h1>

                    <p
                        data-aos="fade-up"
                        data-aos-delay="150"
                        className="mt-4 sm:mt-6 max-w-full sm:max-w-2xl md:max-w-3xl text-sm sm:text-base md:text-lg"
                    >
                        Discover the gems of Sri Lanka
                    </p>
                </div>
            </section>

            {/* ================= THINGS TO DO CONTENT ================= */}
            <section className="bg-white py-10 px-4 sm:px-8 lg:px-20">
                <div className="max-w-6xl mx-auto">

                    <h2
                        data-aos="fade-up"
                        className="text-center text-2xl sm:text-3xl md:text-4xl font-bold text-blue-900 mb-6"
                    >
                        THINGS TO DO
                    </h2>

                    <p
                        data-aos="fade-up"
                        data-aos-delay="100"
                        className="text-center max-w-4xl mx-auto text-gray-600 mb-12 leading-relaxed"
                    >
                        Discover hidden attractions, wonderful destinations, and entertaining things to do in Sri Lanka with us!
                        Spend adventurous days in utopia surfing across the water, hike the monumental mountains, and feel the blend
                        of spirit and nature throughout this island.
                    </p>

                    <div className="space-y-10 text-gray-700 text-sm sm:text-base leading-relaxed">

                        <div data-aos="fade-up">
                            <h3 className="font-bold text-lg text-gray-900 mb-2">Ayurveda Treatments</h3>
                            <p>
                                Ayurvedic treatments in Sri Lanka are based on ancient healing traditions and rituals that help bring peace
                                for the body, mind, and soul. Unwind and restore that inner peace by indulging in herbal baths and head &
                                body massages which are done by using all-natural herbs and ointments.
                            </p>
                        </div>

                        <div data-aos="fade-up">
                            <h3 className="font-bold text-lg text-gray-900 mb-2">Paramotoring – Koggala</h3>
                            <p>
                                Paramotoring is the newest adventure sport to hit Sri Lanka, which will take you 500 to 1,000 feet up in
                                the air. This adventurous activity taking place in Koggala provides you with the opportunity to witness
                                the spectacular landscapes and mesmerising vistas of the coast, while you soar above in the sunny skies.
                            </p>
                        </div>

                        <div data-aos="fade-up">
                            <h3 className="font-bold text-lg text-gray-900 mb-2">Kite Surfing – Kalpitiya</h3>
                            <p>
                                Feel the strong breeze of approximately 18 to 20 knots caress your soul in this beautiful coastal locale
                                named Kalpitiya, located in the north-west coast of Sri Lanka. This town is the ideal place to enjoy a
                                myriad of things to do, including kite-surfing. Harness the power of the wind as you skim along the waves
                                that are sure to take you on a memorable ride.
                            </p>
                        </div>

                        <div data-aos="fade-up">
                            <h3 className="font-bold text-lg text-gray-900 mb-2">Shopping</h3>
                            <p>
                                Up for some last-minute retail therapy? Holidaying in Sri Lanka gives you a chance to purchase everything
                                you like, from international brands to local stores, and also unique products such as spices, gems,
                                Ceylon tea, batiks, handicrafts, and more.
                            </p>
                        </div>

                        <div data-aos="fade-up">
                            <h3 className="font-bold text-lg text-gray-900 mb-2">Hot Air Ballooning – Kandalama, Down South</h3>
                            <p>
                                Go on a sightseeing tour in style in a hot air balloon, which is sure to give you the most amazing bird’s
                                eye view of this island. Taking place in areas the likes of down south and Kandalama, enjoy unparalleled
                                views of the sun-drenched coast and the iconic Sigiriya Rock Fortress.
                            </p>
                        </div>

                        <div data-aos="fade-up">
                            <h3 className="font-bold text-lg text-gray-900 mb-2">Whale and Dolphin Watching</h3>
                            <p>
                                Around the shores of Mirissa and Kalpitiya spotting the majestic Sperm & Blue Whales, Bottlenose dolphins,
                                Humpback, and even the playful antics of Spinner dolphins can be a treat.
                            </p>
                        </div>

                        <div data-aos="fade-up">
                            <h3 className="font-bold text-lg text-gray-900 mb-2">Boat Safari</h3>
                            <p>
                                Boat safaris in Sri Lanka take you through some of the mangrove habitat waterways which will prove to be a
                                treat. On your excursions, you may come across scenic banks that are quite a sight for the weary soul
                                with colourful vegetation, wildlife, and local fishermen going about their daily activities.
                            </p>
                        </div>

                        <div data-aos="fade-up">
                            <h3 className="font-bold text-lg text-gray-900 mb-2">Bird Watching</h3>
                            <p>
                                Home to a wide range of migratory and endemic species, this island is a hotspot for bird watching
                                enthusiasts. Sri Lanka is blessed with a rich natural heritage which attracts many birds including the
                                likes of Purple Heron, Shaheen Falcon, and the Ceylon Junglefowl.
                            </p>
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

export default ThingsToDo;
