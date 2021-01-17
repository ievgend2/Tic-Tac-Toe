import React from 'react';
import Logo from '../images/logo.png'


const Header = (props) => {

  let button;

  function handleStart() {
    props.changeStart();
  }
  // console.log(props.start)
  if (!props.start)
    button = <button className="btn btn-dark niceFont" onClick={handleStart}> Start </button>
  // console.log(props.start)
  return (

    <div className="center">
      <img src={Logo} alt="logo" className="logo "></img>

      <h1 className="niceFont">{props.title}</h1>
      {button}


    </div>

  );
}

export default Header;
