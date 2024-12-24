import './OptionList.css';

export const OptionList = (props) => {

    const handleChange = (e) => {
        props.setValue(e.target.value);
    };

    return (
        <div className='OptionList'>
            <label>Equipo</label>
            <select value={props.value} onChange={handleChange} required  style={{ background: "url('./img/arrow_drop_down.svg') no-repeat right 30px center" }}>
                <option value="" disabled>Seleccione una opción</option>
                {props.teams.map((team, index) => (
                    <option key={index} value={team}>
                        Equipo {index + 1} - {team}
                    </option>
                ))}
            </select>
        </div>
    );
}