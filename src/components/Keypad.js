import React from 'react';
export default class Keypad extends React.Component{

    yo = (event) => { 
        let message = 'Entering password...'
        console.log(message)
    }
    render(){
        return (
            <div>
                <input type="password" onKeyUp={this.yo} ></input>
            </div>

        )
    }
}
