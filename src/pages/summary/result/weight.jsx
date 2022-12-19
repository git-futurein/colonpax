import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Cards2 from '../cards2';
import StrawberriesPopup from '../popup/strawberriesPopup';

const Weight = () => {
	const [bowelMovement, setBowelMovement] = useState({ text: 0, day: 0 });
	const { healthCollectData, gender, userCollectData } = useSelector((state) => state.counter);
	const [bmi, setBmi] = useState(0);
	const [bmiText, setBmiText] = useState('');
	const [weightChange, setWeightChange] = useState(0);
	const [strawberries, setStrawberries] = useState(false);

	useEffect(() => {
		// console.log(healthCollectData);
		const cat = localStorage.getItem('healthCollectData');
		console.log(cat);

		healthCollectData[5].map((item) => {
			if (item.text === 'Erdbeeren') {
				setStrawberries(true);
				// console.log('Erdbeeren', item.text);
			} else {
				setStrawberries(false);
				// console.log('not Erdbeeren', item);
			}
		});
	}, [healthCollectData]);

	const closestrawberriesPopup = () => {
		setStrawberries(false);
		console.log(strawberries);
	};

	useEffect(() => {
		if (healthCollectData.length > 0) {
			healthCollectData[2].map((item) => {
				setBowelMovement({ text: item.text, day: item.day });
			});
		} else {
			return;
		}
	}, [healthCollectData]);

	useEffect(() => {
		const newBmi =
			(+userCollectData.weight / (+userCollectData.height * +userCollectData.height)) * 10000;

		setBmi(newBmi.toFixed(2));
		if (bmi < 18.5) {
			// 'Underweight';
			setBmiText('Du bist Untergewichtig');
		} else if (18.5 <= bmi && bmi <= 24.9) {
			// 'Healthy';
			setBmiText('Du Hast Dein Idealgewicht');
		} else if (25 <= bmi) {
			// 'Overweight';
			setBmiText('Du bist Übergewichtig');
		}
	}, [userCollectData.weight, userCollectData.height, bmi]);

	const months = [
		'Jan',
		'Feb',
		'Mar',
		'Apr',
		'May',
		'Jun',
		'Jul',
		'Aug',
		'Sep',
		'Oct',
		'Nov',
		'Dec',
	];

	const currentMonth = new Date().getMonth();
	const currentYear = new Date().getFullYear();
	const firstMonth = currentMonth != 11 ? currentMonth + 1 : 0;
	const secondMonth =
		currentMonth != 10 && currentMonth != 11 ? currentMonth + 2 : currentMonth != 11 ? 0 : 1;
	const thirdMonth =
		currentMonth != 9 && currentMonth != 10 && currentMonth != 11
			? currentMonth + 3
			: currentMonth != 10 && currentMonth != 11
			? 0
			: currentMonth != 11
			? 1
			: 2;

	// console.log(firstMonth, secondMonth, thirdMonth);

	useEffect(() => {
		const value = (userCollectData.weight - userCollectData.desiredWeight) / 3;
		setWeightChange(value);
	}, [userCollectData.weight, userCollectData.desiredWeight, weightChange]);

	return (
		<div>
			<StrawberriesPopup show={strawberries} closestrawberriesPopup={closestrawberriesPopup} />

			<div className="weight-container">
				<div className="container">
					<div className="weight">
						<div className="row g-5">
							<div className="col-12 col-lg-6">
								<div className="item">
									<div className="item-top d-flex justify-content-center flex-column align-items-center">
										<h3 className="heading-3 item-name">Gewicht:</h3>
										<p className="text">basierend auf Deinen Antworten wirst Du:</p>
										<div className="d-flex align-items-center">
											<div className="cur-weight fw-semibold">
												von {userCollectData.weight} Kg auf {userCollectData.desiredWeight} Kg
											</div>
											{/* to
											<h3 className="heading-3 prev-wegiht"></h3> */}
										</div>
									</div>
									<div className="item-chart">
										<div className="chart-wrapper position-relative">
											<img src="/images/chart.svg" alt="" />
											<div className="month month-1">
												<div className="top">
													<div className="point">{userCollectData.weight} kg</div>
													<div className="dot"></div>
												</div>
												<div className="bottom">{months[currentMonth]}</div>
											</div>
											<div className="month month-2">
												<div className="top">
													<div className="point">
														{userCollectData.weight - parseInt(weightChange)} kg
													</div>
													<div className="dot"></div>
												</div>
												<div className="bottom">{months[firstMonth]}</div>
											</div>
											<div className="month month-3">
												<div className="top">
													<div className="point">
														{userCollectData.weight - parseInt(weightChange) * 2} kg
													</div>
													<div className="dot"></div>
												</div>
												<div className="bottom">{months[secondMonth]}</div>
											</div>
											<div className="month month-4">
												<div className="top">
													<div className="point">{userCollectData.desiredWeight} kg</div>
													<div className="dot"></div>
												</div>
												<div className="bottom">{months[thirdMonth]}</div>
											</div>
										</div>
									</div>
									<p className="text text-center mt-4 mb-0">
										{months[currentMonth]} {currentYear}
										<i className="bi bi-chevron-right"></i> {months[thirdMonth]}{' '}
										{currentMonth > 8 ? currentYear + 1 : currentYear}
									</p>
								</div>
							</div>
							<div className="col-12 col-lg-6">
								<div className="item item-2">
									<div className="item-top text-center">
										<h3 className="heading-3 item-name mb-1">Dein wöchentlicher Stuhlgang</h3>
										<p className="text">
											Colonpax bewirkt eine Verbesserung des Stuhlgangs in 12-72 Stunden
										</p>
										<div className="d-flex justify-content-center align-items-center gap-3">
											<div className="item-date">von: 1 Mal auf</div>
											<h3 className="heading-3 prev-wegiht fw-semibold">8 mal</h3>
											<div className="item-date">pro Woche</div>
										</div>
									</div>
									<div className="item-chart">
										<img src="/images/chart-img-2.png" alt="" />
									</div>
									<div className="item-bottom "></div>
								</div>
							</div>
						</div>
						<div className="button-area">
							<Link to="/plans" className="btn btn-product text-decoration-none text-white">
								PRODUKT ANZEIGEN
							</Link>
							{/* <Link to="/email" className="btn btn-product text-decoration-none text-white">
								PRODUKT ANZEIGEN
							</Link> */}
						</div>
					</div>

					{/* Deine */}
					<div className="deine">
						<h2 className="common_h2 common_h2_secondary mb-5 text-center">
							Deine Persönliche Zusammenfassung
						</h2>
						<div className="deine__list">
							<div className="deine__item d-flex align-items-start ">
								<div className="deine__img">
									<img src="/images/deine-img-1.png" alt="" />
								</div>
								<div className="desc">
									<h4 className="heading-4">Geschlecht</h4>
									<p className="text">{gender}</p>
								</div>
							</div>
							<div className="deine__item d-flex align-items-start">
								<div className="deine__img">
									<img src="/images/deine-img-2.png" alt="" />
								</div>
								<div className="desc">
									<h4 className="heading-4">Alter</h4>
									<p className="text">{userCollectData.age}</p>
								</div>
							</div>
							<div className="deine__item d-flex align-items-start">
								<div className="deine__img">
									<img src="/images/deine-img-3.png" alt="" />
								</div>
								<div className="desc">
									<h4 className="heading-4">Körpergrösse</h4>
									<p className="text">{userCollectData.height} cm</p>
								</div>
							</div>
							<div className="deine__item d-flex align-items-start">
								<div className="deine__img">
									<img src="/images/deine-img-4.png" alt="" />
								</div>
								<div className="desc">
									<h4 className="heading-4">Körpergewicht</h4>
									<p className="text">{userCollectData.weight} kg</p>
								</div>
							</div>
						</div>
					</div>

					<div className="deine dain-2">
						<div className="deine__list">
							<div className="deine__item d-flex align-items-start ">
								<div className="deine__img">
									<img src="/images/deine-img-8.png" alt="" />
								</div>
								<div className="desc">
									<h4 className="heading-4">Dein BMI</h4>
									<h2 className="common_h2 common_h2_secondary ">{bmi} kg/m2</h2>
									<p className="text">{bmiText}</p>
								</div>
							</div>
							<div className="deine__item d-flex align-items-start">
								<div className="deine__img">
									<img src="/images/deine-img-5.png" alt="" />
								</div>
								<div className="desc">
									<h4 className="heading-4">Stoffwechselalter</h4>
									<h2 className="common_h2 common_h2_secondary ">
										{+userCollectData.age + 7} Jahre
									</h2>
									<p className="text">Dein Stoffwechsel ist langsamer als er sein sollte</p>
								</div>
							</div>
							<div className="deine__item d-flex align-items-start">
								<div className="deine__img">
									<img src="/images/deine-img-6.png" alt="" />
								</div>
								<div className="desc">
									<h4 className="heading-4">Stuhlgang</h4>
									<h2 className="common_h2 common_h2_secondary ">
										Du hast einen täglichen Stuhlgang
									</h2>
									{/* <h2 className="common_h2 common_h2_secondary ">{`${bowelMovement.text} mal pro Woche`}</h2> */}
									<p className="text">Dein Stunhlgang is in Ordnung</p>
								</div>
							</div>
							<div className="deine__item d-flex align-items-start">
								<div className="deine__img">
									<img src="/images/deine-img-7.png" alt="" />
								</div>
								<div className="desc">
									<h4 className="heading-4">Candida Albicans</h4>
									<h2 className="common_h2 common_h2_secondary ">45% chance</h2>
									<p className="text">
										Bei Dir könnte ein übermässiges Wachstum des Hefepilzes Candida Albicans
										vorliegen
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<Cards2 age={userCollectData.age} />
		</div>
	);
};

export default Weight;
