import React from "react";
import { movies } from "../data";

function Movies() {
  const movieList = movies.map((movie) => {
    return(
      <div key={movie.title}>
        <h3>Name: {movie.title}</h3>
        Time: {movie.time}
        <br />
        <br />
        Genres:
        <ul>{movie.genres.map((item) => <li key={item}>{item}</li>)}</ul>
      </div>
    )
  })

  return (
    <>
      <h1>Movies Page</h1>
      {movieList}
    </>
  );
}

export default Movies;
