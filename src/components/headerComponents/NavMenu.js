import React, {useState, useEffect} from "react"
import { Navbar, Nav, NavDropdown } from "react-bootstrap"
import { LinkContainer } from 'react-router-bootstrap'
import Logo from "./Logo"
import Accounts from "./Accounts"
import AuthService from "../../services/auth.service"
import { useLocation } from "react-router"

function NavMenu() {
    const [user, setUser] = useState(undefined);
    const location = useLocation()
    useEffect(() => {   
        
        const item = AuthService.getCurrentUser();    
        if (item) {
            setUser(item)
        } else {
            setUser()
        }
    }, [location]);

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
                    <Nav  className="mr-auto">
                        {user ? 
                        <LinkContainer to="/tracevax/qrcodedisplay">
                            <Nav.Link className="item-style">VIEW QR CODE</Nav.Link>
                        </LinkContainer> 
                        : null }
                        {user ?
                        <LinkContainer to="/tracevax/edituser">
                            <Nav.Link className="item-style">EDIT USER</Nav.Link>
                        </LinkContainer> 
                        : null }

                    </Nav>
                    <Accounts />
                </Navbar.Collapse>
                
            </Navbar>
            <div className="color-bar"></div>
        </div>
        

    )
}

export default NavMenu