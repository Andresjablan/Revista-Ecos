import React from "react";

function NoticiasRecientes() {
  return (
    <section className="pt-20">
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
                <div className="text-xs text-slate-500">
                  Recordemos la promoción 2024 y sus aportes a nuestra comunidad
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3 bg-white rounded-2xl p-3 shadow">
              <img src="grupda.jpeg" alt="awards" className="w-16 h-16 rounded-lg object-cover" />
              <div>
                <div className="text-sm font-semibold">Estudiantes destacados</div>
                <div className="text-xs text-slate-500">
                  Grupo de danza luego de su exitosa presentación
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Imagen */}
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
  );
}

export default NoticiasRecientes;
