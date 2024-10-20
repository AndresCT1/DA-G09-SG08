import { useContext } from 'react';
import { ContextoTienda } from '../ContextoTienda';

const ZapatillaDetalles = () => {
  const { zapatilla } = useContext(ContextoTienda);

  return (
    <div>
      <h1>Detalles de la Zapatilla</h1>
      <p>Nombre: {zapatilla.nombre}</p>
      <p>Precio: {zapatilla.precio}</p>
      <p>Descripción: {zapatilla.descripcion}</p>
    </div>
  );
};

export default ZapatillaDetalles;
