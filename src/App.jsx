import "./App.css";
import Header from "./components/Header/Header";
import MovieList from "./components/movie list/movie list";
import MovieInfo from "./components/movie info/movie info";
import NewMovieForm from "./components/NewMovieForm/NewMovieForm";

function App() {
  const selectedMovie = {
    title: "Forrest Gump",
    runningTime: 142,
    genre: "Romantic Drama",
  };

  return (
    <div className="App">
      <Header />
      <div className="flex-container">
        <MovieList />
        <MovieInfo movieObj={selectedMovie} />
        <NewMovieForm />
      </div>
    </div>
  );
}

export default App;
