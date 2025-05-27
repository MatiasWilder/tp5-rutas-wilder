import { useState, useEffect } from 'react'
import Home from Home
import nuevasReservas from nuevasReservas
import Citas from Citas
import {Routes, Route, link} from 'react-router'
import '/src/index.css'

function App() {
  const [citas, setCitas] = useState([])

  useEffect(() => {
    const citasGuardadas = localStorage.getItem('citas')
    if (citasGuardadas) {
      setCitas(JSON.parse(citasGuardadas))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('citas', JSON.stringify(citas))
  }, [citas])

  return (
    <Routes>
      <Route path="/src/home.jsx" element={ <Home /> } />
      <Route path="/src/misCitas.jsx" element={ <misCitas /> } />
      <Route path="/src/nuevasReservas.jsx" element={ <nuevasReservas /> } />
    </Routes>
  );
}

export default App