import "../css/TextInput.css";

const TextInput = ({ name, type = "text", placeholder }) => {
  return (
    <div className="TextInput">
      <label>{name}</label>
      {type === "textarea" ? (
        <textarea placeholder={placeholder} rows={5} />
      ) : (
        <input type={type} placeholder={placeholder} />
      )}
    </div>
  );
};

export default TextInput;
