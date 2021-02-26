import React, { useEffect } from "react";
//redux
import { useDispatch } from "react-redux";
import { loadGames } from "../actions/gamesAction";

const Home = () => {
  //fetch games
  const dispatch = useDispatch();
  //as soon as app loads it will run dispatch to fetch games
  useEffect(() => {
    dispatch(loadGames());
  });

  return (
    <div>
      <h1>Home</h1>
    </div>
  );
};

export default Home;
