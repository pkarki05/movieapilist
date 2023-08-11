import React, { useState } from "react";
import axios from "axios";
import MovieCard from "./MovieCard";

function SearchForm({ addMovieToList }) {
  const [form, setForm] = useState("");
  const [movie, setMovie] = useState({});
  const [isError, setIsError] = useState(false);
  const handleOnChange = (e) => {
    setIsError(false);
    setForm(e.target.value);
  };
  const handleAddMovieAndClear = (movie, type) => {
    addMovieToList(movie, type);
    setForm("");
    setMovie({});
  };
  const imdbID = "http://www.omdbapi.com/?i=tt3896198&apikey=ca7a06b1&t=";
  const handleOnSubmit = async (e) => {
    e.preventDefault();
    console.log("submitted");
    axios.get(imdbID);
    try {
      const respose = await axios.get(imdbID + form);
      if (respose.data.imdbID) {
        setMovie(respose.data);
      } else {
        setIsError(true);
        setMovie({});
      }
    } catch (e) {
      setIsError(true);
      setMovie({});
    }
  };
  // setMovie(respose.data);
  // console.log(respose.data);

  const handleOnRemove = (e) => {
    e.preventDefault();
    setMovie({});
  };

  return (
    <div>
      <form action="" onSubmit={handleOnSubmit}>
        <div className="row">
          <div className="col-9">
            <div className="mb-3">
              <input
                value={form}
                type="text"
                className="form-control"
                id="exampleInputEmail"
                aria-describedby="emailHelp"
                onChange={handleOnChange}
              ></input>
            </div>
          </div>

          <div className="col-3">
            <button className="btn btn-warning">
              <i className="fa-solid fa-magnifying-glass"></i>search
            </button>
          </div>
        </div>
      </form>
      {movie.imdbID && (
        <MovieCard
          movie={movie}
          handleOnAdd={handleAddMovieAndClear}
          handleOnRemove={handleOnRemove}
        />
      )}
      {isError && (
        <div className="alert alert-warning" role="alert">
          No Movie Found!
        </div>
      )}
    </div>
  );
}
export default SearchForm;
