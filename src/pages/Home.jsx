import Carousel from "../components/Carousel";
import Hero from "../components/hero/Hero";
import AboutLayout from "../Layouts/about/AboutLayout";

export default function Home() {

  return (
    <>
      <Hero />
      {/* Tentang Kami */}
      <AboutLayout />

      <Carousel />


      <div className="flex flex-col md:flex-row items-center justify-center w-full h-screen bg-gray-100">
        {/* Bagian Kiri (Gambar) */}
        <div className="w-full md:w-1/2 h-1/2 md:h-full">
          <img
            src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fGNvZmZlZXxlbnwwfHx8fDE2NzM1MjgyMDQ&ixlib=rb-4.0.3&q=80&w=800"
            alt="Coffee"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Bagian Kanan (Konten) */}
        <div className="w-full md:w-1/2 h-full flex flex-col items-start justify-center px-8 md:px-16 bg-white text-gray-800">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Discover the Best Coffee
          </h1>
          <p className="text-lg md:text-xl mb-6">
            Indulge in our carefully crafted coffee recipes, perfect for every
            occasion. Taste the richness, aroma, and passion in every cup.
          </p>
          <button className="btn btn-primary px-6 py-3">Learn More</button>
        </div>
      </div>
    </>
  );
}
