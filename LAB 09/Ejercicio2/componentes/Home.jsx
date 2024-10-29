import React from 'react';
import CargarArchivo from './CargarArchivo';
import { Link } from 'react-router-dom';

function Home({ onUpload }) {
  return (
    <div className="home">
      <CargarArchivo onUpload={onUpload} />
      <Link to="/especialidades" className="link-button">
        Ver Especialidades
      </Link>
    </div>
  );
}

export default Home;
