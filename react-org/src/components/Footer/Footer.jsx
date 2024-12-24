import './Footer.css';
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGlobe } from "react-icons/fa";



export const Footer = () => {
    return (
        <footer className="footer" style={{ backgroundImage: `url('./img/footer.png')` }}>
            <div className="footer_icons_container">
                <a href="https://www.linkedin.com/in/romanrios/" target='_blank' rel='noopener noreferrer'><FaLinkedin /></a>
                <a href="https://github.com/romanrios/" target='_blank' rel='noopener noreferrer'><FaGithub /></a>
                <a href="https://romanrios.github.io/" target='_blank' rel='noopener noreferrer'><FaGlobe /></a>
            </div>
            {/* <img src="./img/footer.png" alt="Imagen de Pie de Página" /> */}
            <p>Desarrollado por Román Ríos</p>
        </footer>
    );
}