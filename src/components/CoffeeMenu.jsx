// src/components/CoffeeMenu.jsx
import React from "react";

const CoffeeMenu = () => {
  const coffeeList = [
    { id: 1, name: "Espresso", image: "https://source.unsplash.com/300x200/?espresso", description: "Rich and bold espresso shot." },
    { id: 2, name: "Cappuccino", image: "https://source.unsplash.com/300x200/?cappuccino", description: "Creamy and smooth with a frothy top." },
    { id: 3, name: "Latte", image: "https://source.unsplash.com/300x200/?latte", description: "Perfect blend of coffee and milk." },
  ];

  return (
    <div className="p-4 bg-base-100">
      <h1 className="text-4xl font-bold mb-6 text-center">Our Coffee Menu</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {coffeeList.map((coffee) => (
          <div key={coffee.id} className="card bg-base-200 shadow-xl">
            <figure>
              <img src={coffee.image} alt={coffee.name} className="w-full h-48 object-cover" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{coffee.name}</h2>
              <p>{coffee.description}</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">View Recipe</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoffeeMenu;
