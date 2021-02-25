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
      return { ...state };
    default:
      return { ...state };
  }
};

export default gamesReducer;
