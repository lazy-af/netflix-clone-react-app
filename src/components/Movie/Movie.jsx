import React from 'react'
import './Movie.css';

const Movie = (props) => {
    return (
        <div className='movie-container' onClick={props.clicked}>
                {props.poster ? <img className='poster-image' src={`https://image.tmdb.org/t/p/original${props.poster_path}`} alt={props.name}/> : <img className='poster-image' src={`https://image.tmdb.org/t/p/original${props.backdrop_path}`} alt={props.title}/>}
                <p>{props.title}</p>
        </div>
    )
}

export default Movie
