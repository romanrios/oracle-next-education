import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { addData } from "../services/services";
import { useContext } from "react";
import DataContext from "../context/context"; // Importar el contexto
import "../css/NewVideo.css";
import {
  showSuccessAlert,
  showErrorAlert,
  showConfirmationAlertPreview,
} from "../utils/alerts";
import { useNavigate } from "react-router-dom";

const options = ["Front End", "Back End", "Innovación y Gestión"];

// Validación con Yup
const validationSchema = Yup.object().shape({
  titulo: Yup.string()
    .required("El título es obligatorio.")
    .max(100, "El título no puede tener más de 100 caracteres."),
  categoria: Yup.string()
    .required("Debe seleccionar una categoría.")
    .oneOf(options, "Categoría inválida."),
  imagen: Yup.string()
    .required("El enlace de la imagen es obligatorio.")
    .url("Debe ser un enlace válido.")
    .max(1000, "Exceso de caracteres"),
  video: Yup.string()
    .required("El enlace del video es obligatorio.")
    .url("Debe ser un enlace válido.")
    .max(1000, "Exceso de caracteres"),
  descripcion: Yup.string()
    .required("La descripción es obligatoria.")
    .max(500, "La descripción no puede tener más de 500 caracteres."),
});

const NewVideo = () => {
  const { addVideo } = useContext(DataContext); // Acceder a la función addVideo
  const navigate = useNavigate();

  const handleSubmit = async (values, { resetForm }) => {
    const { titulo, categoria, imagen, video, descripcion } = values;

    const confirmed = await showConfirmationAlertPreview(
      titulo,
      categoria,
      imagen,
      video,
      descripcion
    );

    if (confirmed) {
      try {
        // Agregar el nuevo video a la API
        const newVideo = await addData("/", values);
        showSuccessAlert("Video agregado exitosamente.");

        // Actualizar el estado global con el nuevo video
        // Llamar a addVideo para actualizar la lista de videos en el contexto

        navigate("/");

        addVideo(newVideo);

        resetForm();
      } catch (error) {
        showErrorAlert("Error al agregar el video.");
      }
    }
  };

  return (
    <section className="NewVideo">
      <h2>NUEVO VIDEO</h2>
      <p>COMPLETE EL FORMULARIO PARA CREAR UNA NUEVA TARJETA DE VIDEO</p>
      <h3>Crear Tarjeta</h3>

      <Formik
        initialValues={{
          titulo: "",
          categoria: "",
          imagen: "",
          video: "",
          descripcion: "",
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ resetForm, values }) => (
          <Form className="NewVideo_form">
            <div className="TextInput">
              <label>Título</label>
              <Field name="titulo" placeholder="Ingrese el título" />
              <ErrorMessage name="titulo" component="div" className="error" />
            </div>

            <div className="SelectInput">
              <label>Categoría</label>
              <Field
                as="select"
                name="categoria"
                className={values.categoria === "" ? "placeholder" : ""}
              >
                <option value="" disabled>
                  Seleccione una categoría
                </option>
                {options.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </Field>
              <ErrorMessage
                name="categoria"
                component="div"
                className="error"
              />
            </div>

            <div className="TextInput">
              <label>Imagen</label>
              <Field
                name="imagen"
                placeholder="Ingrese el enlace de la imagen"
              />
              <div className="sub-text">
                Ejemplo:
                https://img.youtube.com/vi/CODIGO_DEL_VIDEO/hqdefault.jpg
              </div>
              <ErrorMessage name="imagen" component="div" className="error" />
            </div>

            <div className="TextInput">
              <label>Video</label>
              <Field name="video" placeholder="Ingrese el enlace del video" />
              <div className="sub-text">
                Ejemplo: https://www.youtube.com/watch?v=CODIGO_DEL_VIDEO
              </div>
              <ErrorMessage name="video" component="div" className="error" />
            </div>

            <div className="TextInput">
              <label>Descripción</label>
              <Field
                as="textarea"
                name="descripcion"
                placeholder="¿De qué se trata este video?"
                rows="5"
                maxLength="500"
                className="no-resize"
              />
              <div className="sub-text">
                {`Caracteres restantes: ${
                  500 - (values.descripcion ? values.descripcion.length : 0)
                } / 500`}
              </div>
              <ErrorMessage
                name="descripcion"
                component="div"
                className="error"
              />
            </div>

            <div className="NewVideo_buttonscontainer">
              <button className="Button" type="submit">
                GUARDAR
              </button>
              <button className="Button" type="button" onClick={resetForm}>
                LIMPIAR
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </section>
  );
};

export default NewVideo;
