// Code EyesOnMe Component Here
import React, { Component } from 'react';

export default class EyesOnMe extends React.Component {
  handleOnFocus = () => (
    console.log('Good!')
  )

  handleOnBlur = () => {
    console.log('Hey! Eyes on me!')
  }

  render() {
    return <button onFocus={this.handleOnFocus} onBlur={this.handleOnBlur}>Submit</button>
  }
}