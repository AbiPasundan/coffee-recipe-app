import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import CoffeeMenu from "./components/CoffeeMenu";
import CoffeeRecipeDetails from "./components/CoffeeRecipeDetails";

function App() {
  return (
    <Router>
      <div className="font-sans">
        <Navbar />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/menu" element={<CoffeeMenu />} />
          <Route path="/recipe/:id" element={<CoffeeRecipeDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
