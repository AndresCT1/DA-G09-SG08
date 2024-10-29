import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import FormularioInscripcion from './componentes/FormularioInscripcion';
import ConfirmacionRegistro from './componentes/ConfirmacionRegistro';
import VentaPasajes from './componentes/VentaPasajes';
import MatrizPerfecta from './componentes/MatrizPerfecta';

function App() {
  return (
    <Router>
      <div style={{ padding: '20px' }}>
        <h1>Aplicación de Venta y Registro de Usuarios</h1>
        <nav>
          <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
            <li><Link to="/">Formulario de Inscripción</Link></li>
            <li><Link to="/confirmacion-registro">Confirmación de Registro</Link></li>
            <li><Link to="/venta-pasajes">Venta de Pasajes Aéreos</Link></li>
            <li><Link to="/matriz-perfecta">Matriz Perfecta</Link></li>
          </ul>
        </nav>
        
        <Routes>
          <Route path="/" element={<FormularioInscripcion />} />
          <Route path="/confirmacion-registro" element={<ConfirmacionRegistro />} />
          <Route path="/venta-pasajes" element={<VentaPasajes />} />
          <Route path="/matriz-perfecta" element={<MatrizPerfecta />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
