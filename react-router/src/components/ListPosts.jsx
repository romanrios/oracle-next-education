import React, { useEffect, useState } from "react";
import "../assets/css/componentes/card.css";
import { buscar } from "../api/api";
import { Link } from "react-router-dom";

export const ListPosts = (props) => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        buscar(props.url, setPosts)
    }, [props.url])

    return <section className="posts container">
        {posts.map((post) => 
            <Link to={`posts/${post.id}`} key={post.id} className={`post__card post-card--${post.categoria}`}>
                <h3 className="post-card__title">{post.title}</h3>
                <p className="post-card__meta">{post.metadescription}</p>
            </Link>
        )}

    </section>
}