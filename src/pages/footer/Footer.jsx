import React from 'react';
import './Footer.css';
import logo from '../../assets/Logo2.svg';
import facebook from '../../assets/Group 114.svg';
import twitter from '../../assets/Group 115.svg';
import dot from '../../assets/Group 116.svg';
import cloud from '../../assets/Union 8.svg';
import colon from '../../assets/colon.png';
import { useLocation } from 'react-router-dom';

const Footer = () => {
	const { pathname } = useLocation();

	return (
		<div className="footer_section">
			<div className="container">
				<div
					className={
						pathname === '/' ? 'cards row overflow-hidden' : 'd-none cards row overflow-hidden'
					}
				>
					<div className="col-md-6">
						<h2 className="card_h2">Haben Sie Verdauungsbeschwerden oder Gewichtsprobleme?</h2>
						<p className="card_p">Erfahren Sie hier, ob Colonpax Ihnen helfen kann:</p>
						<button className="card_btn">MACH DEN TEST</button>
					</div>
					<div className="col-md-6 card_image"></div>
				</div>

				<div className="row main-footer">
					<div className="col-lg-5 col-md-7">
						<img src={logo} alt="logo" className="img-fluid" />

						<p className="footer_p pt-2">
							ColonPax ist ein sicherer und effektiver Weg, wie du Verstopfungen auf eine natürliche
							Weise lindern, Gewicht verlieren und auch Blähungen reduzieren kannst. Beantworte das
							Quiz und erfahre, wie es dir helfen kann.
						</p>
					</div>
					<div className="col-lg-2 col-md-5">
						<ul>
							<li className="ul-header">MENU</li>
							<li>
								<a href="#">Symptome</a>{' '}
							</li>
							<li>
								{' '}
								<a href="#">Lösung</a>{' '}
							</li>
							<li>
								{' '}
								<a href="#">Ergebnisse</a>{' '}
							</li>
							<li>
								{' '}
								<a href="#">Erfahrungen</a>
							</li>
						</ul>
					</div>
					<div className="col-lg-3 col-md-6">
						<ul>
							<li className="ul-header">SERVICE</li>
							<li>FAQ </li>
							<li>
								{' '}
								<a href="#">Kundendienst</a>{' '}
							</li>
							<li>
								{' '}
								<a href="#">allgemeine Geschäftsbedinungen</a>
							</li>
							<li>
								{' '}
								<a href="#">Rückgabe</a>{' '}
							</li>
						</ul>
					</div>
					<div className="col-lg-2 col-md-6 social_link">
						<ul>
							<li>
								<a href="#">
									<i className="fa-brands fa-facebook-f"></i>
								</a>
							</li>
							<li>
								<a href="#">
									<i className="fa-brands fa-twitter"></i>
								</a>
							</li>
							<li>
								<a href="#">
									<i className="fa-brands fa-instagram"></i>
								</a>
							</li>
						</ul>
					</div>
				</div>
				<hr />
				<div className="row down-footer">
					<div className="col-lg-6 col-md-6 ">
						<p className="down-p">Copyright © 2022 Colonpax. Alle Rechte vorbehalten.</p>
					</div>
					<div className="col-lg-2 col-md-6 ">
						<a href="#">Nutzungsbedingungen</a>
					</div>
					<div className="col-lg-2 col-md-6">
						<a href="#">Impressum</a>
					</div>
					<div className="col-lg-2 col-md-6">
						<a href="#">Datenschutzbestimmungen</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
