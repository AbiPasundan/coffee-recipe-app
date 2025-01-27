import React from 'react';
import AboutLayout from '../Layouts/about/AboutLayout';
import ListSideCard from '../components/listsidecard/ListSideCard';

export default function About() {
  return (
    <div className="bg-coffee-50 dark:bg-darkCoffee-900 text-coffee-800 dark:text-coffee-50 min-h-screen">
      <div className="container mx-auto px-4 py-12">
        <AboutLayout
          about="About Us"
          title="Our Coffee Journey"
          descriptions={[
            "We are passionate about bringing the best coffee experience to you.",
            "Every cup is brewed with love and precision to deliver exceptional taste."
          ]}
          showButton={true}
          buttonText="Learn More"
          buttonLink="/about"
          imageSrc="./img/manualbrew/landscape/v60_3l.jpg"
          imageAlt="A beautiful cup of coffee"
          w={500}
          reverse={true}
        />


        <ListSideCard />
      </div>
    </div>
  );
}
