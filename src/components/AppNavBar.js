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
	    className="d-inline-block align-top rounded"
	    />
	</Navbar.Brand>
	    <Navbar.Toggle aria-controls="basic-navbar-nav" />
	    <Navbar.Collapse id="basic-navbar-nav">

	       <Nav className="ms-auto ">
	           <>
	           <Nav.Link as={ NavLink } to="/dashboard" end id="text">Dashboard</Nav.Link>
	           </>
	           :
	           <>
	           <Nav.Link as={ NavLink } to="/" end id="text">Home</Nav.Link>
	           <Nav.Link as={ NavLink } to="/products" end id="text">Products</Nav.Link>
	               
	               
	               <NavDropdown align="end" id="collasible-nav-dropdown" end>
	               <NavDropdown.Item as={ NavLink } to="/settings" end >Account Settings</NavDropdown.Item>
	               <NavDropdown.Item as={ NavLink } to="/report" end >Report</NavDropdown.Item>
	               <NavDropdown.Divider />
	               <NavDropdown.Item as={ NavLink } to="/logout" end >Logout</NavDropdown.Item>
	               </NavDropdown>
	               </>
	           :
	           <>
	               <Nav.Link as={ NavLink } to="/login" end id="text">Login</Nav.Link>
	               <Nav.Link as={ NavLink } to="/register" end id="text">Register</Nav.Link>
	           </>
	       
	   </Nav>
	  
	    </Navbar.Collapse>
	</Navbar>
  )
}

export default AppNavBar