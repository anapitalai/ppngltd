import { useState } from 'react'
import React from 'react'
import { Col, Row, Container, Modal, Button } from 'react-bootstrap'
import ImageModal from '../components/ImageModal'
import Fade from 'react-reveal/Fade'


const CommercialScreen = () => {

    const [openModal, setOpenModal] = useState(false)

    return (


        <>
            <Col>
                {/* {openModal && <ImageModal closeModal={setOpenModal} />} */}

                <Container className='parent-image-grid'>
                    <Fade left cascade>
                        <figure className='position-relative'>

                            <img className='image-items' src="commercial/com_crop_500.webp" className='img-fluid' alt="Logo" />

                            {/* <img className="image-items" src="industrial/i_crop_500.webp" className='img-fluid' alt="Logo" />
                        <img className="image-items" src="industrial/car_crop_500.webp" className='img-fluid' alt="Logo" /> */}
                            <img className="image-items" src="industrial/crop_building_500.webp" className='img-fluid' alt="Logo" />

                            <figcaption id='bg-yellow'>
                                Industrial | Commercial
                            </figcaption>
                        </figure>
                    </Fade>
                </Container>
                <Row id='bg-yellow' className='fix-pad'>
                    <h1>Commercial and Industrial Property Valuation</h1>
                    <p align='justify'>
                        Property PNG valuers can assist you with all your industrial/commercial property valuation in PNG. We have
                        extensive experience in valuing properties such as small offices to large multi-storey developments and industrial sites.
                        Industrial/commercial property valuations is solely business related and as such are approached differently to
                        residential property valuations.
                    </p>
                </Row>

            </Col>
        </>
    )

}

export default CommercialScreen
