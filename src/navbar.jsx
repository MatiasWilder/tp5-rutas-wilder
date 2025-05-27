import { Outlet, Link } from "react-router-dom";

    const navbar = () => {
      return (
        <>
          <nav>
            <ul>
              <li>
                <Link to="/src/home.jsx">Home</Link>
              </li>
              <li>
                <Link to="/src/misCitas.jsx">Blogs</Link>
              </li>
              <li>
                <Link to="/src/nuevasReservas.jsx">Contact</Link>
              </li>
            </ul>
          </nav>
    
          <Outlet />
        </>
      )
    }
    export default navbar;

