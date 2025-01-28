import Carousel from "../components/Carousel";
import Diff from "../components/diff/Diff";
import Hero from "../components/hero/Hero";
import AboutLayout from "../Layouts/about/AboutLayout";
import ModalImg from "../Layouts/modalimg/ModalImg";

export default function Home() {

  return (
    <>
      <Hero />
      {/* Tentang Kami */}



      <AboutLayout
        about="About"
        title="Our Coffee Journey"
        descriptions={[
          "We are passionate about bringing the best coffee experience to you.",
          "Every cup is brewed with love and precision to deliver exceptional taste."
        ]}
        showButton={true}
        buttonText="Learn More"
        buttonLink="/about"
        imageSrc="./img/manualbrew/landscape/v60_4l.webp"
        imageAlt="A beautiful cup of coffee"
        w={500}
        reverse={true}
      />

      <Carousel title="Find The Beast Coffee Recipe" />

      <Diff
        img1={"./img/beans/robusta.webp"}
        img2={"./img/beans/arabika.webp"} />

      <ModalImg />


    </>
  );
}
