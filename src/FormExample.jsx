import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';

function FormExample() {
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
    };

    return (
        <>
        <div className='form-bg'>
        <div className="row">
            <div className="col-10 mx-auto">
            <h1 className='formcolor pt-3 pb-5'>CONTACT FORM</h1>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Row className="mb-3">
                    <Form.Group as={Col} md="4" controlId="validationCustom01">
                        <Form.Label><p className='formcolor'>Enter Your First name</p></Form.Label>
                        <Form.Control
                            required
                            type="text"
                            placeholder="Enter Your First Name"
                            defaultValue=""
                        />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="4" controlId="validationCustom02">
                        <Form.Label><p className='formcolor'>Email Id</p></Form.Label>
                        <Form.Control
                            required
                            type="email"
                            placeholder="Email ID"
                            defaultValue=""
                        />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="4" controlId="validationCustom01">
                        <Form.Label><p className='formcolor'>Phone Number</p></Form.Label>
                        <Form.Control
                            required
                            type="text"
                            placeholder="Phonenumber"
                            defaultValue=""
                        />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                    <Form.Group as={Col} md="4" controlId="validationCustom03">
                        <Form.Label><p className='formcolor'>Enter Your City</p></Form.Label>
                        <Form.Control type="text" placeholder="Enter Your City" required />
                        <Form.Control.Feedback type="invalid">
                            Please provide a valid city.
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="4" controlId="validationCustom04">
                        <Form.Label><p className='formcolor'>Enter Your State</p></Form.Label>
                        <Form.Control type="text" placeholder="Enter Your State" required />
                        <Form.Control.Feedback type="invalid">
                            Please provide a valid state.
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="4" controlId="validationCustom05">
                        <Form.Label><p className='formcolor'>Pincode</p></Form.Label>
                        <Form.Control type="text" placeholder="Pincode" required />
                        <Form.Control.Feedback type="invalid">
                            Please provide a valid zip.
                        </Form.Control.Feedback>
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                <Form.Group as={Col} md="4" controlId="validationCustom05">
                        <Form.Label><p className='formcolor'>Occupation</p></Form.Label>
                        <Form.Control type="text" placeholder="Salaried" required />
                        <Form.Control.Feedback type="invalid">
                            Please provide a valid Occupation.
                        </Form.Control.Feedback>
                        </Form.Group>
                </Row>
                <Form.Group className="mb-3 formcolor">
                    <Form.Check
                        required
                        label="Agree to terms and conditions"
                        feedback="You must agree before submitting."
                        feedbackType="invalid"
                    />
                </Form.Group>
                <div className='hero-btn'>
                <Button type="submit">Submit</Button>
                </div>
            </Form>
            </div>
            </div>
            </div>
        </>
    );
}

export default FormExample;