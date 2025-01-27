import React, { useRef, useEffect, useState } from "react";
import Card from "./card/Card";

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
        <section id="menu" className="py-12 bg-coffee-100 shadow-md dark:bg-darkCoffee-800 text-coffee-800 dark:text-coffee-50">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl font-bold text-center mb-8">
                    Our Featured Recipes
                </h2>
                <div className="relative ">
                    {/* Wrapper untuk Carousel */}
                    <div
                        ref={carouselRef}
                        className="flex overflow-x-hidden scroll-smooth"
                        onTouchStart={handleTouchStart}
                        onTouchMove={handleTouchMove}
                        onTouchEnd={handleTouchEnd}
                    >
                        <Card
                            img={"./img/manualbrew/potret/v60_1.jpg"}
                            w={300}
                            // alt={title}
                            title={"V60"}
                            description={"This is description"}
                        />
                        <Card
                            img={"./img/espressobase/potret/espresso_1.jpg"}
                            w={300}
                            // alt={title}
                            title={"Late"}
                            description={"This is description This is description This is description This is description"}
                        />
                        <Card
                            img={"./img/espressobase/potret/latteart_1.jpg"}
                            w={300}
                            // alt={title}
                            title={"V60"}
                            description={"Manual brew lorem15"}
                        />
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
