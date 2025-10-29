import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const ImageSlider = () => {
  const slides = [
    {
      src: "/images/Satmun.jpg",
      title: "Delegación SATMUN 2024",
      description: "Los estudiantes del colegio en la ceremonia inaugural del evento.",
    },
    {
      src: "/images/Prom001.jpg",
      title: "Recuerdos de la promoción 2024",
      description: "Un vistazo a los compañeros que se fueron el año pasado.",
    },
    {
      src: "/images/perso.png",
      title: "Posesión del personero 2025",
      description: "Presentaciones de personera electa y su equipo.",
    },
  ];

  return (
    <div className="w-full max-w-5xl mx-auto rounded-2xl overflow-hidden shadow-lg">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000 }}
        loop={true}
        className="rounded-2xl"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative">
              <img
                src={slide.src}
                alt={slide.title}
                className="
                  w-full 
                  h-[250px] sm:h-[300px] md:h-[400px] lg:h-[450px]
                  object-cover
                  transition-all duration-500
                "
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white p-3 sm:p-4">
                <h3 className="text-lg sm:text-xl font-semibold">{slide.title}</h3>
                <p className="text-xs sm:text-sm">{slide.description}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ImageSlider;



