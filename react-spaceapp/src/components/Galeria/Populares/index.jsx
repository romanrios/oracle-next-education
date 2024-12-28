import { styled } from "styled-components"
import { Titulo } from "../../Titulo"
import fotos from './fotos-populares.json'

const ColumnaFotos = styled.section`
    display: flex;
    flex-direction: column;
    gap: 16px;
    @media (max-width:916px){
        flex-wrap: wrap;    
        flex-direction: row;
    }
`

const Imagen = styled.img`
    flex: 1;
    /* max-width: 212px; */
    border-radius: 20px;
    cursor: pointer;
    transition: transform 0.2s ease-in-out;
    &:hover {
        transform: scale(1.02);
    }
`

const Boton = styled.button`
    background-color: transparent;
    color: #fff;
    border: 2px solid;
    border-color: #C98CF1;
    padding: 12px 20px;
    font-size: 20px;
    border-radius: 10px;
    width: 100%;
    margin-top: 16px;
    cursor: pointer;
    &:hover {
        background: linear-gradient(45deg, #C98CF1, #7B78E5);
    }
`;

export const Populares = () => {
    return (
        <section>
            <Titulo $align='center'>Populares</Titulo>
            <ColumnaFotos>
                {fotos.map(foto => <Imagen key={foto.id} src={foto.path} alt={foto.alt} />)}
            </ColumnaFotos>
            <Boton>Ver más</Boton>
        </section>
    )
}