import { useState, useEffect } from 'react';
import "../assets/css/blog.css";
import { buscar } from '../api/api';
import { ListCategories } from '../components/ListCategories';
import { ListPosts } from '../components/ListPosts';
import { SubCategoria } from './SubCategoria';
import { useParams, Routes, Route, Link, useResolvedPath, useMatch } from 'react-router-dom';

export const Categoria = () => {
    const [subcategorias, setSubcategorias] = useState([]);
    const { id } = useParams();
    const url = useResolvedPath("").pathname;
    const match = useMatch("/categoria/:id/*");

    useEffect(() => {
        buscar(`/categorias?id=${id}`, (response) => {
            if (response.length > 0) {
                setSubcategorias(response[0].subcategorias);
            }
        });
    }, [id]);

    return (
        <>
            <div className='container'>
                <h2 className='title-page'>Pet Noticias</h2>
            </div>
            <ListCategories />
            <ul className='category-list container flex'>
                {
                    subcategorias.map(subcategoria => (
                        <li className={`category-list__category category-list__category--${id}`} key={subcategoria}>
                            <Link to={`${match.pathnameBase}/${subcategoria}`}>
                                {subcategoria}
                            </Link>
                        </li>
                    ))
                }
            </ul>
            <Routes>
                <Route path='/' element={<ListPosts url={`/posts?categoria=${id}`} />} />
                <Route path='/:subcategoria' element={<SubCategoria />} />
            </Routes>
        </>
    );
};