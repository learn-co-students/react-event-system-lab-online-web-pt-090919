import React from 'react';

export default class EyesOnMe extends React.Component{ 
    dude =(event)=>{ 
        let message = 'Good!'
        console.log(message)
    }

    hey =()=>{
        console.log('Hey! Eyes on me!')
    }
    render(){
        return ( 
        <div>
            <button onFocus={this.dude} onBlur={this.hey}>I AM BUTTON</button>
        </div>)
    }

}
