import React, { useRef } from 'react'
import { Formik } from "formik"
import * as yup from "yup"
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { FaUserCircle } from 'react-icons/fa'
import { IconContext } from 'react-icons/lib'
import "../styles/pages/LogIn.css"
import { LinkContainer } from 'react-router-bootstrap'


const schema = yup.object().shape({
    email: yup.string().email('Invalid email').required('Required'),
    password: yup.string()
                .min(4, "Please enter at least 4 characters.")
                .required("Required"),
});


function LogIn() {
    const formRef = useRef()
    const logIn = () => {
    
    };


    return (
        <Formik
            validationSchema={schema}
            onSubmit={logIn}
            innerRef = {formRef}
            initialValues={{
                email: "",
                password: ""
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
                                {/* <LinkContainer to="/tracevax/qrcodedisplay">
                                    
                                </LinkContainer> */}
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
                </Container>
            )}
        </Formik>
    )
}

export default LogIn