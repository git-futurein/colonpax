import React, { useState } from 'react';
import '../plans.css';
import SubscriptionPopup from '../popup/subscriptionPopup';
import { subscriptionPopupOpen } from '../../../counterSlice';
import { useDispatch } from 'react-redux';

const Subscription = ({ marginTop }) => {
	const dispatch = useDispatch();
	// const [value, setValue] = useState(1);
	// const [value, setValue] = useState(1);
	// const [value, setValue] = useState(1);

	const subscriptionData = [
		{
			id: 1,
			img: '/images/plans-img-2.png',
			angebot: false,
			active: false,
			dose: '1',
			option1: 'Einmaliger Kauf',
			option2: 'Abonnieren & Sparen',
			btns: ['Jetzt abonnieren', 'Jetzt Kaufen'],
			prices: ['49', '58'],
			formulas: [
				['60 Portionen', '0,99 Cent pro Drink', '1 Dose wird geliefert'],
				['60 Portionen', '0,91 Cent pro Drink', '1 Dose jeden Monat'],
			],
			value: 0,
		},
		{
			id: 2,
			img: '/images/plans-img-3.png',
			angebot: true,
			active: true,
			sparan: '40',
			dose: '3',
			option1: 'Einmaliger Kauf',
			option2: 'Abonnieren & Sparen',
			btns: ['Jetzt abonnieren', 'Jetzt Kaufen'],
			prices: ['44', '34'],
			formulas: [
				['60 Portionen', '0,67 Cent pro Drink', '3 Dosen werden geliefert'],
				['60 Portionen', '0,59 Cent pro Drink', '3 Dosen jeden Monat'],
			],
			value: 0,
		},
		{
			id: 3,
			img: '/images/plans-img-4.png',
			angebot: true,
			active: false,
			sparan: '50',
			dose: '6',
			prices: ['34', '24'],
			formulas: [
				['60 Portionen', '6 Dosen werden einmalig geliefert'],
				['60 Portionen', '6 Dosen werden alle Monate geliefert'],
			],
			option1: 'Einmaliger Kauf',
			option2: 'Abonnieren & Sparen',
			btns: ['Jetzt abonnieren', 'Jetzt Kaufen'],
			value: 0,
		},
	];

	const [data, setData] = useState(subscriptionData);

	const handleOption1 = (e, id) => {
		if (e.target.checked) {
			const newData = subscriptionData.map((item) => {
				if (item.id === id) {
					item.value = 0;
				}
				return item;
			});
			// console.log(newData);
			setData(newData);
		}
	};
	const handleOption2 = (e, id) => {
		if (e.target.checked) {
			const newData = subscriptionData.map((item) => {
				if (item.id === id) {
					item.value = 1;
				}
				return item;
			});
			setData(newData);
		}
	};

	return (
		<div style={marginTop && { marginTop }}>
			<SubscriptionPopup />
			<div className="container">
				<div className="subscription row g-5">
					{data.map((item) => {
						const {
							id,
							img,
							dose,
							angebot,
							active,
							sparan,
							prices,
							btns,
							option1,
							option2,
							formulas,
							value,
						} = item;
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
										<span className="price">{prices[value]}.</span>
										<span className="price-small">99</span>
										<span className="based">/ Monat</span>
									</div>
									<h5 className="heading-5 mb-4">pro Dose</h5>
									<ul className="subscription__list mb-5">
										{formulas[value].map((item, i) => {
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
											onChange={(e) => handleOption2(e, id)}
											// checked={value === 1}
										/>
										<label className="form-check-label" htmlFor={`flexRadioDefault1${id}`}>
											{option1}
										</label>
									</div>
									<div className="form-check">
										<input
											className="form-check-input"
											type="radio"
											name={`flexRadioDefault1${id}`}
											id={`flexRadioDefault2${id}`}
											onChange={(e) => handleOption1(e, id)}
											// checked={value === 0}
										/>
										<label className="form-check-label" htmlFor={`flexRadioDefault2${id}`}>
											{option2}
										</label>
									</div>
									<div className="discount mb-4">AUTUMN SALE -%50 off</div>
									<button
										className="btn btn-subscription"
										onClick={() => dispatch(subscriptionPopupOpen())}
									>
										{btns[value]}
									</button>
									{value === 1 && <div className="sparan">{`> Sie sparen 15%`}</div>}
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
