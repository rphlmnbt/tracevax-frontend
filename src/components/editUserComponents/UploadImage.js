import React, { useState } from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import axios from 'axios';
import authService from '../../services/auth.service';
import idService from '../../services/id.service';
import vaccinecardService from '../../services/vaccinecard.service';

function UploadImage() {
    const API_URL =  process.env.REACT_APP_BACKEND_URL + '/api/image/';

    const [id, setID] = useState()
    const [vaccine, setVaccine] = useState()

    const uuid_creds = authService.getCurrentUser().uuid

    const createVaccineCardRecord = () => {
        const destination = 'public/images/vaccinecard/'
        const filename = `vaccinecard-${uuid_creds}.jpg`
        const src = destination+filename;
        vaccinecardService.create(src,uuid_creds)
        .then(res => {
            console.log(res)
        }).catch(e => {
            console.log(e)
        })
    }

    const createIDRecord = () => {
        const destination = 'public/images/id/'
        const filename = `id-${uuid_creds}.jpg`
        const src = destination+filename;
        idService.create(src,uuid_creds)
        .then(res => {
            console.log(res)
        }).catch(e => {
            console.log(e)
        })
    }

    const handleIDUpload = (e) => {
        const formData = new FormData()
        formData.append('uuid', uuid_creds)
        formData.append('id',id)
        axios({
            url: API_URL + 'id',
            method: 'POST',
            headers: {
                'content-type': 'multipart/form-data'
            },
            data: formData
        }).then((res) => {
            createIDRecord()
            console.log(res)
        })
    }
    const handleIDChange = (e) => {
        const id = e.target.files[0];
        setID(id)
    }

    const handleVaccineUpload = (e) => {
        const formData = new FormData()
        formData.append('uuid', uuid_creds)
        formData.append('vaccinecard',vaccine)
        axios({
            url: API_URL + 'vaccinecard',
            method: 'POST',
            headers: {
                'content-type': 'multipart/form-data'
            },
            data: formData
        }).then((res) => {
            createVaccineCardRecord()
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