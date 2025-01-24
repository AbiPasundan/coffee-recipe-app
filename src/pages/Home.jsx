import React, { useState } from "react";
import Carousel from "../components/Carousel";

export default function Home() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.body.classList.toggle("dark", newTheme === "dark");
  };

  return (
    <>
<>
  {/* Hero Section */}
  <section
    id="home"
    className="relative bg-cover bg-center h-screen"
    style={{
      backgroundImage: 'url("https://source.unsplash.com/1600x900/?coffee")'
    }}
  >
    <div className="bg-black bg-opacity-50 h-full flex items-center">
      <div className="container mx-auto px-6 text-left">
        <h1 className="text-4xl md:text-6xl text-white font-bold leading-tight mb-4">
          Welcome to Our Coffee World
        </h1>
        <p className="text-lg text-gray-200 mb-6">
          Discover the best coffee recipes, brewing techniques, and tools to
          enjoy the perfect cup.
        </p>
        <a href="#menu" className="btn btn-primary">
          Explore Menu
        </a>
      </div>
    </div>
  </section>
  {/* Tentang Kami */}
  <section id="about" className="py-12 bg-gray-200">
    <div className="container mx-auto px-6">
      <h2 className="text-3xl font-bold text-center mb-8">About Us</h2>
      <p className="text-center text-gray-700 max-w-2xl mx-auto">
        We are passionate about coffee and committed to bringing you the finest
        recipes and tools to enhance your coffee experience. From beginners to
        experts, our platform is here to inspire your love for coffee.
      </p>
      <div className="flex justify-center mt-6">
        <a href="#contact" className="btn btn-outline">
          Get in Touch
        </a>
      </div>
    </div>
  </section>

  <Carousel/>

  <div className="flex flex-col md:flex-row items-center justify-center w-full h-screen bg-gray-100">
      {/* Bagian Kiri (Gambar) */}
      <div className="w-full md:w-1/2 h-1/2 md:h-full">
        <img
          src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fGNvZmZlZXxlbnwwfHx8fDE2NzM1MjgyMDQ&ixlib=rb-4.0.3&q=80&w=800"
          alt="Coffee"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Bagian Kanan (Konten) */}
      <div className="w-full md:w-1/2 h-full flex flex-col items-start justify-center px-8 md:px-16 bg-white text-gray-800">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Discover the Best Coffee
        </h1>
        <p className="text-lg md:text-xl mb-6">
          Indulge in our carefully crafted coffee recipes, perfect for every
          occasion. Taste the richness, aroma, and passion in every cup.
        </p>
        <button className="btn btn-primary px-6 py-3">Learn More</button>
      </div>
    </div>

  
</>



    </>
  );
}
