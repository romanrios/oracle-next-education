import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";


export const useFotoModal = () => {
    const { state, dispatch } = useContext(GlobalContext)

    const abrirModal = (foto) => {
        dispatch({ type: 'SET_FOTO_SELECCIONADA', payload: foto });
    };

    const cerrarModal = () => {
        dispatch({ type: 'SET_FOTO_SELECCIONADA', payload: null });
    };

    const fotoSeleccionada = state.fotoSeleccionada;

    const estaAbiertoModal = state.modalAbierto;

    return { abrirModal, cerrarModal, fotoSeleccionada, estaAbiertoModal };
};