import React from "react";
import { Link } from "react-router-dom";

export default function GridArticulos() {
  const articulos = [
    {
      titulo: "Cometas: Tradición, Ciencia y Diversión en un Solo Vuelo",
      img: "/images/Cometa.jpg",
      link: "/entretenimiento/cometas",
    },
    {
      titulo: "Easter: A Celebration of Life, Faith, and Service",
      img: "/images/Easter.jpg",
      link: "/entretenimiento/easter",
    },
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <h2 className="text-2xl font-bold mb-8 text-center">
        Entretenimiento
      </h2>

      <div className="grid gap-8 md:grid-cols-2">
        {articulos.map((art, i) => (
          <Link
            key={i}
            to={art.link}
            className="block bg-white shadow hover:shadow-lg rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105"
          >
            <img
              src={art.img}
              alt={art.titulo}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="font-semibold text-lg leading-snug">
                {art.titulo}
              </h3>
              <p className="text-blue-600 text-sm mt-2">Leer artículo →</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
