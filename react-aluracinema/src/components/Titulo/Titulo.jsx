import styles from "./Titulo.module.css";

const Titulo = ({ children }) => {
  return <div className={styles.texto}>{children}</div>;
};

export default Titulo;
    