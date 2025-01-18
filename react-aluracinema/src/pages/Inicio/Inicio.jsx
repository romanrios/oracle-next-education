import Banner from "../../components/Banner/Banner";
import Titulo from "../../components/Titulo/Titulo";
import Card from "../../components/Card/Card";
import styles from "./Inicio.module.css";
import Container from "../../components/Container/Container";
import { useEffect, useState } from "react";

function Inicio() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetch("https://6759e26f099e3090dbe33820.mockapi.io/romanflix")
      .then((response) => response.json())
      .then((data) => setVideos(data))
      .catch((error) => console.error("Error fetching videos:", error));
  }, []);

  if (!videos) {
    return <Titulo>Cargando videos...</Titulo>;
  }

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
