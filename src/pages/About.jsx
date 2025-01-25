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
      </div>
    </div>
  );
}
