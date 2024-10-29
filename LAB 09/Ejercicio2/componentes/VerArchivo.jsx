import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function VerArchivo() {
  const { especialidad, archivo } = useParams();
  const [contenido, setContenido] = useState('');

  useEffect(() => {
    setContenido(`Contenido simulado para el archivo ${archivo} de la especialidad ${especialidad}`);
  }, [especialidad, archivo]);

  return (
    <div className="archivo-contenido">
      <h2>Archivo: {archivo}</h2>
      <p>{contenido}</p>
    </div>
  );
}

export default VerArchivo;
