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

  const services = ['Mortgauge Valuations for Financing', 'Fair Market Valuation for auditing Purposes', 'Stamp Duty Purposes',
    'Rent Reviews for Lease Renewals', 'Building Replacement Costs foro Insurance', 'Portfolio valuation for corporate Bodies',
    'Valauation for Pre-purchase', 'Retrospect Aceesment', 'Feaseability Assessment of property Development', 'vaulatuion for Coponsatation for comulsary acquisutin',
    'Asset Register Development']

  return (
    <Row>
      <Col md={12}>
        <h1>About the Company</h1>
        <p>
          Property PNG Limited is a PNG owned Property Valuation and Consultancy Practice.

          The Company was incorporated on 23rd February, 2010. The company provides independent property valuation and real estate
          consultancy services to meet the individual requirements of each client.

          Property PNG Ltd specialises in a diverse range of property valuation transactions and it is dedicated to providing a prompt and professional service. To ensure this commitment,
          the Company ensures compliance to International Valuation Standards and Generally Accepted Valuation Principles.

          Property PNG Limited is a PNG owned Property Valuation and Consultancy Practice.

          The Company was incorporated on 23rd February, 2010. The company provides independent property valuation and real estate consultancy services to meet the individual requirements of each client.

        </p>
        <p>
          {
            services.map(service =>
              <div>&#10004;{service}</div>
            )
          }
        </p>
        <p>
          Property PNG Ltd specialises in a diverse range of property valuation transactions and it is dedicated to providing a prompt and professional service. To ensure this commitment,
          the Company ensures compliance to International Valuation Standards and Generally Accepted Valuation Principles.
          Compensation Assessments
          We can provide compensation assessments for compulsory acquisitions for Private Individuals and Government Authorities and Corporations.
        </p>

      </Col>

    </Row>
  )
}

export default AboutScreen
