import React, { useState } from "react"
import { Container, Row, Col, Form, Button } from "react-bootstrap"
import axios from "axios";
import authService from "../../services/auth.service";

function UploadImage() {
    const [id, setID] = useState()
    const [vaccine, setVaccine] = useState()
    const uuid_creds = authService.getCurrentUser().uuid
    const handleIDUpload = (e) => {
        const fd = new FormData()
        fd.append("uuid", uuid_creds)
        fd.append('id',id)
        axios({
            url: 'http://localhost:8080/api/image/id',
            method: "POST",
            headers: {
                "content-type": "multipart/form-data"
            },
            data: fd
        }).then((res) => {
            console.log(res)
        })
    }
    const handleIDChange = (e) => {
        const id = e.target.files[0];
        setID(id)
    }

    const handleVaccineUpload = (e) => {
        const fd = new FormData()
        fd.append("uuid", uuid_creds)
        fd.append('vaccinecard',vaccine)
        axios({
            url: 'http://localhost:8080/api/image/vaccinecard',
            method: "POST",
            headers: {
                "content-type": "multipart/form-data"
            },
            data: fd
        }).then((res) => {
            console.log(res)
        })
    }
    const handleVaccineChange = (e) => {
        const vaccine = e.target.files[0];
        setVaccine(vaccine)
    }

    return (
        
        <Container>
            <Row className="g-2">
                <Col md>
                    <Form.Group controlId="formFile" className="mb-3">
                        <Form.Label>Upload Vaccination Card</Form.Label><br/>
                        <input type="file" name="file" onChange={handleVaccineChange}/>
                        <Button className="submit-btn w-25 rounded" onClick={handleVaccineUpload}>Upload Image</Button>
                    </Form.Group>           
                </Col>
            </Row>
            <Row className="g-2">
                <Col md>
                    <Form.Group controlId="formFile" className="mb-3">
                        <Form.Label>Upload Valid ID</Form.Label><br/>
                        <input type="file" name="id" onChange={handleIDChange}/>
                        <Button className="submit-btn w-25 rounded" onClick={handleIDUpload}>Upload Image</Button>
                    </Form.Group>           
                </Col>
            </Row>
        </Container>
    )
}

export default UploadImage