import { Component } from "react";
import "./styles/game-board.css";
import { Images } from "../../assets/Images";

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
function updateScores(userGuess, numbers, method) {
  if (userGuess == initialFishes[0].name) {
    method({
      incorrectCount: numbers.incorrectCount,
      correctCount: numbers.correctCount + 1,
    });
  } else {
    method({
      incorrectCount: numbers.incorrectCount + 1,
      correctCount: numbers.correctCount,
    });
  }
}
export class ClassGameBoard extends Component {
  state = {
    userGuess: "",
  };
  updateScores(userGuess, scores, method) {
    if (userGuess == initialFishes[0].name) {
      method({
        incorrectCount: scores.incorrectCount,
        correctCount: scores.correctCount + 1,
      });
    } else {
      method({
        incorrectCount: scores.incorrectCount + 1,
        correctCount: scores.correctCount,
      });
    }
  }
  render() {
    const nextFishToName = initialFishes[0];
    const { scores } = this.props;
    console.log(this.props.handleUserScore);
    return (
      <div id="game-board">
        <div id="fish-container">
          <img src={nextFishToName.url} alt={nextFishToName.name} />
        </div>
        <form
          id="fish-guess-form"
          onSubmit={(e) => {
            e.preventDefault();
            this.setState({ userGuess: "" });
            this.props.updateScores(
              this.state.userGuess,
              scores,
              this.handleUserScore(scores)
            );
            initialFishes.splice(0, 1);
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
