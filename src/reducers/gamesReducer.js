//initState is the reducer state, so gameReducer's state is initState
const initState = {
  popular: [],
  newGames: [],
  upComing: [],
  searched: [],
};

//takes in two params, state and action, where state is set to initState
const gamesReducer = (state = initState, action) => {
  switch (action.type) {
    case "FETCH_GAMES":
      return {
        ...state,
        popular: action.payload.popular,
        upcoming: action.payload.upcoming,
        newGames: action.payload.newGames,
      }; //we are setting the popular field in initState specifically here
    default:
      return { ...state };
  }
};

//action creator
const fetchGames = (userData) => {
  return {
    type: "FETCH_GAMES",
    payload: userData,
  };
};

export default gamesReducer;
