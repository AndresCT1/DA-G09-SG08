import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Disposicion from "./pages/Disposicion";
import Inicio from "./pages/Inicio";
import Blogs from "./pages/Blogs";
import Contacto from "./pages/Contacto";
import PaginaNoEncontrada from "./pages/NoPage";
import { Productos } from './pages/Productos';
import { ProductosDestacados } from './pages/ProductosDestacados';
import { NuevosProductos } from './pages/NuevosProductos';
import './estilos/disposicion.css';
import './estilos/productos.css';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Disposicion />}>
          <Route index element={<Inicio />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contacto" element={<Contacto />} />
          <Route path="productos" element={<Productos />}>
            <Route path="destacados" element={<ProductosDestacados />} />
            <Route path="nuevos" element={<NuevosProductos />} />
          </Route>
          <Route path="*" element={<PaginaNoEncontrada />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

