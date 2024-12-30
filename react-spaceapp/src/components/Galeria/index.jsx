import styled from "styled-components"
import { Titulo } from "../Titulo"
import { Populares } from "./Populares"
import { Tags } from "./Tags"
import { Imagen } from "./Imagen"
import { Loader } from "../Loader"
import { useContext } from "react"
import { GlobalContext } from "../../context/GlobalContext"

const GaleriaContainer = styled.div`
display: flex;
gap: 24px;
@media(max-width:916px){
flex-direction: column
};
`

const SeccionFluida = styled.section`
flex-grow: 1;
`

const ImagenesContainer = styled.section`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 20px;
    span{
        margin-top: 50px;
    }
`

export const Galeria = () => {
    const { state } = useContext(GlobalContext);
    
    return <>
        <Tags />
        <GaleriaContainer>
            <SeccionFluida>
                <Titulo>Navegue por la galería</Titulo>
                <ImagenesContainer>
                    {
                        state.fotosDeGaleria == ""
                            ? <Loader />
                            : state.fotosDeGaleria.map(foto => <Imagen key={foto.id} foto={foto} />)
                    }
                </ImagenesContainer>
            </SeccionFluida>
            <Populares />
        </GaleriaContainer>
    </>
}