import React, { useState } from 'react';

function CargarArchivo({ onUpload }) {
  const [archivo, setArchivo] = useState(null);
  const [especialidad, setEspecialidad] = useState('Estadística');

  const handleFileChange = (e) => {
    setArchivo(e.target.files[0]);
  };

  const handleUpload = () => {
    if (archivo) {
      onUpload(especialidad, archivo);
      setArchivo(null);
    }
  };

  return (
    <div>
      <h2>Cargar Archivo</h2>
      <select value={especialidad} onChange={(e) => setEspecialidad(e.target.value)}>
        <option value="Estadística">Estadística</option>
        <option value="DesarrolloWeb">Desarrollo Web</option>
        <option value="Testing">Testing</option>
      </select>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Subir Archivo</button>
    </div>
  );
}

export default CargarArchivo;
