import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Banner from "./components/Banner/Banner";
import Movies from "./components/Movies/Movies";
import { trending, action, adventure, comedy, crime, documentary, horror, romance, thriller } from "./api";
import MovieModal from "./components/MovieModal/MovieModal";
import Axios from "axios";
import { useState } from "react";
import { apiKey } from './api';

function App() {

  const [movie, setMovie] = useState();

  const closeHandler = () => {
    setMovie(null);
  };

  const handleClick = (id) => {
    console.log(id);
    Axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=en-US`).then(response => {
      setMovie({...response.data});
    });
    
  }
  return (
    <div>
    <div className={movie ? 'blur' : ''}>
      <Navbar />
      <Banner />
      <Movies clicked={handleClick} poster title='Trending' api={trending} />
      <Movies clicked={handleClick} title='Action' api={action} />
      <Movies clicked={handleClick} title='Adventure' api={adventure} />
      <Movies clicked={handleClick} title='Comedy' api={comedy} />
      <Movies clicked={handleClick} title='Crime' api={crime} />
      <Movies clicked={handleClick} title='Documentary' api={documentary} />
      <Movies clicked={handleClick} title='Horror' api={horror} />
      <Movies clicked={handleClick} title='Romance' api={romance} />
      <Movies clicked={handleClick} title='Thriller' api={thriller} />
      <div style={{
        paddingBottom: 30
      }}></div>
    </div>
    {movie && <MovieModal close={closeHandler} {...movie} />}
    </div>
  );
}

export default App;
