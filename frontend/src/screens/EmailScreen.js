import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Form, Button, Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import FormContainer from '../components/FormContainer'
import { login } from '../actions/userActions'

const EmailScreen = () => {

  return (
    <Row className="py-3">
      <Col md={8}>
        <FormContainer>

          {/* </FormContainer><Form action="https://formsubmit.co/support@ppngltd.com" */}
          <Form action="https://formsubmit.co/anapitalai@gmail.com"

            method="POST">
            <Form.Group>
              <Form.Label>Name</Form.Label>
              <Form.Control
                type='text' required
                placeholder='Enter Your name'
                name='name'
              ></Form.Control>
            </Form.Group>
            <Form.Group>
              <Form.Label>Company</Form.Label>
              <Form.Control
                type='text' required
                name='company'
                placeholder='Company Name'
              ></Form.Control>
            </Form.Group>
            <Form.Group>
              <Form.Label>email</Form.Label>
              <Form.Control
                type='email' required
                name='email'
                placeholder='Enter email'
              ></Form.Control>
            </Form.Group>
            <Form.Group>
              <Form.Label>Phone</Form.Label>
              <Form.Control
                type='phone'
                name='phone'
                placeholder='Enter phone'
              ></Form.Control>
            </Form.Group>

            <Form.Group>
              <Form.Label>Message</Form.Label>
              <Form.Control
                type='textarea' required
                name='message'
                placeholder='Enter Message'
              ></Form.Control>
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

export default EmailScreen
