import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { useNavigate } from "react-router-dom";

import aboutHero from "../../../assets/ramayana.jpg";

import dhamma from "../../../assets/ramayana1.jpg";
import sigiriya from "../../../assets/ramayana2.jpg";
import kandy from "../../../assets/Ramayana Trails in Sri Lanka.jpeg";
import temple from "../../../assets/ramayana.jpg";

import "swiper/css";
import "swiper/css/navigation";

function RamayanaTrails() {

    const navigate = useNavigate();

    const images = [dhamma, sigiriya, kandy, temple];

    const [selectedImage, setSelectedImage] = useState(images[0]);

    const [day1, setDay1] = useState(true);
    const [day2, setDay2] = useState(false);
    const [day3, setDay3] = useState(false);
    const [day4, setDay4] = useState(false);
    const [day5, setDay5] = useState(false);

    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
    }, []);

    return (
        <div className="w-full overflow-hidden">

            {/* ================= HERO ================= */}
            <section className="relative h-[40vh] w-full">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${aboutHero})` }}
                />
                <div className="absolute inset-0 bg-black/60" />

                <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white">
                    <h1
                        data-aos="fade-up"
                        className="text-3xl sm:text-4xl md:text-5xl lg:text-4xl font-extrabold leading-tight"
                    >
                        Ramayana Trails
                    </h1>
                    <p
                        data-aos="fade-up"
                        data-aos-delay="150"
                        className="mt-4 sm:mt-6 max-w-full sm:max-w-2xl md:max-w-3xl text-sm sm:text-base md:text-lg"
                    >
                        Best Of Sri Lanka With Ramayana Tours
                    </p>
                </div>
            </section>

            {/* ================= CULTURAL HIGHLIGHTS ================= */}
            <section className="bg-white -py-2">
                <div className="mx-auto max-w-7xl px-6 text-center">

                    <p
                        data-aos="fade-up"
                        data-aos-delay="150"
                        className="mx-auto mt-6 max-w-4xl text-gray-600 leading-relaxed"
                    >
                        The Ramayana Trail is linked with the Hindu epic poem known as the Ramayana; this tale has a section which tells of how Seetha, who was Rama’s wife, was captured by King Ravana. The island carries much evidence of this enthralling narrative; learn more about it with Sri Lanka group tour packages offered by Kurumba Holidays Sri Lanka as we take you to the places where those important chapters of the story took place.
                    </p>

                    {/* Duration Bar */}
                    <div
                        data-aos="fade-up"
                        data-aos-delay="250"
                        className="mx-auto mt-10 flex max-w-4xl items-center justify-center rounded-md bg-gradient-to-r from-[#0A3A5E] to-[#1C6EA4] py-5 text-white"
                    >
                        <div className="flex items-center gap-4">
                            <span className="text-3xl">📅</span>
                            <div className="text-left">
                                <p className="text-sm uppercase tracking-widest">Duration</p>
                                <p className="text-xl font-bold">05 Days / 04 Nights</p>
                            </div>
                        </div>
                    </div>

                    {/* Main Image */}
                    <div
                        data-aos="zoom-in"
                        data-aos-delay="300"
                        className="mx-auto mt-10 overflow-hidden rounded-xl shadow-xl"
                    >
                        <img
                            src={selectedImage}
                            alt="Selected Tour"
                            className="h-[420px] w-full object-fill transition duration-500"
                        />
                    </div>

                    {/* Thumbnail Gallery */}
                    <div
                        data-aos="fade-up"
                        data-aos-delay="400"
                        className="mx-auto mt-8 grid max-w-5xl grid-cols-2 gap-4 sm:grid-cols-4"
                    >
                        {images.map((img, index) => (
                            <img
                                key={index}
                                src={img}
                                onClick={() => setSelectedImage(img)}
                                className={`h-28 w-full cursor-pointer rounded-lg object-cover transition-all duration-300 
                                hover:scale-105
                                ${selectedImage === img ? "ring-4 ring-[#0A3A5E]" : "opacity-70"}
                            `}
                            />
                        ))}
                    </div>

                </div>
            </section>

            {/* ================= TOUR ITINERARY ================= */}
            <section className="bg-gray-50 py-10">
                <div className="mx-auto max-w-6xl px-6">

                    <h2
                        data-aos="fade-up"
                        className="text-center text-3xl sm:text-4xl md:text-5xl lg:text-4xl font-extrabold leading-tight"
                    >
                        Tour Itinerary
                    </h2>

                    <div className="mt-12 space-y-6">

                        {/* ================= DAY 1 ================= */}
                        <div data-aos="fade-up" className="overflow-hidden rounded-lg border bg-white shadow">
                            <button
                                onClick={() => setDay1(!day1)}
                                className="flex w-full items-center justify-between bg-gray-100 px-6 py-5 text-left font-semibold text-[#0A3A5E]"
                            >
                                <span>Day 01 - Airport | Pinnawala | Kandy</span>
                                <span>{day1 ? "−" : "+"}</span>
                            </button>

                            {day1 && (
                                <div className="space-y-4 px-6 py-6 text-gray-700 leading-relaxed">
                                    <p>
                                        On arrival, be met by a representative of Kurumba Holidays Sri Lanka and thereafter proceed to Kandy. En route visit the Pinnawala Elephant Orphanage.
                                    </p>

                                    <p>
                                        A sanctuary for orphaned elephants, the Pinnawala Elephant Orphanage gives visitors the unique opportunity to get up close to these majestic animals. Established in 1975, the orphanage’s elephant population has grown over the years with quite a few elephant claves being born as well. Today visitors have the chance to get up close to these gentle giants of the wild; be present for milk feeding time (09:15am and 01:15pm) and for the daily trip to the nearby river for their daily bath (10:00am and 02:00pm) where some can be seen frolicking in the water.
                                    </p>

                                    <p>
                                        Head to Kandy, the island’s last stronghold before it was captured by the British. The town has a rich history that is very much a part of local culture. Amongst the highlights at this UNESCO World Heritage Site is the famed Temple of the Sacred Tooth Relic, a revered place of worship amongst Buddhists. From bustling markets full of fresh produce and a modern shopping centre to a gem museum and an arts & crafts centre, there is much to see here. End the day by taking in a cultural show featuring traditional performances and energetic drumming.
                                    </p>

                                    <p>
                                        End the day relaxing at your hotel in Kandy.
                                    </p>

                                    <p className="font-semibold">Overnight stay in Kandy</p>

                                </div>
                            )}
                        </div>

                        {/* ================= DAY 2 ================= */}
                        <div data-aos="fade-up" data-aos-delay="150" className="overflow-hidden rounded-lg border bg-white shadow">
                            <button
                                onClick={() => setDay2(!day2)}
                                className="flex w-full items-center justify-between bg-gray-100 px-6 py-5 text-left font-semibold text-[#0A3A5E]"
                            >
                                <span>Day 02 - Kandy | Nuwara Eliya | Kandapola</span>
                                <span>{day2 ? "−" : "+"}</span>
                            </button>

                            {day2 && (
                                <div className="space-y-4 px-6 py-6 text-gray-700 leading-relaxed">
                                    <p>
                                        After breakfast begin your journey to Kandapola via Nuwara Eliya.
                                    </p>

                                    <p>
                                        Optional visit to the Royal Botanical Gardens, Peradeniya.
                                    </p>

                                    <p>
                                        Home to over 4,000 plants species, the Royal Botanical Gardens is a popular attraction for both local and foreigners alike. Encompassing 147 acres, these gardens date back to the 14th century and have evolved over the course of time. Today, it features an amazing array of flora including orchid varieties and such highlights as the Avenue of Palms and a Cannonball Tree that was initially planted by King George V.
                                    </p>

                                    <p>
                                        Thereafter proceed to Kandapola via Nuwara Eliya. En route visit a tea factory and the Hanuman Temple in Ramboda.
                                    </p>

                                    <p>
                                        Very much a part of Sri Lanka’s image, Ceylon Tea is loved the world over. Set amidst the enchanting beauty of slopes blanketed in tea bushes, take a tour of a tea factory; learn of the traditions involved in tea processing, while the perfect way to complete your experience is to have a cup of expertly prepared tea.
                                    </p>

                                    <p>
                                        Make your way to the hills of Ramboda, a place that is linked with the Ramayana; it is believed that Lord Hanuman was in search of Sita here. Today, you can find a temple in this area dedicated to Lord Hanuman, constructed by the Chinmaya Mission of Sri Lanka. Among the highlights is an image of this Hindu deity spanning a height of 16 feet.
                                    </p>

                                    <p>
                                        After your visit head to Nuwara Eliya and Kandapola.
                                    </p>

                                    <p className="font-semibold">Overnight stay in Kandapola.</p>

                                </div>
                            )}
                        </div>

                        {/* ================= DAY 3 ================= */}
                        <div
                            data-aos="fade-up"
                            data-aos-delay="300"
                            className="overflow-hidden rounded-lg border bg-white shadow"
                        >
                            <button
                                onClick={() => setDay3(!day3)}
                                className="flex w-full items-center justify-between bg-gray-100 px-6 py-5 text-left font-semibold text-[#0A3A5E]"
                            >
                                <span>Day 03 - Kandapola | Nuwara Eliya | Kalutara</span>
                                <span>{day3 ? "−" : "+"}</span>
                            </button>

                            {day3 && (
                                <div className="space-y-5 px-6 py-6 text-gray-700 leading-relaxed">

                                    <p>
                                        After breakfast at the hotel, it is time to proceed to Kalutara.
                                    </p>

                                    <p>
                                        En route enjoy a city tour of Nuwara Eliya including a visit to the Seetha Amman Temple and the Hakgala Botanical Garden.
                                    </p>

                                    <p>
                                        A former British colonial retreat, Nuwara Eliya has a unique old world charm set amidst idyllic landscapes of slopes abounding in tea bushes. As you wander around the town you will come across colonial-style bungalows and English cottages which lend to its charm. A magnificent 18-hole golf course can be found here along with Lake Gregory a popular place for a picnic or some recreation.
                                    </p>

                                    <p>
                                        Visit the Seetha Amman Temple, another site that has its origins in the Ramayana. The temple was built in honour of Sita, Lord Rama’s wife; according to local tradition, she was held captive in this area by King Ravana. At the nearby stream, you will also find indentations on the rocks which are believed to be Lord Hanuman’s footprints.
                                    </p>

                                    <p>
                                        Complete your exploration of the hill country with a visit to the Hakgala Botanical Garden also known as the “Pleasure Garden of Ravana”. One of the most picturesque gardens on the island, this popular site is a must visit for nature lovers. Amidst the stunning scenery, you will come across everything from orchids to roses and other flowering plants that add splashes of colour to the gardens.
                                    </p>

                                    <p>
                                        Once completed your tour, it is time to make your way to the south coast and your hotel in Kalutara.
                                    </p>

                                    <p className="font-semibold">Overnight stay in Kalutara.</p>

                                </div>
                            )}
                        </div>

                        {/* ================= DAY 4 ================= */}
                        <div
                            data-aos="fade-up"
                            data-aos-delay="400"
                            className="overflow-hidden rounded-lg border bg-white shadow"
                        >
                            <button
                                onClick={() => setDay4(!day4)}
                                className="flex w-full items-center justify-between bg-gray-100 px-6 py-5 text-left font-semibold text-[#0A3A5E]"
                            >
                                <span>Day 04 - Kalutara | Kosgoda | Colombo</span>
                                <span>{day4 ? "−" : "+"}</span>
                            </button>

                            {day4 && (
                                <div className="space-y-5 px-6 py-6 text-gray-700 leading-relaxed">

                                    <p>
                                        After having breakfast at the hotel, make your way to the Kosgoda Turtle Hatchery.
                                    </p>

                                    <p>
                                        Also known as the Kosgoda Sea Turtle Conservation Project, this turtle hatchery takes active steps to help in the conservation of these endangered species. Run by the Perera family, the initiative looks to protect turtle breeding sites as well as look after hatchlings. Visitors can see this conservation in practice including new hatchlings as they wait to be released to the sea.
                                    </p>

                                    <p>
                                        Once completed, it is time to head to Colombo, where you will check-in to your hotel.
                                    </p>

                                    <p className="font-semibold">Overnight stay in Colombo.</p>

                                </div>
                            )}
                        </div>

                        {/* ================= DAY 5 ================= */}
                        <div
                            data-aos="fade-up"
                            data-aos-delay="500"
                            className="overflow-hidden rounded-lg border bg-white shadow"
                        >
                            <button
                                onClick={() => setDay5(!day5)}
                                className="flex w-full items-center justify-between bg-gray-100 px-6 py-5 text-left font-semibold text-[#0A3A5E]"
                            >
                                <span>Day 05 - Colombo | Airport</span>
                                <span>{day5 ? "−" : "+"}</span>
                            </button>

                            {day5 && (
                                <div className="space-y-5 px-6 py-6 text-gray-700 leading-relaxed">

                                    <p>
                                        After breakfast, embark on a city and shopping tour.
                                    </p>

                                    <p>
                                        The commercial capital of Sri Lanka, Colombo is a thriving metropolis by the sea featuring a mix of modern development and colonial influences. There are many retail hotspots in which to enjoy a shopping expedition; the Colombo Racecourse, Arcade Independence Square and the Dutch Hospital are three such sites which have been transformed from their colonial origins into bustling hubs for shopping.
                                    </p>

                                    <p>
                                        Other city highlights include the Gangarama Temple, the BMICH (Bandaranaike Memorial International Conference Hall), the Nelum Pokuna performance centre and the Pettah area with its myriad of streets full of shops and stalls selling everything imaginable.
                                    </p>

                                    <p>
                                        Thereafter proceed to the airport for departure.
                                    </p>

                                </div>
                            )}
                        </div>

                    </div>
                </div>
            </section>

            {/* ================= ROUTE MAP ================= */}
            <section className="bg-white -py-2">
                <div className="mx-auto max-w-7xl px-6">

                    <div
                        className="ch-left mx-auto max-w-5xl"
                        data-aos="fade-right"
                    >
                        <h1
                            data-aos="fade-up"
                            className="mb-6 text-center text-3xl sm:text-4xl md:text-5xl lg:text-4xl font-extrabold leading-tight"
                        >
                            Route
                        </h1>

                        <div className="flex flex-col lg:flex-row gap-6">

                            <div className="map-container flex-1 overflow-hidden rounded-xl shadow-xl border">
                                <iframe
                                    width="100%"
                                    height="450"
                                    style={{ border: 0 }}
                                    loading="lazy"
                                    allowFullScreen
                                    src={`https://www.google.com/maps/embed/v1/directions?key=AIzaSyBjUk_Sn0lthNO_cpZO9n5hI1lmZPRUB0E
                                    &origin=Bandaranaike+International+Airport,Sri+Lanka
                                    &destination=Bandaranaike+International+Airport,Sri+Lanka
                                    &waypoints=
                                    Pinnawala+Elephant+Orphanage|
                                    Kandy|
                                    Nuwara+Eliya|
                                    Kandapola|
                                    Kalutara|
                                    Kosgoda|
                                    Colombo
                                    `.replace(/\s+/g, '')}
                                />

                            </div>

                            {/* Route Info */}
                            <div className="route-info w-full h-[120px] lg:w-[300px] flex flex-col items-start gap-3 rounded-lg bg-gray-100 p-5 text-lg shadow">
                                <p><strong>Distance:</strong> ~585 km</p>
                                <p><strong>Driving Time:</strong> ~16–18 hours</p>
                            </div>

                        </div>

                    </div>

                </div>
            </section>

            {/* ================= IMPORTANT INFO + CTA ================= */}
            <section className="bg-white py-10">
                <div className="mx-auto max-w-7xl px-6">

                    {/* Important Points */}
                    <div data-aos="fade-up" className="mx-auto max-w-4xl">
                        <h3 className="mb-6 text-center text-2xl font-bold text-[#0A3A5E]">
                            Important points to note
                        </h3>

                        <ul className="space-y-4 text-gray-700">
                            <li className="flex items-start gap-3">
                                <span className="mt-1 text-[#0A3A5E]">◆</span>
                                <p>
                                    After making the payment, any booking cannot be cancelled.
                                    Hence, once the payment is made it will not be refunded.
                                </p>
                            </li>

                            <li className="flex items-start gap-3">
                                <span className="mt-1 text-[#0A3A5E]">◆</span>
                                <p>
                                    Additional services and excursions that are optional may be provided,
                                    though for an additional charge.
                                </p>
                            </li>

                            <li className="flex items-start gap-3">
                                <span className="mt-1 text-[#0A3A5E]">◆</span>
                                <p>
                                    The official check-in time at all hotels is at 12:00 pm.
                                </p>
                            </li>

                            <li className="flex items-start gap-3">
                                <span className="mt-1 text-[#0A3A5E]">◆</span>
                                <p>
                                    The official check-out time at all hotels is at 11:00 am.
                                </p>
                            </li>

                            <li className="flex items-start gap-3">
                                <span className="mt-1 text-[#0A3A5E]">◆</span>
                                <p>
                                    Visits to wildlife parks will be at one’s own risk. Jeeps and vehicles
                                    available here are without air conditioning and come with basic insurance
                                    covers (not comprehensive as in the case of vehicles used for our tours).
                                </p>
                            </li>
                        </ul>
                    </div>

                    {/* CTA Box */}
                    <div
                        data-aos="zoom-in"
                        className="mt-10 w-full rounded-lg bg-gray-100 px-6 py-10 text-center shadow"
                    >
                        <h2 className="mb-6 text-xl sm:text-2xl font-semibold text-gray-800">
                            Experience your dream holiday in Sri Lanka!
                        </h2>

                        <button
                            onClick={() => navigate(`/contact`)}
                            className="rounded-full bg-[#00A9C7] px-10 py-3 text-white font-semibold transition hover:bg-[#008eaa]">
                            BEGIN YOUR JOURNEY
                        </button>
                    </div>

                    {/* Related Destinations */}
                    <div data-aos="fade-up" className="mt-10 text-left">
                        <h3 className="mb-6 text-xl font-bold text-gray-700">
                            RELATED DESTINATIONS
                        </h3>

                        <div className="flex flex-wrap justify-start gap-3">
                            {[
                                "Airport",
                                "Pinnawala",
                                "Kandy",
                                "Nuwara Eliya",
                                "Kandapola",
                                "Kalutara",
                                "Kosgoda",
                                "Colombo"
                            ].map((place, i) => (
                                <span
                                    key={i}
                                    className="cursor-pointer rounded-full bg-gray-200 px-5 py-2 text-sm font-medium text-gray-700 transition hover:bg-[#0A3A5E] hover:text-white"
                                >
                                    {place}
                                </span>
                            ))}
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

export default RamayanaTrails;
