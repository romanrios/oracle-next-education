import styles from "./Favoritos.module.css";
import Banner from "../../components/Banner/Banner";
import Card from "../../components/Card/Card";
import Titulo from "../../components/Titulo/Titulo";
import { useFavoritosContext } from "../../context/FavoritosProvider";
import Container from "../../components/Container/Container";

const Favoritos = () => {
  const { favorito } = useFavoritosContext();

  return (
    <section className={styles.container}>
      <Banner img="favoritos" color="#00BF63" style={styles.container} />
      <Titulo>Favoritos</Titulo>
      <Container>
        {favorito.length > 0 ? (
          favorito.map((fav) => <Card {...fav} key={fav.id} />)
        ) : (
          <p>
            No tienes favoritos. Puedes seleccionarlos en la página de Inicio.
          </p>
        )}
      </Container>
    </section>
  );
};

export default Favoritos;
