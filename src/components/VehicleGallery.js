import { useState } from "react";

/* ==== IMPORT IMAGES ==== */
import car1 from "../assets/Aqua.jpg";
import car2 from "../assets/Toyota Axio.jpg";
import car3 from "../assets/wagon r.jpg";

import bike1 from "../assets/TVS-NTORQ.jpg";
import bike2 from "../assets/dio.jpg";

import bicycle1 from "../assets/mountain bicycle.jpeg";
import bicycle2 from "../assets/bicycle 2.jpg";

import van1 from "../assets/KDH.jpg";
import van2 from "../assets/toyota-kdh-highroof.jpg";

import bus1 from "../assets/rosa bus.jpg";
import bus2 from "../assets/KING-LONG-bus.jpg";

/* ==== IMAGE ARRAYS ==== */
const fleets = {
    Cars: [car1, car2, car3],
    Bikes: [bike1, bike2],
    Bicycles: [bicycle1, bicycle2],
    Vans: [van1, van2],
    Buses: [bus1, bus2],
};

export default function VehicleGallery({ title }) {
    const images = fleets[title];
    const [active, setActive] = useState(0);

    return (
        <div>
            <h3 className="text-2xl font-semibold mb-6 text-center">{title}</h3>

            <div className="relative overflow-hidden rounded-xl shadow-lg">
                <img
                    src={images[active]}
                    className="w-full h-[280px] object-fill"
                    alt={title}
                />

                <button
                    onClick={() => setActive((active - 1 + images.length) % images.length)}
                    className="absolute left-3 top-1/2 -translate-y-1/2 bg-[#00a6cf] text-white w-9 h-9 rounded-full"
                >
                    ❮
                </button>

                <button
                    onClick={() => setActive((active + 1) % images.length)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 bg-[#00a6cf] text-white w-9 h-9 rounded-full"
                >
                    ❯
                </button>
            </div>

            <div className="flex justify-center gap-3 mt-4">
                {images.map((img, i) => (
                    <img
                        key={i}
                        src={img}
                        onClick={() => setActive(i)}
                        className={`w-16 h-14 object-fill rounded cursor-pointer border-2 ${active === i ? "border-[#00a6cf]" : "border-transparent"
                            }`}
                    />
                ))}
            </div>
        </div>
    );
}
