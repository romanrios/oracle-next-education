import './Form.css';
import { FormTextInput } from '../FormTextInput/FormTextInput';
import { OptionList } from '../OptionList/OptionList';
import { Button } from '../Button/Button';
import { useState } from 'react';

export const Form = () => {

    const [nombre, setNombre] = useState('');
    const [puesto, setPuesto] = useState('');
    const [foto, setFoto] = useState('');
    const [equipo, setEquipo] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        let formData = {
            nombre,
            puesto,
            foto,
            equipo
        }
        alert(JSON.stringify(formData));
    }

    return <section className='form'>
        <form onSubmit={handleSubmit} action="">
            <div className="form_container">
                <h2>Rellena el formulario para crear el colaborador.</h2>
                <FormTextInput label='Nombre' placeholder='Ingresar nombre' required value={nombre} setValue={setNombre} />
                <FormTextInput label='Puesto' placeholder='Ingresar puesto' required value={puesto} setValue={setPuesto} />
                <FormTextInput label='Foto' placeholder='Ingresar enlace de foto' required value={foto} setValue={setFoto} />
                <OptionList value={equipo} setValue={setEquipo} />
                <Button>Crear</Button>
            </div>
        </form>
    </section>
}