import "../css/Footer.css";
const logo = "./assets/romanflix.svg";

const Footer = () => {
  return (
    <footer className="Footer">
      <img src={logo} alt="Logo Aluraflix" />
      <p>Desarrollado por Román Ríos</p>
    </footer>
  );
};

export default Footer;
