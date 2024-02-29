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
                        <h2 className='formcolor pt-5 pb-5 fw-bold'>CONTACT FORM</h2>
                        <Form noValidate validated={validated} onSubmit={handleSubmit}>
                            <Row className="mb-3">
                                <Form.Group as={Col} md="4" controlId="validationCustom01" className=''>
                                    <div className='gapper-form5'>
                                    <Form.Label><span className='formcolor'>Enter Your Full name</span></Form.Label>
                                    <Form.Control
                                        required
                                        type="text"
                                        placeholder="Enter Your First Name"
                                        defaultValue=""
                                    />
                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                    </div>
                                </Form.Group>

                                <Form.Group as={Col} md="4" controlId="validationCustom02" className=''>
                                    <div className='gapper-form2'>
                                    <Form.Label><span className='formcolor'>Email Id</span></Form.Label>
                                    <Form.Control
                                        required
                                        type="email"
                                        placeholder="Email ID"
                                        defaultValue=""
                                    />
                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                    </div>
                                </Form.Group>

                                <Form.Group as={Col} md="4" controlId="validationCustom01" className=''>
                                <div className='gapper-form1'>
                                    <Form.Label><span className='formcolor'>Phone Number</span></Form.Label>
                                    <Form.Control
                                        required
                                        type="text"
                                        placeholder="Phonenumber"
                                        defaultValue=""
                                    />
                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                    </div>
                                </Form.Group>
                            </Row>
                            <Row className="mb-3 pt-4">
                                <Form.Group as={Col} md="4" controlId="validationCustom03">
                                <div className=' gapper-form4'>
                                    <Form.Label><span className='formcolor'>Enter Your City</span></Form.Label>
                                    <Form.Control type="text" placeholder="Enter Your City" required />
                                    <Form.Control.Feedback type="invalid">
                                        Please provide a valid city.
                                    </Form.Control.Feedback>
                                    </div>
                                </Form.Group>
                                <Form.Group as={Col} md="4" controlId="validationCustom04" className=''>
                                <div className='gapper-form3'>
                                    <Form.Label><span className='formcolor'>Enter Your State</span></Form.Label>
                                    <Form.Control type="text" placeholder="Enter Your State" required />
                                    <Form.Control.Feedback type="invalid">
                                        Please provide a valid state.
                                    </Form.Control.Feedback>
                                    </div>
                                </Form.Group>
                                <Form.Group as={Col} md="4" controlId="validationCustom05" className=''>
                                <div className='gapper-form'>
                                    <Form.Label><span className='formcolor'>Pincode</span></Form.Label>
                                    <Form.Control type="text" placeholder="Pincode" required />
                                    <Form.Control.Feedback type="invalid">
                                        Please provide a valid Pincode.
                                    </Form.Control.Feedback>
                                    </div>
                                </Form.Group>
                            </Row>
                            <Row className="mb-3 pt-4">
                                <Form.Group as={Col} md="4" controlId="validationCustom05">
                                <div className='gapper-form4'>
                                    <Form.Label><span className='formcolor'>Occupation</span></Form.Label>
                                    <Form.Control type="text" placeholder="Salaried" required />
                                    <Form.Control.Feedback type="invalid">
                                        Please provide a valid Occupation.
                                    </Form.Control.Feedback>
                                    </div>
                                </Form.Group>
                            </Row>
                            
                            <div className='hero-btn pt-5'>
                                <Button type="submit"><span className='fw-bold text-dark'>Submit</span></Button>
                            </div>
                        </Form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default FormExample;