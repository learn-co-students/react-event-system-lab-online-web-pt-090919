import React, { Component } from 'react';


export default class Keypad extends Component {
    constructor(props){
        super(props)
    }

    handleFocus = () => {
        console.log("Good!")
    }

    handleBlur = () => {
        console.log("Hey! Eyes on me!")
    }

    render(){
        return(
            <button onBlur={this.handleBlur} onFocus={this.handleFocus}></button>
        )
        
    }
}

