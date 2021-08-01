import React from "react"
import { Navbar, Nav, NavDropdown } from "react-bootstrap"
import { LinkContainer } from 'react-router-bootstrap'
import Logo from "./Logo"
import Accounts from "./Accounts"


function NavMenu() {

    return (
        <div>
            <Navbar className="navbar" sticky="top" variant="light" expand="lg">
                <LinkContainer to="/tracevax/login">
                    <Navbar.Brand>
                        <Logo height="60px"/>
                    </Navbar.Brand>
                </LinkContainer>
                <Navbar.Toggle />
                <Navbar.Collapse id="basic-navbar-nav ">
                    <Nav  className="m-auto">
                        
                    </Nav>
                    <Accounts />
                </Navbar.Collapse>
                
            </Navbar>
            <div className="color-bar"></div>
        </div>
        

    )
}

export default NavMenu