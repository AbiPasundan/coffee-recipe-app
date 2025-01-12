// src/components/Hero.jsx
import React from "react";

function Hero() {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src="vite.svg"
          className="max-w-sm rounded-lg shadow-2xl"
          alt="Coffee"
        />
        <div>
          <h1 className="text-5xl font-bold">Welcome to Coffee Recipe App</h1>
          <p className="py-6">
            Discover the best coffee recipes to elevate your coffee experience. Whether you're a beginner or a barista, we have something for everyone!
          </p>
          <button className="btn btn-primary">Explore Recipes</button>
        </div>
      </div>
    </div>
  );
};
export default Hero