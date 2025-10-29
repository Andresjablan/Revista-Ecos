import React from "react";

function Editorial() {
  return (
    <section className="pt-20 font-montserrat px-4 max-w-6xl mx-auto">
      <h1 className="text-4xl md:text-5xl font-extrabold mb-8 text-slate-900">Editorial</h1>

      {/* Imagen flotante */}
      <div className="float-right ml-6 mb-4 text-center">
        <img
          src="/EditorialHna.jpg"
          alt="Rectora"
          className="w-80 h-auto rounded-xl shadow-lg object-cover"
        />
        <p className="mt-2 text-sm font-semibold text-slate-700 leading-tight">
          Hna. Omaira del C. Sánchez Ardila<br/>Rectora
        </p>
      </div>

      <p className="font-semibold text-justify text-slate-700">
        “Quienes se empeñan en la defensa de la dignidad de las personas, pueden encontrar en la fe cristiana los argumentos más profundos para ese compromiso” N° 5 LS’
      </p>

      <p className="mt-4 text-justify text-slate-700">
        ¡Qué bien… que bueno… que agradable…! es poder llegar a usted querido lector de nuestra Revista Institucional, con una nueva edición para este año escolar 2024, en el que muy seguramente ya estas enterado del propósito que nos mantiene atentos para facilitarnos la vida en un trabajo conjunto desde el aporte a la construcción de la vida, “propiciando ambientes sanos y saludables que nos y te transformen… haciendo la diferencia”.
      </p>

      <p className="mt-4 text-justify text-slate-700">
       Nuestra revista digital (sitio Web), en su edición N°5 “ECOS PRESENTACIÓN”, llega en este nuevo año escolar, con la fuerza y la novedad que nos impulsa a continuar escribiendo la parte de la historia que nos corresponde, como integrante de este proyecto al ser uno de los personajes que la hacen posible.
      </p>

      <p className="mt-4 text-justify text-slate-700">
        Importante mantener nuestra vida inmersa en el mágico mundo de la escritura y la lectura, como soporte que ayuda de manera inimaginable, a ampliar el horizonte de la mente, la profundidad del corazón, y navegar en el infinito universo de las letras que traspasan fronteras… recuerda lo que se escribe existe… lo que lees recrea y ella es evidencia de mantener vigente la memoria en el tiempo, con el tiempo y a través del tiempo.
      </p>

      <p className="mt-4 text-justify text-slate-700">
        Importante mantener nuestra vida inmersa en el mágico mundo de la escritura y la lectura, como soporte que ayuda de manera inimaginable, a ampliar el horizonte de la mente, la profundidad del corazón, y navegar en el infinito universo de las letras que traspasan fronteras… recuerda lo que se escribe existe… lo que lees recrea y ella es evidencia de mantener vigente la memoria en el tiempo, con el tiempo y a través del tiempo. Cordialmente, te invitamos a valorar y disfrutar con gusto e interés de nuestra Revista “ECOS PRESENTACIÓN”, al tiempo que deseamos, puedas propiciar momentos para pensar, reflexionar y apoyar con críticas constructivas que aporten al proceso de cambio que durante estos últimos tiempos nos apremia…
             </p>

      <p className="mt-4 mb-8 text-justify text-slate-700">
        ¡Bendiciones… ¡Con Nuestra Señora de La Presentación Cordial abrazo!
      </p>

      {/* Limpia el float para que no afecte lo siguiente */}
      <div className="clear-both"></div>
    </section>
  );
}

export default Editorial;

