import { createContext, useEffect, useReducer } from "react";
import fotos from "../fotos.json";

export const GlobalContext = createContext();

const initialState = {
    fotosDeGaleria: fotos,
    fotoSeleccionada: null,
    filtro: '',
    tag: 0,
    modalAbierto: false
}

const reducer = (state, action) => {
    switch (action.type) {
        case "SET_FOTOS_DE_GALERIA":
            return { ...state, fotosDeGaleria: action.payload };
        case "SET_FOTO_SELECCIONADA":
            return {
                ...state,
                fotoSeleccionada: action.payload,
                modalAbierto: action.payload != null ? true : false
            };
        case "SET_FILTRO":
            return { ...state, filtro: action.payload };
        case "SET_TAG":
            return { ...state, tag: action.payload };

        case 'ALTERNAR_FAVORITO':
            const updatedFotos = state.fotosDeGaleria.map(foto => {
                if (foto.id === action.payload.id) {
                    return { ...foto, favorita: !foto.favorita };
                }
                return foto;
            });
            return {
                ...state,
                fotosDeGaleria: updatedFotos,
                fotoSeleccionada: state.fotoSeleccionada?.id === action.payload.id
                    ? { ...state.fotoSeleccionada, favorita: !state.fotoSeleccionada.favorita }
                    : state.fotoSeleccionada
            };
        default:
            return state;
    }
}

const normalizeString = (str) => {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
};

export const GlobalContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        const fotosFiltradas = fotos.filter(foto => {
            const filtroPorTag = !state.tag || foto.tagId === state.tag;
            const filtroPorTitulo = !state.filtro || normalizeString(foto.titulo).includes(normalizeString(state.filtro));
            return filtroPorTag && filtroPorTitulo;
        });
        dispatch({ type: 'SET_FOTOS_DE_GALERIA', payload: fotosFiltradas });
    }, [state.filtro, state.tag]);

    return <GlobalContext.Provider value={{
        state, dispatch
    }}>
        {children}
    </GlobalContext.Provider>
}