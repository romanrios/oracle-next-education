import styles from "./Player.module.css";
import Banner from "../../components/Banner/Banner";
import Titulo from "../../components/Titulo/Titulo";
import { useParams } from "react-router-dom";
import NotFound from "../NotFound/NotFound";
import { useEffect, useState } from "react";

const Player = () => {
  const params = useParams();
  const [video, setVideo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch(
      `https://my-json-server.typicode.com/romanrios/oracle-next-education/react-aluracinema/${params.id}`
    )
      .then((response) => {
        setError(false);
        if (!response.ok) {
          throw new Error("Video not found");
        }
        return response.json();
      })
      .then((data) => {
        setVideo(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching video:", error);
        setError(true);
        setLoading(false);
      });
  }, [params.id]);

  if (loading) return <Titulo>Cargando video...</Titulo>;
  if (error || !video) return <NotFound />;

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
