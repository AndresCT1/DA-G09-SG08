import { createContext, useState } from 'react';

export const ContextoTienda = createContext();

export const ProveedorTienda = ({ children }) => {

  const [zapatilla, setZapatilla] = useState({
    nombre: "Nike Air Max",
    precio: "S/.120",
    descripcion: "Zapatilla cómoda y ligera."
  });

  return (
    <ContextoTienda.Provider value={{ zapatilla, setZapatilla }}>
      {children}
    </ContextoTienda.Provider>
  );
};
