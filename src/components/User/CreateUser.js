import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';

function CreateUser() {



    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {

        event.preventDefault();
        const form = event.currentTarget;

        const name = event.target.name.value;
        const email = event.target.email.value;
        const number = event.target.number.value;

        if (form.checkValidity() === false) {
            event.stopPropagation();  
        }

        setValidated(true);
        console.log("data:", name, email, number);
    };



    return (

        <div>

            <h1>Create user</h1>

            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Row className="mb-3 ">
                    <Form.Group as={Col} md="12" controlId="validationCustom01">
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            name='name'
                        />
                        <Form.Control.Feedback type="invalid">
                            error msg
                        </Form.Control.Feedback>
                    </Form.Group>
                </Row>

                <Row className="mb-3 ">
                    <Form.Group as={Col} md="12" controlId="validationCustom01">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            required
                            type="email"
                            name='email'
                        />
                        <Form.Control.Feedback type="invalid">
                            error msg
                        </Form.Control.Feedback>
                    </Form.Group>
                </Row>

                <Row className="mb-3 ">
                    <Form.Group as={Col} md="12" controlId="validationCustom01">
                        <Form.Label>Cell</Form.Label>
                        <Form.Control
                            required
                            type="number"
                            name='number'
                        />
                        <Form.Control.Feedback type="invalid">
                            error msg
                        </Form.Control.Feedback>
                    </Form.Group>
                </Row>





                <Button size="sm" type="submit">Save</Button>
            </Form>
        </div>
    )
}

export default CreateUser;