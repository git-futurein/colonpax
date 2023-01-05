import React from "react";
import "./Footer.css";
import logo from "../../assets/Logo2.svg";
import facebook from "../../assets/Group 114.svg";
import twitter from "../../assets/Group 115.svg";
import dot from "../../assets/Group 116.svg";
import cloud from "../../assets/Union 8.svg";
import colon from "../../assets/colon.png";
import { Link, useLocation } from "react-router-dom";

const Footer = () => {
<<<<<<< HEAD
  const { pathname } = useLocation();
  if (pathname.includes("quiz")) {
    return;
  }
  return (
    <div className="footer_section">
      <div className="container">
        <div
          className={
            pathname === "/"
              ? "cards row overflow-hidden"
              : "d-none cards row overflow-hidden"
          }
        >
          <div className="col-md-6">
            <h2 className="card_h2">
              Haben Sie Verdauungsbeschwerden oder Gewichtsprobleme?
            </h2>
            <p className="card_p">
              Erfahren Sie hier, ob Colonpax Ihnen helfen kann:
            </p>
            <button className="card_btn">MACH DEN TEST</button>
          </div>
          <div className="col-md-6 card_image"></div>
        </div>
=======
	const { pathname } = useLocation();
	if (pathname.includes('quiz')) {
		return;
	}
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
						<Link to="/quiz">
							<button className="card_btn">MACH DEN TEST</button>
						</Link>
					</div>
					<div className="col-md-6 card_image"></div>
				</div>
>>>>>>> 0e689caf2189112c170126452fba0c0c9f2a069e

        <div className="row main-footer">
          <div className="col-lg-5 col-md-7">
            <Link to="/">
              <img src={logo} alt="logo" className="img-fluid" />
            </Link>

<<<<<<< HEAD
            <p className="footer_p pt-2">
              ColonPax ist ein sicherer und effektiver Weg, wie du Verstopfungen
              auf eine natürliche Weise lindern, Gewicht verlieren und auch
              Blähungen reduzieren kannst. Beantworte das Quiz und erfahre, wie
              es dir helfen kann.
            </p>
          </div>
          <div className="col-lg-2 col-md-5">
            <ul>
              <li className="ul-header">MENU</li>
              <li>
                <a href="#">Symptome</a>
              </li>
              <li>
                <a href="#">Lösung</a>
              </li>
              <li>
                <a href="#">Ergebnisse</a>
              </li>
              <li>
                <a href="#">Erfahrungen</a>
              </li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-6">
            <ul>
              <li className="ul-header">SERVICE</li>
              <li>
                <Link to="/faq">FAQ</Link>
              </li>
              <li>
                <a href="#">Kundendienst</a>
              </li>
              <li>
                <Link to="/tarms">allgemeine Geschäftsbedinungen</Link>
              </li>
              <li>
                <a href="#">Rückgabe</a>
              </li>
              <li>
                <Link to="/subscription-cancellation">Abo verwalten</Link>
              </li>
              <li>
                <Link to="/studies">studies</Link>
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
            <p className="down-p">
              Copyright © 2022 Colonpax. Alle Rechte vorbehalten.
            </p>
          </div>
          <div className="col-lg-2 col-md-6 ">
            <Link to="/tarms">Nutzungsbedingungen</Link>
          </div>
          <div className="col-lg-2 col-md-6">
            <Link to="impressum">Impressum</Link>
          </div>
          <div className="col-lg-2 col-md-6">
            <Link to="privacy">Datenschutzbestimmungen</Link>
          </div>
        </div>
        {/* <div className="down-footer d-flex flex-wrap justify-content-between align-items-center gap-4">
					<p className="down-p">Copyright © 2022 Colonpax. Alle Rechte vorbehalten.</p>
					<Link to="/tarms">Nutzungsbedingungen</Link>
					<Link to="impressum">Impressum</Link>
					<Link to="privacy">Datenschutzbestimmungen</Link>
				</div> */}
        <div className="d-flex flex-column flex-lg-row justify-content-between align-items-center down-p pt-3 gap-4">
          <p className="text text-center mb-0">
            United Nutrition ÜO, Järvevana tee 9, 11314 - Tallin, Harju maakond
            - Estland
          </p>
          <img src="/images/payment.png" alt="" />
        </div>
      </div>
    </div>
  );
=======
						<p className="footer_p pt-2">
							ColonPax ist ein sicherer und effektiver Weg, wie du Verstopfungen auf eine natürliche
							Weise lindern, Gewicht verlieren und auch Blähungen reduzieren kannst. Beantworte das
							Quiz und erfahre, wie es dir helfen kann.
						</p>
					</div>
					{(pathname === '/' || pathname === '/plans') && (
						<div className="col-lg-2 col-md-5">
							<ul>
								<li className="ul-header">MENU</li>
								<li>
									<a href="#feature">Symptome</a>
								</li>
								<li>
									<a href="#lösung">Lösung</a>
								</li>
								<li>
									<a href="#ergebnisse">Ergebnisse</a>
								</li>
								<li>
									<a href="#review">Erfahrungen</a>
								</li>
							</ul>
						</div>
					)}

					<div className="col-lg-3 col-md-6">
						<ul>
							<li className="ul-header">SERVICE</li>
							<li>
								<Link to="/faq">FAQ</Link>
							</li>
							<li>
								<a href="#">Kundendienst</a>
							</li>
							<li>
								<Link to="/tarms">allgemeine Geschäftsbedinungen</Link>
							</li>
							<li>
								<a href="#">Rückgabe</a>
							</li>
							<li>
								<Link to="/subscription-cancellation">Abo verwalten</Link>
							</li>
							<li>
								<Link to="/studies">Studien</Link>
							</li>
						</ul>
					</div>
					<div className="col-lg-2 col-md-6 social_link">
						<ul className="">
							<li>
								<a href="https://www.facebook.com/colonpax">
									<i className="fa-brands fa-facebook-f"></i>
								</a>
							</li>
							<li>
								<a href="https://www.instagram.com/colonpax">
									<i className="fa-brands fa-instagram"></i>
								</a>
							</li>
						</ul>
					</div>
				</div>
				<hr />
				<div className=" down-footer d-flex justify-content-between align-items-center gap-4">
					<p className="down-p mb-0">Copyright © 2022 Colonpax. Alle Rechte vorbehalten.</p>
					<Link to="/tarms">Nutzungsbedingungen</Link>
					<Link to="impressum">Impressum</Link>
					<Link to="privacy">Datenschutzbestimmungen</Link>
				</div>

				<div className="row g-4 align-items-center mt-3">
					<div className="col-12 col-lg-6">
						<p className="text text-center mb-0">
							United Nutrition OÜ, Järvevana tee 9, 11314 - Tallin, Harju maakond - Estland
						</p>
					</div>
					<div className="col-lg-2"></div>
					<div className="col-12 col-lg-4">
						<div className="payment-imgs">
							<img src="/images/pay-img-1.png" alt="" />
							<img src="/images/pay-img-2.png" alt="" />
							<img src="/images/pay-img-3.png" alt="" />
							<img src="/images/pay-img-4.png" alt="" />
							<img src="/images/pay-img-5.png" alt="" />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
>>>>>>> 0e689caf2189112c170126452fba0c0c9f2a069e
};

export default Footer;
