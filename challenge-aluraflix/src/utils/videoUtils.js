import Swal from "sweetalert2";

export const handlePlay = (e, item, startPos) => {
  const endPos = { x: e.clientX, y: e.clientY };
  const distance = Math.sqrt(
    (endPos.x - startPos.x) ** 2 + (endPos.y - startPos.y) ** 2
  );

  if (distance < 5) {
    const embedUrl = item.video.replace("watch?v=", "embed/");
    Swal.fire({
      html: `<div class="video-container"><iframe src="${embedUrl}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
        <h3 class="video_popup_titulo">${item.titulo}</h3>
        <p class="video_popup_descripcion">${item.descripcion}</p>`,
      showCloseButton: true,
      customClass: "swal-popup",
      showConfirmButton: false,
    });
  }
};
