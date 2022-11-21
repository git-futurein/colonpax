import React, { useState } from 'react';
import './popup.css';
import { useSelector, useDispatch } from 'react-redux';
import { subscriptionPopupClose } from '../../../counterSlice';

const SubscriptionPopup = () => {
	const { subscriptionPopup } = useSelector((state) => state.counter);
	const dispatch = useDispatch();
	const [showContactConditions, setShowContactConditions] = useState(false);

	const handleContactConditions = (e) => {
		// console.log(e.target.checked);
		if (e.target.checked) {
			setShowContactConditions(true);
		} else {
			setShowContactConditions(false);
		}
	};

	return (
		<div className={subscriptionPopup ? 'popup popup-active' : 'popup'}>
			<div className="overlay" onClick={() => dispatch(subscriptionPopupClose())}></div>
			<div className="popup-wrapper">
				<div className="shipping">
					<button className="close-btn" onClick={() => dispatch(subscriptionPopupClose())}>
						<i className="bi bi-x"></i>
					</button>
					<div className="popup-header">
						<div className="popup-range d-flex justify-content-between align-items-center">
							<div className="range">
								<div className="range-1 complated"></div>
								<div className="range-2"></div>
							</div>
							<div className="popup-range-item active">
								<div className="popup-range-circle mb-2"></div>
								<p className="text">shipping</p>
							</div>
							<div className="popup-range-item active">
								<div className="popup-range-circle mb-2"></div>
								<p className="text">payment</p>
							</div>
							<div className="popup-range-item">
								<div className="popup-range-circle mb-2"></div>
								<p className="text">RECEIPT</p>
							</div>
						</div>
						<h2 className="heading-2 mb-4">Enter your shipping details</h2>
					</div>

					<form className="shipping-form mb-5">
						<input required type="text" placeholder="First name" />
						<input required type="text" placeholder="Last name" />
						<input required type="text" placeholder="Street address" />
						<select name="" id="">
							<option value="Austria (FREE shipping)">Austria (FREE shipping)</option>
							<option value="Austria (FREE shipping)">Austria (FREE shipping)</option>
							<option value="Austria (FREE shipping)">Austria (FREE shipping)</option>
							<option value="Austria (FREE shipping)">Austria (FREE shipping)</option>
							<option value="Austria (FREE shipping)">Austria (FREE shipping)</option>
							<option value="Austria (FREE shipping)">Austria (FREE shipping)</option>
							<option value="Austria (FREE shipping)">Austria (FREE shipping)</option>
							<option value="Austria (FREE shipping)">Austria (FREE shipping)</option>
						</select>
						<input required type="text" placeholder="Town/City" />
						<input required type="text" placeholder="Zip code" />
						<input required type="email" placeholder="Email address" />

						<div className="d-flex align-items-start gap-2">
							<input
								required
								type="checkbox"
								name="contact-checkbox"
								id="contact-checkbox"
								onChange={(e) => handleContactConditions(e)}
							/>
							<label htmlFor="contact-checkbox" className="contact-label">
								I want to get special deals and discounts from ColonBroom by SMS
							</label>
						</div>
						{showContactConditions && (
							<div className="desc">
								By checking the box, you agree to receive marketing text messages from ColonBroom at
								the number provided, including messages sent by autodialer. Consent is not a
								condition of any purchase. Msg&Data rates may apply. Message frequency varies. Reply
								HELP for help or STOP to cancel. Check our Privacy Policy and Terms and Conditions.
							</div>
						)}

						<button className="btn btn-submit mt-4">Continue</button>
					</form>

					<div className="shipping-icons d-flex justify-content-between align-items-center">
						<div className="shipping-icon">
							<svg className="icon icon-shipping-1">
								<use xlinkHref="./images/icons.svg#icon-shipping-1"></use>
							</svg>
							<span className="text">Free Shipping</span>
						</div>
						<div className="shipping-icon">
							<svg className="icon icon-shipping-1">
								<use xlinkHref="./images/icons.svg#icon-shipping-2"></use>
							</svg>
							<span className="text">Products Made in The USA</span>
						</div>
						<div className="shipping-icon">
							<svg className="icon icon-shipping-1">
								<use xlinkHref="./images/icons.svg#icon-shipping-3"></use>
							</svg>
							<span className="text">Satisfaction Guarantee</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SubscriptionPopup;
