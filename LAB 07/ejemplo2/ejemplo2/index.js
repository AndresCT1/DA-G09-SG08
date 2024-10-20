import React from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Disposicion from "./pages/Disposicion";
import Inicio from "./pages/Inicio";
import Blogs from "./pages/Blogs";
import Contacto from "./pages/Contacto";
import PaginaNoEncontrada from "./pages/NoPage";
import { Zapatillas } from './pages/Zapatillas';
import { ZapatillasDestacadas } from './pages/ZapatillasDestacadas';
import { NuevasZapatillas } from './pages/NuevasZapatillas';
import { DetallesZapatilla } from './pages/DetallesZapatilla';
import { Admin } from './pages/Admin';
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
          <Route path="zapatillas" element={<Zapatillas />}>
            <Route path="destacadas" element={<ZapatillasDestacadas />} />
            <Route path="nuevas" element={<NuevasZapatillas />} />
            <Route path=":zapatillaId" element={<DetallesZapatilla />} />
          </Route>
          <Route path="admin" element={<Admin />} />
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
