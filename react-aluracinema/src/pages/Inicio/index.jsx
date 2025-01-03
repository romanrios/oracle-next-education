import Cabecera from "../../components/Cabecera/Cabecera";
import Pie from "../../components/Pie/Pie";
import Banner from "../../components/Banner/Banner";
import Titulo from "../../components/Titulo/Titulo";
import Card from "../../components/Card/Card";
import styles from "./index.module.css";
import data from "../../data/db.json";

function Inicio() {
  return (
    <>
      <Cabecera></Cabecera>
      <Banner img="home" color="#154580" style={styles.container} />
      <Titulo>
        <h1>Un lugar para guardar sus videos favoritos</h1>
      </Titulo>
      <Card
        id="1"
        capa="https://github.com/romanrios.png"
        titulo="Román Ríos"
      />
      <Pie />
    </>
  );
}

export default Inicio;
