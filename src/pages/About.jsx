import React from 'react';
import AboutLayout from '../Layouts/about/AboutLayout';
import Card from '../components/card/Card';
import ListSideCard from '../components/listsidecard/ListSideCard';

export default function About() {
  return (
    <div className="bg-coffee-50 dark:bg-darkCoffee-900 text-coffee-800 dark:text-coffee-50 min-h-screen">
      <div className="container mx-auto px-4 py-12">
        <AboutLayout
          title="About Us"
          descriptions={[
            "Recipe Coffee was created to bring coffee enthusiasts together.",
            "Whether you're a beginner or a pro, our resources cater to all levels.",
          ]}
          showButton={false}
        />

        <Card
          title={"Cappuchino"}
          description={"This is description"}
          ShowImg={false}
        />

        <ListSideCard/>

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
