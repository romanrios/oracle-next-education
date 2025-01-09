import "../css/NewVideo.css";
import Button from "../components/Button";
import TextInput from "./TextInput";
import SelectInput from "./SelectInput";

const options = [
  { value: "frontend", label: "Front End" },
  { value: "backend", label: "Back End" },
  { value: "innovacion", label: "Innovación y Gestión" },
];

const NewVideo = () => {
  return (
    <section className="NewVideo">
      <h2>NUEVO VIDEO</h2>
      <p>COMPLETE EL FORMULARIO PARA CREAR UNA NUEVA TARJETA DE VIDEO</p>
      <h3>Crear Tarjeta</h3>
      <TextInput name="Título" placeholder="ingrese el título" />
      <SelectInput
        name="Categoría"
        placeholder="seleccione una categoría"
        options={options}
      />
      <TextInput name="Imagen" placeholder="ingrese el enlace de la imagen" />
      <TextInput name="Video" placeholder="ingrese el enlace del video" />
      <TextInput
        name="Descripción"
        type="textarea"
        placeholder="¿de qué se trata este video?"
      />

      <div className="NewVideo_buttonscontainer">
        <Button>GUARDAR</Button>
        <Button>LIMPIAR</Button>
      </div>
    </section>
  );
};

export default NewVideo;
