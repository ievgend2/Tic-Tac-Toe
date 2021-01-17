import React, { Component } from 'react';
import Icon1 from '../images/1.png';
import Icon0 from '../images/0.png';

class Info extends Component {
  state = {
    playerX_name: '',
    playerO_name: ''
  }

  handleValueChangeX = (e) => {
    this.setState({ playerX_name: e.target.value })

  }
  handleValueChangeO = (e) => {
    this.setState({ playerO_name: e.target.value })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.startGame(this.state.value);
    this.props.setPlayerName(this.state.playerX_name, this.state.playerO_name)

  }

  render() {
    // if (this.state.playerX_name.value == "" || this.state.playerO_name.value == "") {
    //   alert("Please enter both player`s names")
    // }
    // else {
    if (this.props.start)
      return (

        < div >
          <form className="center"
            onSubmit={this.handleSubmit.bind(this)} >
            <div className="row ">
              <div className="col">
                <label className="niceFont">Name <img src={Icon1} alt="Icon1" className="icon" /></label>
                <input type="text" className="form-control"
                  value={this.state.playerX_name}
                  onChange={this.handleValueChangeX}
                />
              </div>
              <div className="col">
                <label className="niceFont">Name <img src={Icon0} alt="Icon0" className="icon" /></label>
                <input type="text" className="form-control"
                  value={this.state.playerO_name}
                  onChange={this.handleValueChangeO}
                >

                </input>
              </div>
            </div>
            <div className="center">
              <button type="submit" className="btn btn-dark niceFont">Start Game</button>
            </div>
          </form>
        </div >
      )

    else {
      return (
        <div>

        </div>
      )
    }
    // }
  }
}


export default Info;
