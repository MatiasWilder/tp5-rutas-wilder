import Formulario from '../form'
import { useState, useEffect } from 'react'

function NuevasReservas() {
  const [citas, setCitas] = useState(() => {
    const guardadas = localStorage.getItem('citas')
    return guardadas ? JSON.parse(guardadas) : []
  })

  useEffect(() => {
    localStorage.setItem('citas', JSON.stringify(citas))
  }, [citas])

  return (
    <div>
      <h2>Cargar nueva reserva</h2>
      <Formulario citas={citas} setCitas={setCitas} />
    </div>
  )
}

export default NuevasReservas
