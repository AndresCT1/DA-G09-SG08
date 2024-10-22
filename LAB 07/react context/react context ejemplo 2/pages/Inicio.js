import { Link } from 'react-router-dom';

const Inicio = () => {
  return (
    <div>
      <h1>Bienvenido a Arequipa</h1>
      <p>Conocida como la "Ciudad Blanca", Arequipa te invita a explorar su rica cultura, platos exquisitos, y sus majestuosos paisajes. Acompáñanos a descubrir lo mejor de Arequipa.</p>
      <ul>
        <li><Link to="/platos-tipicos">Platos Típicos</Link></li>
        <li><Link to="/lugares-turisticos">Lugares Turísticos</Link></li>
        <li><Link to="/tradiciones">Tradiciones</Link></li>
      </ul>
    </div>
  );
};

export default Inicio;
