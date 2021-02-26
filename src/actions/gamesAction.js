import axios from "axios";
import { popularGamesURL, upcomingGamesURL, newGamesURL } from "../api";

//action creator
//we have another arrow func that will have the dispatch and allow for async programming to fetch api
export const loadGames = () => async (dispatch) => {
  //fetch with axios
  const popularData = await axios.get(popularGamesURL());
  const upcomingData = await axios.get(upcomingGamesURL());
  const newGamesData = await axios.get(newGamesURL());
  dispatch({
    type: "FETCH_GAMES",
    payload: {
      popular: popularData.data.results,
      upcoming: upcomingData.data.results,
      newGames: newGamesData.data.results,
    },
  });
};
