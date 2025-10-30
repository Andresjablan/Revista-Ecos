import React, { useEffect } from "react"; 
import { Routes, Route } from "react-router-dom";

// Pages
import Homepage from "./pages/Homepage";
import CienciaLiteratura from "./pages/CienciaLiteratura";
import CulturaTecnologia from "./pages/CulturaTecnologia";
import Entretenimiento from "./pages/Entretenimiento";
import Infantil from "./pages/Infantil";
import Satmun from "./pages/Satmun";
import Zapping from "./pages/Zapping";


// Components
import ArticuloCronica from "./components/Articulo";
import ArticuloDiaTierra from "./components/Articulo2";
import Layout from "./layouts/Layout";
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // duración de la animación en ms
      once: true, // animación solo una vez
    });
  }, []);
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/ciencia-literatura" element={<CienciaLiteratura />} />
      <Route path="/cultura-tecnologia" element={<CulturaTecnologia />} />
      <Route path="/entretenimiento" element={<Entretenimiento />} />
      <Route path="/infantil" element={<Infantil />} />
      <Route path="/satmun" element={<Satmun />} />
      <Route path="/zapping" element={<Zapping />} />
      

      {/* 🔹 Rutas individuales para artículos */}
      <Route
        path="/ciencia-literatura/cronica"
        element={
          <Layout>
            <ArticuloCronica />
          </Layout>
        }
      />
      <Route
        path="/ciencia-literatura/dia-tierra"
        element={
          <Layout>
            <ArticuloDiaTierra />
          </Layout>
        }
      />
    </Routes>
  );
}
