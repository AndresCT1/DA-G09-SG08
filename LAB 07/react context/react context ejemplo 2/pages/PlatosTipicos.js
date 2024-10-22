import { useContext } from 'react';
import { ContextoArequipa } from '../ContextoArequipa'; 

const PlatosTipicos = () => {
  const { informacionTuristica } = useContext(ContextoArequipa);

  return (
    <div>
      <h1>Platos Típicos de Arequipa</h1>
      <div className="contenedor-platos">
        {informacionTuristica.platosTipicos.map((plato, index) => (
          <div key={index} className="plato">
            <img src={plato.imagen} alt={plato.nombre} />
            <h2>{plato.nombre}</h2>
            <p>{plato.descripcion}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlatosTipicos;
