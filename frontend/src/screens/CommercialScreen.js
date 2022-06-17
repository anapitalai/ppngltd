import React from 'react'
import { Col, Row } from 'react-bootstrap'
import CommercialCarousel from '../components/CommercialCarousel'

const CommercialScreen = () => {
    return (
        <>
            <h1>Commercial and Industrial</h1>
            <Col>
                <CommercialCarousel />
                <Row>
                    Property PNG valuers can assist you with all your industrial/commercial property valuation in PNG. We have
                    extensive experience in properties such small office to large multi-storey developments and industrial sites.
                    Industrial/commercial property valuations is solely business related and as such are approached differently to
                    residential property valuations.
                </Row>

            </Col>
        </>
    )

}

export default CommercialScreen