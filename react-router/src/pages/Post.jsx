import React, { useEffect, useState } from "react";
import "../assets/css/componentes/card.css";
import { useParams, useNavigate } from "react-router-dom";
import { buscar } from "../api/api";
import '../assets/css/componentes/button.css';
import { Link } from "react-router-dom";

export const Post = () => {
    const [post, setPost] = useState(null);
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        buscar(`/posts/${id}`, setPost).catch(() => {
            navigate("/not-found")
        })
    }, [id])

    if (!post) {
        return <div className="container flex flex--center" style={{ marginTop: '50px' }}>
            <img src="./loading.gif" alt="loading" width={'50px'} style={{ marginTop: '80px' }} />
        </div>;
    }

    return (
        <main className="container flex flex--center" style={{ flexDirection: 'column' }}>
            <article className="card post">
                <h2 className="post-card__title">{post.title}</h2>
                <p className="text__card" style={{ lineHeight: '1.6' }}>{post.body}</p>
            </article>
            <Link to='/' className="button" style={{ cursor: 'pointer' }}>Regresar</Link>
        </main>
    );
};