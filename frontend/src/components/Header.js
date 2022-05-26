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
      <Navbar bg='dark' variant='dark' expand='lg' collapseOnSelect>
        <Container>

          <LinkContainer to='/'>
            <Navbar.Brand>
              <Image id="logo" src="../PPNGL.webp" roundedCircle responsive fluid alt="Logo" />
              <span className='px-3' >PPNGLTD</span>
            </Navbar.Brand>


          </LinkContainer>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            {/* <Route render={({ history }) => <SearchBox history={history} />} /> */}
            <Nav className='ml-auto'>
              {/* <LinkContainer to='/email'>
                <Nav.Link>
                  <i className='fas fa-shopping-cart'></i> Email
                </Nav.Link>
              </LinkContainer> */}

              <LinkContainer to='/cart'>
                <Nav.Link>
                  <i className='fas fa-shopping-cart'></i> About
                </Nav.Link>
              </LinkContainer>
              {/* <LinkContainer to='/contacts'>
                <Nav.Link>
                  <i className='fas fa-shopping-cart'></i>Contacts
                </Nav.Link>
              </LinkContainer> */}
              {/* {userInfo ? (
                <NavDropdown title={userInfo.name} id='username'>
                  <LinkContainer to='/profile'>
                    <NavDropdown.Item>Profile</NavDropdown.Item>
                  </LinkContainer>
                  <NavDropdown.Item onClick={logoutHandler}>
                    Logout
                  </NavDropdown.Item>
                </NavDropdown>
              ) : (
                <LinkContainer to='/login'>
                  <Nav.Link>
                    <i className='fas fa-user'></i> Sign In
                  </Nav.Link>
                </LinkContainer>
              )} */}
              {/* {userInfo && userInfo.isAdmin && (
                <NavDropdown title='Admin' id='adminmenu'>
                  <LinkContainer to='/admin/userlist'>
                    <NavDropdown.Item>Users</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to='/admin/productlist'>
                    <NavDropdown.Item>Products</NavDropdown.Item>
                  </LinkContainer>
                  {/* <LinkContainer to='/admin/orderlist'>
                    <NavDropdown.Item>Orders</NavDropdown.Item>
                  </LinkContainer> 
                </NavDropdown>
              )} */}
              {userInfo && userInfo.isAdmin && (
                <NavDropdown title='Contacts' id='adminmenu'>
                  <LinkContainer to='/contacts'>
                    <NavDropdown.Item>Contact</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to='/email'>
                    <NavDropdown.Item>Email</NavDropdown.Item>
                  </LinkContainer>
                  {/* <LinkContainer to='/admin/orderlist'>
                    <NavDropdown.Item>Orders</NavDropdown.Item>
                  </LinkContainer> */}
                </NavDropdown>
              )}

              {userInfo && userInfo.isAdmin && (
                <NavDropdown title='Valuation' id='adminmenu'>
                  <LinkContainer to='/propertyvaluers'>
                    <NavDropdown.Item>Property Valuers</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to='/propertyservice'>
                    <NavDropdown.Item>Property Valuation Service</NavDropdown.Item>
                  </LinkContainer>
                  {/* <LinkContainer to='/admin/orderlist'>
                    <NavDropdown.Item>Orders</NavDropdown.Item>
                  </LinkContainer> */}
                </NavDropdown>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header
