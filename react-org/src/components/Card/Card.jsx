import React, { useState, useEffect } from 'react';
import './Card.css';
import { AiFillCloseCircle } from "react-icons/ai";
import { FaHeart, FaRegHeart } from "react-icons/fa6";
import Swal from 'sweetalert2';

export const Card = (props) => {
    const defaultImg = './img/profile.jpeg';
    const [imgSrc, setImgSrc] = useState(props.img || defaultImg);

    useEffect(() => {
        const img = new Image();
        img.src = props.img;
        img.onload = () => setImgSrc(props.img);
        img.onerror = () => setImgSrc(defaultImg);
    }, [props.img]);

    const confirmDelete = (id) => {
        Swal.fire({
            title: '¿Estás seguro?',
            text: "Eliminarás a este miembro del equipo.",
            icon: 'warning',
            showCancelButton: true,
            cancelButtonText: 'Cancelar',
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sí, borrarlo',
            customClass: {
                title: 'swal2-title',
                content: 'swal2-content',
                confirmButton: 'swal2-confirm',
                cancelButton: 'swal2-cancel'
            }
        }).then((result) => {
            if (result.isConfirmed) {
                props.removeMember(id);
                Swal.fire(
                    '¡Hecho!',
                    'El colaborador fue borrado.',
                    'success'
                );
            }
        });
    };

    return <section className='Card'>
        <div className='Card_color' style={{ backgroundColor: props.color }}></div>
        <AiFillCloseCircle className='Card_icon_delete' onClick={() => confirmDelete(props.id)} />
        <img src={imgSrc} alt="Foto de Perfil" />
        <h3>{props.name}</h3>
        <p>{props.charge}</p>
        {props.fav
            ? <FaHeart className='Card_icon_heart' onClick={() => props.likeMember(props.id)} />
            : <FaRegHeart className='Card_icon_heart not_liked' onClick={() => props.likeMember(props.id)} />}
    </section>
}