// src/components/MovieDetails.js
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchMovieDetails, fetchMovieTrailer } from "../redux/movieActions";
import './MovieDetails.css';

function MovieDetails() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const movieDetails = useSelector((state) => state.movies.movieDetails);
  const trailerUrl = useSelector((state) => state.movies.trailerUrl);

  useEffect(() => {
    dispatch(fetchMovieDetails(id));
    dispatch(fetchMovieTrailer(id));  // Dispatch action to get the trailer
  }, [dispatch, id]);

  if (!movieDetails) return <p className="loading">Loading...</p>;

  return (
    <div className="movie-details">
      <img
        src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`}
        alt={movieDetails.title}
      />
      <h1>{movieDetails.title}</h1>
      <h3>Overview</h3>
      <p>{movieDetails.overview}</p> 

      {/* Movie Trailer */}
      {trailerUrl ? (
        <div className="trailer-container">
          <h2>Trailer</h2>
          <iframe
            width="560"
            height="315"
            src={trailerUrl}
            title="Movie Trailer"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      ) : (
        <p>Trailer not available</p>
      )}
    </div>
  );
}

export default MovieDetails;
