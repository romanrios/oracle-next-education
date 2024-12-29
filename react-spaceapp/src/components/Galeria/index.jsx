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
    const { setTag, fotosDeGaleria } = useContext(GlobalContext);
    
    return <>
        <Tags setTag={setTag} />
        <GaleriaContainer>
            <SeccionFluida>
                <Titulo>Navegue por la galería</Titulo>
                <ImagenesContainer>
                    {
                        fotosDeGaleria == ""
                            ? <Loader />
                            : fotosDeGaleria.map(foto => <Imagen key={foto.id} foto={foto} />)
                    }
                </ImagenesContainer>
            </SeccionFluida>
            <Populares />
        </GaleriaContainer>
    </>
}