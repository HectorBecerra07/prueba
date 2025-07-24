import React, { useRef } from "react";

const imagenes = [
  "https://images.unsplash.com/photo-1606787366850-de6330128bfc?crop=entropy&cs=tinysrgb&fit=crop&h=400&w=400",
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?crop=entropy&cs=tinysrgb&fit=crop&h=400&w=400",
  "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?crop=entropy&cs=tinysrgb&fit=crop&h=400&w=400",
  "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?crop=entropy&cs=tinysrgb&fit=crop&h=400&w=400",
  "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?crop=entropy&cs=tinysrgb&fit=crop&h=400&w=400",
  "https://images.unsplash.com/photo-1581291519195-ef11498d1cf5?crop=entropy&cs=tinysrgb&fit=crop&h=400&w=400",
  "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?crop=entropy&cs=tinysrgb&fit=crop&h=400&w=400",
  "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?crop=entropy&cs=tinysrgb&fit=crop&h=400&w=400",
];

export default function CarruselMultiple() {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const container = scrollRef.current;
    const cardWidth = 220; // ancho de cada imagen + gap
    container.scrollBy({
      left: direction === "right" ? cardWidth * 4 : -cardWidth * 4,
      behavior: "smooth",
    });
  };

  return (
    <div className="w-full bg-gradient-to-b from-cyan-400 to-teal-500 py-16 px-4 flex flex-col items-center">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">NUESTROS TRABAJOS</h2>

      <div className="relative w-full max-w-7xl">
        {/* Botón Izquierda */}
        <button
          onClick={() => scroll("left")}
          className="absolute z-10 left-0 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-700 p-2 rounded-full shadow-md"
        >
          ◀
        </button>

        {/* Contenedor del carrusel sin scroll visible */}
        <div
          ref={scrollRef}
          className="flex gap-4 overflow-hidden px-10 py-2"
        >
          {imagenes.map((src, i) => (
            <div
              key={i}
              className="flex-shrink-0 w-[200px] h-[200px] md:w-[220px] md:h-[220px] rounded-xl overflow-hidden shadow-lg bg-white"
            >
              <img
                src={src}
                alt={`Imagen ${i}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        {/* Botón Derecha */}
        <button
          onClick={() => scroll("right")}
          className="absolute z-10 right-0 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-700 p-2 rounded-full shadow-md"
        >
          ▶
        </button>
      </div>
    </div>
  );
}
