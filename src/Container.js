import React, { Component } from 'react'
import "./containerStyle.css"
import Funcompnonents from './Funcomponents'
import ClassCompnonents from './ClassComponents'

class Container extends Component {
    state={
        isClass:false,
        isFunction:false
    }
    render() {
        return (
            <div>
                <h1 className="heading">Styling Using Functional ans Class Component</h1>
                <button className="button" onClick={()=>this.setState({isFunction:!this.state.isFunction})}>To see Styling in Functional Component</button>
                <button className="button" onClick={()=>this.setState({isClass:!this.state.isClass})}>To see Styling in Class Component</button>                       
                    {
                        this.state.isFunction ? <Funcompnonents /> : null
                    } 

                    {
                        this.state.isClass ? <ClassCompnonents /> : null
                    }   
            </div>
        )
    }
}
export default Container
