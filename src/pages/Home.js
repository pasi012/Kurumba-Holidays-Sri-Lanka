import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

import hero1 from "../assets/ella.jpg";
import hero2 from "../assets/Surfing.png";
import hero3 from "../assets/hurulupark.jpg";
import hero4 from "../assets/colomboKithulgala1.jpg";

import tour1 from "../assets/tour1.jpg";
import tour2 from "../assets/tour2.jpg";
import tour3 from "../assets/tour3.jpg";

import expert1 from "../assets/Surfing.png";
import expert2 from "../assets/colomboKithulgala1.jpg";
import expert3 from "../assets/ella.jpg";

import ReCAPTCHA from "react-google-recaptcha";

function Home() {

  const [captcha, setCaptcha] = useState(null);

  const onCaptchaChange = (value) => {
    setCaptcha(value);
  };

  const heroSlides = [hero1, hero2, hero3, hero4];

  const tourSlides = [
    {
      image: tour1,
      title: "ROMANTIC",
      subtitle: "Enjoy a magical honeymoon full of romance and adventure.",
    },
    {
      image: tour2,
      title: "AYURVEDA & WELLNESS",
      subtitle: "Experience true wellness and authentic ayurvedic care.",
    },
    {
      image: tour3,
      title: "EXCURSIONS",
      subtitle: "Discover the very best of Sri Lanka.",
    },
  ];

  const places = [
    {
      id: 1,
      name: "Negombo",
      position: [7.2083, 79.8358],
      description:
        "Negombo is a seaside town famous for its golden beaches, lagoon and fishing culture. Located close to the international airport, it is a perfect start or end to your Sri Lankan journey.",
    },
    {
      id: 2,
      name: "Colombo",
      position: [6.9271, 79.8612],
      description:
        "Colombo is Sri Lanka’s commercial capital featuring colonial buildings, modern shopping malls, vibrant nightlife and rich street food culture.",
    },
    {
      id: 3,
      name: "Kandy",
      position: [7.2906, 80.6337],
      description:
        "Kandy is the cultural heart of Sri Lanka and home to the Temple of the Sacred Tooth Relic, surrounded by lush hills and tea plantations.",
    },
    {
      id: 4,
      name: "Galle",
      position: [6.0535, 80.221],
      description:
        "Galle Fort is a UNESCO World Heritage Site known for colonial architecture, charming cafes, boutique streets and breathtaking ocean views.",
    },
    {
      id: 5,
      name: "Anuradhapura",
      position: [8.3114, 80.4037],
      description:
        "Anuradhapura is an ancient capital filled with sacred Buddhist temples, massive stupas and over 2,000 years of spiritual heritage.",
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
    { image: expert1, title: "Nature And Adventure" },
    { image: expert2, title: "Wellness" },
    { image: expert3, title: "Shore Excursion" },
    { image: expert3, title: "Shore Excursion" },
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

            <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-wide">
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

      {/* TOURS */}
      <section className="relative w-full py-10 bg-[#0b5c87] lg:bg-transparent">
        <div className="flex flex-col lg:flex-row">

          <div className="w-full lg:w-[38%] bg-[#0b5c87] text-white p-10">
            <h2 className="text-4xl mb-4">TOURS</h2>
            <p>Discover amazing journeys</p>
            <div className="flex gap-4 mt-8">
              <button onClick={() => setCurrent((current - 1 + tourSlides.length) % tourSlides.length)}>‹</button>
              <button onClick={() => setCurrent((current + 1) % tourSlides.length)}>›</button>
            </div>
          </div>

          <div className="w-full lg:flex-1 overflow-hidden">
            <div
              className="flex transition-transform duration-700"
              style={{ transform: `translateX(-${current * 100}%)` }}
            >
              {tourSlides.map((tour, i) => (
                <div key={i} className="min-w-full lg:min-w-[60%] p-4">
                  <img src={tour.image} className="w-full h-[300px] sm:h-[400px] lg:h-[460px] object-cover rounded-xl" />
                  <h3 className="mt-4 text-xl">{tour.title}</h3>
                </div>
              ))}
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
            <h3 className="text-2xl text-[#0ea5a4]">{selectedPlace.name}</h3>
            <p className="mt-4">{selectedPlace.description}</p>
          </div>
        </div>
      </section>

      {/* ================= OUR EXPERTISE ================= */}
      <section className="w-full bg-white py-10 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">

          {/* Header */}
          <div className="text-center mb-16">
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

          {/* Slider */}
          <div className="relative overflow-hidden">

            {/* Track */}
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{
                transform: `translateX(-${expertIndex * slideWidth}%)`,
              }}
            >
              {expertiseSlides.map((card, idx) => (
                <div
                  key={idx}
                  className="min-w-full md:min-w-[33.333%] px-4"
                >
                  <div className="relative overflow-hidden rounded-xl group shadow-lg">
                    <img
                      src={card.image}
                      alt={card.title}
                      className="w-full h-[300px] sm:h-[360px] md:h-[420px] lg:h-[520px] object-cover transition duration-700 group-hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-black/40" />

                    <h3 className="absolute bottom-6 left-6 text-white text-lg sm:text-xl tracking-wide">
                      {card.title}
                    </h3>
                  </div>
                </div>
              ))}
            </div>

            {/* Arrows */}
            <button
              onClick={() =>
                setExpertIndex(prev => (prev <= 0 ? maxExpertIndex : prev - 1))
              }
              className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-[#0b5c87] text-white rounded-full flex items-center justify-center text-xl hover:bg-[#094b6f] transition shadow-lg z-20"
            >
              ‹
            </button>

            <button
              onClick={() =>
                setExpertIndex(prev => (prev >= maxExpertIndex ? 0 : prev + 1))
              }
              className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-[#0b5c87] text-white rounded-full flex items-center justify-center text-xl hover:bg-[#094b6f] transition shadow-lg z-20"
            >
              ›
            </button>

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

    </div>
  );
}

export default Home;
