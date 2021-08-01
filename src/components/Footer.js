import React from "react"
import { Container, Row } from "react-bootstrap"
import "../styles/components/Footer.css"
import SocialIcons from "./footerComponents/SocialIcons"
import Subscribe from "./footerComponents/Subscribe"
import NeedAssistance from "./footerComponents/NeedAssistance"



function Footer() {
    return (
        
        <Container className="footer" >
            <Row>
                <SocialIcons />
                <Subscribe />
                <NeedAssistance />
            </Row>
        </Container>
    )
}

export default Footer