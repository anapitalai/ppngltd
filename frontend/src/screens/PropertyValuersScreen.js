import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col, ListGroup, Image, Form, Button, Card } from 'react-bootstrap'
import Message from '../components/Message'
import { addToCart, removeFromCart } from '../actions/cartActions'

const PropertyValuersScreen = ({ match, location, history }) => {
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
        <h1>About the Company</h1>

        <p>Property PNG Limited is a PNG owned Property Valuation and Consultancy Practice.</p>

        <p>The Company was incorporated on 23rd February, 2010. The company provides independent property valuation and real estate consultancy services to meet the individual requirements of each client.

          Property PNG Ltd specialises in a diverse range of property valuation transactions and it is dedicated to providing a prompt and professional service. To ensure this commitment, the Company ensures compliance to International Valuation Standards and Generally Accepted Valuation Principles.
        </p>
        <p>
          <h3>Services</h3>
          Our property valuation service covers Residential, Commercial and Industrial property and these include:-

          • Mortgage Valuations for financing
          • Fair Market valuation for auditing purposes
          • Stamp Duty purposes

          The Company provides building Insurance Replacement Cost Estimates to Corporate clients and individuals. Our services include:
          • Residential Building Replacement Costs for Insurance Purposes
          • Commercial and Industrial Building Replacement Costs for Insurance Purposes


          Poperties valuations 2020-21
          <ListGroup as="ol" numbered>
            <ListGroup.Item as="li">Kumul Consolidated Holding Limited (KCHL) – Nationwide Portfolio valuation 2020-21</ListGroup.Item>
            <ListGroup.Item as="li">Colliers International Canberra – DFAT market assessment 2019 & 2021</ListGroup.Item>
            <ListGroup.Item as="li">Colliers International Canberra – US Department of State Rental & Market Valuation 2021</ListGroup.Item>
            <ListGroup.Item as="li">East New Britain Development Corporation Group of Companies (2021 Commercial Building - Pom)</ListGroup.Item>
            <ListGroup.Item as="li">Butibam Progress Association (Lae) Portfolio Valuation -2018 & 2020</ListGroup.Item>
            <ListGroup.Item as="li"> Coca Cola Amatil Limited – Gordon and Mount Hagen Facilities.</ListGroup.Item>
            <ListGroup.Item as="li">National Research Institute Property Portfolio (Port Moresby) – 2018.</ListGroup.Item>
            <ListGroup.Item as="li">Trukai Limited Property Portfolio nationwide valuation (2017 & 2019)</ListGroup.Item>
            <ListGroup.Item as="li"> AES Wharf NapaNapa (2017) collaboration with Preston Rowe Patterson Pty Ltd </ListGroup.Item>


            <ListGroup.Item as="li"> PNG Power Southern Region Valuations (2016) – NCD, Milne Bay Province, Oro Province and Daru</ListGroup.Item>
            <ListGroup.Item as="li"> KB Developments, Alotau, Milne Bay Province 2014 – present</ListGroup.Item>
            <ListGroup.Item as="li">International Training Institute Properties (Lae and Port Moresby)</ListGroup.Item>
            <ListGroup.Item as="li">Trukai Limited Property Portfolio nationwide valuation (2017 & 2019)</ListGroup.Item>
            <ListGroup.Item as="li">Pacific Palms Properties (Steamships) </ListGroup.Item>


            <ListGroup.Item as="li">New Century Limited (Kiunga and Port Moresby)</ListGroup.Item>
            <ListGroup.Item as="li"> Salamaua Holdings Limited (Hotel and residential properties)</ListGroup.Item>
          </ListGroup>

        </p>



      </Col>

    </Row>
  )
}

export default PropertyValuersScreen
