import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { useNavigate } from "react-router-dom";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

import hero1 from "../assets/ella.jpg";
import hero2 from "../assets/Surfing.png";
import hero3 from "../assets/hurulupark.jpg";
import hero4 from "../assets/colomboKithulgala1.jpg";

import cultural from "../assets/Cultural-Dance.jpg";
import hillCountry from "../assets/tea-estate.jpg";
import romantic from "../assets/Romantic.jpg";
import ayurveda from "../assets/tour2.jpg";
import excursion from "../assets/Excursions.jpg";
import beach from "../assets/Beach.jpg";
import specialTours from "../assets/SpecialInterestTours.png";
import seatInCoachTours from "../assets/tours.jpg";
import ramayanaTrails from "../assets/Ramayana Trails in Sri Lanka.jpeg";
import natureTours from "../assets/Nature Tours.jpg";

import mice from "../assets/mice.jpg";
import transportation from "../assets/Transportation.jpg";
import aircraftHandling from "../assets/Aircraft handling.jpg";
import sportsTours from "../assets/Sports Tours.jpg";
import excursions from "../assets/Excursions1.jpg";
import natureandadventure from "../assets/Wilpattu National Park1.jpg";
import wellness from "../assets/Wellness.jpeg";
import shoreExcursion from "../assets/Shore-Excursion.jpg";

import ReCAPTCHA from "react-google-recaptcha";

