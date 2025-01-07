import "../css/Header.css";

const logo = "./assets/romanflix.svg";

const Header = () => {
  return (
    <header className="Header">
      <img src={logo} alt="Logo Aluraflix" />
      <ul>
        <li>HOME</li>
        <li>NUEVO VIDEO</li>
      </ul>
    </header>
  );
};

export default Header;
