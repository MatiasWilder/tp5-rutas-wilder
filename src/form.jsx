function Formulario({ citas, setCitas }) {
    const añadirCita = () => {
      const nuevaCita = {
        NombreMascota: document.querySelector("#NombreMascota").value,
        NombreDueño: document.querySelector("#NombreDueño").value,
        Fecha: document.querySelector("#Fecha").value,
        Hora: document.querySelector("#Hora").value,
        Sintomas: document.querySelector("#Sintomas").value
      }
  
      for (let campo in nuevaCita) {
        if (!nuevaCita[campo]) {
          alert("Faltan completar campos")
          return
        }
      }
  
      setCitas([...citas, nuevaCita])
  
      document.querySelector("#NombreMascota").value = ''
      document.querySelector("#NombreDueño").value = ''
      document.querySelector("#Fecha").value = ''
      document.querySelector("#Hora").value = ''
      document.querySelector("#Sintomas").value = ''
    }
  
    return (
      <div className="form">
        <h2>Crear mi cita</h2>
        <label>Nombre Mascota:</label>
        <input id="NombreMascota" type="text" placeholder="Nombre Mascota" />
        <label>Nombre Dueño:</label>
        <input id="NombreDueño" type="text" placeholder="Nombre del dueño" />
        <label>Fecha:</label>
        <input id="Fecha" type="date" />
        <label>Hora:</label>
        <input id="Hora" type="time" />
        <label>Síntomas:</label>
        <textarea id="Sintomas" placeholder="Qué síntomas tiene?"></textarea>
        <input type="submit" value="AGREGAR CITA" onClick={añadirCita} />
      </div>
    )
  }
  
  export default Formulario
  