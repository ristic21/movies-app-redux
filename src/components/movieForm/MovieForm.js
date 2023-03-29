import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMovie } from "../../store/movie/slice";
import { moviesSelector } from "../../store/movie/selectors";

const MovieForm = () => {
  const movies = useSelector(moviesSelector);

  // console.log('Movie iz reduxa: ', movies)
  const dispatch = useDispatch();

  const [movie, setMovie] = useState({
    title: "",
    description: "",
    year: "",
    genre: "",
  });

  const handleGetMovie = () => {
    dispatch(addMovie(movie));
  };

  // const handleTitleChange = (newTitle) => {

  //     const newMovie = {...movie, title: newTitle};

  //     setMovie(newMovie);

  // }

  return (
    <div>
      <div>
        <label htmlFor="title">Title: </label>
        <input
          name="title"
          onChange={(e) => setMovie({ ...movie, title: e.target.value })}
          value={movie.title}
        ></input>
        <label htmlFor="desc">Description: </label>
        <input
          name="desc"
          onChange={(e) => setMovie({ ...movie, description: e.target.value })}
          value={movie.description}
        ></input>
        <label htmlFor="year">Year: </label>
        <input
          name="year"
          onChange={(e) => setMovie({ ...movie, year: e.target.value })}
          value={movie.year}
        ></input>
        <label htmlFor="desc">Genre: </label>
        <input
          name="desc"
          onChange={(e) => setMovie({ ...movie, genre: e.target.value })}
          value={movie.genre}
        ></input>
        <button onClick={handleGetMovie}>Set another movie</button>
      </div>
    </div>
  );
};

export default MovieForm;
