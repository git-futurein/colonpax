import React from 'react';
import './Header.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../assets/Logo.svg';
import avatar from '../../assets/Bitmap.png';
import { Link } from 'react-router-dom';

const Header = () => {
	return (
		<div style={{ background: '#EDF7F0' }}>
			<Navbar collapseOnSelect expand="lg" variant="light">
				<Container>
					<Navbar.Brand href="#home">
						<img src={logo} alt="Logo" className="img-fluid" />
					</Navbar.Brand>
					<Navbar.Toggle aria-controls="responsive-navbar-nav" />
					<Navbar.Collapse id="responsive-navbar-nav">
						<Nav className="justify-content-start flex-grow-1 mx-auto">
							<a href="#feature" className="link">
								Symptome
							</a>
							<a href="#lösung" className="link">
								Lösung
							</a>
							<a href="#ergebnisse" className="link">
								Ergebnisse
							</a>
							<a href="#review" className="link">
								Erfahrungen
							</a>
							{/* <a href="#blog" className="link">
								Blog
							</a> */}
						</Nav>
						<Nav className="align-items-center">
							{/* <Link to="/email" className="profile">
								<img src={avatar} alt="Bitmap" className="img-fluid" />
							</Link> */}

							<Link to="/quiz">
								<button className="nav_btn">MACH DEN TEST</button>
							</Link>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</div>
	);
};

export default Header;
