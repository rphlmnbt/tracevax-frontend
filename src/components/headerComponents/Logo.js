import React from "react"
import logo from "../../pseudoDb/tracevax-logo.png"

function Logo(props) {

    return (
        <img 
            src={logo} 
            alt="tracevax-logo"
            style={{padding : "5px"}}
            height={props.height}
        />
    )
}
 
export default Logo