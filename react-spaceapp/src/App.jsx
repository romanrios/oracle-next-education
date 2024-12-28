import { useEffect } from "react"
import styled from "styled-components"
import { GlobalStyles } from "./components/GlobalStyles"
import { Cabecera } from "./components/Cabecera"
import { BarraLateral } from "./components/BarraLateral"
import { Banner } from "./components/Banner"
import { Galeria } from "./components/Galeria"
import fotos from "./fotos.json"
import { useState } from "react"
import { ModalZoom } from "./components/ModalZoom"
import { Pie } from "./components/Pie"

const FondoGradiente = styled.div`
background: linear-gradient(175deg, #041833 4.16%, #04244F 48%, #154580 96.76%);
width:100%;
min-height:100vh;
`
const AppContainer = styled.div`
  width:1280px;
  max-width:100%;
  margin: 0 auto;
  padding: 0 15px;
`
const MainContainer = styled.main`
  display: flex;
  gap:24px;
  @media (max-width:768px){
    flex-direction: column;
  }
`
const ContenidoGaleria = styled.section`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`

export const App = () => {
  const [fotosDeGaleria, setFotosDeGaleria] = useState(fotos)
  const [fotoSeleccionada, setFotoSeleccionada] = useState(null)

  //
  const [filtro, setFiltro] = useState('')
  const [tag, setTag] = useState(0)

  useEffect(() => {
    const fotosFiltradas = fotos.filter(foto => {
      const filtroPorTag = !tag || foto.tagId === tag;
      const filtroPorTitulo = !filtro || foto.titulo.toLowerCase().includes(filtro.toLowerCase())
      return filtroPorTag && filtroPorTitulo
    })
    setFotosDeGaleria(fotosFiltradas)
  }, [filtro, tag])
  //

  const alAlternarFavorito = (foto) => {

    if (foto.id === fotoSeleccionada?.id) {
      setFotoSeleccionada({
        ...fotoSeleccionada,
        favorita: !fotoSeleccionada.favorita
      })

    }

    setFotosDeGaleria(fotosDeGaleria.map(fotoDeGaleria => {
      return {
        ...fotoDeGaleria,
        favorita: fotoDeGaleria.id === foto.id ? !foto.favorita : fotoDeGaleria.favorita
      }
    }))
  }

  return (
    <>
      <FondoGradiente>
        <GlobalStyles />
        <AppContainer>
          <Cabecera
            filtro={filtro}
            setFiltro={setFiltro}
          />
          <MainContainer>
            <BarraLateral />
            <ContenidoGaleria>
              <Banner />

              <Galeria
                fotos={fotosDeGaleria}
                alSeleccionarFoto={foto => setFotoSeleccionada(foto)}
                alAlternarFavorito={alAlternarFavorito}
                setTag={setTag}
              />
            </ContenidoGaleria>
          </MainContainer>
        </AppContainer>
        <ModalZoom foto={fotoSeleccionada}
          alCerrar={() => setFotoSeleccionada(null)}
          alAlternarFavorito={alAlternarFavorito} />
        <Pie />
      </FondoGradiente>
    </>
  )
}