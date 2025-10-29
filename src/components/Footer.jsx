import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';

function Footer() {
  return (
    <footer className="relative bg-blue-800 text-white mt-12">

      {/* Abeja flotante */}
      <img
        src="/Abeja3.png"
        alt="volver al inicio"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="absolute bottom-16 right-10 w-10 opacity-90 pointer-events-auto cursor-pointer select-none animate-eight
                   transition-transform duration-300 hover:scale-110 hover:-translate-y-1"
      />

      <div className="max-w-6xl mx-auto px-4 py-10 grid grid-cols-3 items-center">

        {/* IZQUIERDA — Redes + contacto */}
        <div className="flex flex-col items-start gap-2">
          <p className="text-sm font-semibold">Síguenos</p>
          <div className="flex gap-3">
            <a href="#" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition">
              <FacebookIcon fontSize="small" />
            </a>
            <a href="#" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition">
              <InstagramIcon fontSize="small" />
            </a>
            <a href="#" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition">
              <YouTubeIcon fontSize="small" />
            </a>
          </div>

          {/*Dirección en dos líneas */}
          <div className="mt-3 text-xs text-slate-200 leading-4">
            <p className="text-sm font-semibold">Encuentranos</p>
            <p>Avenida 2 # 17-51</p>
            <p>Barrio La Playa — Cúcuta</p>
          </div>
        </div>

        {/* CENTRO — Banner */}
        <div className="flex justify-center">
          <img src="/logo4.png" alt="Banner Colegio" className="w-80" />
        </div>

        {/*DERECHA — La abeja ya está por fuera como absolute, se deja vacío este col */}
        <div></div>
      </div>

      <div className="text-center py-4 text-xs text-slate-300">
        © {new Date().getFullYear()} Area de Comunicaciones · Colegio Presentación Santa Teresa Cucuta
      </div>
    </footer>
  );
}

export default Footer;




