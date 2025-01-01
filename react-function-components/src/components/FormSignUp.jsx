import {
  Button,
  TextField,
  FormControlLabel,
  Switch,
  FormGroup,
} from "@mui/material";
import { useState } from "react";

const FormSignUp = (props) => {
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    email: "",
    promotions: true,
    news: false,
  });

  const [errors, setErrors] = useState({
    name: {
      error: false,
      message: "Deben ser al menos 3 caracteres",
    },
  });

  // Agrupados para simplificar el código
  const handleChange = (e) => {
    const { name, value, checked, type } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.handleSubmit(formData);
  };

  const handleValidation = (e) => {
    const { name, value } = e.target;
    if (name === "name") {
      setErrors((prevErrors) => ({
        ...prevErrors,
        name: {
          error: value.length < 3,
          message: value.length < 3 ? "Deben ser al menos 3 caracteres" : "",
        },
      }));
    }
  };

  return (
    <>
      <h2>Formulario de registro</h2>
      <form onSubmit={handleSubmit}>
        <TextField
          name="name"
          label="Nombre"
          variant="outlined"
          fullWidth
          margin="normal"
          required
          value={formData.name}
          onChange={handleChange}
          error={errors.name.error}
          helperText={errors.name.error && errors.name.message}
          onBlur={handleValidation}
        />
        <TextField
          name="surname"
          label="Apellidos"
          variant="outlined"
          fullWidth
          margin="normal"
          required
          value={formData.surname}
          onChange={handleChange}
        />
        <TextField
          name="email"
          type="email"
          label="Correo Electrónico"
          variant="outlined"
          fullWidth
          margin="normal"
          required
          value={formData.email}
          onChange={handleChange}
        />
        <FormGroup>
          <FormControlLabel
            control={
              <Switch
                name="promotions"
                checked={formData.promotions}
                onChange={handleChange}
              />
            }
            label="Promociones"
          />
          <FormControlLabel
            control={
              <Switch
                name="news"
                checked={formData.news}
                onChange={handleChange}
              />
            }
            label="Novedades"
          />
        </FormGroup>
        <Button variant="contained" type="submit">
          Registrarse
        </Button>
      </form>
    </>
  );
};

export default FormSignUp;
