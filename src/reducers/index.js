import { combineReducers } from "redux";
import gamesReducer from "./gamesReducer";

//must import combineReducer function to combine all our reducers together into one obj to export into main index.js
const rootReducer = combineReducers({
  games: gamesReducer,
});

export default rootReducer;
