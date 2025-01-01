import FormSignUp from "./components/FormSignUp";
import "./App.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Swal from "sweetalert2";

function App() {
  const handleSubmit = (data) => {
    Swal.fire({
      title: "¡Formulario Enviado!",
      html: `
        <p><strong>Nombre:</strong> ${data.name}</p>
        <p><strong>Apellidos:</strong> ${data.surname}</p>
        <p><strong>Correo Electrónico:</strong> ${data.email}</p>
        <p><strong>Promociones:</strong> ${data.promotions ? "Sí" : "No"}</p>
        <p><strong>Novedades:</strong> ${data.news ? "Sí" : "No"}</p>
      `,
      icon: "success",
      confirmButtonText: "OK",
    });
  };

  return (
    <Container maxWidth="sm" >
      <CssBaseline />
      <FormSignUp handleSubmit={handleSubmit} />
    </Container>
  );
}

export default App;
