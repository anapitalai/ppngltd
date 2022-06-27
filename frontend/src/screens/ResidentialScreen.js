import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col, ListGroup, Image, Form, Button, Card, CardGroup, Container } from 'react-bootstrap'
import Message from '../components/Message'
import { addToCart, removeFromCart } from '../actions/cartActions'
import ResidentialCarousel from '../components/ResidentialCarousel'
import Fade from 'react-reveal/Fade'

const ResidentialScreen = ({ match, location, history }) => {
  const productId = match.params.id

  const qty = location.search ? Number(location.search.split('=')[1]) : 1

  const dispatch = useDispatch()

  const cart = useSelector((state) => state.cart)
  const { cartItems } = cart



  return (
    <Row>
      <Col md={12}>
        <Container>
          <Fade right cascade>
            <figure className='position-relative'>
              <img className="image-items" src="hotel/hotel_crop_500.webp" className='img-fluid' rounded responsive fluid alt="Logo" />
              {/* <img className="image-items" src="residential/res_crop_500.webp" className='img-fluid' rounded responsive fluid alt="Logo" /> */}
              <img className="image-items" src="residential/residential_crop_500.webp" className='img-fluid' rounded responsive fluid alt="Logo" />
              <figcaption id='bg-yellow'>
                Residential
              </figcaption>
            </figure>
          </Fade>
        </Container>

      </Col>
      <div id='bg-yellow' className='fix-pad'>
        <h1>Residential Property Valuation</h1>
        <p align="justify">
          If you need to know the value of your home or investment residential property.
           We provide independent residential property valuation services to owners and buyer of property (improved or
          vacant land), landlords and professional service providers.
        </p>
      </div>
    </Row >
  )
}

export default ResidentialScreen
