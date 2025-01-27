import Carousel from "../components/Carousel";
import Hero from "../components/hero/Hero";
import AboutLayout from "../Layouts/about/AboutLayout";

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
        imageSrc="./img/manualbrew/landscape/v60_4l.jpg"
        imageAlt="A beautiful cup of coffee"
        w={500}
        reverse={true}
      />

      <Carousel />


      <div className="diff aspect-[16/9]">
        <div className="diff-item-1">
          <img alt="daisy" src="https://img.daisyui.com/images/stock/photo-1560717789-0ac7c58ac90a.webp" />
        </div>
        <div className="diff-item-2">
          <img
            alt="daisy"
            src="https://img.daisyui.com/images/stock/photo-1560717789-0ac7c58ac90a-blur.webp" />
        </div>
        <div className="diff-resizer"></div>
      </div>
    </>
  );
}
