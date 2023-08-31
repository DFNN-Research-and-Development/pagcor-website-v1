import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink } from 'react-router-dom';
import logo from "../assets/PAGCOR-colored 1.png"

function AppNavBar() {
  return (
    <Navbar expand="lg"  className="shadow sticky-top m-0 px-5" id="Nav-BG">
	    <Navbar.Brand as={ NavLink } to={"/"} className="font-weight-bold"
			id="text">
			<img
			alt=""
			src={logo}
			className="d-inline-block align-top rounded w-50"
			/>
		</Navbar.Brand>
	    <Navbar.Toggle aria-controls="basic-navbar-nav" />
	    <Navbar.Collapse id="basic-navbar-nav">

	       <Nav className="ms-auto ">
	           <Nav.Link as={ NavLink } to="/dashboard" end id="text">Dashboard</Nav.Link>
	           <Nav.Link as={ NavLink } to="/" end id="text">Home</Nav.Link>
	           <Nav.Link as={ NavLink } to="/products" end id="text">Products</Nav.Link>
	   		</Nav>
	  
	    </Navbar.Collapse>
	</Navbar>
  )
}

export default AppNavBar