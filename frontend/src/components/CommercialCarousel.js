import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Carousel, Image } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Loader from './Loader'
import Message from './Message'

const products=[{"name":"COMMERCIAL","image":['commercial/com_crop_1000.webp','commercial/com_crop_500.webp','commercial/com_crop_300.webp']},{"name":"INDUSTRIAL","image":['industrial/i_crop_1000.webp','industrial/i_crop_500.webp','industrial/i_crop_300.webp']},{"name":"INDUSTRIAL","image":['industrial/car_crop_1000.webp','industrial/car_crop_500.webp','industrial/car_crop_300.webp']}]

const CommercialCarousel = () => {


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

export default CommercialCarousel
