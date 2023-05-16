import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
const NavbarPanel = () => {
    const productCart = useSelector(state => state.cart)
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand ><Nav.Link to="/" as={Link}>Redux Toolkit</Nav.Link></Navbar.Brand>
        <Navbar id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link htoef="/" as ={Link}>Products</Nav.Link>
          </Nav>
        </Navbar>
        <Navbar.Toggle />
        <Navbar.Collapse className='justify-content-end'>
            <Navbar.Text>
                <Nav.Link to="/cart" as={Link}>Cart {productCart.length}</Nav.Link>
            </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavbarPanel