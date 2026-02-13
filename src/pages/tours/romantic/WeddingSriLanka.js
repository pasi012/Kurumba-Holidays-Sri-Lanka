import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useRef } from "react";

import { useNavigate } from "react-router-dom";

import aboutHero from "../../../assets/wedding.jpg";

import related1 from "../../../assets/honeymoon.jpg";
import related2 from "../../../assets/RomanticEscape.jpg";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

function WeddingSriLanka() {

    const swiperRef = useRef(null);

    const navigate = useNavigate();

    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
    }, []);

    return (
        <div className="w-full overflow-hidden">

            {/* ================= HERO ================= */}
            <section className="relative h-[40vh] w-full">
                <div
                    className="absolute inset-0 bg-fill bg-center"
                    style={{ backgroundImage: `url(${aboutHero})` }}
                />
                <div className="absolute inset-0 bg-black/60" />

                <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white">
                    <h1
                        data-aos="fade-up"
                        className="text-3xl sm:text-4xl md:text-5xl lg:text-4xl font-extrabold leading-tight"
                    >
                        Wedding in Sri Lanka
                    </h1>
                    <p
                        data-aos="fade-up"
                        data-aos-delay="150"
                        className="mt-4 sm:mt-6 max-w-full sm:max-w-2xl md:max-w-3xl text-sm sm:text-base md:text-lg"
                    >
                        Forever Begins in Sri Lanka.
                    </p>
                </div>
            </section>

            {/* ================= WEDDING DETAILS ================= */}
            <section className="bg-white py-10">
                <div className="mx-auto max-w-6xl px-6">

                    {/* Heading */}
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-extrabold text-[#083A5E] tracking-wide">
                            WEDDING IN SRI LANKA
                        </h2>
                        <p className="mt-6 max-w-3xl mx-auto text-gray-600 leading-relaxed">
                            If you are dreaming of a tropical wedding, there is no better place than the island paradise of Sri Lanka.
                            The country offers stunning beachside resorts to plan the perfect fairy-tale wedding.
                            Choose from our exceptional wedding packages in Sri Lanka to begin your love story.
                        </p>
                    </div>

                    {/* Legal Requirements */}
                    <div className="mb-12">
                        <h3 className="text-xl font-bold text-gray-800 mb-4">Legal Requirements</h3>
                        <ul className="space-y-3 text-gray-600 list-disc pl-6">
                            <li>The couple should be residents at the hotel / resort at least four days prior to the day of the wedding.</li>
                            <li>The ceremony can take place at the hotel / resort premises between 08:00am and 06:00pm (except on public holidays).</li>
                            <li>No individuals under the age of 21 years are permitted to marry in Sri Lanka according to government regulations.</li>
                        </ul>
                    </div>

                    {/* Documents */}
                    <div className="mb-12">
                        <h3 className="text-xl font-bold text-gray-800 mb-4">Documents Required – 30 Days Prior To Arrival</h3>
                        <ul className="space-y-3 text-gray-600 list-disc pl-6">
                            <li>Birth certificates of the couple</li>
                            <li>If divorced or widowed, relevant certificates</li>
                            <li>Photocopies of passports</li>
                        </ul>
                    </div>

                    {/* Ceremony Arrangements */}
                    <div>
                        <h3 className="text-xl font-bold text-gray-800 mb-6">Ceremony Arrangements (Inclusions)</h3>

                        <ul className="grid gap-4 text-gray-600 sm:grid-cols-2 list-disc pl-6">
                            <li>Traditionally decorated “Poruwa” platform</li>
                            <li>Traditional Sri Lankan wedding dress for the bride</li>
                            <li>Flower bouquet & boutonniere</li>
                            <li>Floral decorations for the ceremony</li>
                            <li>Girls singing “Jayamangala Gatha”</li>
                            <li>Civil celebrant & “Kopumahattaya” blessing</li>
                            <li>Kandyan drummers and dancers</li>
                            <li>500g wedding cake</li>
                            <li>Wedding album – 20 photographs</li>
                            <li>Sparkling wine toast</li>
                            <li>Full DVD video coverage</li>
                            <li>Honeymoon brunch in-room</li>
                            <li>Fruit & flower basket in room</li>
                            <li>45-minute spa manicure & pedicure for bride</li>
                            <li>Exotic dinner menus + house wine</li>
                            <li>Personalized Master of Ceremonies</li>
                        </ul>
                    </div>

                    <br />

                    {/* Optional Extras */}
                    <div>
                        <h3 className="text-xl font-bold text-gray-800 mb-6">Optional Extras</h3>

                        <ul className="grid gap-4 text-gray-600 sm:grid-cols-2 list-disc pl-6">
                            <li>Extra copies of photographs (five by seven inches) of the ceremony</li>
                            <li>A 15 minute elephant ride for the couple</li>
                            <li>Spa & body massage</li>
                            <li>Wedding ceremony in a Catholic church</li>
                            <li>Tour of the hill country by car and accommodation in a colonial four-star hotel for one night on a half board basis, in a deluxe room</li>

                        </ul>
                        <br />
                        <h2>The marriage certificate with English translation will be delivered to the couple within 14 working days.</h2>
                    </div>

                </div>
            </section>

            {/* ================= IMPORTANT INFO + CTA ================= */}
            <section className="bg-white py-10">
                <div className="mx-auto max-w-7xl px-6">

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

                </div>
            </section>

            {/* ================= RELATED TOURS ================= */}
            <section className="bg-white py-5">
                <div className="mx-auto max-w-7xl px-6">

                    <div className="mb-5 flex items-center justify-between" data-aos="fade-up">
                        {/* Heading */}
                        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-wide text-gray-800">
                            RELATED TOURS
                        </h2>

                        {/* Slider Arrows */}
                        <div className="flex gap-3">
                            <button
                                onClick={() => swiperRef.current.slidePrev()}
                                className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 transition hover:bg-[#083A5E] hover:text-white"
                            >
                                ‹
                            </button>

                            <button
                                onClick={() => swiperRef.current.slideNext()}
                                className="flex h-10 w-10 items-center justify-center rounded-full bg-[#00A9C7] text-white transition hover:bg-[#008eaa]"
                            >
                                ›
                            </button>
                        </div>
                    </div>

                    <Swiper
                        modules={[Navigation, Autoplay]}
                        onSwiper={(swiper) => (swiperRef.current = swiper)}
                        autoplay={{
                            delay: 3500,
                            disableOnInteraction: false,
                        }}
                        loop={true}
                        spaceBetween={30}
                        breakpoints={{
                            0: { slidesPerView: 1 },
                            640: { slidesPerView: 2 },
                            1024: { slidesPerView: 3 },
                        }}
                    >

                        {/* Slide 1 */}
                        <SwiperSlide>
                            <div className="group overflow-hidden rounded-xl shadow-lg">
                                <div className="relative h-[260px] overflow-hidden">
                                    <img
                                        src={related1}
                                        alt="Special Tours To Sri Lanka"
                                        className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                                    />
                                </div>

                                <div className="bg-[#083A5E] p-6 text-center">
                                    <h3 className="mb-4 text-lg font-semibold text-white">
                                        Honeymoon Tours
                                    </h3>
                                    <button
                                        onClick={() => navigate(`/tours/romantic/honeymoon-tours`)}
                                        className="border-b-2 border-[#00A9C7] pb-1 text-sm uppercase tracking-widest text-[#00A9C7] hover:text-white">
                                        View Details
                                    </button>
                                </div>
                            </div>
                        </SwiperSlide>

                        {/* Slide 2 */}
                        <SwiperSlide>
                            <div className="group overflow-hidden rounded-xl shadow-lg">
                                <div className="relative h-[260px] overflow-hidden">
                                    <img
                                        src={related2}
                                        alt="Mini Tour Packages"
                                        className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                                    />
                                </div>

                                <div className="bg-[#083A5E] p-6 text-center">
                                    <h3 className="mb-4 text-lg font-semibold text-white">
                                        Romantic Escape
                                    </h3>
                                    <button
                                        onClick={() => navigate(`/tours/romantic/romantic-escape`)}
                                        className="border-b-2 border-[#00A9C7] pb-1 text-sm uppercase tracking-widest text-[#00A9C7] hover:text-white">
                                        View Details
                                    </button>
                                </div>
                            </div>
                        </SwiperSlide>

                    </Swiper>

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

export default WeddingSriLanka;
