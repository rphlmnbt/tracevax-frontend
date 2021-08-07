import React from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import LogsTable from '../components/logsComponents/LogsTable'

function QRCodeDisplay() {
    return (
        <Container className="extend-height py-5 ">
                    <Row className="align-items-center justify-content-center">
                        <Col  md={8} sm={12} className="text-center mx-3 shadow p-3 bg-white">
                            <p className="card-title">Logs</p><br />
                            <LogsTable />
                        </Col>
                    </Row>
        </Container>
          
    )
}



export default QRCodeDisplay