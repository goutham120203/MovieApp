import axios from "axios";



const API_KEY = "49a5508b99e54cbf67438655e1565e32";
const API_BASE_URL = "https://api.themoviedb.org/3";

// Fetch movies by category
export const fetchMovies = (category) => async (dispatch) => {
  try {
    const genreMap = {
      action: 28,
      adventure: 12,
      comedy: 35,
      popular: "",
      drama:"18",
      horror:"27",
      sci_fi:"878",
      romance:"10749",
      documentary:"99"
    };
    const endpoint = genreMap[category] ? `/discover/movie?with_genres=${genreMap[category]}` : "/movie/popular";

    const { data } = await axios.get(`${API_BASE_URL}${endpoint}`, {
      params: { api_key: API_KEY, language: "en-US", page: 1 },
    });
    dispatch({ type: "SET_MOVIES", payload: { category, movies: data.results } });
  } catch (error) {
    console.error(`Error fetching ${category} movies:`, error);
  }
};

// Search movies by query
export const searchMovies = (query) => async (dispatch) => {
  try {
    const { data } = await axios.get(`${API_BASE_URL}/search/movie`, {
      params: { api_key: API_KEY, language: "en-US", query, page: 1 },
    });
    dispatch({ type: "SET_SEARCH_RESULTS", payload: data.results });
  } catch (error) {
    console.error("Error searching movies:", error);
  }
};

// Fetch movie trailer by movie ID
export const fetchMovieTrailer = (id) => async (dispatch) => {
  try {
    const { data } = await axios.get(`${API_BASE_URL}/movie/${id}/videos`, {
      params: { api_key: API_KEY, language: "en-US" },
    });
    const trailer = data.results.find(
      (video) => video.type === "Trailer" && video.site === "YouTube"
    );
    const trailerUrl = trailer ? `https://www.youtube.com/embed/${trailer.key}` : null;
    dispatch({ type: "SET_MOVIE_TRAILER", payload: trailerUrl });
  } catch (error) {
    console.error("Error fetching trailer:", error);
  }
};

export const fetchMovieDetails = (id) => async (dispatch) => {
  try {
    const { data } = await axios.get(`${API_BASE_URL}/movie/${id}`, {
      params: { api_key: API_KEY, language: "en-US" },
    });
    dispatch({ type: "SET_MOVIE_DETAILS", payload: data });
  } catch (error) {
    console.error("Error fetching movie details:", error);
  }
};

