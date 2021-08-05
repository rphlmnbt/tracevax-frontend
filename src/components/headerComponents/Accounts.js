import React, { useState, useEffect } from 'react'
import { Button } from 'react-bootstrap'
import { FaUserPlus, FaUserCircle } from 'react-icons/fa'
import { IconContext } from 'react-icons/lib'
import { LinkContainer } from 'react-router-bootstrap'
import { useLocation } from 'react-router-dom'
import AuthService from '../../services/auth.service'


function Accounts() {
    const handeLogout = () => {
        AuthService.logout()
    }    
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
        <span className="px-4">
            { user ?  <LinkContainer to="/tracevax/login">
                <Button className="custom-btn" onClick={handeLogout}>
                    <IconContext.Provider value={{size:"30px", style: {marginLeft: "10px", marginRight: "10px"}}}>
                        <FaUserCircle />
                    </IconContext.Provider>
                    Log Out
                </Button>
            </LinkContainer> : 
            <span>
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
            }
            
        </span>

    )
}

export default Accounts