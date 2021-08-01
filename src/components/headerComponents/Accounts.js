import React from "react"
import { Button } from "react-bootstrap"
import { FaUserPlus, FaUserCircle } from "react-icons/fa"
import { IconContext } from "react-icons/lib"
import { LinkContainer } from "react-router-bootstrap"


function Accounts() {
    return (
        <span className="px-4">
            <LinkContainer to="/tracevax/login">
                <Button className="custom-btn">
                    <IconContext.Provider value={{size:"30px", style: {marginLeft: "10px", marginRight: "10px"}}}>
                        <FaUserCircle />
                    </IconContext.Provider>
                    Log In
                </Button>
            </LinkContainer>
            <LinkContainer to="/tracevax/signup">
                <Button className="custom-btn">
                    <IconContext.Provider value={{size:"30px", style: {marginLeft: "10px", marginRight: "10px"}}}>
                        <FaUserPlus />
                    </IconContext.Provider>
                    Sign Up
                </Button>
            </LinkContainer>
        </span>

    )
}

export default Accounts