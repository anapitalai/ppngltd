import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Carousel, Image } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Loader from './Loader'
import Message from './Message'
// import { listTopProducts } from '../actions/productActions'

const products=[{"name":"Commercial","image":"00.webp"},{"name":"Industrial","image":"01.webp"},{"name":"Residential","image":"04.webp"}]

const ProductCarousel = () => {


  return (
    <Carousel pause='hover' className='bg-carousel'>
      {products.map((product) => (
        <Carousel.Item key={product._id}>
          <Link>
            <Image id='carousel-img' src={product.image} alt={product.name} fluid />
            <Carousel.Caption className='carousel-caption'>
              <h2>
                {product.name}
              </h2>
            </Carousel.Caption>
          </Link>
        </Carousel.Item>
      ))}
    </Carousel>
  )
}

export default ProductCarousel
