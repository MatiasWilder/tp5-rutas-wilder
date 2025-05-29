import Listado from '../listado'
import { useState, useEffect } from 'react'

function MisCitas() {
  const [citas, setCitas] = useState(() => {
    const guardadas = localStorage.getItem('citas')
    return guardadas ? JSON.parse(guardadas) : []
  })

  return (
    <div>
      <h2>Estas son tus citas</h2>
      <Listado citas={citas} setCitas={setCitas} />
    </div>
  )
}

export default MisCitas
