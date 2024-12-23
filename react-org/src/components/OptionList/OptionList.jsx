import './OptionList.css';

export const OptionList = (props) => {

    const options = [
        { value: "programacion", label: "Programación" },
        { value: "frontend", label: "Front End" },
        { value: "datascience", label: "Data Science" },
        { value: "devops", label: "Devops" },
        { value: "uxydiseno", label: "UX y Diseño" },
        { value: "movil", label: "Móvil" },
        { value: "innovacionygestion", label: "Innovación y Gestión" }
    ];

    const handleChange = (e) => {
        props.setValue(e.target.value);
    };

    return (
        <div className='OptionList'>
            <label>Equipo</label>
            <select value={props.value} onChange={handleChange} required>
                <option value="" disabled>Seleccione una opción</option>
                {options.map((option, index) => (
                    <option key={index} value={option.value}>
                        Equipo {index + 1} - {option.label}
                    </option>
                ))}
            </select>
        </div>
    );
}