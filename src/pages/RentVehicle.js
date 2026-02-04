import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import experienceHero from "../assets/car-rent.jpg";
import VehicleGallery from "../components/VehicleGallery";

function RentVehicle() {

    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
    }, []);

    return (
        <div className="w-full overflow-hidden">

            {/* ================= HERO ================= */}
            <section className="relative h-[40vh] w-full">
                <div
                    className="absolute inset-0 bg-fill bg-center"
                    style={{ backgroundImage: `url(${experienceHero})` }}
                />
                <div className="absolute inset-0 bg-black/60" />

                <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white">
                    <h1
                        data-aos="fade-up"
                        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight"
                    >
                        Rent Cars & Bikes
                    </h1>

                    <p
                        data-aos="fade-up"
                        data-aos-delay="150"
                        className="mt-4 sm:mt-6 max-w-full sm:max-w-2xl md:max-w-3xl text-sm sm:text-base md:text-lg"
                    >
                        Drive Sri Lanka your way
                    </p>
                </div>
            </section>

            {/* ================= TRANSPORTATION ================= */}
            <section className="bg-white py-10">
                <div className="max-w-6xl mx-auto px-6">

                    <h2
                        data-aos="fade-up"
                        className="text-center text-4xl font-light tracking-widest text-[#0b4c7d]"
                    >
                        TRANSPORTATION
                    </h2>

                    <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-16">

                        {/* LEFT SIDE */}
                        <div data-aos="fade-right">
                            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                                ABOUT OUR FLEET
                            </h3>

                            <div className="text-gray-700 space-y-2 mb-10">
                                <p><strong>Location:</strong> 384/121 Wakwella Road, Galle, Sri Lanka.</p>
                                <p><strong>Portfolio:</strong> Cars, Vans, Buses, Scooters & Bicycles.</p>
                                <p><strong>Availability:</strong> Open 24/7 with advance booking.</p>
                            </div>

                            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                                SERVICES
                            </h3>

                            <p className="text-gray-600 leading-relaxed">
                                We provide reliable, affordable and well-maintained rental vehicles for travelers across Sri Lanka.
                                Whether you need a comfortable car, a spacious van, a group bus, a scooter for city travel,
                                or a bicycle for eco-friendly rides, we have the perfect option for you.
                                <br /><br />
                                All vehicles are regularly serviced and include emergency roadside assistance.
                                We also offer hotel and airport delivery for your convenience.
                            </p>
                        </div>

                        {/* RIGHT SIDE */}
                        <div data-aos="fade-left">
                            <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                                FLEET PORTFOLIO
                            </h3>

                            <ul className="space-y-4 text-gray-700 mb-12">
                                <li>◆ Cars – Aqua, Axio</li>
                                <li>◆ Vans – KDH Highroof, KDH Flatroof</li>
                                <li>◆ Buses – King Long, Rosa</li>
                                <li>◆ Scooters – Dio, Activa</li>
                                <li>◆ Bicycles – Mountain Bicycle, Ladies Bicycle</li>
                            </ul>

                            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                                SAFETY & SUPPORT
                            </h3>

                            <p className="text-gray-600 leading-relaxed">
                                Every vehicle is safety-checked before each rental.
                                Helmets are provided for scooters and child seats are available for cars and vans on request.
                                24/7 breakdown support is included with every booking.
                            </p>
                        </div>

                    </div>
                </div>
            </section>

            {/* ================= VEHICLE RENT ================= */}
            <section className="bg-white py-10">
                <div className="max-w-6xl mx-auto px-6">

                    <h2 className="text-3xl tracking-widest text-gray-900 mb-6">
                        VEHICLE RENT
                    </h2>

                    <p className="text-gray-600 max-w-3xl mb-6">
                        Enjoy complete freedom with our car, van, bus, scooter, and bicycle rental services.
                        Ideal for tourists, families, groups, and business travelers across Sri Lanka.
                    </p>

                    <p className="text-gray-600 max-w-3xl mb-8">
                        Rent by the day, week, or month with simple documentation and fast approvals.
                        Pickup or delivery available anywhere in Sri Lanka.
                    </p>

                    <button className="bg-[#00a6cf] text-white px-10 py-3 rounded-full font-semibold hover:bg-[#008db0] transition">
                        BOOK NOW
                    </button>

                    <div className="mt-6 text-[#00a6cf] space-y-1">
                        <p>Email: rentals@yourdomain.lk</p>
                        <p>Phone: +94 76 543 7676</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12 mt-16">
                        <div>
                            <h3 className="text-xl font-semibold mb-4">Vehicles</h3>
                            <ul className="text-gray-700 space-y-2">
                                <li>◆ Cars – Economy & Hybrid</li>
                                <li>◆ Vans – Family & Tourist Vans</li>
                                <li>◆ Buses – Mini & Coach Buses</li>
                                <li>◆ Air-conditioned Vehicles</li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold mb-4">Two-Wheel & Eco</h3>
                            <ul className="text-gray-700 space-y-2">
                                <li>◆ Scooters – City & Touring</li>
                                <li>◆ Bicycles – Mountain & City Bikes</li>
                                <li>◆ Safety Gear Included</li>
                                <li>◆ Long-term Rentals Available</li>
                            </ul>
                        </div>
                    </div>

                    <h3 className="text-2xl tracking-widest mt-16 mb-8">FAQ</h3>

                    <div className="space-y-6 text-gray-700 max-w-4xl">
                        <p>◆ <strong>Do I need a Sri Lankan license?</strong><br />
                            An international or Sri Lankan driving license is required for cars, vans, and buses.
                            Scooters require a valid riding license.</p>

                        <p>◆ <strong>Is insurance included?</strong><br />
                            Yes, basic insurance is included for all vehicles.</p>

                        <p>◆ <strong>Do you deliver vehicles?</strong><br />
                            Yes, airport, hotel, and city delivery services are available.</p>
                    </div>

                </div>
            </section>

            {/* ================= FULL FLEET GALLERY ================= */}
            <section className="bg-gray-100 py-20">
                <div className="max-w-7xl mx-auto px-6">

                    <h2 className="text-3xl tracking-widest text-center mb-16 text-[#0b4c7d]">
                        OUR VEHICLE FLEET
                    </h2>

                    <div className="grid md:grid-cols-2 gap-16">

                        <VehicleGallery title="Cars" />
                        <VehicleGallery title="Bikes" />
                        <VehicleGallery title="Bicycles" />
                        <VehicleGallery title="Vans" />
                        <VehicleGallery title="Buses" />

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

export default RentVehicle;
