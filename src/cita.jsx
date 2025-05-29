function Cita({ cita, indice, eliminarCita }) {
  return (
    <div className="cita">
      <span>Mascota:</span>
      <p>{cita.NombreMascota}</p>
      <span>Dueño:</span>
      <p>{cita.NombreDueño}</p>
      <span>Fecha:</span>
      <p>{cita.Fecha}</p>
      <span>Hora:</span>
      <p>{cita.Hora}</p>
      <span>Síntomas:</span>
      <p>{cita.Sintomas}</p>
      <button onClick={() => eliminarCita(indice)}>ELIMINAR ✖</button>
    </div>
  )
}

export default Cita

  