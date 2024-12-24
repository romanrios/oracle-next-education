import React, { useState, useEffect } from 'react';
import './Card.css';

export const Card = (props) => {
    const defaultImg = './img/profile.webp';
    const [imgSrc, setImgSrc] = useState(props.img || defaultImg);

    useEffect(() => {
        const img = new Image();
        img.src = props.img;
        img.onload = () => setImgSrc(props.img);
        img.onerror = () => setImgSrc(defaultImg);
    }, [props.img]);

    return <section className='Card'>
        <div className='Card_color' style={{ backgroundColor: props.color }}></div>
        <img src={imgSrc} alt="Foto de Perfil" />
        <h3>{props.name}</h3>
        <p>{props.charge}</p>
    </section>
}