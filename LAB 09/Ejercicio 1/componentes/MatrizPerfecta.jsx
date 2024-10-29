import React, { useState } from 'react';

function MatrizPerfecta() {
  const [matriz, setMatriz] = useState([]);
  const [esPerfecta, setEsPerfecta] = useState(false);

  const generarMatriz = () => {
    const tamaño = 2;
    const nuevaMatriz = Array.from({ length: tamaño }, () =>
      Array.from({ length: tamaño }, () => Math.floor(Math.random() * 10))
    );
    setMatriz(nuevaMatriz);
    verificarMatriz(nuevaMatriz);
  };

  const verificarMatriz = (matriz) => {
    const sumaFila = matriz[0].reduce((a, b) => a + b, 0);
    const esPerfecta = matriz.every(fila => fila.reduce((a, b) => a + b, 0) === sumaFila) &&
                       matriz[0].map((_, i) => matriz.reduce((sum, fila) => sum + fila[i], 0)).every(suma => suma === sumaFila);
    setEsPerfecta(esPerfecta);
  };

  return (
    <div>
      <h2>Matriz Perfecta</h2>
      <button onClick={generarMatriz}>Generar Matriz</button>
      <table style={{ marginTop: '10px', borderCollapse: 'collapse' }}>
        <tbody>
          {matriz.map((fila, i) => (
            <tr key={i}>
              {fila.map((valor, j) => (
                <td key={j} style={{ border: '1px solid #ccc', padding: '5px' }}>{valor}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      {matriz.length > 0 && (
        <p>{esPerfecta ? 'La matriz es perfecta' : 'La matriz no es perfecta'}</p>
      )}
    </div>
  );
}

export default MatrizPerfecta;
