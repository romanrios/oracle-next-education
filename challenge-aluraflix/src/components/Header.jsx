import "../css/Header.css";
import Button from "./Button";
import { NavLink, Link } from "react-router-dom";

const logo = "./assets/romanflix.svg";

const Header = () => {
  return (
    <header className="Header">
      <Link to="/">
        <img src={logo} alt="Logo Aluraflix" />
      </Link>
      <ul>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          {({ isActive }) => <Button selected={isActive}>HOME</Button>}
        </NavLink>
        <NavLink
          to="/newvideo"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          {({ isActive }) => <Button selected={isActive}>NUEVO VIDEO</Button>}
        </NavLink>
      </ul>
    </header>
  );
};

export default Header;
