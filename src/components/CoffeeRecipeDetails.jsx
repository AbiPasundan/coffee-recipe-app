// src/components/CoffeeRecipeDetails.jsx
import React from "react";

const CoffeeRecipeDetails = () => {
  return (
    <div className="p-6 bg-base-200 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold mb-4">Espresso Recipe</h1>
        <img
          src="https://source.unsplash.com/600x400/?espresso"
          alt="Espresso"
          className="rounded-lg shadow-xl mb-6"
        />
        <h2 className="text-3xl font-semibold mb-2">Ingredients:</h2>
        <ul className="list-disc ml-6 mb-4">
          <li>1 shot of espresso</li>
          <li>Hot water (optional)</li>
        </ul>
        <h2 className="text-3xl font-semibold mb-2">Instructions:</h2>
        <ol className="list-decimal ml-6">
          <li>Grind fresh coffee beans finely.</li>
          <li>Tamp the grounds evenly in the portafilter.</li>
          <li>Extract the espresso shot for 25–30 seconds.</li>
          <li>Add hot water for an Americano if desired.</li>
        </ol>
      </div>
    </div>
  );
};

export default CoffeeRecipeDetails;
