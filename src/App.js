import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    correctGuessCount: 0,
    wrongGuessCount: 0,
    questionsAnswered: {
      0: null,
      1: null,
      2: null,
      3: null,
      4: null,
    },
  };

  onCorrectAnswer = (questionNumber) => {
    console.log('Correct!');

    this.setState({
      correctGuessCount: this.state.correctGuessCount + 1,
    });

    this.state.questionsAnswered[questionNumber] = true;
    this.setState({
      questionsAnswered: this.state.questionsAnswered,
    });
  }

  onWrongAnswer = (questionNumber) => {
    console.log('Wrong!');

    this.setState({
      wrongGuessCount: this.state.wrongGuessCount + 1,
    });

    this.state.questionsAnswered[questionNumber] = false;
    this.setState({
      questionsAnswered: this.state.questionsAnswered,
    });
  }

  renderQuizResults = () => {
    return (
      <h1 className="Header">
        You got {this.state.correctGuessCount}/5 correct! Good job.
      </h1>
    );
  }

  render() {
    console.log('rendering with state:', this.state);

    if (this.state.correctGuessCount + this.state.wrongGuessCount > 4) {
      return this.renderQuizResults();
    }
    return (
      <div className="QuestionContainer">
        <h1 className="Header">Cyberpunk Quiz</h1>
        <div className="Guesses">
          {
            this.state.correctGuessCount > 4 ? (
              <h2>Good Job!</h2>
            ) : (
                null
              )
          }
          Correct guesses: {this.state.correctGuessCount}<br />
          Wrong guesses: {this.state.wrongGuessCount}
        </div>

        <div className="Question">
          <p className="Question-prompt">When was the original Bladerunner movie released in US theaters?</p>
          <img className="Question-image" src="https://media.giphy.com/media/qWTiWlBanjIVG/giphy.gif" alt="dragon eggies" />
          {
            this.state.questionsAnswered[0] !== null ? (
              <div className="Question-explanation">
                <h2>{this.state.questionsAnswered[0] ? 'Correct' : 'Wrong'}</h2>
                The release date for Bladerunner in US theaters was June 25, 1982.
              </div>
            ) : (
                <div className="Question-options">
                  <button onClick={() => this.onWrongAnswer(0)}>1. October 25, 1982</button>
                  <button onClick={() => this.onCorrectAnswer(0)}>2. June 25, 1982</button>
                  <button onClick={() => this.onWrongAnswer(0)}>3. Dec 25, 1985</button>
                  <button onClick={() => this.onWrongAnswer(0)}>4. Jan 15, 2000</button>
                </div>
              )
          }
        </div>

        <div className="Question">
          <p className="Question-prompt">Who is the main protagonist of Ghost in the Shell</p>
          <img className="Question-image" src="https://media.giphy.com/media/10dXd0Y4uBk304/giphy.gif" alt="spooky man" />

          {
            this.state.questionsAnswered[1] !== null ? (
              <div className="Question-explanation">
                <h2>{this.state.questionsAnswered[1] ? 'Correct' : 'Wrong'}</h2>
                Major is the correct answer!
              </div>
            ) : (
                <div className="Question-options">
                  <button onClick={() => this.onCorrectAnswer(1)}>1. Major</button>
                  <button onClick={() => this.onWrongAnswer(1)}>2. Ivan</button>
                  <button onClick={() => this.onWrongAnswer(1)}>3. Tetsuo</button>
                  <button onClick={() => this.onWrongAnswer(1)}>4. Neo</button>
                </div>
              )
          }

        </div>

        <div className="Question">
          <p className="Question-prompt">In Akira, what is on the back of Shotaro Kaneda's jacket</p>
          <img className="Question-image" src="https://media.giphy.com/media/Fjse6pZaJfBDy/giphy.gif" alt="frosty boye" />

          {
            this.state.questionsAnswered[2] !== null ? (
              <div className="Question-explanation">
                <h2>{this.state.questionsAnswered[2] ? 'Correct' : 'Wrong'}</h2>
                On the back of his red jacket is a capsule.
              </div>
            ) : (
                <div className="Question-options">
                  <button onClick={() => this.onWrongAnswer(2)}>1. Tetris</button>
                  <button onClick={() => this.onWrongAnswer(2)}>2. Hockey puck</button>
                  <button onClick={() => this.onCorrectAnswer(2)}>3. Capsule</button>
                  <button onClick={() => this.onWrongAnswer(2)}>4. Dog bone</button>
                </div>
              )
          }
        </div>

        <div className="Question">
          <p className="Question-prompt">Which city does Robocop protect and serve?</p>
          <img className="Question-image" src="https://media.giphy.com/media/BWeTwLAju2cZq/giphy.gif" alt="doggo" />

          {
            this.state.questionsAnswered[3] !== null ? (
              <div className="Question-explanation">
                <h2>{this.state.questionsAnswered[3] ? 'Correct' : 'Wrong'}</h2>
                Robotcop is a member of the Detroit Police Department.
              </div>
            ) : (
                <div className="Question-options">
                  <button onClick={() => this.onWrongAnswer(3)}>1. Washington, DC</button>
                  <button onClick={() => this.onCorrectAnswer(3)}>2. Detroit, Michigan</button>
                  <button onClick={() => this.onWrongAnswer(3)}>3. Las Vegas, Nevada</button>
                  <button onClick={() => this.onWrongAnswer(3)}>4. Chicago, Illinois</button>
                </div>
              )
          }

        </div>

        <div className="Question">
          <p className="Question-prompt">What legendary cyberpunk noval is Hero Protagonist from?</p>
          <img className="Question-image" src="https://media.giphy.com/media/WfwzZpfH8Ejra/giphy.gif" alt="stay a-head, ned!" />
          {
            this.state.questionsAnswered[4] !== null ? (
              <div className="Question-explanation">
                <h2>{this.state.questionsAnswered[4] ? 'Correct' : 'Wrong'}</h2>
                “Hero Protagonist. Last of the freelance hackers. Greatest swordfighter in the world. Stringer. Central Intelligence Corporation. Specializing in software related intel. Music. Movies, and microcode.”
              </div>
            ) : (
                <div className="Question-options">
                  <button onClick={() => this.onCorrectAnswer(4)}>1. Snow Crash</button>
                  <button onClick={() => this.onWrongAnswer(4)}>2. Masters of Deception</button>
                  <button onClick={() => this.onWrongAnswer(4)}>3. Neuromancer</button>
                  <button onClick={() => this.onWrongAnswer(4)}>4. Hyperion</button>
                </div>
              )
          }
        </div>
      </div>
    );
  }
}

export default App;
