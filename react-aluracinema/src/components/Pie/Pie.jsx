import styles from "./Pie.module.css";

function Pie() {
  return (
    <footer className={styles.pie}>
      <h2>
        Desarrollado por <img src={"./img/romanrios.png"} alt="Román Ríos" />
      </h2>
    </footer>
  );
}
export default Pie;
