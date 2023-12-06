import "./App.css";
import Header from "./components/Header/Header";
import MovieList from "./components/movie list/movie list";
import MovieInfo from "./components/movie info/movie info";

function App() {
  const selectedMovie = {
    title: "Forrest Gump",
    runningTime: 142,
    genre: "Romantic Drama",
  };

  return (
    <div className="App">
      <Header />
      <MovieList />
      <MovieInfo movieObj={selectedMovie} />
    </div>
  );
}

export default App;
