import { useState, useEffect } from "react";

export default function CarouselImages({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 2500);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="relative w-full h-72 rounded-3xl overflow-hidden shadow-xl">
      <img
        src={images[currentIndex]}
        alt={`Imagen ${currentIndex + 1}`}
        className="w-full h-full object-contain transition-all duration-500"
      />
    </div>
  );
}
