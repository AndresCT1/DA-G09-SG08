import React from 'react';
import { Link } from 'react-router-dom';

function ListaDeEspecialidades({ archivos }) {
  return (
    <div className="especialidades-list">
      {Object.keys(archivos).map((especialidad) => (
        <div key={especialidad} className="especialidad-item">
          <h3>{especialidad}</h3>
          <ul>
            {archivos[especialidad].map((archivo, index) => (
              <li key={index}>
                <Link to={`/especialidades/${especialidad}/${archivo.name}`}>
                  {archivo.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default ListaDeEspecialidades;

