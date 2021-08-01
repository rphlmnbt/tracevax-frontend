import React from "react"
import Images from "../../pseudoDb/images"

function Logo(props) {
    const logoUrl = Images.images[0].url;

    return (
        <img 
            src={logoUrl} 
            alt="tracevax-logo"
            style={{padding : "5px"}}
            height={props.height}
        />
    )
}
 
export default Logo