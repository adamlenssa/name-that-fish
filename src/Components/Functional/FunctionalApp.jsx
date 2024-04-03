import { FunctionalGameBoard } from "./FunctionalGameBoard";
import { FunctionalScoreBoard } from "./FunctionalScoreBoard";
import { FunctionalFinalScore } from "./FunctionalFinalScore";
import { useState } from "react";

export function FunctionalApp() {
  const [userGuess, setUserGuess] = useState({ guess: "" });
  const [score, setScore] = useState({ correctCount: 0, incorrectCount: 0 });
  return (
    <>
      {false && <FunctionalFinalScore />}
      <FunctionalScoreBoard scores={score} />
      <FunctionalGameBoard numbers={score} handleUserScore={setScore} />
      {/* {console.log()} */}
    </>
  );
}
