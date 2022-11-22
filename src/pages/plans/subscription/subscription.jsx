import React from 'react';
import '../plans.css';
import SubscriptionPopup from '../popup/subscriptionPopup';
import { subscriptionPopupOpen } from '../../../counterSlice';
import { useDispatch } from 'react-redux';

const Subscription = ({ marginTop }) => {
	const dispatch = useDispatch();

	const subscriptionData = [
		{
			id: 1,
			img: '/images/plans-img-2.png',
			dose: '1',
			price: '49',
			formula: ['60 Portionen', '0,91 Cent pro Drink', '1 Dose jeden Monat'],
			discount: '50',
			angebot: false,
			active: false,
		},
		{
			id: 2,
			img: '/images/plans-img-3.png',
			dose: '3',
			price: '34',
			formula: ['180 Portionen', '0,59 Cent pro Drink', '3 Dose jeden Monat'],
			discount: '50',
			angebot: true,
			active: true,
			sparan: '40',
		},
		{
			id: 3,
			img: '/images/plans-img-4.png',
			dose: '6',
			price: '24',
			formula: ['360 Portionen', '6 Dosen jeden Monat', '6 Dosen jeden Monat'],
			discount: '50',
			angebot: true,
			active: false,
			sparan: '50',
		},
	];
	return (
		<div className={marginTop && 'marginMinus'}>
			<SubscriptionPopup />
			<div className="container">
				<div className="subscription row g-5">
					{subscriptionData.map((item) => {
						const { id, img, dose, price, formula, discount, angebot, active, sparan } = item;
						return (
							<div className="col-12 col-lg-4" key={id}>
								<div className={active ? 'subscription-item active' : 'subscription-item'}>
									{angebot && <div className="subscription-head">Beliebtestes Angebot</div>}

									<h4 className="heading-4 mb-2">
										{dose} Dose / <br /> {dose} Monatsvorrat
									</h4>
									<img src={img} className="mb-2" alt="" />
									<div className="price-box d-flex align-items-start">
										<span className="currency">&#8364;</span>
										<span className="price">{price}.</span>
										<span className="price-small">99</span>
										<span className="based">/ Monat</span>
									</div>
									<h5 className="heading-5 mb-4">pro Dose</h5>
									<ul className="subscription__list mb-5">
										{formula.map((item, i) => {
											return (
												<li className="subscription__item" key={i}>
													<span className="icon">
														<i className="bi bi-check2"></i>
													</span>
													<span className="text">{item}</span>
												</li>
											);
										})}
									</ul>
									<div className="form-check">
										<input
											className="form-check-input"
											type="radio"
											name={`flexRadioDefault1${id}`}
											id={`flexRadioDefault1${id}`}
										/>
										<label className="form-check-label" htmlFor={`flexRadioDefault1${id}`}>
											Einmaliger Kauf
										</label>
									</div>
									<div className="form-check">
										<input
											className="form-check-input"
											type="radio"
											name={`flexRadioDefault1${id}`}
											id={`flexRadioDefault2${id}`}
										/>
										<label className="form-check-label" htmlFor={`flexRadioDefault2${id}`}>
											Abonnieren & Sparen
										</label>
									</div>
									<div className="discount mb-4">AUTUMN SALE -%{discount} off</div>
									<button
										className="btn btn-subscription"
										onClick={() => dispatch(subscriptionPopupOpen())}
									>
										Jetzt abonnieren
									</button>
									{sparan && <div className="sparan">{`> Sie Sparen bis zu - ${sparan}% <`}</div>}
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default Subscription;
