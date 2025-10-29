import React from 'react'
import './index.css'
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import ArticleIcon from '@mui/icons-material/Article';
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import { FaTiktok } from "react-icons/fa";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import AllInboxIcon from '@mui/icons-material/AllInbox';




const navLinks = [
  { name: "Inicio", icon: <HomeIcon fontSize="small" /> },
  { name: "Ciencia y Literatura", icon: <InfoIcon fontSize="small" /> },
  { name: "Cultura y Tecnología", icon: <ArticleIcon fontSize="small" /> },
  { name: "Infantil", icon: <PhotoLibraryIcon fontSize="small" /> },
  { name: "Zapping", icon: < AllInboxIcon className="text-slate-700" /> },
  { name: "Entretenimiento", icon: <ContactMailIcon fontSize="small" /> },
  { name: "Satmun", icon: <AssignmentTurnedInIcon fontSize="small" /> },
];


function Navbar() {
  return (
    <header className="fixed w-full z-40 bg-white/60 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-6 flex items-center justify-between">

        {/* LOGO IZQUIERDA */}
        <div className="flex items-center gap-3">
          <img
            src="/Ecos.jpeg"
            alt="Logo Revista Ecos"
            className="w-15 h-20 object-contain transition-transform duration-200 hover:scale-110 hover:opacity-90"
          />
        </div>

        {/* NAV LINKS + ICONOS */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((l) => (
            <a
              key={l.name}
              href="#"
              className="flex items-center gap-2 text-slate-700 hover:text-cyan-600 
                 transition-transform duration-300 hover:scale-110"
            >
              {l.icon}
              {l.name}
            </a>
          ))}
        </nav>

        {/* LOGO DERECHA */}
        <div className="flex items-center gap-3">
          <img
            src="/Escudo2.png"
            alt="Logo secundario"
            className="hidden md:inline-block w-16 h-21 object-contain transition-transform duration-200 hover:scale-110 hover:opacity-90"
          />
          <button className="md:hidden p-2 rounded-lg bg-white border">☰</button>
        </div>

      </div>
    </header>
  );
}



function Hero() {
  return (
    <section className="pt-24">
      <div className="max-w-6xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-slate-900">Una educación <span className="text-cyan-600">con corazón</span> y mirada al futuro</h1>
          <p className="mt-4 text-slate-600">Alumnos de primaria participa en el festival la abeja dorada. Espacios seguros, actividades innovadoras y una comunidad que inspira.</p>

          <div className="mt-6 flex gap-3">
          </div>

          <div className="mt-8 flex gap-4">
            <div className="flex items-center gap-3 bg-white rounded-2xl p-3 shadow">
              <img src="Prom001.jpg" alt="students" className="w-16 h-16 rounded-lg object-cover" />
              <div>
                <div className="text-sm font-semibold">Memorias</div>
                <div className="text-xs text-slate-500">Recordemos la promocion 2024 y sus aportes a nuestra comunidad</div>
              </div>
            </div>

            <div className="flex items-center gap-3 bg-white rounded-2xl p-3 shadow">
              <img src="grupda.jpeg" alt="awards" className="w-16 h-16 rounded-lg object-cover" />
              <div>
                <div className="text-sm font-semibold">Estudiantes destacados</div>
                <div className="text-xs text-slate-500">Grupo de danza luego de su exitosa presentación</div>
              </div>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="rounded-3xl overflow-hidden shadow-2xl border border-white">
            <img src="/festabdr.jpeg" alt="hero" className="w-full h-96 object-cover" />
          </div>

          <div className="absolute -bottom-6 -left-6 w-40 h-40 rounded-full bg-cyan-400/30 blur-3xl"></div>
          <div className="absolute -top-6 -right-6 w-32 h-32 rounded-full bg-yellow-300/40 blur-3xl"></div>
        </div>
      </div>

      <div className="w-full overflow-hidden -mt-6">
        <svg viewBox="0 0 1440 120" className="w-full h-20 md:h-28" preserveAspectRatio="none">
          <path d="M0,40 C360,120 1080,0 1440,80 L1440,120 L0,120 Z" fill="#f8fafc"></path>
        </svg>
      </div>
    </section>
  )
}

