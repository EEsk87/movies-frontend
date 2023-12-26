import "./App.css";
import Header from "./components/Header/Header";
import MovieList from "./components/movie list/MovieList";
import MovieInfo from "./components/movie info/MovieInfo";
import NewMovieForm from "./components/NewMovieForm/NewMovieForm";
import React, { useState, useEffect } from "react";
import initData from "./ Data/data";

function App() {
  const [movies, setMovies] = useState([]);
  const [activeIndex, setActiveIndex] = useState(-1);

  useEffect(() => {
    setMovies(initData);
  }, []);

  const handleNewMovie = (newMovie) => {
    const updatedMovies = [...movies, newMovie];
    setMovies(updatedMovies);
  };

  const selectedMovie = movies[activeIndex];

  return (
    <div className="App">
      <Header />
      <div className="flex-container">
        <MovieList
          movies={movies}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        />
        <MovieInfo movieObj={selectedMovie} />
        <NewMovieForm onNewMovie={handleNewMovie} />
      </div>
    </div>
  );
}

export default App;
