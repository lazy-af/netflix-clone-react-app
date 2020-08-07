import React from "react";
import "./MovieModal.css";
const MovieModal = (props) => {
  console.log(props);
  return (
    <div className="modal">
      <div className="container">
        <div className="img-container-modal">
          <img
            className="backdrop-image-modal"
            src={`https://image.tmdb.org/t/p/original${props.backdrop_path}`}
            alt="poster"
          />
          <img
            className="poster-image-modal"
            src={`https://image.tmdb.org/t/p/original${props.poster_path}`}
            alt="poster"
          />
          <div onClick={props.close} className="close">
            &#x274C;
          </div>
        </div>
        <div className="info-container-modal">
          <h1>{props.name || props.title}</h1>
          <h4>
            <em>{props.tagline}</em>
          </h4>
          <p className="discription">{props.overview}</p>
          <p>
            Tags:{" "}
            {props.genres.map((tag) => (
              <span key={tag.id} className="tag">
                {tag.name}
              </span>
            ))}
          </p>
          <p>
            Popularity:{" "}
            <strong>
              <em>{Math.floor(props.popularity)}</em>
            </strong>
          </p>
          <p>
            Rating:{" "}
            <strong>
              <em>{props.vote_average}</em>
            </strong>
          </p>
          <p>
            Release Date:{" "}
            <strong>
              <em>{props.release_date}</em>
            </strong>
          </p>
          <div className="button-container">
            <button className="button-modal">PLAY</button>
            <button className="button-modal">WATCH TRAILER</button>
          </div>
          <div onClick={props.close} className="close-big">
            &#x274C;
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieModal;
