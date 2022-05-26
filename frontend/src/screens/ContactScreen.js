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


        <h2> Principal Consultant</h2>
        <b>FLORA KWAPENA (Dr.)
          PhD (USC), MRE (UNSW), BLS (PNGUT), MPNGIVLA
          Registered Urban Valuer No. 123 (PNG)</b>
        <h3>Qualifications/Experience</h3>
        <ListGroup as="ol" numbered>
          <ListGroup.Item as="li">PhD University of the Sunshine Coast, QLD</ListGroup.Item>
          <ListGroup.Item as="li">Master of Real Estate from the University of New South Wales, Sydney</ListGroup.Item>
          <ListGroup.Item as="li">Former Valuer General of PNG</ListGroup.Item>
          <ListGroup.Item as="li">Former Lecturer PNG Unitech – Property Studies</ListGroup.Item>
          <ListGroup.Item as="li">Member of the Australian Valuer Institute(CPV)</ListGroup.Item>
          <ListGroup.Item as="li">Full member of the PNG Institute of Valuers and Land Administrators.</ListGroup.Item>
          <ListGroup.Item as="li">achelor of Land Studies (with merit) and awarded the PNG University of Technology Council Medal for academic excellence.</ListGroup.Item>
          <ListGroup.Item as="li">Master of Real Estate from the University of New South Wales, Sydney</ListGroup.Item>
          <ListGroup.Item as="li">Former Valuer General of PNG</ListGroup.Item>
        </ListGroup>


        <h3>Expertise</h3>
        • Registered PNG Urban Valuer (No. 123).<hr />
        • Over 20 years of experience in the valuation profession/industry in PNG,<hr />
        • Exposed to most types of real property valuations covering residential, industrial and commercial properties.<hr />
        • Exposed to land administration and statutory valuations (rental reappraisals and assessment of unimproved land values).<hr />
        • Compensation assessments.



        <h2>Valuer</h2>
        BERYL EREMAN (Ms.)
        BLS (PNGUT), MPNGIVLA

        <h3>Qualifications/Experience</h3>
        <ListGroup as="ol" numbered>
          <ListGroup.Item as="li">Bachelor of Land Studies PNG University of Technology.</ListGroup.Item>
          <ListGroup.Item as="li"> Lands Officer, PNG Power Limited</ListGroup.Item>
          <ListGroup.Item as="li">Lands Officer, National Maritime Services Authority</ListGroup.Item>
          <ListGroup.Item as="li">Member of the PNG Institute of Valuers and Land Administrators</ListGroup.Item>


        </ListGroup>



        <h3>Expertise</h3>
        • Over 6 years of experience in the valuation profession/industry in PNG<hr />
        • Exposed to most types of real property valuations covering residential, industrial and commercial properties<hr />
        • Exposed to land administration and statutory valuations (assessment of unimproved land values)
      </Col>

      <Col md={4}>

        <Image src="../fkwapena.webp" fluid roundedCircle  className='images mask overlay hover-overlay' />
        <Image src="../bereman.webp" fuid roundedCircle  className='images mask overlay hover-overlay' />

        <p>Please feel free to contact us to discuss any of our valuation services that you may require.</p>


        <label for="email">Enter your email:</label>


        Address:
        P.O Box 1067
        Boroko
        NCD
        PNG


      </Col>

    </Row>

  )
}

export default ContactScreen
