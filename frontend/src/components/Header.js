import React from 'react'
import { Route } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { LinkContainer } from 'react-router-bootstrap'
import { Navbar, Nav, Container, NavDropdown, Image, Col } from 'react-bootstrap'
import SearchBox from './SearchBox'
import { logout } from '../actions/userActions'

const Header = () => {
  const dispatch = useDispatch()

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  const logoutHandler = () => {
    dispatch(logout())
  }


  return (
    <header>
      {/* bg='myred' */}
      <Navbar bg='myred' variant='dark' expand='lg' collapseOnSelect>
        <Container>


          <Nav className='mr-auto'>


            <LinkContainer exact to='/'>
              <NavDropdown.Item>Home</NavDropdown.Item>
            </LinkContainer>

            <LinkContainer to='/about'>
              <NavDropdown.Item>About Us</NavDropdown.Item>
            </LinkContainer>
            <LinkContainer to='/residential'>
              <NavDropdown.Item>Residential</NavDropdown.Item>
            </LinkContainer>


            <LinkContainer to='/commercial'>
              <NavDropdown.Item>Commercial & Industrial</NavDropdown.Item>
            </LinkContainer>
            <LinkContainer to='/vacant'>
              <NavDropdown.Item>Vacant Land</NavDropdown.Item>
            </LinkContainer>
            <LinkContainer to='/contacts'>
              <NavDropdown.Item>Contact Us</NavDropdown.Item>
            </LinkContainer>

            <LinkContainer to='/otherservices'>
              <NavDropdown.Item>Other Services</NavDropdown.Item>
            </LinkContainer>


          </Nav>

        </Container>
      </Navbar>
    </header>
  )
}

export default Header
