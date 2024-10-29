import React, { useState } from 'react';
import ConfirmacionRegistro from './ConfirmacionRegistro';

function FormularioInscripcion() {
  const [formData, setFormData] = useState({
    nombre: '',
    direccion: '',
    email: '',
    contrasena: '',
    confirmarContrasena: '',
    fechaNacimiento: '',
    sexo: '',
    temasInteres: [],
    aficiones: '',
  });
  const [confirmado, setConfirmado] = useState(false);
  
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      setFormData((prevData) => ({
        ...prevData,
        temasInteres: checked
          ? [...prevData.temasInteres, value]
          : prevData.temasInteres.filter((tema) => tema !== value),
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setConfirmado(true);
  };

  return (
    confirmado ? (
      <ConfirmacionRegistro formData={formData} />
    ) : (
      <form onSubmit={handleSubmit} style={{ maxWidth: '400px', margin: 'auto', padding: '20px', border: '1px solid #ccc' }}>
        <label>Nombre completo:</label>
        <input type="text" name="nombre" value={formData.nombre} onChange={handleChange} required />
        <br></br>
        <label>Dirección:</label>
        <input name="direccion" value={formData.direccion} onChange={handleChange} required />
        <br></br>
        <label>Correo electrónico:</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        <br></br>
        <label>Contraseña:</label>
        <input type="password" name="contrasena" value={formData.contrasena} onChange={handleChange} required />
        <br></br>
        <label>Confirmar contraseña:</label>
        <input type="password" name="confirmarContrasena" value={formData.confirmarContrasena} onChange={handleChange} required />
        <br></br>
        <label>Fecha de nacimiento:</label>
        <input type="date" name="fechaNacimiento" value={formData.fechaNacimiento} onChange={handleChange} required />
        <br></br>
        <label>Sexo:</label>
        <div>
          <label><input type="radio" name="sexo" value="Hombre" checked={formData.sexo === 'Hombre'} onChange={handleChange} /> Hombre</label>
          <label><input type="radio" name="sexo" value="Mujer" checked={formData.sexo === 'Mujer'} onChange={handleChange} /> Mujer</label>
        </div>

        <label>Temas de interés:</label>
        <div>
          {['Ficción', 'Acción', 'Suspense', 'Terror', 'Comedia'].map((tema) => (
            <label key={tema}>
              <input type="checkbox" name="temasInteres" value={tema} checked={formData.temasInteres.includes(tema)} onChange={handleChange} /> {tema}
            </label>
          ))}
        </div>

        <label>Aficiones:</label>
        <select name="aficiones" value={formData.aficiones} onChange={handleChange}>
          <option value="">Selecciona...</option>
          <option value="Deporte-aire-libre">Deporte al aire libre</option>
          <option value="Musica-Pop">Música Pop</option>
          <option value="Fotografia">Fotografía</option>
        </select>

        <button type="submit">Registrarse</button>
      </form>
    )
  );
}

export default FormularioInscripcion;
