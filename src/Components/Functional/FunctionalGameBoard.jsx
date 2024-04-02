import "./styles/game-board.css";
import { Images } from "../../assets/Images";
import { useState } from "react";

const initialFishes = [
  {
    name: "trout",
    url: Images.trout,
  },
  {
    name: "salmon",
    url: Images.salmon,
  },
  {
    name: "tuna",
    url: Images.tuna,
  },
  {
    name: "shark",
    url: Images.shark,
  },
];

export function FunctionalGameBoard() {
  const [index, setIndex] = useState(0);
  const [userGuess, setUserGuess] = useState("");

  const nextFishToName = initialFishes[index];
  return (
    <div id="game-board">
      <div id="fish-container">
        <img src={nextFishToName.url} alt={nextFishToName.name} />
      </div>
      <form
        id="fish-guess-form"
        onSubmit={(e) => {
          e.preventDefault();
          handleUserGuess({ guess: userGuess });
          console.log(handleUserGuess);
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
