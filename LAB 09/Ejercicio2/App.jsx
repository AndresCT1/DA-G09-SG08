import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './componentes/Home';
import Especialidades from './componentes/Especialidades';
import VerArchivo from './componentes/VerArchivo';
import './App.css';

function App() {
  const [archivos, setArchivos] = useState({
    Estadística: [],
    DesarrolloWeb: [],
    Testing: [],
  });

  const agregarArchivo = (especialidad, archivo) => {
    setArchivos((prevArchivos) => ({
      ...prevArchivos,
      [especialidad]: [...prevArchivos[especialidad], archivo],
    }));
  };

  return (
    <Router>
      <div className="App">
        <h1 className="title">Gestión de Archivos por Especialidad</h1>
        <Routes>
          <Route path="/" element={<Home onUpload={agregarArchivo} />} />
          <Route path="/especialidades" element={<Especialidades archivos={archivos} />} />
          <Route path="/especialidades/:especialidad/:archivo" element={<VerArchivo />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
