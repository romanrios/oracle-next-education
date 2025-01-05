import styles from "./Player.module.css";
import Banner from "../../components/Banner/Banner";
import Titulo from "../../components/Titulo/Titulo";
import videos from "../../data/db.json";
import { useParams } from "react-router-dom";
import NotFound from "../NotFound/NotFound";

const Player = () => {
  const params = useParams();
  const video = videos.find((video) => params.id == video.id);

  if (!video) return <NotFound />;

  return (
    <div className={styles.Player}>
      <Banner img="player" color="#BF008A" />
      <Titulo>Player</Titulo>

      <iframe
        src={video.link}
        title={video.titulo}
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
    </div>
  );
};

export default Player;
