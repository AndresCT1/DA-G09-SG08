import { useContext } from 'react';
import { ContextoTienda } from '../ContextoTienda';

const Inicio = () => {
  const { zapatilla } = useContext(ContextoTienda);

  return (
    <div>
      <h1>Bienvenido a la Tienda de Zapatillas</h1>
      <p>Hoy te recomendamos: {zapatilla.nombre} por {zapatilla.precio}</p>
    </div>
  );
};

export default Inicio;
