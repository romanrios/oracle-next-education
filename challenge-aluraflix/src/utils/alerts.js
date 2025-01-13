import Swal from "sweetalert2";

export const showSuccessAlert = (message) => {
  Swal.fire({
    icon: "success",
    title: "¡Éxito!",
    text: message,
  });
};

export const showErrorAlert = (message) => {
  Swal.fire({
    icon: "error",
    title: "¡Error!",
    text: message,
  });
};

export const showWarningAlert = (message) => {
  Swal.fire({
    icon: "warning",
    title: "Advertencia",
    text: message,
  });
};

export const showInfoAlert = (message) => {
  Swal.fire({
    icon: "info",
    title: "Información",
    text: message,
  });
};

export const showConfirmationAlert = async (message) => {
  const result = await Swal.fire({
    title: "Confirmación",
    text: message,
    icon: "question",
    showCancelButton: true,
    confirmButtonText: "Sí",
    cancelButtonText: "No",
  });
  return result.isConfirmed;
};

export const showConfirmationAlertPreview = async (
  titulo,
  categoria,
  imagen,
  video,
  descripcion
) => {
  const result = await Swal.fire({
    title: "Confirmación",
    html: `
      <div style="text-align: left;">
        <div class="panel">
          <h3 class="panel-title">Título</h3>
          <p>${titulo}</p>
        </div>
        <div class="panel">
          <h3 class="panel-title">Categoría</h3>
          <p>${categoria}</p>
        </div>
        <div class="panel">
          <h3 class="panel-title">Descripción</h3>
          <p>${descripcion}</p>
        </div>
        <div class="panel">
          <h3 class="panel-title">Imagen</h3>
          <img src="${imagen}" alt="Vista previa de la imagen" style="width: 100%; max-width: 300px; margin-bottom: 10px;" />
        </div>
        <div class="panel">
          <h3 class="panel-title">Video</h3>
          <div style="text-align: center;">
            <iframe width="100%" height="300" src="${video.replace(
              "watch?v=",
              "embed/"
            )}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
        </div>
        <p>Estas por agregar el siguiente video, confirma si los datos son correctos:</p>
      </div>
    `,
    icon: "question",
    showCancelButton: true,
    confirmButtonText: "Sí",
    cancelButtonText: "No",
    customClass: {
      container: "swal-container",
    },
  });
  return result.isConfirmed;
};

export const showEdit = async (id) => {
  const result = await Swal.fire({
    title: "Editar Video",
    html: `<div>HTML Content - Edit Video ${id}</div>`,
    icon: "info",
    showCancelButton: true,
    confirmButtonText: "Sí",
    cancelButtonText: "No",
  });
  return result.isConfirmed;
};
