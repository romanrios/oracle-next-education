import styled from "styled-components";
import { CampoTexto } from "../CampoTexto";

const HeaderEstilizado = styled.div`
    padding: 60px 0;
    display: flex;
    justify-content: space-between; 
    img{
        width: 200px;
        object-fit: contain;
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