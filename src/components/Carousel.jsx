import React, { useRef, useEffect, useState } from "react";

export default function Carousel() {
  const carouselRef = useRef(null);
  let scrollAmount = 0;

  // State untuk touch gesture
  const [startX, setStartX] = useState(0);
  const [isSwiping, setIsSwiping] = useState(false);

  // Fungsi untuk menggeser carousel secara manual
  const handleScroll = (direction) => {
    const carousel = carouselRef.current;
    const scrollStep = carousel.offsetWidth;

    if (direction === "next") {
      if (scrollAmount < carousel.scrollWidth - scrollStep) {
        scrollAmount += scrollStep;
      } else {
        scrollAmount = 0; // Kembali ke awal
      }
    } else if (direction === "prev") {
      if (scrollAmount > 0) {
        scrollAmount -= scrollStep;
      } else {
        scrollAmount = carousel.scrollWidth - scrollStep; // Ke akhir
      }
    }

    carousel.scrollTo({ left: scrollAmount, behavior: "smooth" });
  };

  // Fungsi untuk scroll otomatis
  useEffect(() => {
    const interval = setInterval(() => {
      handleScroll("next");
    }, 5000); // Geser otomatis setiap 5 detik

    return () => clearInterval(interval); // Bersihkan interval saat komponen unmount
  }, []);

  // Event handler untuk swipe
  const handleTouchStart = (e) => {
    setStartX(e.touches[0].clientX);
    setIsSwiping(true);
  };

  const handleTouchMove = (e) => {
    if (!isSwiping) return;

    const currentX = e.touches[0].clientX;
    const diff = startX - currentX;

    // Geser carousel secara manual saat swipe
    if (diff > 50) {
      handleScroll("next");
      setIsSwiping(false);
    } else if (diff < -50) {
      handleScroll("prev");
      setIsSwiping(false);
    }
  };

  const handleTouchEnd = () => {
    setIsSwiping(false);
  };

  return (
    <section id="menu" className="py-12">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8">
          Our Featured Recipes
        </h2>
        <div className="relative">
          {/* Wrapper untuk Carousel */}
          <div
            ref={carouselRef}
            className="flex overflow-x-hidden scroll-smooth"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {/* Card 1 */}
            <div className="card bg-white shadow-lg w-full flex-shrink-0 snap-start">
              <figure>
                <img
                  src="https://images.unsplash.com/photo-1559814045-0d26f5c1c8f8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDEzfHxjb2ZmZWV8ZW58MHx8fHwxNjczNTI4MjA0&ixlib=rb-4.0.3&q=80&w=400"
                  alt="Latte"
                />
              </figure>
              <div className="card-body">
                <h3 className="card-title text-lg font-bold">Latte</h3>
                <p>A creamy and smooth coffee experience for everyone.</p>
              </div>
            </div>
            {/* Card 2 */}
            <div className="card bg-white shadow-lg w-full flex-shrink-0 snap-start">
              <figure>
                <img
                  src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDN8fGNvZmZlZXxlbnwwfHx8fDE2NzM1MjgyMDQ&ixlib=rb-4.0.3&q=80&w=400"
                  alt="Cappuccino"
                />
              </figure>
              <div className="card-body">
                <h3 className="card-title text-lg font-bold">Cappuccino</h3>
                <p>Perfect balance of espresso, steamed milk, and foam.</p>
              </div>
            </div>
            {/* Card 3 */}
            <div className="card bg-white shadow-lg w-full flex-shrink-0 snap-start">
              <figure>
                <img
                  src="https://images.unsplash.com/photo-1527874522485-b0fa5a8f8d30?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDR8fGNvZmZlZXxlbnwwfHx8fDE2NzM1MjgyMDQ&ixlib=rb-4.0.3&q=80&w=400"
                  alt="Espresso"
                />
              </figure>
              <div className="card-body">
                <h3 className="card-title text-lg font-bold">Espresso</h3>
                <p>Rich, bold, and full-bodied coffee for enthusiasts.</p>
              </div>
            </div>
          </div>

          {/* Tombol Navigasi */}
          <button
            onClick={() => handleScroll("prev")}
            className="absolute top-1/2 left-4 transform -translate-y-1/2 btn btn-circle"
          >
            ❮
          </button>
          <button
            onClick={() => handleScroll("next")}
            className="absolute top-1/2 right-4 transform -translate-y-1/2 btn btn-circle"
          >
            ❯
          </button>
        </div>
      </div>
    </section>
  );
}