function CardsGrid() {
  const cards = [
    { title: 'Proyectos Creativos', desc: 'Talleres STEAM y arte para desarrollar pensamiento crítico.', img: 'https://images.unsplash.com/photo-1516637090014-cb1ab78511f5?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=yyyy' },
    { title: 'Vida Estudiantil', desc: 'Clubes deportivos, culturales y grupos estudiantiles.', img: 'https://images.unsplash.com/photo-1516637090014-cb1ab78511f5?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=yyyy' },
    { title: 'Acompañamiento', desc: 'Orientación psicosocial y académica para cada estudiante.', img: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=wwww' }
  ]

  return (
    <section className="max-w-6xl mx-auto px-4 py-12">
      <h2 className="text-2xl font-bold text-slate-800 mb-6">Qué hacemos</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {cards.map((c) => (
          <article key={c.title} className="card bg-white rounded-2xl p-4 shadow hover:shadow-lg transition transform hover:-translate-y-2">
            <div className="w-full h-40 rounded-lg overflow-hidden">
              <img src={c.img} alt={c.title} className="w-full h-full object-cover" />
            </div>
            <h3 className="mt-4 font-semibold text-lg text-slate-900">{c.title}</h3>
            <p className="text-sm text-slate-600 mt-2">{c.desc}</p>
            <a href="#" className="mt-4 inline-block text-cyan-600 text-sm font-semibold">Leer más →</a>
          </article>
        ))}
      </div>
    </section>
  )
}

function FeaturedStories() {
  return (
    <section className="bg-gradient-to-b from-white to-slate-50 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl font-bold text-slate-800 mb-6">Historias recientes</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[1, 2, 3].map((n) => (
            <div key={n} className="bg-white rounded-2xl p-4 shadow flex gap-4 items-center">
              <img src={`https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3&s=img${n}`} alt="story" className="w-24 h-24 rounded-lg object-cover" />
              <div>
                <div className="text-sm font-semibold">Título de la noticia {n}</div>
                <div className="text-xs text-slate-500 mt-1">Resumen corto de la noticia para invitar al lector a conocer más.</div>
                <a href="#" className="text-xs text-cyan-600 mt-2 inline-block">Leer noticia</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Gallery() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-12">
      <h2 className="text-2xl font-bold text-slate-800 mb-6">Galería</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {Array.from({ length: 8 }).map((_, i) => (
          <div key={i} className="rounded-lg overflow-hidden shadow-sm">
            <img src={`https://images.unsplash.com/photo-1511367461989-f85a21fda167?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=gal${i}`} alt="gal" className="w-full h-40 object-cover" />
          </div>
        ))}
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="bg-[#1A2D80] text-white mt-12">

      <div className="max-w-6xl mx-auto px-4 py-10 grid md:grid-cols-3 gap-6">
        <div>
          <img src="/LogoFooter.png" alt="Logo" className="w-250 h-200 object-contain" />

        </div>
        <div>
          <div className="font-semibold">Contacto</div>
          <div className="text-sm text-slate-300 mt-2">Cúcuta, Colombia · Tel: +57 7 1234567</div>
        </div>
        <div>
          <div className="font-semibold">Síguenos</div>
         <div className="flex gap-4 mt-3">
        {/* Facebook */}
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:-translate-y-2 hover:bg-white/20 hover:shadow-md transition-all duration-300"
        >
          <FacebookIcon className="text-white text-xl" />
        </a>

        {/* Instagram */}
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:-translate-y-2 hover:bg-white/20 hover:shadow-md transition-all duration-300"
        >
          <InstagramIcon className="text-white text-xl" />
        </a>

        {/* TikTok */}
        <a
          href="https://tiktok.com"
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:-translate-y-2 hover:bg-white/20 hover:shadow-md transition-all duration-300"
        >
          <FaTiktok className="text-white text-xl" />
        </a>

        {/* YouTube */}
        <a
          href="https://youtube.com"
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:-translate-y-2 hover:bg-white/20 hover:shadow-md transition-all duration-300"
        >
          <YouTubeIcon className="text-white text-xl" />
        </a>
      </div>

        </div>
      </div>
      <div className="text-center py-4 text-xs text-slate-400">© {new Date().getFullYear()} Colegio Presentación · Todos los derechos reservados</div>
    </footer>
  )
}

export default function FrontJuvenil() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-slate-50 to-white text-slate-800">
      <Navbar />
      <main>
        <Hero />
        <CardsGrid />
        <FeaturedStories />
        <Gallery />
      </main>
      <Footer />
    </div>
  )
}
