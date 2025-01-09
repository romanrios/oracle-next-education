import "../css/SelectInput.css";

const SelectInput = ({ name, options, placeholder }) => {
  const handleChange = (e) => {
    // Detectar cambios en el valor seleccionado
    const selectElement = e.target;
    if (selectElement.value === "") {
      selectElement.classList.add("placeholder");
    } else {
      selectElement.classList.remove("placeholder");
    }
  };

  return (
    <div className="SelectInput">
      <label>{name}</label>
      <select className="placeholder" onChange={handleChange}>
        <option value="" disabled selected>
          {placeholder}
        </option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectInput;
