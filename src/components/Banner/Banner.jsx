import React, { useEffect, useState } from 'react';
import './Banner.css';
import Axios from 'axios';
import {apiKey} from './../../api';

const Banner = () => {
    const [movie, setMovie] = useState('');
    useEffect(() => {
        Axios.get(`https://api.themoviedb.org/3/trending/tv/day?api_key=${apiKey}`).then(response => {
            const singleMovie = response.data.results[Math.floor(Math.random() * 20)];
            setMovie({...singleMovie, overview: singleMovie.overview});
        });
    }, []);


    return (<div className='banner'>
        <div className='img-container'>
        <div className="after"></div>
            <img className='banner-image' src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} alt={movie.name}/>
        </div>
        <div className="connecting-overlay"></div>
        <div className='info-container'>
            <h1 className='banner-heading'>{movie.name}</h1>
            <p className='banner-discription'>{movie.overview}</p>
            <button className='banner-button'>play</button>
            <button className='banner-button'>my list</button>
        </div>
        </div>)
}

export default Banner;


