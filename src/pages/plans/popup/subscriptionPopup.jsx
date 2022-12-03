import React, { useEffect, useState, useRef } from 'react';
import './popup.css';
import { useSelector, useDispatch } from 'react-redux';
import { subscriptionPopupClose } from '../../../counterSlice';
import { Link } from 'react-router-dom';

const SubscriptionPopup = () => {
	const { subscriptionPopup } = useSelector((state) => state.counter);
	const dispatch = useDispatch();
	const [showContactConditions, setShowContactConditions] = useState(false);
	const [popupNumber, setPopupNumber] = useState(1);
	let paypalRef = useRef();
	
	useEffect(() => {
		if (window.paypal) {
		    let button = window.paypal
			.Buttons({
			    style: {
				layout: "vertical",
				size: "large",
				label: "pay",
				height: 40,
				tagline: "false",
			    },
			    createOrder: (data, actions) => {
				return actions.order.create({
				    purchase_units: [
					{
					    description: "Payment to ColonPax",
					    amount: {
						currency_code: "USD",
						value: 14.00,
					    },
					},
				    ],
				});
			    },
			    onApprove: async (data, actions) => {
				await actions.order.capture();
			    },
			})
			.render(paypalRef.current);
		}
	    }, []);

	const handleContactConditions = (e) => {
		if (e.target.checked) {
			setShowContactConditions(true);
		} else {
			setShowContactConditions(false);
		}
	};

	const handleShippingSubmit = (e) => {
		e.preventDefault();
		setPopupNumber(popupNumber + 1);
	};

	useEffect(() => {
		if (!subscriptionPopup) {
			setPopupNumber(1);
		}
	}, [subscriptionPopup]);

	return (
		<div className={subscriptionPopup ? 'popup popup-active' : 'popup'}>
			<div className="overlay" onClick={() => dispatch(subscriptionPopupClose())}></div>
			<div className="popup-wrapper">
				<button className="close-btn" onClick={() => dispatch(subscriptionPopupClose())}>
					<i className="bi bi-x"></i>
				</button>

				{/* shipping */}
				{popupNumber === 1 && (
					<div className={popupNumber === 1 ? 'shipping' : 'shipping d-none'}>
						<div className="popup-header">
							<div className="popup-range d-flex justify-content-between align-items-center">
								<div className="range">
									<div className="range-1"></div>
									<div className="range-2"></div>
								</div>
								<div className="popup-range-item active">
									<div className="popup-range-circle mb-2"></div>
									<p className="text">shipping</p>
								</div>
								<div className="popup-range-item">
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
									By checking the box, you agree to receive marketing text messages from ColonBroom
									at the number provided, including messages sent by autodialer. Consent is not a
									condition of any purchase. Msg&Data rates may apply. Message frequency varies.
									Reply HELP for help or STOP to cancel. Check our Privacy Policy and Terms and
									Conditions.
								</div>
							)}

							<button className="btn btn-submit mt-4" onClick={(e) => handleShippingSubmit(e)}>
								Continue
							</button>
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
				)}

				{popupNumber === 2 && (
					<div className={popupNumber === 2 ? 'shipping payment' : 'shipping d-none'}>
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
							<h2 className="heading-2 mb-4">Submit a secure payment</h2>
						</div>
						<div className="payment_wrapper">
							<div className="payment_item">
								<div className="gift d-flex justify-content-between flex-wrap">
									<p className="text mb-0">3 month supplements + free gift pack</p>
									<div className="amount">239.97 USD</div>
								</div>
								<div className="discount d-flex justify-content-between flex-wrap">
									<p className="text mb-0 text-danger">The Special Discount (-55%):</p>
									<div className="amount">-132.01 USD</div>
								</div>
							</div>

							<div className="payment_item">
								<div className="gift d-flex justify-content-between flex-wrap">
									<p className="text mb-0">Shipping to Austria</p>
									<div className="amount">15.00 USD</div>
								</div>
								<div className="discount d-flex justify-content-between flex-wrap">
									<p className="text mb-0 text-danger">Discount (-100%)</p>
									<div className="amount">-15.00 USD</div>
								</div>
							</div>

							<div className="payment_item">
								<div className="gift d-flex justify-content-between flex-wrap">
									<p className="text mb-0">Total amount billed</p>
									<div className="amount amount_total">239.97 USD</div>
								</div>
								<div className="coupon d-flex justify-content-between flex-wrap">
									<Link to="#">Got coupon?</Link>
								</div>
							</div>
							<div className="dieloge">
								By choosing a payment method you agree to the <Link to="/tarms">T&Cs</Link> and
								<Link to="#"> Privacy Policy</Link>.
							</div>
						</div>
						<form className="shipping-form payment-form mb-5">
							<h4 className="heading4 mb-3">Select a payment method</h4>
							<div className="w-full" ref={paypalRef} />

							<label htmlFor="card-name">Name on card</label>
							<input required type="text" id="card-name" placeholder="Full name" className="mb-3" />

							<label htmlFor="card-number">card number</label>
							<div className="card-number mb-3 d-flex">
								<img src="/images/card-number.svg" alt="" />
								<input required type="text" placeholder="1234 1234 1234 1234" id="card-number" />
							</div>

							<label htmlFor="Expiry">Expiry (MM/YY)</label>
							<input required type="text" id="Expiry" placeholder="MM/YY" className="mb-3" />

							<label htmlFor="cvv">CVV</label>
							<input required type="text" id="cvv" placeholder="..." />

							<button className="btn btn-submit mt-4" onClick={(e) => handleShippingSubmit(e)}>
								Continue
							</button>
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
				)}

				{popupNumber === 3 && (
					<div className={popupNumber === 3 ? 'shipping payment' : 'shipping payment d-none'}>
						<div className="popup-header">
							<div className="popup-range d-flex justify-content-between align-items-center">
								<div className="range">
									<div className="range-1 complated"></div>
									<div className="range-2 complated"></div>
								</div>
								<div className="popup-range-item active">
									<div className="popup-range-circle mb-2"></div>
									<p className="text">shipping</p>
								</div>
								<div className="popup-range-item active">
									<div className="popup-range-circle mb-2"></div>
									<p className="text">payment</p>
								</div>
								<div className="popup-range-item active">
									<div className="popup-range-circle mb-2"></div>
									<p className="text">RECEIPT</p>
								</div>
							</div>
							<h2 className="heading-2 mb-4">Submit a secure payment</h2>
						</div>
						<div className="payment_wrapper">
							<div className="payment_item">
								<div className="gift d-flex justify-content-between flex-wrap">
									<p className="text mb-0">3 month supplements + free gift pack</p>
									<div className="amount">239.97 USD</div>
								</div>
								<div className="discount d-flex justify-content-between flex-wrap">
									<p className="text mb-0 text-danger">The Special Discount (-55%):</p>
									<div className="amount">-132.01 USD</div>
								</div>
							</div>

							<div className="payment_item">
								<div className="gift d-flex justify-content-between flex-wrap">
									<p className="text mb-0">Shipping to Austria</p>
									<div className="amount">15.00 USD</div>
								</div>
								<div className="discount d-flex justify-content-between flex-wrap">
									<p className="text mb-0 text-danger">Discount (-100%)</p>
									<div className="amount">-15.00 USD</div>
								</div>
							</div>

							<div className="payment_item">
								<div className="gift d-flex justify-content-between flex-wrap">
									<p className="text mb-0">Total amount billed</p>
									<div className="amount amount_total">239.97 USD</div>
								</div>
								<div className="coupon d-flex justify-content-between flex-wrap">
									<Link to="#">Got coupon?</Link>
								</div>
							</div>
							<div className="dieloge">
								By choosing a payment method you agree to the <Link to="/tarms">T&Cs</Link> and
								<Link to="#"> Privacy Policy</Link>.
							</div>
						</div>
						{/* <form className="shipping-form payment-form mb-5">
							<h4 className="heading4 mb-3">Select a payment method</h4>
							<button className="payment-method mb-3">
								<img src="/images/payment-method.svg" alt="" />
							</button>

							<label htmlFor="card-name">Name on card</label>
							<input required type="text" id="card-name" placeholder="Full name" className="mb-3" />

							<label htmlFor="card-number">card number</label>
							<div className="card-number mb-3 d-flex">
								<img src="/images/card-number.svg" alt="" />
								<input required type="text" placeholder="1234 1234 1234 1234" id="card-number" />
							</div>

							<label htmlFor="Expiry">Expiry (MM/YY)</label>
							<input required type="text" id="Expiry" placeholder="MM/YY" className="mb-3" />

							<label htmlFor="cvv">CVV</label>
							<input required type="text" id="cvv" placeholder="..." />

							<button className="btn btn-submit mt-4" onClick={(e) => handleShippingSubmit(e)}>
								Continue
							</button>
						</form> */}
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
				)}
			</div>
		</div>
	);
};

export default SubscriptionPopup;
