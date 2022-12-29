import React, { useEffect, useState, useRef } from 'react';
import './popup.css';
import { useSelector, useDispatch } from 'react-redux';
import { subscriptionPopupClose } from '../../../counterSlice';
import { Link } from 'react-router-dom';
import GooglePayButton from '@google-pay/button-react';

const paySources = ['CREDITCARD', 'PAYPAL', 'GOOGLEPAY'];

const countries = {
	AT: 'Austria',
	DE: 'Germany',
};

const SubscriptionPopup = () => {
	const [showCouponForm, setShowCouponForm] = useState(true);
	const { subscriptionPopup, selectedSubscription } = useSelector((state) => state.counter);
	const [couponPrice, setCouponPrice] = useState(0);

	const dispatch = useDispatch();
	const [showContactConditions, setShowContactConditions] = useState(false);
	const [popupNumber, setPopupNumber] = useState(1);
	const [orderId, setOrderId] = useState('');
	const [showCreditForm, setShowCreditForm] = useState(false);
	const [formData, setFormData] = useState({
		firstName: '',
		lastName: '',
		address1: '',
		country: 'AT',
		city: '',
		postalCode: '',
		emailAddress: '',
		paySource: showCreditForm ? paySources[0] : paySources[1],
		cardNumber: '',
		cardMonth: '',
		cardYear: '',
		cardSecurityCode: '',
		product1_id: selectedSubscription.id,
		product1_price: (selectedSubscription.price / selectedSubscription.qty).toFixed(2),
		product1_qty: selectedSubscription.qty,
		campaignId: selectedSubscription.campaignId,
		billShipSame: 1,
		salesTax: 0.07,
		couponCode: '',
	});
	let paypalRef = useRef();

	const mailCode = `
      <h3>Danke für den Kauf</h3>
      <p>Ihre Bestellung wurde erfolgreich empfangen. Sie erhalten die Lieferung in 7 Tagen</p>
      <h5>
        <ul>
          <li>Vorname - ${formData.firstName}</li>
          <li>Nachname - ${formData.lastName}</li>
          <li>Adresse - ${formData.address1}</li>
          <li>E-Mail-Addresse - ${formData.emailAddress}</li>
          <li>Zahlungsmethode - ${formData.paySource}</li>
          <li>Gesamtpreis - €${(selectedSubscription.subtotal / selectedSubscription.qty).toFixed(
						2
					)}</li>
        </ul>
      </h5>
  `;

	useEffect(() => {
		if (window.paypal && paySources.includes('PAYPAL') && popupNumber == 2) {
			const fundingSources = [window.paypal.FUNDING.PAYPAL];

			fundingSources.map((fundingSource) => {
				const paypalButton = window.paypal.Buttons({
					fundingSource: fundingSource,
					style: {
						layout: 'vertical',
						size: 'large',
						shape: 'pill',
					},
					createOrder: (data, actions) => {
						return actions.order.create({
							purchase_units: [
								{
									description: 'Payment to ColonPax',
									amount: {
										currency_code: 'EUR',
										value: selectedSubscription.subtotal - couponPrice,
									},
								},
							],
						});
					},
					onApprove: async (data, actions) => {
						await actions.order.capture();
						setFormData((prevData) => ({
							...prevData,
							paySource: paySources[1],
						}));
						submitOrder();
					},
				});

				if (paypalButton.isEligible()) {
					paypalButton.render(paypalRef.current);
				}
			});
		}
	}, [popupNumber]);

	useEffect(() => {
		setFormData((prevFormData) => ({
			...prevFormData,
			product1_id: selectedSubscription.id,
			product1_price: (selectedSubscription.price / selectedSubscription.qty).toFixed(2),
			product1_qty: selectedSubscription.qty,
			campaignId: selectedSubscription.campaignId,
		}));
	}, [selectedSubscription]);

	const handleChange = (e) => {
		setFormData((prevData) => ({
			...prevData,
			[e.target.name]: e.target.value,
		}));
	};

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

	const sendMail = () => {
		const mailData = new FormData();

		mailData.append('to', formData.emailAddress);
		mailData.append('subject', 'Danke für den Kauf');
		mailData.append('code', mailCode);

		fetch('https://colonpax.com/api/confirmationMail.php', {
			method: 'POST',
			body: mailData,
		});
	};

	const submitOrder = () => {
		let formBody = [];
		for (let property in formData) {
			let encodedKey = encodeURIComponent(property);
			let encodedValue = encodeURIComponent(formData[property]);
			formBody.push(encodedKey + '=' + encodedValue);
		}
		formBody = formBody.join('&');

		fetch(`https://colonpax.com/api/orders.php/?${formBody}`).then(async (response) => {
			const data = await response.json();

			if (data.result === 'SUCCESS') {
				setOrderId(data.message.orderId);
				setPopupNumber(popupNumber + 1);
				sendMail();
			} else {
				alert(
					'Entschuldigung, es gab ein Problem bei der Bearbeitung der Bestellung. Bitte versuche es erneut.'
				);
				dispatch(subscriptionPopupClose());
			}
		});
	};

	const handleCoupon = (e) => {
		e.preventDefault();

		fetch(
			`https://colonpax.com/api/coupon.php?campaignId=${selectedSubscription.campaignId}&couponCode=${formData['couponCode']}&product1_id=${formData['product1_id']}`
		).then(async (response) => {
			const data = await response.json();
			if (data.result === 'SUCCESS') {
				setCouponPrice(parseInt(data.message.priceDiscount));
			}
		});
	};

	useEffect(() => {
		if (!subscriptionPopup) {
			setPopupNumber(1);
		}
	}, [subscriptionPopup]);

	// console.log(selectedSubscription.plan);

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
									<p className="text">Versand</p>
								</div>
								<div className="popup-range-item">
									<div className="popup-range-circle mb-2"></div>
									<p className="text">Zahlung</p>
								</div>
								<div className="popup-range-item">
									<div className="popup-range-circle mb-2"></div>
									<p className="text">KASSENBON</p>
								</div>
							</div>
							<h2 className="heading-2 mb-4">Geben Sie Ihre Versanddaten ein</h2>
						</div>
						<form className="shipping-form mb-5" onSubmit={handleShippingSubmit}>
							<input
								required
								type="text"
								placeholder="Vorname"
								name="firstName"
								onChange={handleChange}
								value={formData['firstName']}
							/>
							<input
								required
								type="text"
								placeholder="Nachname"
								name="lastName"
								onChange={handleChange}
								value={formData['lastName']}
							/>
							<input
								required
								type="text"
								name="address1"
								placeholder="Adresse"
								onChange={handleChange}
								value={formData['address1']}
							/>
							{/* <select name="country" onChange={handleChange}>
                {Object.entries(countries).map((country, index) => (
                  <option
                    value={country[0]}
                    selected={formData["country"] === country[0]}
                    key={index}
                  >
                    {country[1]}
                  </option>
                ))}
              </select> */}
							<input
								required
								type="text"
								name="city"
								placeholder="Ort/Stadt"
								onChange={handleChange}
								value={formData['city']}
							/>
							<input
								required
								type="text"
								name="postalCode"
								placeholder="Postleitzahl"
								onChange={handleChange}
								value={formData['postalCode']}
							/>
							<input
								required
								type="email"
								name="emailAddress"
								placeholder="E-Mail-Addresse"
								onChange={handleChange}
								value={formData['emailAddress']}
							/>

							<div className="d-flex align-items-start gap-2">
								<input
									type="checkbox"
									name="contact-checkbox"
									id="contact-checkbox"
									onChange={(e) => handleContactConditions(e)}
								/>
								<label htmlFor="contact-checkbox" className="contact-label">
									Ich möchte Sonderangebote und Rabatte von Colonpax by erhalten SMS
								</label>
							</div>
							{showContactConditions && (
								<div className="desc">
									Durch Aktivieren des Kontrollkästchens stimmen Sie zu, Marketingtexte zu erhalten
									Nachrichten von Colonpax unter der angegebenen Nummer, einschließlich Nachrichten,
									die von Autodialer gesendet werden. Die Zustimmung ist keine Bedingung kaufen.
									Msg&Data-Gebühren können anfallen. Die Nachrichtenhäufigkeit variiert. Antworten
									Sie mit HELP, um Hilfe zu erhalten, oder mit STOP, um den Vorgang abzubrechen.
									Prüfen Sie unsere Privatsphäre Richtlinien und Geschäftsbedingungen.
								</div>
							)}

							<button className="btn btn-submit mt-4">Fortsetzen</button>
						</form>
						<div className="shipping-icons d-flex justify-content-between align-items-center">
							<div className="shipping-icon">
								{/* <svg className="icon icon-shipping-1">
									<use xlinkHref="./images/icons.svg#icon-shipping-1"></use>
								</svg> */}
								<img src="/images/payment-icon-1.png" className="icon" alt="" />
								<span className="text">kostenfreier Versand</span>
							</div>
							<div className="shipping-icon">
								<img src="/images/payment-icon-2.png" className="icon" alt="" />
								<span className="text">made in Germany</span>
							</div>
							<div className="shipping-icon">
								<img src="/images/payment-icon-3.png" className="icon" alt="" />
								<span className="text">Sichere Bezahlung</span>
							</div>
						</div>
						<div className="d-flex justify-content-between pt-4 ">
							<div className="phone-number text-center d-flex align-items-center gap-2 justify-content-center">
								<p className="text text-capitalize">Kundenservice: </p>
								<a href="tel:1010370682" className="text-black">
									1010370682
								</a>
							</div>
							<img src="/images/payment.png" alt="" />
						</div>
						<div className="d-flex align-items-center justify-content-center web-link">
							<a href="#" className="text text-center">
								colonpax.com
							</a>
						</div>
						<div className="d-flex align-items-center justify-content-center address">
							<p className="text text-center">
								United Nutrition ÜO, Järvevana tee 9, 11314 - Tallin, Harju maakond - Estland
							</p>
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
									<p className="text">Versand</p>
								</div>
								<div className="popup-range-item active">
									<div className="popup-range-circle mb-2"></div>
									<p className="text">Zahlung</p>
								</div>
								<div className="popup-range-item">
									<div className="popup-range-circle mb-2"></div>
									<p className="text">KASSENBON</p>
								</div>
							</div>
							{/* <h2 className="heading-2 mb-4">Senden Sie eine sichere Zahlung</h2> */}
						</div>
						<div className="payment_wrapper">
							<div className="payment_item product-list">
								<div className="gift d-flex justify-content-between flex-wrap">
									<p className="text mb-0">{selectedSubscription.plan}</p>
									<div className="amount">€{(58.99 * selectedSubscription.qty).toFixed(2)}</div>
								</div>
								<div className="discount d-flex justify-content-between flex-wrap">
									<p className="text mb-0 text-danger">
										Der Sonderrabatt (-{selectedSubscription.discount}%):
									</p>
									<div className="amount">
										- €
										{(58.99 * selectedSubscription.qty - selectedSubscription.subtotal).toFixed(2)}
									</div>
								</div>
							</div>
							<div className="payment_item product-list">
								<div className="gift d-flex justify-content-between flex-wrap">
									<p className="text mb-0">Versand Deutschland </p>
									<div className="amount">€7.90</div>
								</div>
								<div className="discount d-flex justify-content-between flex-wrap">
									<p className="text mb-0 text-danger">Rabatt (-100%):</p>
									<div className="amount">-€ 7.90</div>
								</div>
							</div>

							{/* <div className="payment_item">
                <div className="gift d-flex justify-content-between flex-wrap">
                  <p className="text mb-0">
                    Versand nach {countries[formData["country"]]}
                  </p>
                  <div className="amount">€15.00</div>
                </div>
                <div className="discount d-flex justify-content-between flex-wrap">
                  <p className="text mb-0 text-danger">Rabatt (-100%)</p>
                  <div className="amount">- €15.00</div>
                </div>
              </div> */}

							<div className="payment_item">
								{/* <div className="gift d-flex justify-content-between flex-wrap">
									<p className="text mb-0">Abgerechneter Gesamtbetrag</p>
									<div className="amount amount_total">
										€{selectedSubscription.subtotal.toFixed(2)}
									</div>
								</div> */}
								{/* <div className="coupon d-flex justify-content-between flex-wrap">
									<a onClick={() => setShowCouponForm(!showCouponForm)}>Gutschein erhalten?</a>
								</div> */}
								<form>
									<div className="couponbox d-flex align-items-center justify-content-between gap-4">
										<div className="d-flex align-items-center gap-2">
											<input
												type="text"
												id="couponCode"
												placeholder="Gutschein erhalten?"
												name="couponCode"
												onChange={handleChange}
												value={formData['couponCode']}
												className="mb-0"
											/>
											<button className="btn btn-coupon-apply" type="submit">
												Einlösen
											</button>
										</div>
										{/* <div className="coupon-price">{couponPrice !== 0 && `-€${couponPrice}`} </div> */}
										<div className="coupon-price">-€{couponPrice}</div>
									</div>
									<div className="total-price d-flex justify-content-between align-items-center gap-3">
										<p className="text mb-0">Gesamtbetrag (inkl. Mwst.)</p>
										<p className="price mb-0">
											€{(selectedSubscription.subtotal - couponPrice).toFixed(2)}
										</p>
									</div>
								</form>
							</div>
						</div>
						<h4 className="heading4 mb-3">Wähle Deinen Zahlungsmethode</h4>
						<form className="shipping-form payment-form mb-5">
							{/* <button className={'btn btn-submit btn-coupon-apply my-5'} type="button">
								Kreidkarte
							</button> */}
							<>
								{/* <label htmlFor="card-number">Card Number</label> */}
								<div className="card-number mb-3 d-flex">
									<img src="/images/card-number.svg" alt="" />
									<input
										required
										type="text"
										placeholder="Kreditkartennummner"
										id="card-number"
										name="cardNumber"
										onChange={handleChange}
										value={formData['cardNumber']}
									/>
								</div>

								{/* <label htmlFor="Expiry">Expiry Month (MM)</label> */}
								<div className="d-flex align-items-center gap-3">
									<input
										required
										type="text"
										id="ExpiryMonth"
										placeholder="Expiry Month (MM)"
										className="input mb-3"
										name="cardMonth"
										onChange={handleChange}
										value={formData['cardMonth']}
									/>
									<input
										required
										type="text"
										id="ExpiryYear"
										placeholder="Expiry Year (YYYY)"
										className="input mb-3"
										name="cardYear"
										onChange={handleChange}
										value={formData['cardYear']}
									/>
								</div>

								{/* <label htmlFor="Expiry">Expiry Year (YYYY)</label> */}

								{/* <label htmlFor="cvv">CVV</label> */}
								<input
									required
									type="text"
									id="cvv"
									className="input"
									name="cardSecurityCode"
									placeholder="CVV"
									onChange={handleChange}
									value={formData['cardSecurityCode']}
								/>
								<button
									className="btn btn-submit mt-2 mb-2"
									onClick={(e) => {
										e.preventDefault();
										submitOrder();
									}}
								>
									mit Kreditkarte bezahlen
								</button>

								<div className="line-box d-flex align-items-center gap-2 mb-2">
									<div className="line"></div>
									<div className="text">oder</div>
									<div className="line"></div>
								</div>
							</>

							<div className="w-full mb-1" ref={paypalRef} />
							{paySources.includes('GOOGLEPAY') && (
								<div className="w-full mb-4">
									<GooglePayButton
										className="w-full d-flex"
										environment="TEST"
										buttonSizeMode="fill"
										buttonLocale="de"
										paymentRequest={{
											apiVersion: 2,
											apiVersionMinor: 0,
											allowedPaymentMethods: [
												{
													type: 'CARD',
													parameters: {
														allowedAuthMethods: ['PAN_ONLY', 'CRYPTOGRAM_3DS'],
														allowedCardNetworks: [
															'AMEX',
															'DISCOVER',
															'INTERAC',
															'JCB',
															'MASTERCARD',
															'VISA',
														],
													},
													tokenizationSpecification: {
														type: 'PAYMENT_GATEWAY',
														parameters: {
															gateway: 'example',
															gatewayMerchantId: 'exampleGatewayMerchantId',
														},
													},
												},
											],
											merchantInfo: {
												merchantId: '12345678901234567890',
												merchantName: 'Demo Merchant',
											},
											transactionInfo: {
												totalPriceStatus: 'FINAL',
												totalPriceLabel: 'Total',
												totalPrice: (selectedSubscription.subtotal - couponPrice).toFixed(2),
												currencyCode: 'EUR',
												countryCode: 'DE',
											},
										}}
										onLoadPaymentData={() => {
											setFormData((prevData) => ({
												...prevData,
												paySource: paySources[2],
											}));
											submitOrder();
										}}
									/>
								</div>
							)}
						</form>
						<div className="dieloge">
							Mit der Auswahl einer Zahlungsmethode stimmen Sie der zu{' '}
							<Link to="/tarms">Nutzungsbedingungen</Link> and
							<Link to="#"> Datenschutz</Link>.
						</div>
						<div className="shipping-icons d-flex justify-content-between align-items-center">
							<div className="shipping-icon">
								{/* <svg className="icon icon-shipping-1">
									<use xlinkHref="./images/icons.svg#icon-shipping-1"></use>
								</svg> */}
								<img src="/images/payment-icon-1.png" className="icon" alt="" />
								<span className="text">kostenfreier Versand</span>
							</div>
							<div className="shipping-icon">
								<img src="/images/payment-icon-2.png" className="icon" alt="" />
								<span className="text">made in Germany</span>
							</div>
							<div className="shipping-icon">
								<img src="/images/payment-icon-3.png" className="icon" alt="" />
								<span className="text">Sichere Bezahlung</span>
							</div>
						</div>
						<div className="d-flex justify-content-between pt-4 ">
							<div className="phone-number text-center d-flex align-items-center gap-2 justify-content-center">
								<p className="text text-capitalize">Kundenservice: </p>
								<a href="tel:1010370682" className="text-black">
									1010370682
								</a>
							</div>
							<img src="/images/payment.png" alt="" />
						</div>
						<div className="d-flex align-items-center justify-content-center web-link">
							<a href="#" className="text text-center">
								colonpax.com
							</a>
						</div>
						<div className="d-flex align-items-center justify-content-center address">
							<p className="text text-center">
								United Nutrition ÜO, Järvevana tee 9, 11314 - Tallin, Harju maakond - Estland
							</p>
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
									<p className="text">Versand</p>
								</div>
								<div className="popup-range-item active">
									<div className="popup-range-circle mb-2"></div>
									<p className="text">Zahlung</p>
								</div>
								<div className="popup-range-item active">
									<div className="popup-range-circle mb-2"></div>
									<p className="text">KASSENBON</p>
								</div>
							</div>
							<h2 className="heading-2 mb-4 text-center">Herzlichen Glückwunsch</h2>
						</div>
						<div className="text-center">
							<p style={{ fontSize: 20, marginBottom: 20 }}>
								Deine Bestellung ist erfolgreich eingegangen. Du erhältst deine Lieferung binnen 7
								Tagen! Deine Bestellnummer lautet: {orderId}
							</p>
						</div>
						<div className="shipping-icons d-flex justify-content-between align-items-center">
							<div className="shipping-icon">
								{/* <svg className="icon icon-shipping-1">
									<use xlinkHref="./images/icons.svg#icon-shipping-1"></use>
								</svg> */}
								<img src="/images/payment-icon-1.png" className="icon" alt="" />
								<span className="text">kostenfreier Versand</span>
							</div>
							<div className="shipping-icon">
								<img src="/images/payment-icon-2.png" className="icon" alt="" />
								<span className="text">made in Germany</span>
							</div>
							<div className="shipping-icon">
								<img src="/images/payment-icon-3.png" className="icon" alt="" />
								<span className="text">Sichere Bezahlung</span>
							</div>
						</div>
						<div className="phone-number text-center pt-4 d-flex align-items-center gap-2 justify-content-center">
							<p className="text text-capitalize">Kundenservice: </p>
							<a href="tel:1010370682" className="text-black">
								1010370682
							</a>
						</div>
					</div>
				)}
			</div>
		</div>
	);
};

export default SubscriptionPopup;
