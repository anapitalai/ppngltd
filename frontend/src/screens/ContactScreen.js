import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col, ListGroup, Image, Form, Button, Card } from 'react-bootstrap'
import Message from '../components/Message'
import { addToCart, removeFromCart } from '../actions/cartActions'

const ContactScreen = ({ match, location, history }) => {
  const productId = match.params.id

  const qty = location.search ? Number(location.search.split('=')[1]) : 1

  const dispatch = useDispatch()

  const cart = useSelector((state) => state.cart)
  const { cartItems } = cart

  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty))
    }
  }, [dispatch, productId, qty])

  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id))
  }

  const checkoutHandler = () => {
    history.push('/login?redirect=shipping')
  }

  return (
    <Row>
      <Col md={8}>
        <h1>Contacts</h1>
        {/* <img id="" src="others.png" rounded responsive fluid alt="Logo" /> */}

      </Col>

      <Col md={4}>

        <p>
          I f you need to have your property valued in PNG, and if you have any questions about our valuation process
          or would like to receive a quote, please reach out to us via email at support@propertypngltd.com or by calling
          us directly on (+675) 341 6368.
          Our fees are competitive and are dependent on the nature of the work and time involved to carry out the
          valuation task required by the client.

        </p>


      </Col>

    </Row>

  )
}

export default ContactScreen
