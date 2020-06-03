// Code EyesOnMe Component Here
import React from 'react'


export default class EyesOnMe extends React.Component{

    gainFocus = () => (
        console.log("Good!")
    )

    lostFocus = () => (
        console.log("Hey! Eyes on me!")
    )

    render(){
        return(
            <button onFocus={this.gainFocus} onBlur={this.lostFocus}>Press me</button>
        )
    }
}
