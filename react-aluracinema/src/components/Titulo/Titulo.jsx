import styles from "./Titulo.module.css";

const Titulo = ({ children }) => {
  return <div className={styles.Titulo}>{children}</div>;
};

export default Titulo;
