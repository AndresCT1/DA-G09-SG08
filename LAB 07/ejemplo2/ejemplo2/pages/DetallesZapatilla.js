import { useParams } from "react-router-dom";

const datosZapatillas = {
  1: { nombre: "Zapatilla Air Max", precio: "S/.120", descripcion: "Zapatilla cómoda y ligera." },
  2: { nombre: "Zapatilla Yeezy Boost", precio: "S/.250", descripcion: "Estilo único y gran confort." },
  3: { nombre: "Zapatilla Puma RS-X", precio: "S/.100", descripcion: "Gran amortiguación y diseño moderno." }
};

export const DetallesZapatilla = () => {
  const { zapatillaId } = useParams();
  const zapatilla = datosZapatillas[zapatillaId];

  return (
    <div>
      <h1>Detalles de la {zapatilla?.nombre}</h1>
      <p>Precio: {zapatilla?.precio}</p>
      <p>Descripción: {zapatilla?.descripcion}</p>
    </div>
  );
}
