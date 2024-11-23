import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./MovieGrid.css";

function SearchResults() {
  const searchResults = useSelector((state) => state.movies.searchResults);
  const navigate = useNavigate();

  const handleMovieClick = (movieId) => {
    navigate(`/movie/${movieId}`); // Programmatically navigate to movie details
  };

  return (
    <div className="movie-grid">
      <h2>Search Results</h2>
      {searchResults.length ? (
        searchResults.map((movie) => (
          <div
            key={movie.id}
            className="movie-card"
            onClick={() => handleMovieClick(movie.id)} // Call handleMovieClick on click
            style={{ cursor: "pointer" }}
          >
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
            <h3>{movie.title}</h3>
            <p>{movie.release_date}</p>
          </div>
        ))
      ) : (
        <p>No results found.</p>
      )}
    </div>
  );
}

export default SearchResults;
