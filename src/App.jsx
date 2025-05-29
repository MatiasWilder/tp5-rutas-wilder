import { BrowserRouter as Router, Routes, Route } from 'react-router'
import Navbar from './navbar'
import Home from './pages/home'
import MisCitas from './pages/misCitas'
import NuevasReservas from './pages/nuevasReservas'
import './index.css'

function App() {
  return (
    <BrowserRouter>
    <Router>
      <div className="container">
        <h1>Administrador de pacientes</h1>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/citas" element={<MisCitas />} />
          <Route path="/reservas" element={<NuevasReservas />} />
        </Routes>
      </div>
    </Router>
    </BrowserRouter>
  )
}

export default App
