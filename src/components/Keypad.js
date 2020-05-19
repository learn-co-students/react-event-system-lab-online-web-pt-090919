// Code Keypad Component Here
import React, {Component} from 'react'

export default class Keypad extends Component {
  render(){
    return (
      <input onKeyUp={this.enterPassword} type="password" />
      )
  }
  
  enterPassword = () => {
    console.log('Entering password...')
  }
  

  
  
}