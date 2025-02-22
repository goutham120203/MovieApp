import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchMovies } from "../redux/movieActions";
import { useNavigate } from "react-router-dom";
import "./MovieGrid.css";

const MovieGridRedux = ({ category }) => {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movies[category]);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchMovies(category));
  }, [dispatch, category]);

  const openMovieDetails = (id) => {
    navigate(`/movie/${id}`);
  };

  return (
    <div className="movie-grid">
      <h2>{category.charAt(0).toUpperCase() + category.slice(1)} Movies</h2>
      {movies.map((movie) => (
        <div key={movie.id} className="movie-card" onClick={() => openMovieDetails(movie.id)}>
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
          />
          <h3>{movie.title}</h3>
          <p>{movie.release_date}</p>
        </div>
      ))}
    </div>
  );
};

export default MovieGridRedux;
