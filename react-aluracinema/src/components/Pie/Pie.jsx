import styles from "./Pie.module.css";
import logo from "./romanrios.png";

function Pie() {
  return (
    <footer className={styles.pie}>
      <h2>
        Desarrollado por <img src={logo} alt="Román Ríos" />
      </h2>
    </footer>
  );
}
export default Pie;
