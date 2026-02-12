import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import travelGuideHero from "../../assets/FoodDrinks.jpg";

function FoodDrinks() {

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
                        Food & Drinks
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

            {/* ================= FOOD & DRINKS CONTENT ================= */}
            <section className="bg-white py-10 px-4 sm:px-8 md:px-16 lg:px-24">
                <div className="max-w-5xl mx-auto">

                    <h2
                        data-aos="fade-up"
                        className="text-2xl sm:text-3xl font-bold text-center text-blue-900 mb-10"
                    >
                        FOOD & DRINKS
                    </h2>

                    <div
                        data-aos="fade-up"
                        data-aos-delay="150"
                        className="space-y-8 text-gray-700 leading-relaxed text-sm sm:text-base"
                    >
                        <p>
                            Sri Lankan cuisine is known for its explosive flavours and the unique blend of exotic spices.
                            This culinary variety is, in fact, a perfect representation of the resourceful islanders and
                            the different ethnic groups that can be found here. When it comes to what to eat in Sri Lanka,
                            foodies are spoilt for choice – be it spicy or sweet, made with local ingredients that add to
                            the tantalising taste of each dish.
                        </p>

                        <div>
                            <h3 className="font-semibold text-blue-900 mb-2">Rice & Curry</h3>
                            <p>
                                A quintessential Sri Lankan favourite, rice and curry is very much a part of the national cuisine.
                                It is not uncommon for people to enjoy this staple diet for all three meals. Served with white or
                                red rice, a variety of meats, vegetables, pickles, dried fish and coconut sambol, every plate is a
                                flavour-packed experience.
                            </p>
                        </div>

                        <div>
                            <h3 className="font-semibold text-blue-900 mb-2">Other Main Food Items</h3>
                            <p>
                                Sri Lankan cuisine is all about variety. Try famous street and restaurant dishes such as hoppers,
                                kottu, string hoppers, pittu or rotti — flatbreads and rice-based meals served with chilli sambol,
                                vegetables and your choice of meats.
                            </p>
                        </div>

                        <div>
                            <h3 className="font-semibold text-blue-900 mb-2">Seafood</h3>
                            <p>
                                Being an island nation, Sri Lanka is blessed with outstanding seafood. From spicy crab curry to
                                jumbo prawns and grilled fish, coastal towns offer some of the freshest and most flavourful
                                seafood dishes in Asia.
                            </p>
                        </div>

                        <div>
                            <h3 className="font-semibold text-blue-900 mb-2">Desserts</h3>
                            <p>
                                Sri Lanka is also famous for its sweet treats. Enjoy buffalo curd with coconut treacle,
                                vanilla ice cream with chocolate sauce, tropical fruits and a wide range of traditional desserts
                                perfect for hot days.
                            </p>
                        </div>

                        <div>
                            <h3 className="font-semibold text-blue-900 mb-2">Traditional Sweetmeats</h3>
                            <p>
                                During cultural and religious festivals, Sri Lankans prepare special sweetmeats such as kavum,
                                kokis, aluwa and watalappam. These jaggery-based desserts are deeply rooted in the country’s
                                rich culinary heritage.
                            </p>
                        </div>

                        <div>
                            <h3 className="font-semibold text-blue-900 mb-2">Fruits</h3>
                            <p>
                                Sri Lanka is a tropical fruit paradise. From bananas, papaya and pineapple to mangosteen,
                                rambutan and mango, the island offers a colourful variety of fresh fruits. Papaya juice,
                                fresh mango with chilli salt, and achcharu are must-try local favourites.
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

export default FoodDrinks;
