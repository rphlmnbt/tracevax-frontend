import React, { useRef, useState } from 'react'
import { Formik } from 'formik'
import { Form, Button, Container, Row, Col, Modal } from 'react-bootstrap'
import { FaUserCircle } from 'react-icons/fa'
import { IconContext } from 'react-icons/lib'
import '../styles/pages/LogIn.css'
import AuthService from '../services/auth.service.js'
import { useHistory } from 'react-router-dom';
import schema from '../schemas/login.schema'

function LogIn() {
    const formRef = useRef()
    const history = useHistory();
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const logIn = () => {
        AuthService.login(formRef.current.values.email, formRef.current.values.password)
          .then(response => {
            console.log(response)
            if (response.accessToken){
                history.push('/tracevax/qrcodedisplay')
                localStorage.setItem('accessToken', response.accessToken)
            }
          })
          .catch(e => {
            console.log(e);
            handleShow()
          });
    };


    return (
        <Formik
            validationSchema={schema}
            onSubmit={logIn}
            innerRef = {formRef}
            initialValues={{
                email: '',
                password: ''
            }}
        >
            {({
                handleSubmit,
                handleChange,
                handleBlur,
                values,
                touched,
                isValid,
                isInvalid,
                errors,
            }) => (
                <Container className="extend-height py-5">
                    <Row className="align-items-center justify-content-center">
                        <Col lg={4} md={6} sm={12} className="text-center mt-5 shadow p-3 mb-5 bg-white">
                            <div className="pb-3 mb-3 mx-auto" >
                                <p className="form-title">Log In</p><br />
                                <IconContext.Provider value={{size:"80px", color:"#41ad49"}}>
                                    <FaUserCircle />
                                </IconContext.Provider>
                            </div>
                            <Form noValidate onSubmit={handleSubmit}>
                                <Form.Group controlId="email">
                                    <Form.Control 
                                        type="text" 
                                        name="email" 
                                        value={values.email} 
                                        onChange={handleChange} 
                                        isValid={touched.email && !errors.email}
                                        isInvalid={touched.email && !!errors.email} 
                                        placeholder="Enter Email"
                                    />
                                </Form.Group>

                                <Form.Group controlId="password">
                                    <Form.Control 
                                        type="password" 
                                        name="password" 
                                        value={values.password} 
                                        onChange={handleChange} 
                                        isValid={touched.password && !errors.password}
                                        isInvalid={touched.password && !!errors.password} 
                                        placeholder="Enter Password"
                                    />
                                </Form.Group>
                                <Button 
                                        variant="primary btn-block" 
                                        type="submit" 
                                        className="submit-btn mt-5"
                                    >
                                        Log In
                                </Button>
                                <div className="mt-3">
                                    <small>don't have an account yet?</small> 
                                    <small className="login ml-2">Sign Up</small>
                                    <a href="/tracevax/signup">
                                        
                                    </a>
                                </div>
                            </Form>
                        </Col>
                    </Row>
                    <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                        <Modal.Title>Log In Failed</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>Please make sure your credentials are correct.</Modal.Body>
                        <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        </Modal.Footer>
                    </Modal>
                </Container>
            )}
        </Formik>
    )
}

export default LogIn