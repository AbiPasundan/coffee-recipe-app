import React from 'react';

export default function About() {
  return (
    <div className="bg-coffee-50 dark:bg-darkCoffee-900 text-coffee-800 dark:text-coffee-50 min-h-screen">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-8">About Us</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col justify-center">
            <h2 className="text-2xl font-semibold mb-4">Welcome to Recipe Coffee</h2>
            <p className="mb-4">
              At Recipe Coffee, we are passionate about sharing the joy of coffee with the world. Our mission is to inspire coffee lovers to explore, create, and enjoy unique recipes that bring out the best flavors in every cup.
            </p>
            <p className="mb-4">
              Whether you are a seasoned barista or just starting your coffee journey, our collection of recipes and tips is designed to cater to all skill levels. Let's make every sip a memorable experience!
            </p>
            <a href="#contact" className="btn btn-primary mt-4 self-start">Contact Us</a>
          </div>
          <div className="flex justify-center">
            <img src="https://source.unsplash.com/500x500/?coffee,cup" alt="Coffee Lovers" className="rounded-lg shadow-md" />
          </div>
        </div>

        <div className="mt-12">
          <h3 className="text-xl font-semibold text-center mb-6">Our Vision</h3>
          <div className="flex flex-col md:flex-row items-center justify-around gap-8">
            <div className="bg-coffee-100 dark:bg-darkCoffee-700 p-6 rounded-lg shadow-md w-full md:w-1/3">
              <h4 className="text-lg font-bold mb-2">Inspiration</h4>
              <p>
                We aim to inspire creativity by sharing innovative coffee recipes and brewing techniques.
              </p>
            </div>
            <div className="bg-coffee-100 dark:bg-darkCoffee-700 p-6 rounded-lg shadow-md w-full md:w-1/3">
              <h4 className="text-lg font-bold mb-2">Community</h4>
              <p>
                Building a global community of coffee enthusiasts who share their passion and knowledge.
              </p>
            </div>
            <div className="bg-coffee-100 dark:bg-darkCoffee-700 p-6 rounded-lg shadow-md w-full md:w-1/3">
              <h4 className="text-lg font-bold mb-2">Excellence</h4>
              <p>
                Striving for excellence in every cup by highlighting the best practices and tools.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
