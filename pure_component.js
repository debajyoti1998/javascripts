// ------------- defination of pure component----
// pure component is the components which do not re-renders 
// when the value of state and props has been updated with the same value..

// React pure component is similar to react component.
// the different between then is that react component does not implement 
// shouldComponentUpdate()
// it is use only class component

// --------------------------------------------------------

import React,{Component, PureComponent} from 'react';
class Forms extends PureComponent{
    constructor()
    {
        super();
        this.state={
            data:10
        }
    }
    render(){
        console.warn(this.state)
        return(
            <div>
                <div>
                    <h1>Pure component {this.state.data}</h1>
                    <button onClick={()=>{this.setState({data:10})}}>update</button>
                </div>
            </div>
        )
    }
}

