import React, {useState} from 'react';
import QRCode from 'qrcode.react';
import {Button, Container, Row, Col } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import '../styles/pages/QRCodeDisplay.css'

const downloadQR = () => {
    const canvas = document.getElementById('qrcode');
    const pngUrl = canvas
      .toDataURL('image/png')
      .replace('image/png', 'image/octet-stream');
    let downloadLink = document.createElement('a');
    downloadLink.href = pngUrl;
    downloadLink.download = `qrcode.png`;
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
};

function QRCodeDisplay() {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')));
    console.log(user.uuid)
    return (
        <Container className="extend-height py-5">
            <Row className="align-items-center justify-content-center">
                <Col lg={4} md={6} sm={12} className="text-center mt-3 shadow p-3 mb-3 bg-white">
                    
                        <p className="container-title">QR Code</p>
                        <QRCode
                            id="qrcode"
                            value={user.uuid}
                            size={290}
                            level={"H"}
                            includeMargin={true}
                         />
                        <Button 
                                    variant="primary btn-block" 
                                    onClick={downloadQR}
                                    className="submit-btn mb-2"
                                >
                                    Download QR Code
                        </Button>
                        <LinkContainer to="/tracevax/edituser">
                            <Button 
                                        variant="primary btn-block" 
                                        className="submit-btn mb-2"
                                    >
                                        Edit User Details
                            </Button>
                        </LinkContainer>
                        
                </Col>
            </Row>
            
        </Container>
          
    )
}



export default QRCodeDisplay