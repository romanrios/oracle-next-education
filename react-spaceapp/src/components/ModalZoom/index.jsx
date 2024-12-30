import styled from "styled-components";
import { Imagen } from "../Galeria/Imagen";
import { BotonIcono } from "../BotonIcono";
import { useFotoModal } from "../../hooks/useFotoModal";

const Overlay = styled.div`
    background-color: rgba(0,0,0,.7);
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
`;

const DialogEstilizado = styled.dialog`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: transparent;
    padding: 0;
    border: 0;
    width: 1156px;
    width: 50%;
    display: flex;
    justify-content: center;
    form {
        button {
            position: absolute;
            top: 20px;
            right: 20px;
        }
    }
`;

export const ModalZoom = () => {
    const { estaAbiertoModal, fotoSeleccionada, cerrarModal } = useFotoModal();

    return (
        <>
            {estaAbiertoModal && (
                <>
                    <Overlay />
                    <DialogEstilizado open={!!fotoSeleccionada} onClose={cerrarModal}>
                        <Imagen foto={fotoSeleccionada} expandida={true} />
                        <form method="dialog">
                            <BotonIcono formMethod="dialog" >
                                <img src="./iconos/cerrar.png" alt="Icono de cerrar" />
                            </BotonIcono>
                        </form>
                    </DialogEstilizado>
                </>
            )}
        </>
    );
};