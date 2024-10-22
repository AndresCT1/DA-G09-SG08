import { Outlet, Link } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li><Link to="/">Inicio</Link></li>
          <li><Link to="/platos-tipicos">Platos Típicos</Link></li>
          <li><Link to="/lugares-turisticos">Lugares Turísticos</Link></li>
          <li><Link to="/tradiciones">Tradiciones</Link></li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
};

export default Layout;
