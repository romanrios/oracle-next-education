import Banner from "../../components/Banner/Banner";
import Titulo from "../../components/Titulo/Titulo";
import Card from "../../components/Card/Card";
import styles from "./Inicio.module.css";
import videos from "../../data/db.json";
import Container from "../../components/Container/Container";

function Inicio() {
  return (
    <section className={styles.container}>
      <Banner img="home" color="#154580" style={styles.container} />
      <Titulo>Un lugar para guardar sus videos favoritos</Titulo>

      <Container>
        {videos.map((video) => (
          <Card {...video} key={video.id} />
        ))}
      </Container>
    </section>
  );
}

export default Inicio;