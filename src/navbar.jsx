import { Link } from 'react-router'

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/">Home</Link>
      <Link to="/citas">Mis Citas</Link>
      <Link to="/reservas">Nuevas Reservas</Link>
    </nav>
  )
}

export default Navbar
