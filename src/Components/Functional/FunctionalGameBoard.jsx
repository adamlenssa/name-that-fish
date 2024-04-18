import { useState } from "react";
import "./styles/game-board.css";

import { initialFishes } from "../../constants/data";
import { answersLeft } from "./FunctionalScoreBoard";

export function FunctionalGameBoard({ scores, handleUserScore }) {
  const [userGuess, setUserGuess] = useState("");
  const index = scores.correctCount + scores.incorrectCount;
  const nextFishToName = initialFishes[index];
  function updateScores(userGuess, numbers, method, currentFish) {
    const params = userGuess == currentFish.name ? [1, 0] : [0, 1];
    method({
      correctCount: numbers.correctCount + params[0],
      incorrectCount: numbers.incorrectCount + params[1],
    });
  }
  return (
    <div id="game-board">
      <div id="fish-container">
        <img src={nextFishToName.url} alt={nextFishToName.name} />
      </div>
      <form
        id="fish-guess-form"
        onSubmit={(e) => {
          e.preventDefault();
          setUserGuess("");
          updateScores(userGuess, scores, handleUserScore, nextFishToName);
          answersLeft.splice(0, 1);
        }}
      >
        <label htmlFor="fish-guess">What kind of fish is this?</label>
        <input
          type="text"
          name="fish-guess"
          value={userGuess}
          onChange={(e) => {
            setUserGuess(e.target.value);
          }}
        />
        <input type="submit" />
      </form>
    </div>
  );
}
