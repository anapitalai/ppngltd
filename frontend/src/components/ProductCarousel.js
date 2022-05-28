import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Carousel, Image } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Loader from './Loader'
import Message from './Message'
// import { listTopProducts } from '../actions/productActions'

const products=[{"name":"Realestate","image":"land.png"},{"name":"Realestate","image":"industrial.png"},{"name":"Realestate","image":"residential.png"}]

const ProductCarousel = () => {
  // const dispatch = useDispatch()

  // const productTopRated = useSelector((state) => state.productTopRated)
  // const { loading, error, products } = productTopRated

  // useEffect(() => {
  //   dispatch(products)
  // }, [dispatch])

  return (
    <Carousel pause='hover' className='bg-myred'>
      {products.map((product) => (
        <Carousel.Item key={product._id}>
          <Link to={`/product/${product._id}`}>
            <Image src={product.image} alt={product.name} fluid />
            <Carousel.Caption className='carousel-caption'>
              <h2>
                {product.name} (${product.price})
              </h2>
            </Carousel.Caption>
          </Link>
        </Carousel.Item>
      ))}
    </Carousel>
  )
}

export default ProductCarousel
