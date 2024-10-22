import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ProveedorArequipa } from './ContextoArequipa';
import Layout from './pages/Layout';
import Inicio from './pages/Inicio';
import PlatosTipicos from './pages/PlatosTipicos';
import LugaresTuristicos from './pages/LugaresTuristicos';
import Tradiciones from './pages/Tradiciones';
import './estilos/estilos.css';

export default function App() {
  return (
    <ProveedorArequipa>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Inicio />} />
            <Route path="platos-tipicos" element={<PlatosTipicos />} />
            <Route path="lugares-turisticos" element={<LugaresTuristicos />} />
            <Route path="tradiciones" element={<Tradiciones />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ProveedorArequipa>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
