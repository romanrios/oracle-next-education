import './FormTextInput.css';

export const FormTextInput = (props) => {
    return <div className='formTextInput'>
        <label>{props.label}</label>
        <input type="text" placeholder={props.placeholder} required={props.required} />
    </div>
}