import React, { useState } from "react";

export default function Home() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.body.classList.toggle("dark", newTheme === "dark");
  };

  return (
    <div className="min-h-screen bg-coffee-100 text-coffee-800 dark:bg-darkCoffee-800 dark:text-coffee-50">
      {/* Header Section */}
      {/* <header className="bg-coffee-200 dark:bg-darkCoffee-700 py-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-3xl font-bold">Welcome to Recipe Coffee</h1>
          <button
            onClick={toggleTheme}
            className="btn btn-ghost btn-circle"
            aria-label="Toggle Dark Mode"
          >
            {theme === "light" ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 3v2m6.36-1.36l-1.42 1.42m4.24 4.24h-2m1.36 6.36l-1.42-1.42m-6.36 4.24v-2m-6.36 1.36l1.42-1.42m-4.24-4.24h2m-1.36-6.36l1.42 1.42M12 7a5 5 0 100 10 5 5 0 000-10z"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 7a5 5 0 100 10 5 5 0 000-10z"
                />
              </svg>
            )}
          </button>
        </div>
      </header> */}

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
  );
}
