import { useContext, useRef } from 'react';
import styled from "styled-components"
import { GlobalContext } from '../../context/GlobalContext';

const ContainerEstilizado = styled.div`
    position: relative;
    display: inline-block;
`;

const CampoTextoEstilizado = styled.input`
    height: 56px;
    padding: 12px 16px;
    border-radius: 10px;
    border: 2px solid;
    border-color: #C98CF1;
    background: transparent;
    box-sizing: border-box;
    width: 100%;
    color: #D9D9D9;
    font-weight: 400;
    font-size: 20px;
    line-height: 20px;
    outline: none;
    &::placeholder {
        color: #D9D9D9;
    }
    @media (min-width: 768px){
        min-width: 458px;
    }
`;

const IconoLupa = styled.img`
    position: absolute;
    top: 10px;
    right: 10px;
    width: 38px !important;
    height: 38px;
    cursor: pointer;
    &:hover {
        opacity: 0.8;
    }
`;

export const CampoTexto = () => {
    const { setFiltro } = useContext(GlobalContext);

    const inputRef = useRef(null);

    const handleSetFiltro = () => {
        setFiltro(inputRef.current.value);
    };

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            handleSetFiltro();
        }
    };

    return <ContainerEstilizado>
        <CampoTextoEstilizado
            ref={inputRef}
            onKeyDown={handleKeyDown}
            type="text"
            placeholder="¿Qué estás buscando?" />
        <IconoLupa
            src='./iconos/search.png'
            alt="ícono de lupa"
            onClick={handleSetFiltro}
        />
    </ContainerEstilizado>
}