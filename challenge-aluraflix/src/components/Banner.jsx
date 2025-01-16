import "../css/Banner.css";
import { useContext } from "react";
import DataContext from "../context/context";
import Swal from "sweetalert2";
import Carousel from "react-multi-carousel";
import { useState } from "react";

const responsive = {
  desktop: {
    breakpoint: { max: 10000, min: 1 },
    items: 1,
  },
};

const Banner = () => {
  const { data } = useContext(DataContext);
  const [startPos, setStartPos] = useState({ x: 0, y: 0 });

  const handleMouseDown = (e) => {
    setStartPos({ x: e.clientX, y: e.clientY });
  };

  const handlePlay = (e, videoUrl) => {
    const endPos = { x: e.clientX, y: e.clientY };
    const distance = Math.sqrt(
      (endPos.x - startPos.x) ** 2 + (endPos.y - startPos.y) ** 2
    ); // Solo dispara el click si el arrastre es pequeño (umbral de 5 píxeles)
    if (distance < 5) {
      const embedUrl = videoUrl.replace("watch?v=", "embed/");
      Swal.fire({
        html: `<div class="video-container"><iframe src="${embedUrl}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>`,
        showCloseButton: true,
        customClass: "swal-popup",
        showConfirmButton: false,
      });
    }
  };

  // Ordena los datos por ID de forma descendente y toma los primeros 10 elementos
  const lastData = [...data].sort((a, b) => b.id - a.id).slice(0, 18);

  return (
    <Carousel
      autoPlay={true}
      autoPlaySpeed={5000}
      responsive={responsive}
      infinite={true}
      itemClass="card-item"
      arrows={false}
      showDots={true}
    >
      {lastData.map((item) => (
        <section
          key={item.id}
          className="Banner"
          style={{ backgroundImage: `url(${item.imagen})` }}
        >
          <div className="Banner_info">
            <h2
              className="no-select"
              style={{
                backgroundColor:
                  item.categoria == "Front End"
                    ? "var(--frontend)"
                    : item.categoria == "Back End"
                    ? "var(--backend)"
                    : "var(--innovacion)",
              }}
            >
              {item.categoria}
            </h2>
            <h3 className="no-select">{item.titulo}</h3>
            <p className="no-select">{item.descripcion}</p>
          </div>
          <div
            onClick={(e) => handlePlay(e, item.video)}
            onMouseDown={handleMouseDown}
            className="Banner_img_container"
            style={{
              borderColor:
                item.categoria == "Front End"
                  ? "var(--frontend)"
                  : item.categoria == "Back End"
                  ? "var(--backend)"
                  : "var(--innovacion)",
            }}
          >
            <img src={item.imagen} alt="Portada de Video" />
          </div>
        </section>
      ))}
    </Carousel>
  );
};

export default Banner;
