import React from 'react';
import './index.css';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import ArticleIcon from '@mui/icons-material/Article';
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';

/**
 * Archivo: FrontJuvenil.jsx
 * Descripción general:
 *   Contiene la vista principal del sitio/frontpage institucional (Revista Ecos),
 *   junto con los componentes internos Navbar, Hero, CardsGrid, FeaturedStories,
 *   Gallery y Footer. Está organizado como un único archivo para facilitar su
 *   transición posterior a componentes separados.
 *
 */

/**
 * Datos de navegación reutilizables para el Navbar.
 * Cada objeto contiene un nombre visible y el icono React correspondiente.
 */
const navLinks = [
  { name: "Inicio", icon: <HomeIcon fontSize="small" /> },
  { name: "Nosotros", icon: <InfoIcon fontSize="small" /> },
  { name: "Noticias", icon: <ArticleIcon fontSize="small" /> },
  { name: "Galería", icon: <PhotoLibraryIcon fontSize="small" /> },
  { name: "Contacto", icon: <ContactMailIcon fontSize="small" /> },
];

/**
 * Componente: Navbar
 * Propósito:
 *   Renderiza la cabecera fija de la página con logo, enlaces de navegación
 *   y un control sencillo para vista móvil.
 *
 */
function Navbar() {
  return (
    <header className="fixed w-full z-40 bg-white/60 backdrop-blur-md shadow-sm">
      <div className="max-w-6xl mx-auto px-4 py-6 flex items-center justify-between">
        {/* Logo izquierdo */}
        <div className="flex items-center gap-3">
          <img
            src="/Ecos.jpeg"
            alt="Logo Revista Ecos"
            className="w-15 h-20 object-contain transition-transform duration-200 hover:scale-110 hover:opacity-90"
          />
        </div>

        {/* Navegación principal (oculta en pantallas pequeñas) */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((l) => (
            <a
              key={l.name}
              href="#"
              className="flex items-center gap-2 text-slate-700 hover:text-cyan-600 transition-transform duration-300 hover:scale-110"
            >
              {l.icon}
              {l.name}
            </a>
          ))}
        </nav>

        {/* Logo/elementos de la derecha — incluye botón móvil */}
        <div className="flex items-center gap-3">
          <img
            src="/Escudo2.png"
            alt="Logo secundario"
            className="hidden md:inline-block w-16 h-21 object-contain transition-transform duration-200 hover:scale-110 hover:opacity-90"
          />
          {/* Botón de menú móvil - Placeholder funcional (sin control de estado) */}
          <button className="md:hidden p-2 rounded-lg bg-white border">☰</button>
        </div>
      </div>
    </header>
  );
}

/**
 * Componente: Hero
 * Propósito:
 *   Sección hero de la página principal con título, texto destacado y
 *   elementos visuales (tarjetas resumidas y fotografía principal).
 *
 */
function Hero() {
  return (
    <section className="pt-24">
      <div className="max-w-6xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-slate-900">
            Una educación <span className="text-cyan-600">con corazón</span> y mirada al futuro
          </h1>
          <p className="mt-4 text-slate-600">
            Alumnos de primaria cantando la piragua en el festival la abeja dorada.
            Espacios seguros, actividades innovadoras y una comunidad que inspira.
          </p>

          <div className="mt-8 flex gap-4">
            <div className="flex items-center gap-3 bg-white rounded-2xl p-3 shadow">
              <img src="Prom001.jpg" alt="students" className="w-16 h-16 rounded-lg object-cover" />
              <div>
                <div className="text-sm font-semibold">Memorias</div>
                <div className="text-xs text-slate-500">Recordemos la promoción 2024 y sus aportes a nuestra comunidad</div>
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

        {/* Imagen principal del hero con elementos decorativos absolutos */}
        <div className="relative">
          <div className="rounded-3xl overflow-hidden shadow-2xl border border-white">
            <img src="/festabdr.jpeg" alt="hero" className="w-full h-96 object-cover" />
          </div>

          <div className="absolute -bottom-6 -left-6 w-40 h-40 rounded-full bg-cyan-400/30 blur-3xl"></div>
          <div className="absolute -top-6 -right-6 w-32 h-32 rounded-full bg-yellow-300/40 blur-3xl"></div>
        </div>
      </div>

      {/* Separador SVG que suaviza la transición visual con la siguiente sección */}
      <div className="w-full overflow-hidden -mt-6">
        <svg viewBox="0 0 1440 120" className="w-full h-20 md:h-28" preserveAspectRatio="none">
          <path d="M0,40 C360,120 1080,0 1440,80 L1440,120 L0,120 Z" fill="#f8fafc"></path>
        </svg>
      </div>
    </section>
  );
}

