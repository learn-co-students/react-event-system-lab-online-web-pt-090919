// Code EyesOnMe Component Here

import React, { Component } from 'react';

export default class EyesOnMe extends Component {

    constructor() {
        super()
    }

    handleFocus = () => {
        console.log('Good!')
    }

    handleBlur = () => {
        console.log('Hey! Eyes on me!')
    }

    render() {
        return (
          <div id="eyes">
              <button onFocus={this.handleFocus} onBlur={this.handleBlur} >CLICC</button>
          </div>
        )
    }

} 