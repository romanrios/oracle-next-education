import "../css/Card.css";
import { RiDeleteBin2Line, RiEditLine } from "react-icons/ri";

const Card = (props) => {
  return (
    <div className="Card" style={{ borderColor: props.color }}>
      <img src="./assets/video_cover.png" alt="Portada de video" />
      <div className="Card_info">
        <button>
          <RiDeleteBin2Line />
          <p>BORRAR</p>
        </button>
        <button>
          <RiEditLine />
          <p>EDITAR</p>
        </button>
      </div>
    </div>
  );
};

export default Card;
