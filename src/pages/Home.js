import React, { useEffect } from "react";
//redux
import { useDispatch, useSelector } from "react-redux";
import { loadGames } from "../actions/gamesAction";
//components
import Game from "../components/Game";
//styling and animation
import styled from "styled-components";
import { motion } from "framer-motion";

const Home = () => {
  //fetch games
  const dispatch = useDispatch();
  //as soon as app loads it will run dispatch to fetch games with useEffect
  useEffect(() => {
    dispatch(loadGames());
  }, [dispatch]);
  //get data back from state by extracting the specific info from state.games
  const { popular, newGames, upcoming } = useSelector((state) => state.games);

  return (
    <GameList>
      <h2>Upcoming Games</h2>
      <Games>
        {upcoming &&
          upcoming.map((game) => (
            <Game
              name={game.name}
              released={game.released}
              id={game.id}
              image={game.background_image}
              key={game.id}
            />
          ))}
      </Games>
    </GameList>
  );
};

const GameList = styled(motion.div)`
  padding: 0rem 5rem;
  h2 {
    padding: 5rem 0rem;
  }
`;

const Games = styled(motion.div)`
  min-height: 80vh;
  display: grid;
  grid-template-columns: repeat(
    auto-fit,
    minmax(500px, 1fr)
  ); //repeat grid space and autofit it to the page, and make it so the min space it takes is 500px but if there's empty space, then 1fr means take up the rest of the space available
  grid-column-gap: 3rem;
  grid-row-gap: 5rem;
`;

export default Home;
