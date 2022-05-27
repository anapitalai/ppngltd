import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col, ListGroup, Image, Form, Button, Card, CardGroup } from 'react-bootstrap'
import Message from '../components/Message'
import { addToCart, removeFromCart } from '../actions/cartActions'
import ProductCarousel from '../components/ProductCarousel'

const ResidentialScreen = ({ match, location, history }) => {
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
      <Col md={12}>
        <h1>Valuation Service</h1>
        {/* <img id="" src="residential.png" rounded responsive fluid alt="Logo" /> */}
        <ProductCarousel />

      </Col>
      If you need to know the value of your home or investment residential property?
      We provide independent residential property valuation services to owners and buyer of property (improved or
      vacant land), landlords and professional service providers.
      As a panel valuer for SOE’s in PNG, we have an in-depth knowledge of each specific property sub-market in
      PNG. At Property PNG, we can help with the valuation you need for your residential property asset
    </Row >
  )
}

export default ResidentialScreen
