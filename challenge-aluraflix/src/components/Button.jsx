import "../css/Button.css";

const Button = (props) => {
  return (
    <div className={`Button ${props.selected && "selected"}`}>
      {props.children}
    </div>
  );
};

export default Button;
