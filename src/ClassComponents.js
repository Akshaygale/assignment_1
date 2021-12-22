import React, { Component } from 'react'
import './containerStyle.css'

class ClassComponents extends Component {
    render(){
        return(
            <div className='component2 mainbox'>
                <h1 className="boxheading">This is created using Class Components</h1>
                <p>This is done using External Css</p>
                <p>This is done using Internal Css</p>
            </div>
        );
    }
}
export default ClassComponents
