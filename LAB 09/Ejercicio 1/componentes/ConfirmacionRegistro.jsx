import React from 'react';

const ConfirmacionRegistro = ({ formData }) => (
  <div style={{ maxWidth: '400px', margin: 'auto', padding: '20px', border: '1px solid #ccc' }}>
    <h2>Confirmación del registro de usuario</h2>
    <table style={{ width: '100%', borderCollapse: 'collapse' }}>
      <tbody>
        <tr>
          <td><strong>Nombre completo</strong></td>
          <td>{formData.nombre}</td>
        </tr>
        <tr>
          <td><strong>Dirección</strong></td>
          <td>{formData.direccion}</td>
        </tr>
        <tr>
          <td><strong>Correo electrónico</strong></td>
          <td>{formData.email}</td>
        </tr>
        <tr>
          <td><strong>Contraseña</strong></td>
          <td>{formData.contrasena}</td>
        </tr>
        <tr>
          <td><strong>Fecha de nacimiento</strong></td>
          <td>{formData.fechaNacimiento}</td>
        </tr>
        <tr>
          <td><strong>Sexo</strong></td>
          <td>{formData.sexo}</td>
        </tr>
        <tr>
          <td><strong>Temas de interés</strong></td>
          <td>{formData.temasInteres.join(', ')}</td>
        </tr>
        <tr>
          <td><strong>Aficiones</strong></td>
          <td>{formData.aficiones}</td>
        </tr>
      </tbody>
    </table>
    <button onClick={() => alert('Datos confirmados')}>Confirmar datos</button>
  </div>
);

export default ConfirmacionRegistro;
