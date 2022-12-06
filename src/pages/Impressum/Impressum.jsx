import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../tarms/tarms.css';

const Impressum = () => {
	return (
		<div className="tarms">
			<img src="/images/tarms-img-1.png" className="tarms-img tarms-img-1" alt="" />
			<img src="/images/cards-img-1.png" className="tarms-img tarms-img-2" alt="" />
			<img src="/images/cards-img-1.png" className="tarms-img tarms-img-3" alt="" />
			<img src="/images/cards-img-1.png" className="tarms-img tarms-img-4" alt="" />

			<div className="container">
				<div className="tarms-header">
					{/* <h2 className="tarms_heading2_primary">Colonpax</h2> */}
					<Link to="/" className="mb-3 d-block">
						<img src="/images/logo.svg" alt="" />
					</Link>
					<h2 className="tarms_heading2_secondary text-center">Impressum</h2>
					{/* <p className="text">
						<a href="www.colonpax.com">www.colonpax.com</a> (nachfolgend die Website oder E
						Commerce-Plattform) wird von der United Nutrition UÖ, Kesklinna linnaosa, Järvevana tee
						9, 11314, Tallinn, eingetragen im estnischen Handelsregister mit der Registernummer
						16591552, betrieben.
					</p> */}
				</div>

				<div className="tarms_wrapper">
					<div className="tarms_item">
						<h5 className="tarms_heading5">Unternehmen</h5>
						<p className="text">United Nutrition ÜO,</p>
					</div>
					<div className="tarms_item">
						<h5 className="tarms_heading5">Firmennummer</h5>
						<p className="text">305420438</p>
					</div>
					<div className="tarms_item">
						<h5 className="tarms_heading5">Adresse</h5>
						<p className="text">
							Järvevana tee 9 <br /> 11314 - Tallin <br />
							Harju maakond - Estland
						</p>
					</div>
					<div className="tarms_item">
						<h5 className="tarms_heading5">VAT / Mwst.-Nummer</h5>
						<p className="text">EE102551020</p>
					</div>
					<div className="tarms_item">
						<h5 className="tarms_heading5">E-Mail</h5>
						<p className="text">
							<a href="mailto:hello@colonpax.com">hello@colonpax.com</a>
							<br />
							<span className="text d-block">Oder</span>
							<a href="mailto:info@colonpax.com">info@colonpax.com</a>
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Impressum;
