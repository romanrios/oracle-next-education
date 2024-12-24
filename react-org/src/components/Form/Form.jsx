import './Form.css';
import { FormTextInput } from '../FormTextInput/FormTextInput';
import { OptionList } from '../OptionList/OptionList';
import { Button } from '../Button/Button';
import { useState } from 'react';

export const Form = (props) => {

    const [name, setName] = useState('');
    const [charge, setCharge] = useState('');
    const [img, setImg] = useState('');
    const [team, setTeam] = useState('');

    const [title, setTitle] = useState('');
    const [color, setColor] = useState('#57C278');

    const handleSubmit = (e) => {
        e.preventDefault();
        let formData = {
            name,
            charge,
            img,
            team
        }
        // alert(JSON.stringify(formData));
        props.addMember(formData);
    }

    const handleSubmitTeam = (e) => {
        e.preventDefault();
        let formData = {
            title,
            color
        }
        // alert(JSON.stringify(formData));
        props.addTeam(formData);
    }

    return <section className='form'>
        <form onSubmit={handleSubmit} action="">
            <div className="form_container">
                <h2>Rellena el formulario para crear el colaborador.</h2>
                <FormTextInput label='Nombre' placeholder='Ingresar nombre' required value={name} setValue={setName} />
                <FormTextInput label='Puesto' placeholder='Ingresar puesto' required value={charge} setValue={setCharge} />
                <FormTextInput label='Foto' placeholder='Ingresar enlace de foto' required value={img} setValue={setImg} />
                <OptionList value={team} setValue={setTeam} teams={props.teams} />
                <Button>Crear colaborador</Button>
            </div>
        </form>
        <form onSubmit={handleSubmitTeam} action="">
            <div className="form_container">
                <h2>Rellena el formulario para crear el equipo.</h2>
                <FormTextInput label='Título' placeholder='Ingresar título del equipo' required value={title} setValue={setTitle} />
                <div className='Form_input_color'>
                    <label htmlFor="colorInput">Color</label>
                    <input type="color" id="colorInput" required value={color} onChange={(e) => setColor(e.target.value)} />
                </div>
                <Button>Crear equipo</Button>
            </div>
        </form>
    </section>
}