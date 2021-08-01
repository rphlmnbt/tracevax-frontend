import React from "react"
import { Container, Col, Button, Form } from "react-bootstrap"

function Subscribe() {
    return(
        <Col lg={4} className="footer-items">
            Follow for more updates
            <br />
            <div className="mt-3">
                <Container className="subscribe-box">
                    <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Control className="email-box" type="email" placeholder="Enter email" />
                        </Form.Group>
                    </Form>
                    <Button className="subscribe-btn" block>Send Email</Button>
                </Container>
            </div>
        </Col>
    )
}

export default Subscribe