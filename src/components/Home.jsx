import React, { useState } from "react";

export default function Home() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.body.classList.toggle("dark", newTheme === "dark");
  };

  return (
    <>
      <div
          style={{
            backgroundImage: "url(frenchpress.jpg)",
          }}
        className="hero bg-coffee-100 dark:bg-darkCoffee-800 min-h-screen">
        <div className="hero-content flex-col justify-stretch lg:flex-row-reverse">
          <div>
            <h1 className="text-5xl text-coffee-800 font-bold dark:text-coffee-50">Box Office News!</h1>
            <p className="py-6 max-w-[80%]">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
              quasi. In deleniti eaque aut repudiandae et a id nisi.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>


      <div className="min-h-screen bg-coffee-100 text-coffee-800 dark:bg-darkCoffee-800 dark:text-coffee-50">
        {/* Main Content Section */}
        <main className="container mx-auto py-10 px-4">
          <section className="text-center mb-10">
            <h2 className="text-2xl md:text-4xl font-bold mb-4">
              Explore Our Coffee Recipes
            </h2>
            <p className="text-lg">
              Discover delicious coffee recipes that you can easily make at home.
              Start your coffee journey today!
            </p>
          </section>

          {/* Features Section */}
          <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="card bg-coffee-50 dark:bg-darkCoffee-700 shadow-xl">
              <div className="card-body">
                <h3 className="card-title">Espresso</h3>
                <p>A strong and bold coffee for those who need a quick boost!</p>
              </div>
            </div>
            <div className="card bg-coffee-50 dark:bg-darkCoffee-700 shadow-xl">
              <div className="card-body">
                <h3 className="card-title">Cappuccino</h3>
                <p>Perfectly balanced coffee with creamy foam on top.</p>
              </div>
            </div>
            <div className="card bg-coffee-50 dark:bg-darkCoffee-700 shadow-xl">
              <div className="card-body">
                <h3 className="card-title">Latte</h3>
                <p>A smooth and creamy coffee for a relaxing day.</p>
              </div>
            </div>
          </section>
        </main>
      </div>


    </>
  );
}
