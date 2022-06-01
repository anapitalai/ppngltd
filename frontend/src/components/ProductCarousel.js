import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Carousel, Image } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Loader from './Loader'
import Message from './Message'
// import { listTopProducts } from '../actions/productActions'

const products=[{"name":"Commercial","image":['1000.webp','1000_500.webp','1000_300.webp']},{"name":"Industrial","image":['1000.webp','1000_500.webp','1000_300.webp']},{"name":"Residential","image":['1000.webp','1000_500.webp','1000_300.webp']}]

const ProductCarousel = () => {


  return (
    <Carousel pause='hover' className='bg-carousel'>
      {products.map((product) => (
        <Carousel.Item key={product._id}>
          <Link>
            <Image id='carousel-img' src={product.image[0]} alt={product.name} fluid srcSet={`    
            ${product.image[1]} 500w,
            ${product.image[2]} 300w `}
             />
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
