import styled from "styled-components"
import { Titulo } from "../Titulo"
import { Populares } from "./Populares"
import { Tags } from "./Tags"
import { Imagen } from "./Imagen"

const GaleriaContainer = styled.div`
display: flex;
gap: 24px;
`

const SeccionFluida = styled.section`
flex-grow: 1;
`
const ImagenesContainer = styled.section`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 20px;
`


export const Galeria = ({ fotos = [], alSeleccionarFoto, alAlternarFavorito }) => {

    return (
        <>
            <Tags />
            <GaleriaContainer>
                <SeccionFluida>
                    <Titulo>Navegue por la galería</Titulo>
                    <ImagenesContainer>
                        {fotos.map(foto => <Imagen
                            alAlternarFavorito={alAlternarFavorito}
                            alSolicitarZoom={alSeleccionarFoto}
                            key={foto.id}
                            foto={foto} />)
                        }
                    </ImagenesContainer>
                </SeccionFluida>
                <Populares />

            </GaleriaContainer>
        </>
    )
}