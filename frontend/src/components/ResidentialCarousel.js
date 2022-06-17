import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Carousel, Image } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Loader from './Loader'
import Message from './Message'

const products=[{"name":"RESIDENTIAL","image":['hotel/hotel_crop_1000.webp','hotel/hotel_crop_500.webp',
'hotel/hotel_crop_300.webp']},{"name":"RESIDENTIAL","image":['residential/residential_crop_1000.webp','residential/residential_crop_500.webp','residential/residential_crop_300.webp']},{"name":"RESIDENTIAL","image":['residential/res_crop_1000.webp','residential/res_crop_500.webp','residential/res_crop_300.webp']}]

const ResidentialCarousel = () => {


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

export default ResidentialCarousel
