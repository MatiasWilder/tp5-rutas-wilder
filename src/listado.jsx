import Cita from './cita'

function Listado({ citas, setCitas }) {
  const eliminarCita = (index) => {
    let copia = [...citas]
    copia.splice(index, 1)
    setCitas(copia)
  }


  return (
    <div className="Listado">
      <h2>Administra tus citas</h2>
      {citas.length === 0 ? (
        <p>No hay citas por ahora</p>
      ) : (
        citas.map((cita, i) => (
          <Cita key={i} cita={cita} indice={i} eliminarCita={eliminarCita} />
        ))
      )}
    </div>
  )
}

export default Listado
