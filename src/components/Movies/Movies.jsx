import React, { useEffect, useState } from 'react';
import './Movies.css';
import Axios from 'axios';
import Movie from '../Movie/Movie';

const Movies = (props) => {
    const [movies, setMovies] = useState([]);
    useEffect(() => {
        Axios.get(props.api).then(response => {
            setMovies(response.data.results)
        })
    }, [props.api]);
    return (
        <div>
            <h2 className="heading-title">{props.title}</h2>
            <div className="movies-list">
            {movies.map(movie => <Movie clicked={() => props.clicked(movie.id)} poster={props.poster} key={movie.id} {...movie} />)}
            </div>
        </div>
    )
}

export default Movies;
