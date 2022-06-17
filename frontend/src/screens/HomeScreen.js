import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col, Image, Card, CardGroup,Button } from 'react-bootstrap'
import Product from '../components/Product'
import Message from '../components/Message'
import Loader from '../components/Loader'
import Paginate from '../components/Paginate'
import ProductCarousel from '../components/CommercialCarousel'
import Meta from '../components/Meta'
import { listProducts } from '../actions/productActions'

const HomeScreen = ({ match }) => {
  const keyword = match.params.keyword

  const pageNumber = match.params.pageNumber || 1

  const dispatch = useDispatch()

  const productList = useSelector((state) => state.productList)
  const { loading, error, products, page, pages } = productList

  useEffect(() => {
    dispatch(listProducts(keyword, pageNumber))
  }, [dispatch, keyword, pageNumber])

  return (
    <>
      <Image id="" src='ppngltd-banner.webp'  srcSet='ppngltd-banner_500.webp 500w,
            ppngltd-banner_300.webp 300w' rounded responsive fluid alt="Logo" />

      <CardGroup className='py-3'>
        <Card id='card' bg='primary'>
          <Card.Body>
            <Card.Title>Property Valuation</Card.Title>
            <Card.Text>
              We provide property Valuation and advice.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
          </Card.Footer>
        </Card>
        <Card id='card' bg='warning'>
          <Card.Body>
            <Card.Title>Expertise</Card.Title>
            <Card.Text>
              Expert local knowledge and experience
              
            </Card.Text>
          </Card.Body>
          <Card.Footer>
          </Card.Footer>
        </Card>
        <Card id='card' bg='danger'>
          <Card.Body>
            <Card.Title>Location</Card.Title>
            <Card.Text>
              Any property type in and location in Papua New Guinea.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
          </Card.Footer>
        </Card>
      </CardGroup>
      {/* <Button id='b'>Transition</Button> */}
    </>
  )
}

export default HomeScreen
