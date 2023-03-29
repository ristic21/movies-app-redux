import React from "react";
import { useSelector } from "react-redux";
import { moviesSelector } from "../../store/movie/selectors";

const MovieTextComponent = () => {
  const movies = useSelector(moviesSelector);

  return movies.map((movie, index) => (
    <div key={index}>
      <p>Title: {movie.title}</p>
      <p>Description: {movie.description}</p>
      <p>Year: {movie.year}</p>
      <p>Genre: {movie.genre}</p>
    </div>
  ));
};

export default MovieTextComponent;
