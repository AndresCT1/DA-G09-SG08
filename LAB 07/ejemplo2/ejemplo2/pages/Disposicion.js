import { Outlet, Link } from "react-router-dom";
import '../estilos/disposicion.css';

const Disposicion = () => {
  return (
    <>
      <nav className="barra-navegacion">
        <ul>
          <li><Link to="/">Inicio</Link></li>
          <li><Link to="/blogs">Blogs</Link></li>
          <li><Link to="/contacto">Contacto</Link></li>
          <li><Link to="/zapatillas">Zapatillas</Link></li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
};

export default Disposicion;
