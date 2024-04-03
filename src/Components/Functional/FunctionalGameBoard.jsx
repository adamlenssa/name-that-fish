import "./styles/game-board.css";
import { Images } from "../../assets/Images";
import { useState } from "react";

export const initialFishes = [
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

function check(userGuess, numbers, method) {
  if (userGuess == initialFishes[0].name) {
    method({
      correctCount: numbers.correctCount + 1,
      incorrectCount: numbers.incorrectCount,
    });
    console.log(numbers);
  } else {
    method({
      correctCount: numbers.correctCount,
      incorrectCount: numbers.incorrectCount + 1,
    });
    console.log(numbers);
  }
}
export function FunctionalGameBoard({ numbers, handleUserScore }) {
  const [userGuess, setUserGuess] = useState("");
  const nextFishToName = initialFishes[0];
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
          check(userGuess, numbers, handleUserScore);
          initialFishes.splice(0, 1);
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
