const initialState = {
  popular: [],
  action: [],
  adventure: [],
  comedy: [],
  drama:[],
  horror:[],
  sci_fi:[],
  romance:[],
  documentary:[],
  searchResults: [],
  movieDetails: null,
  trailerUrl: null,
};

const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_MOVIES":
      return { ...state, [action.payload.category]: action.payload.movies };
    case "SET_SEARCH_RESULTS":
      return { ...state, searchResults: action.payload };
    case "SET_MOVIE_DETAILS":
      return { ...state, movieDetails: action.payload };
    case "SET_MOVIE_TRAILER":
      return { ...state, trailerUrl: action.payload };
    default:
      return state;
  }
};

export default movieReducer;
