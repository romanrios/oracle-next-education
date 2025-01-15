import "../css/Banner.css";
import { useContext } from "react";
import DataContext from "../context/context";
import Swal from "sweetalert2";
import Carousel from "react-multi-carousel";

const responsive = {
  desktop: {
    breakpoint: { max: 10000, min: 1 },
    items: 1,
  },
};

const Banner = () => {
  const { data } = useContext(DataContext);

  const handlePlay = (videoUrl) => {
    const embedUrl = videoUrl.replace("watch?v=", "embed/");
    Swal.fire({
      html: `<div class="video-container"><iframe src="${embedUrl}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>`,
      showCloseButton: true,
      customClass: "swal-popup",
      showConfirmButton: false,
    });
  };

  return (
    <Carousel
      autoPlay={true}
      autoPlaySpeed={5000}
      responsive={responsive}
      infinite={true}
      itemClass="card-item"
    >
      {data.map((item) => (
        <section
          key={item.id}
          className="Banner"
          style={{ backgroundImage: `url(${item.imagen})` }}
        >
          <div className="Banner_info">
            <h2
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
            <h3>{item.titulo}</h3>
            <p>{item.descripcion}</p>
          </div>
          <div
            onClick={() => handlePlay(item.video)}
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
