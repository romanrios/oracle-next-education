import React, { useState } from "react";
import './FormularioRegistro.css'

const FormularioRegistro = () => {

  const [nombre, setNombre] = useState("");
  const [correoElectronico, setCorreoElectronico] = useState("");
  const [clave, setClave] = useState("");

  const [errores, setErrores] = useState({}); // Estado para manejar los errores

  // Función para manejar la validación de los campos
  const validar = () => {
    const nuevosErrores = {};
    if (!nombre) nuevosErrores.nombre = "El nombre es obligatorio.";
    if (!correoElectronico) nuevosErrores.correoElectronico = "El correo electrónico es obligatorio.";
    // else if (!/\\\\\\\\S+@\\\\\\\\S+\\\\\\\\.\\\\\\\\S+/.test(correoElectronico)) nuevosErrores.correoElectronico = "El correo electrónico no es válido.";
    else if (!/\S+@\S+\.\S+/.test(correoElectronico)) nuevosErrores.correoElectronico = "El correo electrónico no es válido.";
    if (!clave) nuevosErrores.clave = "La clave es obligatoria.";
    else if (clave.length < 6) nuevosErrores.clave = "La clave debe tener al menos 6 caracteres.";
    return nuevosErrores;
  };

  // Función para manejar el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    setErrores({}); // Limpiar los mensajes de errores
    const erroresValidacion = validar();
    if (Object.keys(erroresValidacion).length > 0) {
      setErrores(erroresValidacion);
    } else {
      console.log("Formulario enviado:", { nombre, correoElectronico, clave });
      alert("Registro exitoso. "+"Formulario enviado:"+ JSON.stringify({ nombre, correoElectronico, clave }));
    }
  };

  return (
    <form onSubmit={handleSubmit} className="formulario-registro">
      <div className="grupo-formulario">
        <label>Nombre</label>
        <input
          type="text"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
        {errores.nombre && <span className="error">{errores.nombre}</span>}
      </div>
      <div className="grupo-formulario">
        <label>Correo Electrónico</label>
        <input
          type="email"
          value={correoElectronico}
          onChange={(e) => setCorreoElectronico(e.target.value)}
        />
        {errores.correoElectronico && <span className="error">{errores.correoElectronico}</span>}
      </div>
      <div className="grupo-formulario">
        <label>clave</label>
        <input
          type="password"
          value={clave}
          onChange={(e) => setClave(e.target.value)}
        />
        {errores.clave && <span className="error">{errores.clave}</span>}
      </div>
      <button type="submit">Registrar</button>
    </form>
  );
};

export default FormularioRegistro;