import React from 'react';
import ListaDeEspecialidades from './ListaDeEspecialidades';

function Especialidades({ archivos }) {
  return (
    <div className="especialidades">
      <h2>Lista de Especialidades</h2>
      <ListaDeEspecialidades archivos={archivos} />
    </div>
  );
}

export default Especialidades;
