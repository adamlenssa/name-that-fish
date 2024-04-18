import { Component } from "react";
import "./styles/game-board.css";
import { initialFishes } from "../../constants/data";
import { answersLeft } from "./ClassScoreBoard";

export class ClassGameBoard extends Component {
  state = {
    userGuess: "",
  };
  updateScores(userGuess, scores, currentFish) {
    const params = userGuess == currentFish ? [1, 0] : [0, 1];
    return {
      incorrectCount: scores.incorrectCount + params[1],
      correctCount: scores.correctCount + params[0],
    };
  }
  render() {
    const { scores, handleUserScore } = this.props;
    const index = scores.correctCount + scores.incorrectCount;
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
            const newScore = this.updateScores(
              this.state.userGuess,
              scores,
              nextFishToName.name
            );
            this.setState({ userGuess: "" });
            handleUserScore({
              correctCount: newScore.correctCount,
              incorrectCount: newScore.incorrectCount,
            });
            answersLeft.splice(0, 1);
          }}
        >
          <label htmlFor="fish-guess">What kind of fish is this?</label>
          <input
            type="text"
            name="fish-guess"
            value={this.state.userGuess}
            onChange={(e) => this.setState({ userGuess: e.target.value })}
          />
          <input type="submit" />
        </form>
      </div>
    );
  }
}
