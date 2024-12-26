import React, { useEffect, useState } from "react";
import "../assets/css/componentes/card.css";
import { buscar } from "../api/api";
import { Link } from "react-router-dom";

export const ListPosts = (props) => {

    const [posts, setPosts] = useState(null);

    useEffect(() => {
        buscar(props.url, setPosts)
    }, [props.url])

    if (!posts) {
        return <div className="posts container" style={{ marginTop: '50px' }}>
            <img src="./loading.gif" alt="loading" width={'50px'} style={{ marginTop: '80px' }} />
        </div>;
    }

    return <section className="posts container">
        {posts.map((post) =>
            <Link to={`post/${post.id}`} key={post.id} className={`post__card post-card--${post.categoria}`}>
                <h3 className="post-card__title">{post.title}</h3>
                <p className="post-card__meta">{post.metadescription}</p>
            </Link>
        )}

    </section>
}