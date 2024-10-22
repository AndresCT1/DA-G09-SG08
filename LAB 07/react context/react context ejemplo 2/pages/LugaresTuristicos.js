import { useContext } from 'react';
import { ContextoArequipa } from '../ContextoArequipa';

const LugaresTuristicos = () => {
  const { informacionTuristica } = useContext(ContextoArequipa);

  return (
    <div>
      <h1>Lugares Turísticos de Arequipa</h1>
      <div className="contenedor-lugares">
        {informacionTuristica.lugaresTuristicos.map((lugar, index) => (
          <div key={index} className="lugar">
            <img src={lugar.imagen} alt={lugar.nombre} />
            <h2>{lugar.nombre}</h2>
            <p>{lugar.descripcion}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LugaresTuristicos;
