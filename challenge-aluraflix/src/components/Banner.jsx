import "../css/Banner.css";

const banner = "./assets/banner.png";
const video_cover = "https://img.youtube.com/vi/MnBNPA45NW8/sddefault.jpg";

const Banner = () => {
  return (
    <section className="Banner" style={{ backgroundImage: `url(${banner})` }}>
      <div className="Banner_info">
        <h2>FRONT END</h2>
        <h3>¿Por qué utilizar React?</h3>
        <p>
          En el Alura.tips de hoy platicaremos con Harland Lohora, instructor
          Front End en la plataforma de Alura Latam, sobre la librería JS de
          React. Harland nos comentará como surgió React, por que utilizarlo y
          por que se tornó una librería tan importante en el desarrollo
          front-end.
        </p>
      </div>
      <div className="Banner_img_container">
        <img src={video_cover} alt="Portada de Video" />
      </div>
    </section>
  );
};

export default Banner;
