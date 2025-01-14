import "../css/Card.css";
import { RiDeleteBin2Line, RiEditLine } from "react-icons/ri";

const Card = (props) => {
  return (
    <div className="Card" style={{ borderColor: props.color }}>
      <img
        src={props.imagen}
        alt="Portada de video"
        onClick={(e) => props.handlePlay(e, props.video)}
        onMouseDown={props.handleMouseDown}
      />
      <div className="Card_info">
        <button onClick={() => props.handleDelete(props.id)}>
          <RiDeleteBin2Line />
          <p>BORRAR</p>
        </button>
        <button onClick={() => props.handleEdit(props.item)}>
          <RiEditLine />
          <p>EDITAR</p>
        </button>
      </div>
    </div>
  );
};

export default Card;
