import { useFavoritosContext } from "../../context/FavoritosProvider";
import styles from "./Card.module.css";
import iconFavorito from "./iconFavorito.png";
import iconNoFavorito from "./iconNoFavorito.png";
import { Link } from "react-router-dom";

const Card = ({ id, imagen, titulo }) => {
  const { favorito, agregarFavorito } = useFavoritosContext();
  const isFavorito = favorito.some((fav) => fav.id === id);
  const icon = isFavorito ? iconFavorito : iconNoFavorito;

  return (
    <div className={styles.Card}>
      <Link to={`player/${id}`}>
        <img src={imagen} alt={titulo} className={styles.capa} />
      </Link>
      <div className={styles.Card_info}>
        <h2>{titulo}</h2>
        <img
          src={icon}
          alt="Ícono de Favorito"
          onClick={() => agregarFavorito({ id, imagen, titulo })}
          className={styles.icono}
        />
      </div>
    </div>
  );
};

export default Card;