/**
 * Componente: CardsGrid
 * Propósito:
 *   Mostrar una rejilla de tarjetas con eventos o secciones destacadas.
 *
 */
function CardsGrid() {
  const cards = [
    { title: 'Satmun', desc: 'Conoce nuestro modelo de naciones unidas.', img: 'Satmun.jpg' },
    { title: 'Vida Estudiantil', desc: 'Clubes deportivos, culturales y grupos estudiantiles.', img: 'inter.png' },
    { title: 'Acompañamiento', desc: 'Orientación psicosocial y académica para cada estudiante.', img: 'acompaña.png' }
  ];

  return (
    <section className="max-w-6xl mx-auto px-4 py-12">
      <h2 className="text-2xl font-bold text-slate-800 mb-6">Nuestros últimos eventos</h2>
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
  );
}

/**
 * Componente: FeaturedStories
 * Propósito:
 *   Sección para historias recientes o noticias destacadas en formato compacto.
 *
 */
function FeaturedStories() {
  return (
    <section className="bg-gradient-to-b from-white to-slate-50 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl font-bold text-slate-800 mb-6">Historias recientes</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[1, 2, 3].map((n) => (
            <div key={n} className="bg-white rounded-2xl p-4 shadow flex gap-4 items-center">
              <img src={`perso.png`} alt="story" className="w-24 h-24 rounded-lg object-cover" />
              <div>
                <div className="text-sm font-semibold">Elección de personera 2025 {n}</div>
                <div className="text-xs text-slate-500 mt-1">Las alumnas toman posesión de su cargo como personera y controlará.</div>
                <a href="#" className="text-xs text-cyan-600 mt-2 inline-block">Leer noticia</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/**
 * Componente: Gallery
 * Propósito:
 *   Rejilla de imágenes/galería de recuerdos de eventos.
 *
 */
function Gallery() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-12">
      <h2 className="text-2xl font-bold text-slate-800 mb-6">Galería de Recuerdos</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {Array.from({ length: 8 }).map((_, i) => (
          <div key={i} className="rounded-lg overflow-hidden shadow-sm">
            <img src={`gallry.png`} alt="gal" className="w-full h-40 object-cover" />
          </div>
        ))}
      </div>
    </section>
  );
}

/**
 * Componente: Footer
 * Propósito:
 *   Pie institucional con información de contacto y enlaces a redes sociales.
 *
 */
function Footer() {
  return (
    <footer className="relative bg-blue-800 text-white mt-12">
      {/* Imagen decorativa en esquina inferior derecha */}
      <img
        src="/abeja_2.png"
        alt="abeja decorativa"
        className="absolute bottom-0 right-0 w-44 opacity-90 pointer-events-none select-none"
      />

      <div className="max-w-6xl mx-auto px-4 py-10 grid md:grid-cols-3 gap-6">
        <div>
          <div className="font-bold text-lg">Colegio Presentación</div>
          <p className="text-sm text-slate-300 mt-2">Formando con valores, mirando al futuro.</p>
        </div>

        <div>
          <div className="font-semibold">Contacto</div>
          <div className="text-sm text-slate-300 mt-2">Cúcuta, Colombia · Tel: +57 7 1234567</div>
        </div>

        <div>
          <div className="font-semibold">Síguenos</div>
          <div className="flex gap-3 mt-2">
            <a href="#" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition" aria-label="Facebook">
              <FacebookIcon fontSize="small" />
            </a>
            <a href="#" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition" aria-label="Instagram">
              <InstagramIcon fontSize="small" />
            </a>
            <a href="#" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition" aria-label="YouTube">
              <YouTubeIcon fontSize="small" />
            </a>
          </div>
        </div>
      </div>

      <div className="text-center py-4 text-xs text-slate-400">
        © {new Date().getFullYear()} Todos los derechos reservados Area de Comunicaciones · Colegio Presentación
      </div>
    </footer>
  );
}

/**
 * Componente principal: FrontJuvenil
 * Propósito:
 *   Monta la estructura completa de la página inicial usando los componentes
 *   definidos anteriormente.
 *
 * Estado actual:
 *   - Página funcional en modo estático.
 *   - Archivo diseñado para ser particionado posteriormente en componentes.
 *
 * Nota de integración:
 *   - Al separar componentes, exportar cada función por separado y ajustar imports.
 */
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
  );
}
