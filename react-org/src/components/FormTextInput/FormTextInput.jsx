import './FormTextInput.css';

export const FormTextInput = (props) => {
    const handleChange = (e) => {
        props.setValue(e.target.value);
    };

    return <div className='formTextInput'>
        <label>{props.label}</label>
        <input
            type="text"
            placeholder={props.placeholder}
            required={props.required}
            value={props.value}
            onChange={handleChange}
        />
    </div>
}