import React from 'react'
import { Form, Button, Row, Col, Container, Layout, FloatingLabel } from 'react-bootstrap'
import FormContainer from '../components/FormContainer'

const ObsidianEmailScreen = () => {
    return (
        <Row className="py-3">


            <Col md={8}>
                <h2>Send an Email to Obsidian Conveyancing </h2>
                <FormContainer>

                    {/* </FormContainer><Form action="https://formsubmit.co/support@ppngltd.com" */}
                    <Form action="https://formsubmit.co/anapitalai@gmail.com"

                        method="POST">
                        <Form.Group as={Row}>
                            <Form.Label column sm="2">Name</Form.Label>
                            <Col sm="10">
                                <Form.Control
                                    type='text' required
                                    placeholder='Enter Your name'
                                    name='name'
                                ></Form.Control>
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row}>
                            <Form.Label column sm="2">Company</Form.Label>
                            <Col sm="10">
                                <Form.Control
                                    type='text' required
                                    name='company'
                                    placeholder='Company Name'
                                ></Form.Control>
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row}>
                            <Form.Label column sm="2">Email</Form.Label>
                            <Col sm="10">
                                <Form.Control
                                    type='email' required
                                    name='email'
                                    placeholder='Enter email'
                                ></Form.Control>
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row}>
                            <Form.Label column sm="2">Phone</Form.Label>
                            <Col sm="10">
                                <Form.Control
                                    type='phone'
                                    name='phone'
                                    placeholder='Enter phone'
                                ></Form.Control>
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row}>
                            <Form.Label column sm="2">Message</Form.Label>
                            <Col sm="10">
                                <Form.Control
                                    type='textarea' required
                                    name='message'
                                    placeholder='Enter Message'
                                ></Form.Control>
                            </Col>
                        </Form.Group>

                        <Button type='submit' variant='info' required>
                            Email
                        </Button>
                    </Form>

                </FormContainer>


            </Col>

            <Col md={4}>
                <div className="col-12">
                    <img
                        src="images/mail.svg"
                        class="w-75"
                    />
                </div>
            </Col>
        </Row>
    )
}

export default ObsidianEmailScreen


