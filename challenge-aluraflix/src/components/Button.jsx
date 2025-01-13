import "../css/Button.css";

const Button = (props) => {
  return (
    <button
      type={props.type}
      onClick={props.onClick}
      className={`Button ${props.selected && "selected"}`}
    >
      {props.children}
    </button>
  );
};

export default Button;
