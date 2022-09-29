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
            <Link to="/adminhome"className='nav-link active' style = {{color:"aliceblue"}}>Home</Link>
            {/* <Link to="/bookparkingslot" className='nav-link active' style = {{color:"aliceblue"}}>BookSlots</Link> */}
            <Link to = "/createpremisecomponent" className='nav-link active' style = {{color:"aliceblue"}}>Create Premise</Link>
            <Link to = "/createfloor" className='nav-link active' style = {{color:"aliceblue"}}>Create Floor</Link>
            <Link to="/bookedparkingslot" className='nav-link active' style = {{color:"aliceblue"}}>Booked Slots</Link>
            <Link to="/parkedvehicle" className='nav-link active' style = {{color:"aliceblue"}}>Parked Vehicle</Link>
            <Link className='btn btn-danger'to="/" style={{marginLeft:"540px"}}>Logout</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

  )
}

export default HeaderComponent


