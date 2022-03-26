import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { Image } from './StylesNavbarComponent'
import logo from '../../logo.svg'

const NavbarComponent = () => {
  return (
    <>
      <Navbar bg="dark" expand="lg" sticky="top">
        <Container>
          <Navbar.Brand>
            <Image src={logo} alt="logo" />
          </Navbar.Brand>
          <Navbar.Toggle
            style={{ borderColor: 'white', color: 'white' }}
            aria-controls="navbar-nav"
          />
          <Navbar.Collapse className="justify-content-end justify-content-center" id="navbar-nav">
            <Nav className=" align-items-center ">
              <Link to="/users" className="mb-md-0 mb-sm-2 text-decoration-none text-white ">
                Usuarios
              </Link>
              <Link to="/posts" className="p-lg-3 mb-md-0 mb-sm-2 text-decoration-none text-white">
                Posts
              </Link>
              <Link to="/albumes" className="p-lg-3 mb-md-0 mb-sm-2  text-decoration-none text-white">
                Albumes
              </Link>
              <Link to="/todos" className="p-lg-3 mb-md-0 mb-sm-2 text-decoration-none text-white">
                Todos
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default NavbarComponent
