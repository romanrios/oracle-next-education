import styled from "styled-components";
import { CampoTexto } from "../CampoTexto";

const HeaderEstilizado = styled.div`
    padding: 60px 0;
    display: flex;
    justify-content: space-between; 
    gap: 20px;
    img{
        width: 200px;
        object-fit: contain;
    }
    @media (max-width:768px){
        flex-direction: column;
    }
    `

export const Cabecera = () => {
    return (
        <HeaderEstilizado>
            <img src="./imagenes/logo.png" alt="Space App Logo" />
            <CampoTexto />
        </HeaderEstilizado>
    );
}