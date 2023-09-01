import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import logo from "../assets/PAGCOR-colored 1.png"

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
	           <Nav.Link as={ NavLink } to="" end id="text" className='barBorderClr border rounded me-5 px-4'>Home</Nav.Link>
	           <Nav.Link as={ NavLink } to="" end id="text" className='barText me-5'>Games</Nav.Link>
	           <Nav.Link as={ NavLink } to="" end id="text" className='barText me-5'>About</Nav.Link>
			   <Nav.Link as={ NavLink } to="" end id="text" className='barText me-5'>Contact US</Nav.Link>
			   <Nav.Link as={ NavLink } to="" end id="text" className='barBorderClr border rounded px-4 me-2'>Sign In</Nav.Link>
			   <Nav.Link  className='barText me-2'>Or</Nav.Link>
			   <Nav.Link as={ NavLink } to="" end id="text" className='barBorderClr border rounded px-4 me-5'>Register</Nav.Link>
			</Nav>
	  
	    </Navbar.Collapse> 
	</Navbar>
  )
}

export default AppNavBar