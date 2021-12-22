import React from "react";
import "./containerStyle.css"


const firstcomponent=()=>{
    return(
        <div className="component1 mainbox">
            <h1 className="boxheading">This is created using Functional Components</h1>
            <p>This is done using External Css</p>
            <p>This is done using Internal Css</p>
        </div>
    );
}
export default firstcomponent