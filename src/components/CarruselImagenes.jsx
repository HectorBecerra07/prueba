import React, { useState, useEffect } from "react";

export default function CarruselImagenes() {
  const imagenes = [
    "https://images.unsplash.com/photo-1606787366850-de6330128bfc?crop=entropy&cs=tinysrgb&fit=crop&h=400&w=400"
  ];

  const [indice, setIndice] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const intervalo = setInterval(() => {
      handleNext();
    }, 3000);
    return () => clearInterval(intervalo);
  }, [isMobile]);

  const handleNext = () => {
    setIndice((prev) => (prev + (isMobile ? 1 : 2)) % imagenes.length);
  };

  const handlePrev = () => {
    setIndice((prev) => {
      const newIndex = prev - (isMobile ? 1 : 2);
      return newIndex < 0 ? (imagenes.length - (isMobile ? 1 : 2)) : newIndex;
    });
  };

  return (
    <div className="w-full bg-white py-10 flex flex-col items-center gap-4">
      <div
        className="relative overflow-hidden"
        style={{
          width: isMobile ? "320px" : "850px",
        }}
      >
        <div
          className="flex transition-transform ease-in-out duration-700"
          style={{
            transform: `translateX(-${(indice / imagenes.length) * 100}%)`,
            width: `${(imagenes.length / (isMobile ? 1 : 2)) * 100}%`,
          }}
        >
          {imagenes.map((src, i) => (
            <div
              key={i}
              className="flex-shrink-0 px-2 flex justify-center"
              style={{ width: isMobile ? "100%" : "50%" }}
            >
              <div className="w-full max-w-[300px] md:max-w-[400px] aspect-square">
                <img
                  src={src}
                  alt={`Imagen ${i}`}
                  className="w-full h-full object-cover rounded-xl shadow-lg"
                />
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={handlePrev}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-black/50 text-white px-3 py-2 rounded-full hover:bg-black/70"
        >
          ◀
        </button>
        <button
          onClick={handleNext}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-black/50 text-white px-3 py-2 rounded-full hover:bg-black/70"
        >
          ▶
        </button>
      </div>
    </div>
  );
}
