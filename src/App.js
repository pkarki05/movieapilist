import { useState } from "react";
import "./App.css";
import SearchForm from "./components/SearchForm";
import MovieList from "./components/MovieList";

function App() {
  const [movieList, setMovieList] = useState([]);
  const addMovieToList = (movie, type) => {
    // console.log("movies is added", movie);
    // console.log("type of movie", type);
    const newMovie = { ...movie, choice: type };
    // setMovieList([...movieList, newMovie]);
    console.log(newMovie);
    const alreadyHasMovie =
      movieList.filter((m) => m.imdbID === movie.imdbID).length > 0;
    if (alreadyHasMovie) {
      return;
    }
    setMovieList([...movieList, newMovie]);
  };

  const removeMovieFromlist = (movie) => {
    const newArr = movieList.filter((m) => m.imdbID !== movie.imdbID);
    setMovieList(newArr);
  };

  return (
    <div className="wrapper bg-dark text-warning">
      <div className="container">
        <div className="row">
          <div className="col text-center">
            <h1>My Movie API List</h1>
            <hr></hr>
          </div>
        </div>
        <SearchForm addMovieToList={addMovieToList} />
        <MovieList movieList={movieList} handleOnRemove={removeMovieFromlist} />
      </div>
    </div>
  );
}

export default App;
