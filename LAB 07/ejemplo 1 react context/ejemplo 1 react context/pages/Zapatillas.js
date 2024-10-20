import { Outlet, Link } from "react-router-dom";

export const Zapatillas = () => {
  return (
    <div>
      <h1>Zapatillas Disponibles</h1>
      <ul>
        <li><Link to="1">Zapatilla 1</Link></li>
        <li><Link to="2">Zapatilla 2</Link></li>
        <li><Link to="3">Zapatilla 3</Link></li>
      </ul>
      <Outlet />
    </div>
  );
}
