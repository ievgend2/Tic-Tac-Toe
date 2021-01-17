import React, { Component } from 'react';
import X from '../images/1.png';
import O from '../images/0.png';


class Cell extends Component {
  constructor() {
    super();
    this.state = {
      player: 0,
      image: <img />

    }

  }

  handleClick = () => {
    if (this.state.player === 0) {
      if (this.props.turn === 1) {
        this.setState({
          image: <img src={X} className="squareIcon" alt="X" />,
          player: this.props.turn,
        }
        )
      }
      else
        this.setState({
          image: <img src={O} className="squareIcon" alt="O" />,
          player: this.props.turn
        }
        )
      this.props.updateBoard(this.props.id, this.props.turn);
      this.props.changeTurn(this.props.turn);
    }
    else {
      alert("you can't play there");
    }

  }





  render() {

    return (<div>
      <button onClick={this.handleClick} className="btn btn-outline-dark square ml-1 mb-1"
      >{this.state.image}</button>

    </div>);
  }

}
export default Cell;
