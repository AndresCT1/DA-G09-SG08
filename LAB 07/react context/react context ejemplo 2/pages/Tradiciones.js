import { useContext } from 'react';
import { ContextoArequipa } from '../ContextoArequipa';

const Tradiciones = () => {
  const { informacionTuristica } = useContext(ContextoArequipa);

  return (
    <div>
      <h1>Tradiciones de Arequipa</h1>
      <div className="contenedor-tradiciones">
        {informacionTuristica.tradiciones.map((tradicion, index) => (
          <div key={index} className="tradicion">
            <img src={tradicion.imagen} alt={tradicion.nombre} />
            <h2>{tradicion.nombre}</h2>
            <p>{tradicion.descripcion}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tradiciones;

