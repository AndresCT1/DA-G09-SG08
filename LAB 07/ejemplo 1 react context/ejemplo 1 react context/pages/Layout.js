import { Outlet, Link } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li><Link to="/">Inicio</Link></li>
          <li><Link to="/detalles">Detalles de Zapatilla</Link></li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
};

export default Layout;
