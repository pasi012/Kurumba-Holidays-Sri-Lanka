import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import aboutHero from "../assets/hero1.jpg";

function Contact() {
    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
    }, []);

    return (
        <div className="w-full overflow-hidden">

            {/* ================= HERO SECTION ================= */}
            <section className="relative h-[40vh] w-full">
                {/* Background */}
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${aboutHero})` }}
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/60" />

                {/* Content */}
                <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center text-white">
                    <h1
                        data-aos="fade-up"
                        className="mb-4 text-4xl font-extrabold sm:text-5xl md:text-6xl"
                    >
                        Contact
                    </h1>

                    <p
                        data-aos="fade-up"
                        data-aos-delay="150"
                        className="max-w-2xl text-sm text-gray-200 sm:text-base"
                    >
                        Reliable Taxi & Tour Services Across Sri Lanka
                    </p>
                </div>
            </section>

            {/* ===== CONTACT INFO ===== */}
            <section
                data-aos="fade-up"
                className="max-w-7xl mx-auto px-4 py-12"
            >
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
                    {[
                        // {
                        //     icon: "fas fa-map-marker-alt",
                        //     title: "Address Line",
                        //     text: "Attudawatta, Ransegoda west, Matara, Sri Lanka"
                        // },
                        {
                            icon: "fas fa-phone",
                            title: "Phone Number",
                            text: "074 341 2910"
                        },
                        {
                            icon: "fas fa-envelope",
                            title: "Mail Address",
                            text: "kurumbaholidays@gmail.com"
                        }
                    ].map((item, index) => (
                        <div
                            key={index}
                            data-aos="zoom-in"
                            className="bg-white shadow-lg rounded-xl p-6 text-center hover:shadow-xl transition"
                        >
                            <i className={`${item.icon} text-3xl text-orange-500 mb-4`} />
                            <h4 className="font-semibold text-lg mb-2">{item.title}</h4>
                            <p className="text-gray-600 text-sm">{item.text}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* ===== CONTACT + FORM ===== */}
            <section className="max-w-7xl mx-auto px-4 pb-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

                    {/* LEFT */}
                    <div data-aos="fade-right">
                        <h2 className="text-2xl md:text-3xl font-bold mb-4">
                            Get In Touch
                        </h2>
                        <p className="text-gray-600 mb-6">
                            Discover Sri Lanka's top destinations, from pristine beaches
                            to scenic hills, all mapped for your perfect journey.
                        </p>

                        <div className="w-full h-[300px] md:h-[400px] rounded-xl overflow-hidden shadow">
                            <iframe
                                title="map"
                                src="https://www.google.com/maps?q=Kalutara,+Sri+Lanka&output=embed"
                                class="w-full h-full border-0"
                                loading="lazy">
                            </iframe>
                        </div>
                    </div>

                    {/* RIGHT */}
                    <div
                        data-aos="fade-left"
                        className="bg-white shadow-xl rounded-xl p-6 md:p-8"
                    >
                        <h3 className="text-xl md:text-2xl font-semibold mb-2">
                            Fill Up The Form
                        </h3>
                        <p className="text-gray-500 text-sm mb-6">
                            Your email address will not be published. Required fields are marked *
                        </p>

                        <form
                            className="space-y-4"
                            onSubmit={(e) => {
                                e.preventDefault();
                                const name = e.target[0].value;
                                const email = e.target[1].value;
                                const message = e.target[2].value;

                                window.location.href = `mailto:kurumbaholidays@gmail.com?subject=Message from ${name}&body=Name: ${name}%0D%0AEmail: ${email}%0D%0A%0D%0AMessage:%0D%0A${message}`;
                            }}
                        >
                            <div>
                                <label className="block text-sm font-medium mb-1">
                                    Your Name*
                                </label>
                                <input
                                    type="text"
                                    required
                                    placeholder="Enter your name"
                                    className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-orange-500 outline-none"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium mb-1">
                                    Email Address*
                                </label>
                                <input
                                    type="email"
                                    required
                                    placeholder="Enter your email"
                                    className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-orange-500 outline-none"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium mb-1">
                                    Message
                                </label>
                                <textarea
                                    rows="4"
                                    placeholder="Write your message..."
                                    className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-orange-500 outline-none"
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-yellow-600 hover:bg-orange-600 text-white py-3 rounded-lg font-semibold transition"
                            >
                                Get In Touch
                            </button>
                        </form>
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

export default Contact;
