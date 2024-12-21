import './Form.css';
import { FormTextInput } from '../FormTextInput/FormTextInput';
import { OptionList } from '../OptionList/OptionList';
import { Button } from '../Button/Button';

const handleSubmit = (e) => {
    e.preventDefault();
    alert('Formulario enviado');
}

export const Form = () => {
    return <section className='form'>
        <form onSubmit={handleSubmit} action="">
            <div className="form_container">
                <h2>Rellena el formulario para crear el colaborador.</h2>
                <FormTextInput label='Nombre' placeholder='Ingresar nombre' required />
                <FormTextInput label='Puesto' placeholder='Ingresar puesto' required />
                <FormTextInput label='Foto' placeholder='Ingresar enlace de foto' required />
                <OptionList />
                <Button>Crear</Button>
            </div>
        </form>
    </section>
}