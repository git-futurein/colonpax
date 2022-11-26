import React, { useEffect } from 'react';
import '../heroSection/HeroSection.css';
import '../quiz/quiz.css';
import './email.css';
import HeaderBox from '../quiz/headerBox';

const Email = () => {
	return (
		<div className="email">
			<HeaderBox />
			<div className="container">
				<h2 className="heading-2 mb-5">Colonpax</h2>
			</div>

			<div className="hero_section">
				<div className="container">
					<div className="row overflow-hidden">
						<div className="col-md-7 hero_div">
							<h2 className="common_h2 mb-4">
								Schalte jetzt deinen GRATIS-Versand frei und erhalte Colonpax zu einem limitierten
								Sonderpreis!
							</h2>
							<div className="email_card d-flex align-items-start mb-5">
								<img src="/images/email-img-2.png" alt="" />
								<div className="desc">
									<h5 className="heading-5">Fakt</h5>
									<p className="common_p">
										Frauen im Alter von 55 mit stron hatten eine{' '}
										<strong>Erfolgsquote von 85%</strong> mit unserem Produkt.
									</p>
								</div>
							</div>

							<form className="mb-5 d-flex align-items-center">
								<label htmlFor="email">
									<img src="/images/email-img-4.png" alt="" />
								</label>
								<input type="text" placeholder="Deine Email" id="email" className="w-100" />
								<button type="submit" className="btn btn-submit">
									FORTSETZEN
								</button>
							</form>

							<div className="email_card email_card_2 d-flex align-items-start">
								<img src="/images/email-img-3.png" alt="" />
								<div className="desc">
									<h5 className="heading-5">Erhalte zukünftige News von uns.</h5>
									<p className="common_p">
										Wir versenden keinen Spam und geben keine E-Mail-Adressen weiter. Wir
										respektieren deine Privatsphäre.
									</p>
								</div>
							</div>
						</div>
						<div className="col-md-5">
							<div className="banner-img-part">
								<img src="/images/email-img-1.png" alt="hero image" className="" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Email;
