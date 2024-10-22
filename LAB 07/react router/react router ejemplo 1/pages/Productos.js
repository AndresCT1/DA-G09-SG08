import { Link, Outlet } from "react-router-dom";
import '../estilos/productos.css';

export const Productos = () => {
  return (
    <>
      <div className="barra-busqueda">
        <input type='search' placeholder='Buscar zapatillas...' />
      </div>
      <div className="enlaces-productos">
        <Link to='destacados'>Zapatillas Destacadas</Link>
        <Link to='nuevos'>Zapatillas Nuevas</Link>
      </div>
      <Outlet />
    </>
  );
}
