import { Component } from "react";
import { ClassScoreBoard } from "./ClassScoreBoard";
import { ClassGameBoard } from "./ClassGameBoard";
import { ClassFinalScore } from "./ClassFinalScore";
import { initialFishes } from "../../constants/data";

export class ClassApp extends Component {
  state = {
    incorrectCount: 0,
    correctCount: 0,
  };
  render() {
    const index = this.state.correctCount + this.state.incorrectCount;
    const isGameOver = index === initialFishes.length;
    return (
      <>
        <>
          {!isGameOver && (
            <>
              <ClassScoreBoard scores={this.state} />
              <ClassGameBoard
                scores={this.state}
                handleUserScore={(newScore) => {
                  this.setState({
                    correctCount: newScore.correctCount,
                    incorrectCount: newScore.incorrectCount,
                  });
                }}
              />
            </>
          )}
        </>
        {isGameOver && <ClassFinalScore scores={this.state} />}
      </>
    );
  }
}
