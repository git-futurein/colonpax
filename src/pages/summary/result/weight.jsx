import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Weight = () => {
	const { healthCollectData } = useSelector((state) => state.counter);
	console.log(healthCollectData);

	return (
		<div>
			<div className="weight-container">
				<div className="container">
					<div className="weight">
						<div className="row g-5">
							<div className="col-12 col-lg-6">
								<div className="item">
									<div className="item-top d-flex justify-content-between align-items-center">
										<h3 className="heading-3 item-name">Gewicht</h3>
										<div className="d-flex align-items-end">
											<p className="text">Aktuelles Gewicht</p>
											<div className="cur-weight">85 kg</div>
										</div>
									</div>
									<div className="item-chart">
										<img src="/images/chart-1-img.png" alt="" />
									</div>
									<div className="item-bottom d-flex justify-content-between align-items-center">
										<div className="item-date">{'Jetzt 2022 > Nov 2022'}</div>
										<h3 className="heading-3 prev-wegiht">75 kg</h3>
									</div>
								</div>
							</div>
							<div className="col-12 col-lg-6">
								<div className="item item-2">
									<div className="item-top ">
										<h3 className="heading-3 item-name mb-1">Dein wöchentlicher Stuhlgang</h3>
										<p className="text">Produces a bowel movement in 12-72 hours</p>
									</div>
									<div className="item-chart">
										<img src="/images/chart-img-2.png" alt="" />
									</div>
									<div className="item-bottom d-flex justify-content-between align-items-center">
										<div className="item-date">pro Woche</div>
										<h3 className="heading-3 prev-wegiht">8 Mal</h3>
									</div>
								</div>
							</div>
						</div>
						<div className="button-area">
							<Link to="/plans" className="btn btn-product text-decoration-none text-white">
								PRODUKT ANZEIGEN
							</Link>
						</div>
						<h2 className="common_h2 common_h2_secondary">Deine Persönliche Zusammenfassung</h2>
					</div>

					{/* Deine */}
					<div className="deine">
						<div className="deine__list">
							<div className="deine__item d-flex align-items-start ">
								<div className="deine__img">
									<img src="/images/deine-img-1.png" alt="" />
								</div>
								<div className="desc">
									<h4 className="heading-4">Geschlecht</h4>
									<p className="text">
										Weiblich/ <br /> Männlich
									</p>
								</div>
							</div>
							<div className="deine__item d-flex align-items-start">
								<div className="deine__img">
									<img src="/images/deine-img-2.png" alt="" />
								</div>
								<div className="desc">
									<h4 className="heading-4">Alter</h4>
									<p className="text">28</p>
								</div>
							</div>
							<div className="deine__item d-flex align-items-start">
								<div className="deine__img">
									<img src="/images/deine-img-3.png" alt="" />
								</div>
								<div className="desc">
									<h4 className="heading-4">Körpergrösse</h4>
									<p className="text">178 cm</p>
								</div>
							</div>
							<div className="deine__item d-flex align-items-start">
								<div className="deine__img">
									<img src="/images/deine-img-4.png" alt="" />
								</div>
								<div className="desc">
									<h4 className="heading-4">Körpergewicht</h4>
									<p className="text">85 kg</p>
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
									<h2 className="common_h2 common_h2_secondary ">26.83 kg/m2</h2>
									<p className="text">
										Du bist übergewichtig / Du bist untergewichtig / Du hast Dein idealgewicht
									</p>
								</div>
							</div>
							<div className="deine__item d-flex align-items-start">
								<div className="deine__img">
									<img src="/images/deine-img-5.png" alt="" />
								</div>
								<div className="desc">
									<h4 className="heading-4">Stoffwechselalter</h4>
									<h2 className="common_h2 common_h2_secondary ">35 Jahre</h2>
									<p className="text">
										Dein Stoffwechsel ist langsamer als er sein sollte Dein Stoffwechsel ist gut
									</p>
								</div>
							</div>
							<div className="deine__item d-flex align-items-start">
								<div className="deine__img">
									<img src="/images/deine-img-6.png" alt="" />
								</div>
								<div className="desc">
									<h4 className="heading-4">Stuhlgang</h4>
									<h2 className="common_h2 common_h2_secondary ">{'< 1 mal pro Woche'}</h2>
									<p className="text">Dein Stuhlgang is viel zu wenig</p>
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
										Bei dir könnte ein übermäßiges Wachstum des Hefepilzes Candida Albicans
										vorliegen
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Weight;
