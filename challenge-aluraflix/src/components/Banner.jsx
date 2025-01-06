import "../css/Banner.css";

const banner = "./assets/banner.png";
const video_cover = "./assets/video_cover.png";

const Banner = () => {
  return (
    <section className="Banner" style={{ backgroundImage: `url(${banner})` }}>
      <div className="Banner_info">
        <h2>FRONT END</h2>
        <h3>Challenge React</h3>
        <p>
          Este challenge es una forma de aprendizaje. Es un mecanismo donde
          podrás comprometerte en la resolución de un problema para poder
          aplicar todos los conocimientos adquiridos en la formación React.
        </p>
      </div>
      <div className="Banner_img_container">
        <img src={video_cover} alt="Portada de Video" />
      </div>
    </section>
  );
};

export default Banner;
