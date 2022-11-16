import React from 'react';
import "./Header.css";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from "../../assets/Logo.svg";
import avatar from "../../assets/Bitmap.png";

const Header = () => {
  return (
    <div style={{background:"#EDF7F0"}}>
      <Navbar collapseOnSelect expand="lg" variant="light">
      <Container>
        <Navbar.Brand href="#home">
          <img src={logo} alt="Logo" className='img-fluid'/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="justify-content-start flex-grow-1 mx-auto">
            <Nav.Link href="#features" className="link">Symptome</Nav.Link>
            <Nav.Link href="#pricing" className="link">Lösung </Nav.Link>
            <Nav.Link href="#pricing" className="link">Ergebnisse</Nav.Link>
            <Nav.Link href="#pricing" className="link">Erfahrungen</Nav.Link>
            <Nav.Link href="#pricing" className="link">Blog</Nav.Link>
            
          </Nav>
          <Nav>
            <Nav.Link href="#deets">
              <img src={avatar} alt="Bitmap" className='img-fluid'/>
            </Nav.Link>
            <Nav.Link href="#deets">
              <button className="nav_btn">MACH DEN TEST</button>
            </Nav.Link>
             
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default Header