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

export const showEdit = async (item) => {
  const result = await Swal.fire({
    title: "EDITAR CARD:",
    html: `<div>
      <label>Título</label>
      <input id="tituloInput" value="${item.titulo}"/>    

      <label>Categoría</label>
      <select id="categoriaSelect">
        <option value="Front End">Front End</option>
        <option value="Back End">Back End</option>
        <option value="Innovación y Gestión">Innovación y Gestión</option>
      </select>    

      <label>Imagen</label>
      <input id="imagenInput" value="${item.imagen}"/>    

      <label>Video</label>
      <input id="videoInput" value="${item.video}"/>    

      <label>Descripción</label>
      <textarea id="descripcionTextarea" rows="6">${item.descripcion}</textarea>   
    </div>`,
    // icon: "info",
    showCancelButton: true,
    confirmButtonText: "GUARDAR",
    cancelButtonText: "CANCELAR",
    customClass: "swal-edit",
    showCloseButton: true,
    didOpen: () => {
      const selectElement = document.getElementById("categoriaSelect");
      selectElement.value = item.categoria;
    },
    preConfirm: () => {
      return {
        titulo: document.getElementById("tituloInput").value,
        categoria: document.getElementById("categoriaSelect").value,
        imagen: document.getElementById("imagenInput").value,
        video: document.getElementById("videoInput").value,
        descripcion: document.getElementById("descripcionTextarea").value,
      };
    },
  });
  return result;
};
