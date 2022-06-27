import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col, ListGroup, Image, Form, Button, Card } from 'react-bootstrap'

import Message from '../components/Message'
import { addToCart, removeFromCart } from '../actions/cartActions'

const AboutScreen = ({ match, location, history }) => {
  const productId = match.params.id

  const qty = location.search ? Number(location.search.split('=')[1]) : 1


  const dispatch = useDispatch()

  const cart = useSelector((state) => state.cart)
  const { cartItems } = cart


  const services = ['Mortgage Valuations for Financing Purposes', 'Fair Market Valuation for Auditing Purposes', 'Stamp Duty Purposes',
    'Rent Reviews for Lease Renewals', 'Building Replacement Costs for Insurance', 'Portfolio valuation for Corporate Bodies',
    'Valuation for Pre-purchase', 'Retrospect Assessment', 'Feasibility Assessment of Property Development', 'Valuation for Compensation for Compulsory Acquisition',
    'Asset Register Development']

  return (
    <Row  id='bg-yellow' className='fix-pad'>
      {/* <Col md={12}> */}
        <h1>About the Company</h1>
      
        <p align="justify">
          Property PNG Limited is a PNG owned Property Valuation and Consultancy Practice.

          The company was incorporated on 23rd February, 2010. The company provides independent property valuation and real estate consultancy services to meet the individual requirements of each client. Property PNG Ltd specialises in a diverse range of property valuation transactions and it is dedicated to providing a prompt and professional service. To ensure this commitment,
          the company ensures compliance to International Valuation Standards and Generally Accepted Valuation Principles.


        </p>
        <p align="justify">
          {
            services.map(service =>
              <div>&#10004;{service}</div>
            )
          }
        </p>
        <p align="justify">
          We can provide compensation assessments for compulsory acquisitions for Private Individuals and Government Authorities and Corporations.
        </p>

    </Row>
  )
}

export default AboutScreen
