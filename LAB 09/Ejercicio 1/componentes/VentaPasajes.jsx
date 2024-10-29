import React, { useState } from 'react';

function VentaPasajes() {
  const [fechaNacimiento, setFechaNacimiento] = useState('');
  const [precio, setPrecio] = useState(1000); // Precio base
  const [monto, setMonto] = useState(null);

  const calcularPrecio = () => {
    const hoy = new Date();
    const nacimiento = new Date(fechaNacimiento);
    const edad = hoy.getFullYear() - nacimiento.getFullYear();
    let precioFinal = 0;

    if (edad >= 18) precioFinal = precio;
    else if (edad >= 2) precioFinal = precio * 0.75;
    else precioFinal = 0;

    setMonto(precioFinal);
  };

  return (
    <div>
      <h2>Venta de Pasajes Aéreos</h2>
      <label>Fecha de Nacimiento:</label>
      <input type="date" value={fechaNacimiento} onChange={(e) => setFechaNacimiento(e.target.value)} />
      <button onClick={calcularPrecio}>Calcular Precio</button>
      {monto !== null && <p>Precio del Pasaje: ${monto}</p>}
    </div>
  );
}

export default VentaPasajes;
