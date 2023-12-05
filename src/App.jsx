import "./App.css";
import Header from "./components/Header/Header";
import MovieList from "./components/movie list/movie list";
import MovieInfo from "./components/movie info/movie info";

function App() {
  return (
    <div className="App">
      <Header />
      <MovieList />
      <MovieInfo
        title="Forrest Gump"
        runningTime={142}
        genre="Romantic Drama"
      />
    </div>
  );
}

export default App;
