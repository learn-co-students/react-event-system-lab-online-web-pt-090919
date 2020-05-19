// Code Keypad Component Here
import React, { Component } from 'react';

export default class Keypad extends Component {

    constructor(props) {
        super(props)
    }

    handlePassword = () => {
        console.log("Entering password...")
    }

    render(){
        return (
            <input onKeyUp={this.handlePassword} type="password" />
        )
    }
}
