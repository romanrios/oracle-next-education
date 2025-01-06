import "../css/Header.css";

const logo = "./assets/aluraflix_logo.png";

const Header = () => {
  return (
    <header className="Header">
      <img src={logo} alt="Logo Aluraflix" />
      <div className="Header_buttons_container">
        <button>HOME</button>
        <button>NUEVO VIDEO</button>
      </div>
    </header>
  );
};

export default Header;
