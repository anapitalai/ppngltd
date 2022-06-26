import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col, ListGroup, Image, Form, Button, Card,Container } from 'react-bootstrap'
import Message from '../components/Message'
import { addToCart, removeFromCart } from '../actions/cartActions'
import { LinkContainer } from 'react-router-bootstrap'
import Jump from 'react-reveal/Jump';

const ContactScreen = ({ match, location, history }) => {
  const productId = match.params.id

  const qty = location.search ? Number(location.search.split('=')[1]) : 1

  const dispatch = useDispatch()

  const cart = useSelector((state) => state.cart)
  const { cartItems } = cart


  return (
    <Row>
      <div id='bg-yellow'>
        <h1>Contact Us</h1>

        <p>
          If you need to have your property valued in PNG, and if you have any questions about our valuation process
          or would like to receive a quote, please reach out to us via email at support@propertypngltd.com or by calling
          us directly on (+675) 341 6368.
          Our fees are competitive and are dependent on the nature of the work and time involved to carry out the
          valuation task required by the client. <br />


        </p>

      </div>
      <Container>
      <LinkContainer to='/email'>
            <Button variant='outline-dark'>Email Us @ support@propertypngltd.com</Button>
          </LinkContainer>
         
      <Image id="" src='con.jpeg' srcSet='con.jpeg 1000w,con.jpeg 500w,
            land/land_crop_300.webp 300w' rounded responsive fluid alt="Logo" />
            
      </Container>
    </Row>

  )
}

export default ContactScreen
