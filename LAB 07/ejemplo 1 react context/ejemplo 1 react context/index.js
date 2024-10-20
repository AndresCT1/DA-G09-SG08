import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ProveedorTienda } from './ContextoTienda';
import Layout from './pages/Layout';
import Inicio from './pages/Inicio';
import ZapatillaDetalles from './pages/ZapatillaDetalles';

export default function App() {
  return (
    <ProveedorTienda>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Inicio />} />
            <Route path="detalles" element={<ZapatillaDetalles />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ProveedorTienda>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
