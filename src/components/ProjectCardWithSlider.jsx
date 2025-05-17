import { useState } from "react";

export default function ProjectCardWithSlider({
  title,
  description,
  images,
  badge,
  videoLink
}) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState("right");

  const nextSlide = () => {
    setDirection("right");
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setDirection("left");
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="bg-white text-black rounded-lg overflow-hidden shadow-lg hover:scale-[1.02] transition">
      <div className="relative w-full h-80 overflow-hidden">
        <div
          key={currentSlide} // Esto obliga a React a re-renderizar
          style={{
            "--tw-slide-from": direction === "right" ? "20px" : "-20px"
          }}
          className="w-full h-full animate-fade-slide"
        >
          <img
            src={images[currentSlide]}
            alt={`Slide ${currentSlide + 1}`}
            className="w-full h-full object-cover"
          />
        </div>

        {images.length > 1 && (
          <>
            <button
              onClick={prevSlide}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-white bg-opacity-70 hover:bg-opacity-90 text-gray-800 rounded-full p-2 shadow transition"
            >
              {/* Flecha izquierda */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-white bg-opacity-70 hover:bg-opacity-90 text-gray-800 rounded-full p-2 shadow transition"
            >
              {/* Flecha derecha */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </>
        )}

        {badge && (
          <div className="absolute top-2 right-2 bg-yellow-400 text-black font-bold px-3 py-1 rounded-full shadow text-sm">
            🏅 {badge}
          </div>
        )}
      </div>

      <div className="p-6">
        <h4 className="text-2xl font-bold mb-2">{title}</h4>
        <p className="mb-5">{description}</p>
        {videoLink && (
          <a
            href={videoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-yellow-400 text-black px-6 py-3 font-bold rounded-full hover:bg-yellow-300 transition duration-300 shadow-md ring-2 ring-yellow-500 w-fit self-start"
          >
            Ver Video
          </a>
        )}
      </div>
    </div>
  );
}
