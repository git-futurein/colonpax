import React from 'react';
import './strawberries.css';
import '../../heroSection/HeroSection.css';

const StrawberriesPopup = ({ show, closestrawberriesPopup }) => {
	return (
		<>
			<div className={show ? 'strawberries show-strawberries' : 'strawberries'}>
				<div className="overlay" onClick={closestrawberriesPopup}></div>
				<div className="popup">
					<figure className="strawberries__logo mb-4">
						<img src="/images/logo.svg" alt="" />
					</figure>
					<figure className="strawberries__img mb-4">
						<img src="/images/allergy_img.png" alt="" />
					</figure>
					<h2 className="heading common_h2 text-center mb-4">
						Es tut uns leid! Unser Produkt ist leider nicht für dich geeignet, da es Inhaltsstoffe
						enthält, gegen die du allergisch bist.
					</h2>
					<p className="text">
						Im Hinblick auf deine Gesundheit und Sicherheit, empfehlen wir dir, unser Produkt nicht
						zu verwenden und nach einer Alternative zu suchen.
					</p>
					<button className="btn btn-close-popup mt-5" onClick={() => closestrawberriesPopup()}>
						Verstanden!
					</button>
				</div>
			</div>
		</>
	);
};

export default StrawberriesPopup;
