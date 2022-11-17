import React from 'react';
import './Individualisierter.css';

const Individualisierter = () => {
	return (
		<div className="Individualisierter">
			<div className="container">
				<div className="Individualisierter-box row">
					<div className="col-12 col-lg-7">
						<div className="Individualisierter-box-item">
							<h2 className="heading-2 mb-4">Dein individualisierter Diätplan für 28 Tage</h2>
							<p className="text">
								Erhalte nach dem Kauf deines Colonpax Plans einen persönlichen und individualisierte
								und einfach zu befolgenden Abenhmgiude.
							</p>
						</div>
					</div>
					<div className="col-12 col-lg-5">
						<div className="Individualisierter-box-item item-2">
							<div className="free-area">
								<img src="/images/star-2.png" className="star-1" alt="" />
								<img src="/images/star-2.png" className="star-2" alt="" />
								<img src="/images/Badge.svg" className="free-img" alt="" />
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="container">
				<div className=" row">
					<div className="col-12 col-lg-5">
						<div className="Individualisierter-item">
							<img src="/images/plan-img-5.png" alt="" />
						</div>
					</div>
					<div className="col-12 col-lg-7">
						<div className="Individualisierter-item">
							<h3 className="heading-3 ">
								Wenn Du Völlegefühl verspürst, lästige Fettpölsterchen mit Dir herumträgst, an
								Heisshunger leidest oder mit einem Blähbauch kämpfst, ist Colonpax die richtige Wahl
								für dich.
							</h3>
							<div className="Individualisierter-card row g-4">
								<div className="col-12 col-sm-6">
									<div className="Individualisierter-card-item item">
										<h4 className="heading-4 mb-2">Vor Colonpax</h4>
										<ul>
											<li>
												<i className="bi bi-x"></i>
												<span className="text">Völlegefühl</span>
											</li>
											<li>
												<i className="bi bi-x"></i>
												<span className="text">Blähbauch & Verstopfung</span>
											</li>
											<li>
												<i className="bi bi-x"></i>
												<span className="text">Unausgewogene Darmflora</span>
											</li>
											<li>
												<i className="bi bi-x"></i>
												<span className="text">Schwierigkeiten beim Gewichtsverlust</span>
											</li>
											<li>
												<i className="bi bi-x"></i>
												<span className="text">Müdigkeit & Energielosigkeit</span>
											</li>
											<li>
												<i className="bi bi-x"></i>
												<span className="text">Unangenehme Blähungen</span>
											</li>
										</ul>
									</div>
								</div>
								<div className="col-12 col-sm-6">
									<div className="Individualisierter-card-item item active">
										<h4 className="heading-4 mb-2">Nach Colonpax</h4>
										<ul>
											<li>
												<i className="bi bi-check-lg"></i>
												<span className="text">Leicht und Unbeschwert</span>
											</li>
											<li>
												<i className="bi bi-check-lg"></i>
												<span className="text">Regelmässige Verdauung</span>
											</li>
											<li>
												<i className="bi bi-check-lg"></i>
												<span className="text">Ausgewogene Darmflora</span>
											</li>
											<li>
												<i className="bi bi-check-lg"></i>
												<span className="text">Zielgewicht erreichen</span>
											</li>
											<li>
												<i className="bi bi-check-lg"></i>
												<span className="text">Bessere Stimmung & mehr Energie</span>
											</li>
											<li>
												<i className="bi bi-check-lg"></i>
												<span className="text">Erhöhter Stoffwechsel</span>
											</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Individualisierter;
