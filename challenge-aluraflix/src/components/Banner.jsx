import "../css/Banner.css";
import { useContext } from "react";
import DataContext from "../context/context";
import Carousel from "react-multi-carousel";
import { useState } from "react";
import { handlePlay } from "../utils/videoUtils";

const responsive = {
  desktop: {
    breakpoint: { max: 10000, min: 1 },
    items: 1,
  },
};

const Banner = () => {
  const { data } = useContext(DataContext);
  const [startPos, setStartPos] = useState({ x: 0, y: 0 });
  const [autoplay, setAutoplay] = useState(true);

  const handleMouseDown = (e) => {
    setStartPos({ x: e.clientX, y: e.clientY });
  };

  // Ordena los datos por ID de forma descendente y toma los primeros 18 elementos
  const lastData = [...data].sort((a, b) => b.id - a.id).slice(0, 18);

  return (
    <Carousel
      autoPlay={autoplay}
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
            onClick={(e) => handlePlay(e, item, startPos)}
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
