import React from "react";

function MovieCard({ movie, handleOnRemove, handleOnAdd }) {
  return (
    <div>
      <div class="card" style={{ width: "18rem" }}>
        <img src={movie.Poster} class="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{movie.Title}</h5>
          <p className="card-text">
            <div>Rate: {movie.imdbRating}</div>
            <div>Award: {movie.Awards}</div>
            {movie.choice && <div>Choice:{movie.choice}</div>}
          </p>
          {handleOnAdd && (
            <div className="d-flex justify-content-between mb-1">
              <button
                className="btn btn-primary"
                onClick={() => handleOnAdd(movie, "awesome")}
              >
                Awesome
              </button>
              <button
                className="btn btn-warning"
                onClick={() => handleOnAdd(movie, "boring")}
              >
                Boring
              </button>
            </div>
          )}

          <div className="d-grid">
            <button className="btn btn-danger " onClick={handleOnRemove}>
              Remove
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
