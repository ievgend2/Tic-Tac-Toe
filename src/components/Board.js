import React, { Component } from 'react';
import X from '../images/1.png';
import O from '../images/0.png';
import Cell from './Cell';


class Board extends Component {
  constructor() {
    super();
    this.state = {
      board: [0, 0, 0, 0, 0, 0, 0, 0, 0],
      winner: false

    }
  }

  // evaluateBoard = () => {
  //   let cells = document.querySelectorAll(".cell")
  //   console.log(cells)
  // }

  createBoard = () => {
    let board = [];

    let counter = 0;
    for (var x = 0; x < 3; x++) {
      let row = []
      for (var y = 0; y < 3; y++) {
        row.push(<Cell
          key={counter}
          turn={this.props.turn}
          changeTurn={this.props.changeTurn}
          id={counter}
          updateBoard={this.updateBoard}
          reset={this.props.reset}
          changeReset={this.props.changeReset}
        />)
        counter++;
      }
      board.push(<div key={x} className="row">{row}</div>)

    }
    return board

  }
  updateBoard = (index, turn) => {
    var currentBoard = this.state.board;
    currentBoard[index] = turn;
    this.setState({
      board: currentBoard
    })
    console.log(this.state.board)
    this.isWinner(currentBoard, turn);
  }
  resetBoard = () => {
    this.setState({
      board: [0, 0, 0, 0, 0, 0, 0, 0, 0],
      winner: false
    });
  }

  isWinner = (currentBoard, turn) => {
    var winner = false;
    var winninOptions = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];
    for (var i = 0; i < winninOptions.length; i++) {
      if (currentBoard[winninOptions[i][0]] == turn && currentBoard[winninOptions[i][1]] == turn && currentBoard[winninOptions[i][2]] == turn) {
        winner = true;
        this.setState({
          winner: turn
        });
        break;
      }
    }
  }

  winner = () => {
    if (this.state.winner == 1)
      return <h1 className="niceFont"> {this.props.playerX_name} Wins! with <img className="icon" src={X} /></h1>
    else
      return <h1 className="niceFont"> {this.props.playerO_name} Wins! with <img className="icon" src={O} /></h1>
  }

  handleReset = () => {
    if (!this.state.winner)
      this.props.changeReset(true);
    this.resetBoard();
  }

  newGame = () => {
    this.props.newGame();
    this.resetBoard();
  }



  showTurn = () => {
    let showTurnContent;
    if (this.props.turn === 1) {
      showTurnContent = this.props.playerX_name
    }
    else {
      showTurnContent = this.props.playerO_name
    }
    return showTurnContent
  }

  render() {
    if (this.props.startGame && this.props.isPlaying && this.state.winner == false) {

      return (
        <div>
          <div className="together">
            <p><img src={X} alt="Icon1" className="icon" />{this.props.playerX_name}</p>
            <p className="niceFont">Now Playing :{this.showTurn()}</p>
            <p><img src={O} alt="Icon0" className="icon" />{this.props.playerO_name}</p>
          </div>
          <div className="board"> {this.createBoard()}
          </div>
          <div className="together">
            <button className="btn btn-dark niceFont" onClick={this.newGame}> New Game </button>
            <button className="btn btn-dark niceFont" onClick={this.handleReset}> Reset </button>
          </div>

        </div>)
    }
    else {
      if (this.state.winner)
        return (
          <div className="alert alert-info" role="alert">
            <div className="center">
              {this.winner()}
            </div>
            <div className="together">
              <button className="btn btn-dark niceFont" onClick={this.newGame}> New Game </button>
              <button className="btn btn-dark niceFont" onClick={this.handleReset}> Reset </button>
            </div>
          </div>
        );
      else {
        return (<div className="center">

        </div>);
      }
    }
  }
}

export default Board;
