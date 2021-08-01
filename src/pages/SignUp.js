import React, { useRef } from 'react'
import { Formik} from "formik"
import * as yup from "yup"
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { FaUserCircle } from 'react-icons/fa'
import { IconContext } from 'react-icons/lib'
import "../styles/pages/SignUp.css"

const schema = yup.object().shape({

    email: yup.string().email('Invalid email').required('Required'),
    password: yup.string()
                .min(4, "Please enter at least 4 characters.")
                .required("Required"),
    first_name: yup.string()
                .max(50, 'Too Long!')
                .required('Required'),
    last_name: yup.string()
                .max(50, 'Too Long!')
                .required('Required'),
    gender: yup.string()
                .required("Required"),
    birth_date: yup.string()
                .required('Required'),
    contact_number: yup.number()
                .min(100000000, "Invalid")
                .required('Required'),
    civil_status: yup.string()
                .required('Required'),
    home_address: yup.string()
                .min(4, "Please enter at least 4 characters.")
                .required('Required'),
                
})

function SignUp() {
    const formRef = useRef()

    const register = () => {
        console.log(formRef.current.values );
        
    };

    return (
        <Formik
            validationSchema={schema}
            onSubmit={register}
            innerRef = {formRef}
            initialValues={{
                email: "",
                password: "",
                first_name: "",
                last_name: "",
                gender:"",
                birth_date:"",       
                contact_number: "",
                civil_status: "",
                home_address: ""
            }}
        >
            {({
                handleSubmit,
                handleChange,
                handleBlur,
                values,
                touched,
                isValid,
                errors,
            }) => ( 
                <Container className="extend-height py-5 ">
                    <Row className="align-items-center justify-content-center">
                        <Col  md={8} sm={12} className="text-center mt-5 shadow p-3 mb-5 bg-white">
                            <div className="pb-3 mx-auto" >
                                <p className="form-title">Sign Up</p><br />
                                <IconContext.Provider value={{size:"80px", color:"#41ad49"}}>
                                    <FaUserCircle />
                                </IconContext.Provider>
                            </div>
                           
                            <Form noValidate onSubmit={handleSubmit}>
                                <Row className="g-2">
                                    <Col md>
                                        <Form.Group  controlId="email">
                                            <Form.Label>Email</Form.Label>
                                            <Form.Control 
                                                type="text" 
                                                name="email" 
                                                value={values.email} 
                                                onChange={handleChange}
                                                isValid={touched.email && !errors.email}
                                                isInvalid={touched.email && !!errors.email} 
                                                placeholder="Email" 
                                            />
                                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                            <Form.Control.Feedback type="invalid">
                                                {errors.email}
                                            </Form.Control.Feedback>
                                        </Form.Group>
                                    </Col>
                                    <Col md>
                                        <Form.Group controlId="password">
                                            <Form.Label>Password</Form.Label>
                                            <Form.Control 
                                                type="password" 
                                                name="password" 
                                                value={values.password} 
                                                onChange={handleChange}
                                                isValid={touched.password && !errors.password}  
                                                isInvalid={touched.password && !!errors.password} 
                                                placeholder="Password" 
                                            />
                                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                            <Form.Control.Feedback type="invalid">
                                                {errors.password}
                                            </Form.Control.Feedback>
                                        </Form.Group>
                                    </Col>
                                </Row>

                                <Row className="g-2">
                                    <Col md>
                                        <Form.Group controlId="first_name">
                                            <Form.Label>First Name</Form.Label>
                                            <Form.Control 
                                                type="text" 
                                                name="first_name" 
                                                value={values.first_name} 
                                                onChange={handleChange}
                                                isValid={touched.first_name && !errors.first_name}  
                                                isInvalid={touched.first_name && !!errors.first_name} 
                                                placeholder="First Name" 
                                            />
                                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                            <Form.Control.Feedback type="invalid">
                                                {errors.first_name}
                                            </Form.Control.Feedback>
                                         </Form.Group>
                                    </Col>

                                    <Col md>
                                        <Form.Group controlId="last_name">
                                            <Form.Label>Last Name</Form.Label>
                                            <Form.Control 
                                                type="text" 
                                                name="last_name" 
                                                value={values.last_name} 
                                                onChange={handleChange}
                                                isValid={touched.last_name && !errors.last_name} 
                                                isInvalid={touched.last_name && !!errors.last_name} 
                                                placeholder="Last Name" 
                                            />
                                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                            <Form.Control.Feedback type="invalid">
                                                {errors.last_name}
                                            </Form.Control.Feedback>
                                        </Form.Group>
                                        
                                    </Col>
                                </Row>

                                <Row className="g-2 " >
                                    <Col md>
                                    <Form.Group controlId="gender">
                                            <Form.Label>Gender</Form.Label>
                                                    <Row className="g-2">
                                                    
                                                        <Col md>
                                                            <Form.Check 
                                                                name = "gender"
                                                                type="radio" 
                                                                label="Male" 
                                                                onclick="selectOnlyThis(this)"
                                                                value={"Male"} 
                                                                onChange={handleChange}
                                                                isValid={touched.gender && !errors.gender} 
                                                                isInvalid={touched.gender && !!errors.gender} 
                                                            />
                                                        </Col>
                                                        <Col md>
                                                            <Form.Check 
                                                                name = "gender"
                                                                type="radio" 
                                                                label="Female" 
                                                                onclick="selectOnlyThis(this)"
                                                                value={"Female"} 
                                                                onChange={handleChange}
                                                                isValid={touched.gender && !errors.gender} 
                                                                isInvalid={touched.gender && !!errors.gender} 
                                                            />
                                                        </Col>
                                                    </Row>

                                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                                <Form.Control.Feedback type="invalid">
                                                    {errors.gender}
                                                </Form.Control.Feedback>
                                     </Form.Group>
                                    </Col>
                                    <Col md>
                                        <Form.Group controlId="birth_date">
                                            <Form.Label>Birth Date</Form.Label>
                                            <Form.Control 
                                                type="date" 
                                                name="birth_date" 
                                                value={values.birth_date} 
                                                onChange={handleChange}
                                                isValid={touched.birth_date && !errors.birth_date} 
                                                isInvalid={touched.birth_date && !!errors.birth_date} 
                                                placeholder="Birth Date" 
                                            />
                                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                            <Form.Control.Feedback type="invalid">
                                                {errors.birth_date}
                                            </Form.Control.Feedback>
                                        </Form.Group>
                                    </Col>
                                </Row>

                                <Row className="g-2">
                                    

                                    <Col md>
                                        <Form.Group controlId="contact_number">
                                            <Form.Label>Contact Number</Form.Label>
                                            <Form.Control 
                                                type="text" 
                                                name="contact_number" 
                                                value={values.contact_number} 
                                                onChange={handleChange}
                                                isValid={touched.contact_number && !errors.contact_number} 
                                                isInvalid={touched.contact_number && !!errors.contact_number} 
                                                placeholder="Contact Number" 
                                            />
                                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                            <Form.Control.Feedback type="invalid">
                                                {errors.contact_number}
                                            </Form.Control.Feedback>
                                        </Form.Group>
                                    </Col>

                                    <Col md>
                                        <Form.Group controlId="civil_status">
                                            <Form.Label>Civil Status</Form.Label>
                                            <Form.Control 

                                                as="select"
                                                name="civil_status" 
                                                value={values.civil_status} 
                                                onChange={handleChange}
                                                isValid={touched.civil_status && !errors.civil_status} 
                                                isInvalid={touched.civil_status && !!errors.civil_status} 
                                                placeholder="Civil Status" 
                                            >
                                                <option value="" disabled selected>Select your option</option>
                                                <option value="Single">Single</option>
                                                <option value="Married">Married</option>
                                                <option value="Annulled">Annulled</option>
                                                <option value="Widowed">Widowed</option>
                                            </Form.Control>
                                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                            <Form.Control.Feedback type="invalid">
                                                {errors.civil_status}
                                            </Form.Control.Feedback>
                                        </Form.Group>
                                    </Col>

                                </Row>
                                
                                <Row className="g-2">
                                    <Col md>
                                        <Form.Group controlId="home_address">
                                            <Form.Label>Home Address</Form.Label>
                                            <Form.Control 
                                                type="home_address" 
                                                name="home_address" 
                                                value={values.home_address} 
                                                onChange={handleChange}
                                                isValid={touched.home_address && !errors.home_address} 
                                                isInvalid={touched.home_address && !!errors.home_address} 
                                                placeholder="Home Address" 
                                            />
                                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                            <Form.Control.Feedback type="invalid">
                                                {errors.home_address}
                                            </Form.Control.Feedback>
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <br />
                                <Button 
                                    variant="primary btn-block" 
                                    type="submit" 
                                    className="submit-btn"
                                >
                                    Sign Up
                                </Button>

                                <div>
                                    <small>already have an account?</small> 
                                    <a href="/tracevax/login"><small className="login ml-2">Log In</small></a>
                                </div>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            )}
        </Formik>
       
    )
}

export default SignUp