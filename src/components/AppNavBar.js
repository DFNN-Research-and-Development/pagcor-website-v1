import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import logo from "../assets/casino-filipino-logo.png"

function AppNavBar() {
  return (
    <Navbar expand="lg"  className="sticky-top m-0 px-5" id="Nav-BG">
	    <Navbar.Brand as={ NavLink } to={"/"} className="font-weight-bold"
			id="text">
			<img
			alt=""
			src={logo}
			className="d-inline-block align-top rounded w-75"
			/>
		</Navbar.Brand>
	    <Navbar.Toggle aria-controls="basic-navbar-nav" />
	    <Navbar.Collapse id="basic-navbar-nav">

	       	<Nav className="ms-auto">
	           <Nav.Link as={ NavLink } to="" end id="text" className='barText rounded me-2 px-lg-4'>Home</Nav.Link>
	           <Nav.Link as={ NavLink } to="" end id="text" className='barText me-2'>Games</Nav.Link>
			   <Nav.Link as={ NavLink } to="" end id="text" className='barText me-2'>Responsible Gaming</Nav.Link>
	           <Nav.Link as={ NavLink } to="" end id="text" className='barText me-2'>About Us</Nav.Link>
			   <Nav.Link as={ NavLink } to="" end id="text" className='barText me-2'>Contact US</Nav.Link>
			   <Nav.Link as={ NavLink } to="" end id="text" className='barText px-lg-4 me-2'>Register</Nav.Link>
			   <Nav.Link as={ NavLink } to="" end id="text" className='barText px-lg-4 me-4'>Sign-up</Nav.Link>
			</Nav>
	  
	    </Navbar.Collapse> 
	</Navbar>
  )
}

export default AppNavBar