import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";

function MovieList({ movieList, handleOnRemove }) {
  const [displayList, setDisplayList] = useState([]);

  useEffect(() => {
    setDisplayList(movieList);
  }, [movieList]);

  const filterMovie = (filterBy) => {
    console.log("filter by", filterBy);
    if (filterBy === "all") {
      setDisplayList(movieList);
    } else {
      const filterArr = movieList.filter((movie) => movie.choice === filterBy);
      setDisplayList(filterArr);
    }
  };
  return (
    <div>
      <hr></hr>
      <div
        className="btn-group"
        role="group"
        aria-label="Basic mixed styles example"
      >
        <button
          type="button"
          className="btn btn-danger"
          onClick={() => filterMovie("all")}
        >
          All
        </button>
        <button
          type="button"
          className="btn btn-warning"
          onClick={() => filterMovie("boring")}
        >
          Boring
        </button>
        <button
          type="button"
          className="btn btn-success"
          onClick={() => filterMovie("awesome")}
        >
          Awesome
        </button>
      </div>
      <div className="row row-cols-1 row-cols-md-3 g-4 mt-3">
        {displayList.map((movie) => (
          <MovieCard
            movie={movie}
            key={movie.imdbID}
            handleOnRemove={() => handleOnRemove(movie)}
          />
        ))}
      </div>
    </div>
  );
}

export default MovieList;
