import React from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { Button, Container, Navbar, NavDropdown, Nav, Image } from 'react-bootstrap'


const LogoBanner = () => {
    return (
        <header>

            <Navbar bg='white' variant='white' expand='lg' collapseOnSelect>
                <Container>

                    <LinkContainer to='/'>
                        <Navbar.Brand>
                            <Image id="logo" src="../PPNGL.webp" roundedCircle responsive fluid alt="Logo" />
                            <span className='px-3'>PPNGLTD</span>
                        </Navbar.Brand>
                    </LinkContainer>

                    <Navbar.Toggle aria-controls='basic-navbar-nav' />
                    {/* <Navbar.Collapse id='basic-navbar-nav'> */}

                    <Nav className='ml-auto'>

                        <LinkContainer to=''>
                            <Nav.Link>
                                <i className='fas fa-phone'></i> <a href="tel:+675 341 6368">+675 3416 368</a>
                                {/* <span>Call (+675) 3416368</span> */}
                                
                     
                            </Nav.Link>
                        </LinkContainer>


                    </Nav>
                    {/* </Navbar.Collapse> */}
                </Container>
            </Navbar>
        </header>
    )
}

export default LogoBanner
