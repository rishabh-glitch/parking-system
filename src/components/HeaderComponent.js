import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import NavDropdown from 'react-bootstrap/NavDropdown';

const HeaderComponent = () => {
  return (
    <Navbar style={{background:"radial-gradient(rgb(0 0 0), rgba(72, 67, 67, 0))"}} expand="lg">
      <Container 
      style= {{maxWidth:"1300px"}}
      >
        <Navbar.Brand href="#home" style = {{color:"aliceblue"}}>Parking System</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto" >
            <Nav.Link href="#home" style = {{color:"aliceblue"}}>Home</Nav.Link>
            <Link to="/bookparkingslot" className='nav-link active' style = {{color:"aliceblue"}}>BookSlots</Link>
            <Nav.Link href="#link" style = {{color:"aliceblue"}}>Create Premise</Nav.Link>
            <Nav.Link href="#link" style = {{color:"aliceblue"}}>Create Floor</Nav.Link>
            <Nav.Link href="/createvehicle" style = {{color:"aliceblue"}}>Create Vehicle</Nav.Link>
            {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

  )
}

export default HeaderComponent


