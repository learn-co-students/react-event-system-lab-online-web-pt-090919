// Code Keypad Component Here
import React, { Component } from 'react';

class Keypad extends Component {

  keyUpHandler = () => {
    console.log('Entering password...')
  }

  render() {
    return (
      <div><input type="password" onKeyUp={this.keyUpHandler}/></div>
    );
  }

}

export default Keypad;
