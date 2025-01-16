import "../css/Footer.css";
const logo = "./assets/romanflix.svg";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGlobe } from "react-icons/fa";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <footer className="Footer">
      <img src={logo} alt="Logo Aluraflix" onClick={scrollToTop} />
      <p className="no-select">Desarrollado por Román Ríos</p>
      <div className="Footer_icons_container">
        <a
          href="https://www.linkedin.com/in/romanrios/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/romanrios/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>
        <a
          href="https://romanrios.github.io/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGlobe />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
