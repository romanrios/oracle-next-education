import { createContext } from "react";
import { useState } from "react";
import { useEffect } from "react";
import fotos from "../fotos.json";

export const GlobalContext = createContext();

export const GlobalContextProvider = ({ children }) => {
    const [fotosDeGaleria, setFotosDeGaleria] = useState(fotos)
    const [fotoSeleccionada, setFotoSeleccionada] = useState(null)
    const [filtro, setFiltro] = useState('')
    const [tag, setTag] = useState(0)

    const normalizeString = (str) => {
        return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
    };

    useEffect(() => {
        const fotosFiltradas = fotos.filter(foto => {
            const filtroPorTag = !tag || foto.tagId === tag;
            const filtroPorTitulo = !filtro || normalizeString(foto.titulo).includes(normalizeString(filtro));
            return filtroPorTag && filtroPorTitulo;
        });
        setFotosDeGaleria(fotosFiltradas);
    }, [filtro, tag]);

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

    return <GlobalContext.Provider value={{
        fotosDeGaleria,
        fotoSeleccionada, setFotoSeleccionada,
        filtro, setFiltro,
        tag, setTag,
        alAlternarFavorito,
    }}>
        {children}
    </GlobalContext.Provider>
}