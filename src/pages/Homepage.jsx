import React from "react";
import Layout from "../layouts/Layout";
import Editorial from "../components/Editorial";
import NoticiasRecientes from "../components/Actulidad";
import ImageSlider from "../components/ImageSlider"; 
import MenuArticulo from "../components/MenuArticulo";
import MenuArticuloE from "../components/MenuArticuloE";


function Homepage() {
  return (
    <Layout>
      {/* Carrusel de imágenes */}
      <div className="pt-20">
        <ImageSlider />
      </div>

      {/* Sección de noticias */}
      <NoticiasRecientes />

      {/* Sección editorial */}
      <Editorial />
      <MenuArticulo />
      <MenuArticuloE />

    </Layout>
  );
}

export default Homepage;


