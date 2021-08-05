import React from 'react'
import { Col } from 'react-bootstrap'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'
import { IconContext } from 'react-icons/lib'

function SocialIcons() {
    return(
        <Col lg={4} className="footer-items">
            STAY CONNECTED
            <br/>
            <div className="mt-3">
                <IconContext.Provider value={{size:"20px", style: {marginLeft: "10px", marginRight:"10px"}}}>
                    <FaTwitter />
                    <FaFacebook />
                    <FaInstagram />
                </IconContext.Provider>
            </div>
        </Col>
    )
}

export default SocialIcons