function Home() {

  const navigate = useNavigate();

  const [captcha, setCaptcha] = useState(null);

  const onCaptchaChange = (value) => {
    setCaptcha(value);
  };

  const heroSlides = [hero1, hero2, hero3, hero4];

  const tourSlides = [
    {
      id: 1,
      title: "Cultural",
      category: "Cultural",
      slug: "cultural",
      image: cultural,
      description: "Explore ancient sites seemingly lost in time, uncover the stories behind local legends and be awed by monuments that are intertwined with the island’s culture."
    },
    {
      id: 2,
      title: "Hill Country",
      category: "Hill Country",
      slug: "hill-country",
      image: hillCountry,
      description: "A perfect blend of beauty, history and culture, the hill country emulates the very essence of authentic Sri Lanka, tucked away amidst emerald covered mountains."
    },
    {
      id: 3,
      title: "Romantic",
      category: "Romantic",
      slug: "romantic",
      image: romantic,
      description: "From weddings packages tailor-made just for you and intimate honeymoon experiences, we offer you the chance to celebrate your love in style!"
    },
    {
      id: 4,
      title: "Ayurveda & Wellness",
      category: "Ayurveda & Wellness",
      slug: "ayurveda-wellness",
      image: ayurveda,
      description: "Indulge in an integrated wellness and Ayurveda retreat where your health and complete well-being is at the centre of a relaxing holiday experience."
    },
    {
      id: 5,
      title: "Excursions",
      category: "Excursions",
      slug: "excursions",
      image: excursion,
      description: "Immerse yourself in truly enriching adventures that let you experience the island’s scenic landscapes, traditional culture and exotic wildlife."
    },
    {
      id: 6,
      title: "Beach",
      category: "Beach",
      slug: "beach",
      image: beach,
      description: "Surrounded by the Indian Ocean, Sri Lanka has some of the best beaches to discover with pristine shores of paradise amidst seaside serenades."
    },
    {
      id: 7,
      title: "Special Interest Tours",
      category: "Special Interest Tours",
      slug: "special-interest-tours",
      image: specialTours,
      description: "Unique perspectives of cultural richness & diversity"
    },
    {
      id: 8,
      title: "Seat-In-Coach Tours in Sri Lanka",
      category: "Seat-In-Coach Tours in Sri Lanka",
      slug: "seat-in-coach-tours",
      image: seatInCoachTours,
      description: "Embark on a memorable expedition as part of a group tour where you will not only visit sites rich in culture and natural wonder but build new friendships as well."
    },
    {
      id: 9,
      title: "Ramayana Trails in Sri Lanka",
      category: "Ramayana Trails in Sri Lanka",
      slug: "ramayana-trails-in-sri-lanka",
      image: ramayanaTrails,
      description: "Follow the legends of Ramayana trails"
    },
    {
      id: 10,
      title: "Nature Tours",
      category: "Nature Tours",
      slug: "nature-tours",
      image: natureTours,
      description: "Embark on discovering a treasured journey of nature!"
    }
  ];

  const places = [
    {
      id: 1,
      name: "Negombo",
      position: [7.2083, 79.8358],
      description:
        "Negombo is a charming coastal town famous for its golden beaches, traditional fishing villages and peaceful lagoon. Located just minutes from Sri Lanka’s international airport, Negombo is the perfect place to relax after a long flight or to begin your Sri Lankan adventure. Enjoy fresh seafood, boat rides, and beautiful sunsets over the Indian Ocean.",
      image: "https://media.tacdn.com/media/attractions-splice-spp-674x446/07/be/ac/b8.jpg",
    },
    {
      id: 2,
      name: "Kalpitiya",
      position: [8.2297, 79.7182],
      description:
        "Kalpitiya is a tropical paradise on Sri Lanka’s northwest coast, famous for dolphin and whale watching, pristine beaches and exciting kitesurfing experiences. The calm lagoons and untouched shores make it ideal for nature lovers and adventure seekers alike.",
      image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/18/23/d9/ca/nearly-1600-km-os-beaches.jpg?w=1000&h=1000&s=1",
    },
    {
      id: 3,
      name: "Wilpattu National Park",
      position: [8.4500, 80.0167],
      description:
        "Wilpattu is Sri Lanka’s largest national park, renowned for its natural lakes and rich wildlife. This untouched wilderness offers visitors the chance to see leopards, elephants, sloth bears and rare birds in a peaceful, unspoiled environment.",
      image: "https://cdn.getyourguide.com/image/format=auto,fit=crop,gravity=center,quality=60,width=400,height=265,dpr=2/tour_img/f991184bc0391eab0a7c5c376b21eb09ae20aef3077bdedf9d62bfe19256aa4a.jpg",
    },
    {
      id: 4,
      name: "Anuradhapura",
      position: [8.3114, 80.4037],
      description:
        "Anuradhapura is one of Sri Lanka’s most sacred ancient cities, home to towering stupas, sacred Bodhi trees and ancient monasteries. Walking through this UNESCO World Heritage site is like stepping back more than 2,000 years into the island’s rich spiritual history.",
      image: "https://d31t1a4b1z64ez.cloudfront.net/2023/05/ruwanveli-seya-pagoda-m.webp",
    },
    {
      id: 5,
      name: "Dambulla",
      position: [7.8567, 80.6492],
      description:
        "Dambulla is famous for its ancient cave temples filled with beautiful Buddha statues and vibrant murals. It is one of the best preserved cave temple complexes in Asia and a spiritual highlight of Sri Lanka.",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Golden_Buddha_and_Buddhist_Museum_at_Dambulla.jpg/1280px-Golden_Buddha_and_Buddhist_Museum_at_Dambulla.jpg",
    },
    {
      id: 6,
      name: "Sigiriya Rock Fortress",
      position: [7.9570, 80.7603],
      description:
        "Sigiriya is Sri Lanka’s most iconic landmark. Rising dramatically from the jungle, this ancient rock fortress offers breathtaking views, royal gardens, frescoes and a mirror wall dating back over 1,500 years.",
      image: "https://media.istockphoto.com/id/1146786448/photo/aerial-view-from-above-of-sigiriya-or-the-lion-rock-an-ancient-fortress-and-a-palace-with.jpg?s=612x612&w=0&k=20&c=KiwLmEYVBKNqKfycjBH414u4b6O3IrrE6_C-IKkKAOI=",
    },
    {
      id: 7,
      name: "Minneriya National Park",
      position: [8.0375, 80.9039],
      description:
        "Minneriya National Park is world famous for the ‘Gathering’, where hundreds of wild elephants come together around the reservoir. It is one of the best wildlife experiences in Sri Lanka.",
      image: "https://lh4.googleusercontent.com/proxy/6k9KZ-ubX_78pp3vO8gAq5HELZ2yS_2PPfzQxlqgMYIVNZjyycxmuEbhGv7fCzwlNleYCBL0g9paIMb48xfSMkfCS59GjXHs0f5_jq_fWHnkxvMrB9Os1hzdgb8_qEZlJBHYxPRwVR902oRTqQ",
    },
    {
      id: 8,
      name: "Polonnaruwa",
      position: [7.9403, 81.0188],
      description:
        "Polonnaruwa is an ancient royal city with stunning ruins, statues and palaces. It offers a fascinating glimpse into Sri Lanka’s medieval history and engineering excellence.",
      image: "https://therestlessbeans.com/wp-content/uploads/2025/04/ancient-city-of-polonnaruwa-sri-lanka-statue-reclining-budha.webp",
    },
    {
      id: 9,
      name: "Pasikuda",
      position: [7.9250, 81.5670],
      description:
        "Pasikuda is famous for its calm, shallow waters and beautiful white sandy beaches. It is one of the safest and most relaxing beaches on Sri Lanka’s east coast.",
      image: "https://overatours.com/wp-content/uploads/2020/09/DSC_9714-1.jpg",
    },
    {
      id: 10,
      name: "Knuckles Mountain Range",
      position: [7.4667, 80.7833],
      description:
        "The Knuckles Mountain Range offers breathtaking landscapes, misty peaks, waterfalls and hiking trails. It is perfect for adventure lovers and nature explorers.",
      image: "https://admin.myceylonadventures.com/uploads/Trekking_Tour_in_Kandy_Knuckles_Feachured_60b26beeb3.jpg",
    },
    {
      id: 11,
      name: "Kandy",
      position: [7.2906, 80.6337],
      description:
        "Kandy is the cultural heart of Sri Lanka and home to the sacred Temple of the Tooth Relic. Surrounded by hills and tea plantations, it is rich in tradition, beauty and heritage.",
      image: "https://thatswhatshehad.com/wp-content/uploads/2018/07/chathura-anuradha-subasinghe-40uQmE9Zq8g-unsplash-1024x683.jpg",
    },
    {
      id: 12,
      name: "Kitulgala",
      position: [6.9890, 80.4167],
      description:
        "Kitulgala is Sri Lanka’s adventure capital, famous for white water rafting, jungle trekking and bird watching along the Kelani River.",
      image: "https://gobeyond.asia/var/site/storage/images/media/images/country-pages/sri-lanka/kandy-and-nearby/kandy-and-nearby-trips/kithulgala-adventure/kithulgala-adventure-1/3940508-1-eng-GB/kithulgala-adventure-1_gallery_full.png",
    },
    {
      id: 13,
      name: "Horton Plains",
      position: [6.8094, 80.8031],
      description:
        "Horton Plains is a beautiful highland national park known for its rolling grasslands, cloud forests and the dramatic World’s End cliff.",
      image: "https://images.ctfassets.net/2ctencdtf9g8/3zGSabBcz2kChEMGzsoDlU/ff1bdcace659a4d80ed0586f8fd7e86f/horton8-min.jpg",
    },
    {
      id: 14,
      name: "Gal Oya National Park",
      position: [7.2917, 81.4833],
      description:
        "Gal Oya is famous for its unique boat safaris where visitors can see elephants swimming between islands in the reservoir.",
      image: "https://images.squarespace-cdn.com/content/v1/6090e44108fff025fb6cf10a/ea9a3477-8a3e-46d3-8c77-5646f62bb12b/Gal+Oya+watering+hole+-+Small.jpg",
    },
    {
      id: 15,
      name: "Arugam Bay",
      position: [6.8428, 81.8369],
      description:
        "Arugam Bay is Sri Lanka’s top surfing destination, offering world-class waves, relaxed beach vibes and stunning sunrises.",
      image: "https://overatours.com/wp-content/uploads/2021/10/Surfing-in-Arugam-Bay.jpg",
    },
    {
      id: 16,
      name: "Kalutara",
      position: [6.5831, 79.9607],
      description:
        "Kalutara is a peaceful beach town famous for its sacred Kalutara Bodhiya and palm-lined coastline.",
      image: "https://www.boutiquecollectionbyamaya.com/villas-wadduwa/wp-content/uploads/sites/12/2022/10/kalutara-gall-feat.jpg",
    },
    {
      id: 17,
      name: "Bentota",
      position: [6.4211, 79.9989],
      description:
        "Bentota is a luxury beach destination offering water sports, river safaris and elegant resorts.",
      image: "https://live.staticflickr.com/65535/50009234931_1a80fb78d1_b.jpg",
    },
    {
      id: 18,
      name: "Sinharaja Forest Reserve",
      position: [6.4050, 80.4600],
      description:
        "Sinharaja is a UNESCO-listed rainforest and biodiversity hotspot filled with rare birds, butterflies and ancient trees.",
      image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/29/24/04/bb/caption.jpg?w=1200&h=-1&s=1",
    },
    {
      id: 19,
      name: "Udawalawe National Park",
      position: [6.4630, 80.8917],
      description:
        "Udawalawe is the best place in Sri Lanka to see wild elephants in their natural habitat.",
      image: "https://overatours.com/wp-content/uploads/2017/11/156-1024x683.jpg",
    },
    {
      id: 20,
      name: "Yala National Park",
      position: [6.3667, 81.5167],
      description:
        "Yala is Sri Lanka’s most famous wildlife park, known for having one of the highest leopard populations in the world.",
      image: "https://overatours.com/wp-content/uploads/2021/09/25.jpg",
    },
    {
      id: 21,
      name: "Bundala National Park",
      position: [6.2000, 81.2000],
      description:
        "Bundala is a bird lover’s paradise, home to thousands of migratory birds and peaceful wetlands.",
      image: "https://nexttravelsrilanka.com/wp-content/uploads/2021/05/White-Greater-flamingos-in-a-swamp-by-a-lawn-at-Bundala-National-Park-the-Wonderful-Land-of-Birds-in-Sri-Lanka.jpg",
    },
    {
      id: 22,
      name: "Tangalle",
      position: [6.0240, 80.7968],
      description:
        "Tangalle offers long golden beaches, turquoise waters and a peaceful tropical atmosphere.",
      image: "https://static.horizonguides.com/images/_matrixImage/Sri-Lanka_Tangalle.jpg",
    },
    {
      id: 23,
      name: "Mirissa",
      position: [5.9483, 80.4716],
      description:
        "Mirissa is famous for whale watching, beach cafes and relaxed island vibes.",
      image: "https://www.srilankalocaltours.com/wp-content/uploads/MIRISSA.jpg",
    },
    {
      id: 24,
      name: "Koggala",
      position: [5.9883, 80.3270],
      description:
        "Koggala is known for its beautiful beaches, lagoon and traditional stilt fishermen.",
      image: "https://www.worldbeachguide.com/photos/large/koggala-fishermen.jpg",
    },
    {
      id: 25,
      name: "Unawatuna",
      position: [6.0212, 80.2503],
      description:
        "Unawatuna is one of Sri Lanka’s most popular beaches, perfect for swimming, snorkeling and beach life.",
      image: "https://nexttravelsrilanka.com/wp-content/uploads/2023/02/Unawatuna.jpg",
    },
    {
      id: 26,
      name: "Galle",
      position: [6.0535, 80.2210],
      description:
        "Galle Fort is a UNESCO World Heritage Site filled with colonial architecture, boutique shops and ocean views.",
      image: "https://do6raq9h04ex.cloudfront.net/sites/8/2021/07/galle-fort-1050x700-1.jpg",
    },
    {
      id: 27,
      name: "Hikkaduwa",
      position: [6.1400, 80.1000],
      description:
        "Hikkaduwa is famous for coral reefs, snorkeling, surfing and lively beach culture.",
      image: "https://lakpura.com/cdn/shop/products/LK58110100-05-E-1280-720.jpg?v=1625585412&width=1445",
    },
  ];

  const [selectedPlace, setSelectedPlace] = useState(places[0]);
  const [current, setCurrent] = useState(0);
  const [time, setTime] = useState(new Date());

  const blueIcon = new L.Icon({
    iconUrl: "https://cdn-icons-png.flaticon.com/512/684/684908.png",
    iconSize: [22, 22],
    iconAnchor: [11, 22],
  });

  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const expertiseSlides = [
    {
      title: "MICE",
      slug: "mice",
      image: mice,
    },
    {
      title: "Transportation",
      slug: "transportation",
      image: transportation,
    },
    {
      title: "Aircraft Handling",
      slug: "aircraft-handling",
      image: aircraftHandling,
    },
    {
      title: "Sports Tours",
      slug: "sports-tours",
      image: sportsTours,
    },
    {
      title: "Excursions",
      slug: "excursions",
      image: excursions,
    },
    {
      title: "Nature & Adventure",
      slug: "nature-and-adventure",
      image: natureandadventure,
    },
    {
      title: "Wellness",
      slug: "wellness",
      image: wellness,
    },
    {
      title: "Shore Excursion",
      slug: "shore-excursion",
      image: shoreExcursion,
    },
  ];

  const [expertIndex, setExpertIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      setExpertIndex(0);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const slideWidth = isMobile ? 100 : 33.333;
  const visibleSlides = isMobile ? 1 : 3;
  const maxExpertIndex = expertiseSlides.length - visibleSlides;

  const WHATSAPP_NUMBER = "94743412910";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    country: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!captcha) {
      alert("Please verify that you are not a robot");
      return;
    }

    const text = `*New Tour Inquiry* 🧳🌴
  
      Name: ${formData.name}
      Email: ${formData.email}
      Phone: ${formData.phone}
      Country: ${formData.country}

      Message:
      ${formData.message}`;

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
  };

  return (
    <div className="w-full overflow-hidden">

      {/* ================= HERO SLIDER ================= */}
      <section className="relative w-full h-[500px] sm:h-[600px] md:h-[700px] lg:min-h-screen overflow-hidden">

        {/* Background Slider */}
        {heroSlides.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-[2000ms] ${current === index ? "opacity-100" : "opacity-0"
              }`}
            style={{ backgroundImage: `url(${img})` }}
          />
        ))}

        {/* Cinematic overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/70" />

        {/* Content */}
        <div className="relative z-10 flex h-full w-full flex-col justify-between px-6 py-8 text-white">

          {/* Center Content */}
          <div
            data-aos="fade-up"
            className="flex flex-col items-center justify-center flex-grow text-center"
          >
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light tracking-[0.3em] uppercase">
              Discover the Treasure of
            </h1>

            <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl lg:text-4xl font-semibold tracking-wide">
              Sri Lanka
            </h2>

            <a
              data-aos="zoom-in"
              data-aos-delay="400"
              href="/contact"
              className="mt-8 rounded-full bg-[#0ea5a4] px-10 py-3 text-sm font-semibold tracking-wider text-white transition hover:bg-[#0f766e]"
            >
              GET IN TOUCH
            </a>
          </div>

          {/* Bottom Left Time */}
          <div data-aos="fade-right" className="text-sm text-white/80">
            <div className="font-semibold">
              {time.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
            </div>
            <div className="text-xs uppercase tracking-widest">
              {time.toLocaleDateString("en-US", { month: "numeric", day: "numeric" })}
            </div>
            <div className="mt-1 text-[10px] uppercase tracking-widest text-white/60">
              Local Time
            </div>
          </div>

        </div>
      </section>

      {/* ================= ABOUT INTRO SECTION ================= */}
      <section className="relative bg-white py-10 px-6">
        <div className="max-w-5xl mx-auto text-center">

          {/* Small Tagline */}
          <p
            data-aos="fade-up"
            className="text-xs tracking-[0.35em] text-gray-500 uppercase mb-6"
          >
            An inspiring journey of discovery
          </p>

          {/* Main Title */}
          <h2
            data-aos="fade-up"
            data-aos-delay="150"
            className="text-3xl sm:text-4xl md:text-5xl font-light tracking-wide text-[#0f172a]"
          >
            Kurumba Holidays Sri Lanka
          </h2>

          {/* Blue underline */}
          <div
            data-aos="zoom-in"
            data-aos-delay="300"
            className="mx-auto mt-6 h-[2px] w-28 bg-[#0ea5a4]"
          />

          {/* Description */}
          <p
            data-aos="fade-up"
            data-aos-delay="400"
            className="mt-10 text-sm sm:text-base leading-relaxed text-gray-600 max-w-3xl mx-auto"
          >
            Travel around Sri Lanka to be mesmerised by the endless miles of golden sandy
            beaches and warm blue waters to either catch a wave or bask in the sun. Enjoy
            the diverse spices and the rice and curry with coconut or sip a warm cup of
            Ceylon Tea. Sri Lanka is a country that has diversity from its people from
            different ethnicities. It's a land rich with culture, nature, adventure,
            wellness, and wildlife. Be adventurous and explore the country through a
            walking tour, cycling tour, seat in coach tour, private vehicle, train ride or
            an Air taxi. Feel right at home among the welcoming warmth of our people. At
            Kurumba Holidays Sri Lanka, the leading tour operator in the island, our specially
            designed packages offer you the chance to travel in Sri Lanka and satisfy your
            wanderlust!
          </p>

        </div>
      </section>

      {/* TOURS SECTION */}
      <section className="relative w-full bg-[#0b5c87] lg:bg-transparent py-10">
        <div className="max-w-7xl mx-auto px-4">

          <div className="flex flex-col lg:flex-row w-full rounded-2xl overflow-hidden shadow-xl">

            {/* LEFT CONTENT */}
            <div className="w-full lg:w-[40%] bg-[#0b5c87] text-white p-10 flex flex-col justify-center">
              <h2 className="text-4xl font-bold mb-4 tracking-wide">TOURS</h2>
              <p className="text-lg opacity-90">
                Discover amazing journeys across Sri Lanka with hand-picked tour
                experiences designed for comfort, culture and adventure.
              </p>

              <div className="flex gap-4 mt-8">
                <button
                  onClick={() =>
                    setCurrent((current - 1 + tourSlides.length) % tourSlides.length)
                  }
                  className="w-12 h-12 flex items-center justify-center rounded-full bg-white text-[#0b5c87] text-2xl font-bold hover:scale-105 transition"
                >
                  ‹
                </button>
                <button
                  onClick={() => setCurrent((current + 1) % tourSlides.length)}
                  className="w-12 h-12 flex items-center justify-center rounded-full bg-white text-[#0b5c87] text-2xl font-bold hover:scale-105 transition"
                >
                  ›
                </button>
              </div>
            </div>

            {/* RIGHT SLIDER */}
            <div className="w-full lg:w-[60%] overflow-hidden bg-white">
              <div
                className="flex transition-transform duration-700 ease-in-out"
                style={{ transform: `translateX(-${current * 100}%)` }}
              >
                {tourSlides.map((tour, i) => (
                  <div
                    onClick={() => navigate(`/tours/${tour.slug}`)}
                    key={i} className="min-w-full p-6">
                    <div className="rounded-xl overflow-hidden shadow-lg">
                      <img
                        src={tour.image}
                        alt={tour.title}
                        className="w-full h-[300px] sm:h-[400px] lg:h-[460px] object-fill"
                      />
                    </div>

                    <h3 className="mt-4 text-2xl font-semibold text-gray-800">
                      {tour.title}
                    </h3>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* MAP */}
      <section className="py-10 px-6">
        <div className="flex flex-col lg:flex-row shadow-lg rounded-xl overflow-hidden max-w-7xl mx-auto">
          <div className="w-full lg:w-[45%] h-[300px] sm:h-[400px] lg:h-[600px]">
            <MapContainer center={[7.8731, 80.7718]} zoom={7} className="h-full w-full">
              <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
              {places.map((p) => (
                <Marker key={p.id} position={p.position} icon={blueIcon} eventHandlers={{ click: () => setSelectedPlace(p) }}>
                  <Popup>{p.name}</Popup>
                </Marker>
              ))}
            </MapContainer>
          </div>
          <div className="flex-1 p-6 sm:p-10">
            <h3 className="text-2xl font-semibold text-[#0ea5a4]">
              {selectedPlace.name}
            </h3>

            <p className="mt-4 text-gray-600 leading-relaxed">
              {selectedPlace.description}
            </p>

            {/* Image */}
            <div className="mt-6">
              <img
                src={selectedPlace.image}
                alt={selectedPlace.name}
                className="w-full max-w-md rounded-xl shadow-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ================= OUR EXPERTISE ================= */}
      <section className="w-full bg-white py-10 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">

          {/* Header */}
          <div className="text-center mb-12">
            <p className="text-xs tracking-[0.4em] text-gray-400 uppercase mb-4">
              Tailor-made to serve you better
            </p>

            <h2 className="text-4xl md:text-5xl font-light tracking-wide text-[#0b5c87]">
              OUR EXPERTISE
            </h2>

            <div className="mt-4 flex justify-center items-center gap-4">
              <span className="h-[1px] w-20 bg-gray-300"></span>
              <span className="text-xs text-gray-400 uppercase">All Services</span>
              <span className="h-[1px] w-20 bg-gray-300"></span>
            </div>
          </div>

          {/* Slider Wrapper */}
          <div className="relative">

            {/* Arrow bar */}
            <div className="flex justify-end mb-6">
              <div className="flex gap-3">
                <button
                  onClick={() =>
                    setExpertIndex(prev => (prev <= 0 ? maxExpertIndex : prev - 1))
                  }
                  className="w-11 h-11 bg-[#0b5c87] text-white rounded-full flex items-center justify-center text-2xl hover:bg-[#094b6f] transition shadow-lg"
                >
                  ‹
                </button>

                <button
                  onClick={() =>
                    setExpertIndex(prev => (prev >= maxExpertIndex ? 0 : prev + 1))
                  }
                  className="w-11 h-11 bg-[#0b5c87] text-white rounded-full flex items-center justify-center text-2xl hover:bg-[#094b6f] transition shadow-lg"
                >
                  ›
                </button>
              </div>
            </div>

            {/* Slider */}
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-700 ease-in-out"
                style={{
                  transform: `translateX(-${expertIndex * slideWidth}%)`,
                }}
              >
                {expertiseSlides.map((card, idx) => (
                  <div key={idx} className="min-w-full md:min-w-[33.333%] px-4">
                    <div
                      onClick={() => navigate(`/expertise/${card.slug}`)}
                      className="relative overflow-hidden rounded-xl group shadow-lg"
                    >

                      <img
                        src={card.image}
                        alt={card.title}
                        className="w-full h-[300px] sm:h-[360px] md:h-[420px] lg:h-[420px] object-fill transition duration-700 group-hover:scale-105"
                      />

                      <div className="absolute inset-0 bg-black/40" />

                      <h3 className="absolute bottom-6 left-6 text-white text-lg sm:text-xl tracking-wide">
                        {card.title}
                      </h3>

                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ================= INQUIRE NOW ================= */}
      <section className="w-full bg-[#f8f8f8] py-10 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">

          {/* Title */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light tracking-[0.2em] text-gray-700">
              INQUIRE NOW
            </h2>
            <div className="mt-6 h-[2px] w-20 bg-[#0ea5a4] mx-auto" />
          </div>

          {/* Form Card */}
          <div
            data-aos="fade-up"
            className="bg-white shadow-xl p-6 sm:p-10 md:p-16 rounded-xl"
          >
            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-x-12 md:gap-y-10">

              {/* Name */}
              <div>
                <label className="block text-xs tracking-widest uppercase mb-2">
                  Name <span className="text-red-500">*</span>
                </label>
                <input
                  name="name"
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 rounded-full px-4 sm:px-6 py-3 sm:py-4 text-sm sm:text-base focus:outline-none focus:border-[#0ea5a4]"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-xs tracking-widest uppercase mb-2">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  name="email"
                  type="email"
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 rounded-full px-4 sm:px-6 py-3 sm:py-4 text-sm sm:text-base focus:outline-none focus:border-[#0ea5a4]"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-xs tracking-widest uppercase mb-2">
                  Phone No <span className="text-red-500">*</span>
                </label>
                <input
                  name="phone"
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 rounded-full px-4 sm:px-6 py-3 sm:py-4 text-sm sm:text-base focus:outline-none focus:border-[#0ea5a4]"
                />
              </div>

              {/* Country */}
              <div>
                <label className="block text-xs tracking-widest uppercase mb-2">
                  Country <span className="text-red-500">*</span>
                </label>
                <select
                  name="country"
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 rounded-full px-4 sm:px-6 py-3 sm:py-4 text-sm sm:text-base focus:outline-none focus:border-[#0ea5a4]"
                >
                  <option value="">Please select</option>
                  <option>Afghanistan</option>
                  <option>Albania</option>
                  <option>Algeria</option>
                  <option>Andorra</option>
                  <option>Angola</option>
                  <option>Antigua and Barbuda</option>
                  <option>Argentina</option>
                  <option>Armenia</option>
                  <option>Australia</option>
                  <option>Austria</option>
                  <option>Azerbaijan</option>
                  <option>Bahamas</option>
                  <option>Bahrain</option>
                  <option>Bangladesh</option>
                  <option>Barbados</option>
                  <option>Belarus</option>
                  <option>Belgium</option>
                  <option>Belize</option>
                  <option>Benin</option>
                  <option>Bhutan</option>
                  <option>Bolivia</option>
                  <option>Bosnia and Herzegovina</option>
                  <option>Botswana</option>
                  <option>Brazil</option>
                  <option>Brunei</option>
                  <option>Bulgaria</option>
                  <option>Burkina Faso</option>
                  <option>Burundi</option>
                  <option>Cambodia</option>
                  <option>Cameroon</option>
                  <option>Canada</option>
                  <option>Cape Verde</option>
                  <option>Central African Republic</option>
                  <option>Chad</option>
                  <option>Chile</option>
                  <option>China</option>
                  <option>Colombia</option>
                  <option>Comoros</option>
                  <option>Congo</option>
                  <option>Costa Rica</option>
                  <option>Croatia</option>
                  <option>Cuba</option>
                  <option>Cyprus</option>
                  <option>Czech Republic</option>
                  <option>Denmark</option>
                  <option>Djibouti</option>
                  <option>Dominica</option>
                  <option>Dominican Republic</option>
                  <option>Ecuador</option>
                  <option>Egypt</option>
                  <option>El Salvador</option>
                  <option>Equatorial Guinea</option>
                  <option>Eritrea</option>
                  <option>Estonia</option>
                  <option>Eswatini</option>
                  <option>Ethiopia</option>
                  <option>Fiji</option>
                  <option>Finland</option>
                  <option>France</option>
                  <option>Gabon</option>
                  <option>Gambia</option>
                  <option>Georgia</option>
                  <option>Germany</option>
                  <option>Ghana</option>
                  <option>Greece</option>
                  <option>Grenada</option>
                  <option>Guatemala</option>
                  <option>Guinea</option>
                  <option>Guinea-Bissau</option>
                  <option>Guyana</option>
                  <option>Haiti</option>
                  <option>Honduras</option>
                  <option>Hungary</option>
                  <option>Iceland</option>
                  <option>India</option>
                  <option>Indonesia</option>
                  <option>Iran</option>
                  <option>Iraq</option>
                  <option>Ireland</option>
                  <option>Israel</option>
                  <option>Italy</option>
                  <option>Jamaica</option>
                  <option>Japan</option>
                  <option>Jordan</option>
                  <option>Kazakhstan</option>
                  <option>Kenya</option>
                  <option>Kiribati</option>
                  <option>Kuwait</option>
                  <option>Kyrgyzstan</option>
                  <option>Laos</option>
                  <option>Latvia</option>
                  <option>Lebanon</option>
                  <option>Lesotho</option>
                  <option>Liberia</option>
                  <option>Libya</option>
                  <option>Liechtenstein</option>
                  <option>Lithuania</option>
                  <option>Luxembourg</option>
                  <option>Madagascar</option>
                  <option>Malawi</option>
                  <option>Malaysia</option>
                  <option>Maldives</option>
                  <option>Mali</option>
                  <option>Malta</option>
                  <option>Marshall Islands</option>
                  <option>Mauritania</option>
                  <option>Mauritius</option>
                  <option>Mexico</option>
                  <option>Micronesia</option>
                  <option>Moldova</option>
                  <option>Monaco</option>
                  <option>Mongolia</option>
                  <option>Montenegro</option>
                  <option>Morocco</option>
                  <option>Mozambique</option>
                  <option>Myanmar</option>
                  <option>Namibia</option>
                  <option>Nauru</option>
                  <option>Nepal</option>
                  <option>Netherlands</option>
                  <option>New Zealand</option>
                  <option>Nicaragua</option>
                  <option>Niger</option>
                  <option>Nigeria</option>
                  <option>North Korea</option>
                  <option>North Macedonia</option>
                  <option>Norway</option>
                  <option>Oman</option>
                  <option>Pakistan</option>
                  <option>Palau</option>
                  <option>Panama</option>
                  <option>Papua New Guinea</option>
                  <option>Paraguay</option>
                  <option>Peru</option>
                  <option>Philippines</option>
                  <option>Poland</option>
                  <option>Portugal</option>
                  <option>Qatar</option>
                  <option>Romania</option>
                  <option>Russia</option>
                  <option>Rwanda</option>
                  <option>Saint Kitts and Nevis</option>
                  <option>Saint Lucia</option>
                  <option>Saint Vincent and the Grenadines</option>
                  <option>Samoa</option>
                  <option>San Marino</option>
                  <option>Sao Tome and Principe</option>
                  <option>Saudi Arabia</option>
                  <option>Senegal</option>
                  <option>Serbia</option>
                  <option>Seychelles</option>
                  <option>Sierra Leone</option>
                  <option>Singapore</option>
                  <option>Slovakia</option>
                  <option>Slovenia</option>
                  <option>Solomon Islands</option>
                  <option>Somalia</option>
                  <option>South Africa</option>
                  <option>South Korea</option>
                  <option>South Sudan</option>
                  <option>Spain</option>
                  <option>Sri Lanka</option>
                  <option>Sudan</option>
                  <option>Suriname</option>
                  <option>Sweden</option>
                  <option>Switzerland</option>
                  <option>Syria</option>
                  <option>Taiwan</option>
                  <option>Tajikistan</option>
                  <option>Tanzania</option>
                  <option>Thailand</option>
                  <option>Togo</option>
                  <option>Tonga</option>
                  <option>Trinidad and Tobago</option>
                  <option>Tunisia</option>
                  <option>Turkey</option>
                  <option>Turkmenistan</option>
                  <option>Tuvalu</option>
                  <option>Uganda</option>
                  <option>Ukraine</option>
                  <option>United Arab Emirates</option>
                  <option>United Kingdom</option>
                  <option>United States</option>
                  <option>Uruguay</option>
                  <option>Uzbekistan</option>
                  <option>Vanuatu</option>
                  <option>Vatican City</option>
                  <option>Venezuela</option>
                  <option>Vietnam</option>
                  <option>Yemen</option>
                  <option>Zambia</option>
                  <option>Zimbabwe</option>
                </select>
              </div>

              {/* Message */}
              <div className="md:col-span-2">
                <label className="block text-xs tracking-widest uppercase mb-2">
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  name="message"
                  onChange={handleChange}
                  required
                  rows="4"
                  className="w-full border border-gray-300 rounded-xl px-4 sm:px-6 py-3 sm:py-4 text-sm sm:text-base focus:outline-none focus:border-[#0ea5a4]"
                ></textarea>
              </div>

              {/* Captcha */}
              {/* <div className="md:col-span-2 overflow-x-auto">
                <ReCAPTCHA
                  sitekey="6LcQzV0sAAAAAKTuLuh3LkHCiM9T-b6G4zshxI8x"
                  onChange={onCaptchaChange}
                />
              </div> */}

              {/* Buttons */}
              <div className="md:col-span-2 flex flex-col sm:flex-row gap-4 sm:gap-6 mt-6 sm:mt-10">

                <button
                  type="submit"
                  className="bg-[#0ea5a4] text-white w-full sm:w-auto px-10 py-3 sm:px-16 rounded-full tracking-widest text-sm hover:bg-[#0f766e] transition"
                >
                  SUBMIT
                </button>

                <button
                  type="reset"
                  className="bg-gray-700 text-white w-full sm:w-auto px-10 py-3 sm:px-16 rounded-full tracking-widest text-sm hover:bg-gray-900 transition"
                >
                  RESET
                </button>
              </div>

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

export default Home;
