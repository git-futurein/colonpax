import React from 'react';

const Cards2 = ({ age }) => {
	const agePlus5 = +age + 5;

	return (
		<div className="cards2-wrapper dain-2">
			<div className="container">
				<div className="cards2 deine__item cards2 d-block d-sm-flex align-items-start flex-row gap-4">
					<div className="icon">
						<img src="/images/Group 52.svg" alt="" />
					</div>
					<div className="details desc">
						<h4 className="heading-4">98%</h4>
						{/* <h4 className="parcent">98%</h4> */}
						<h2 className="common_h2 common_h2_secondary ">Wusstest Du schon:</h2>
						{/* <h4 className="heading-4 text-black"></h4> */}
						<p className="text">
							In Deiner Altergruppe ({age}-{agePlus5}) haben{' '}
							<strong className="weight">6 kg</strong> in den ersten 4 wochen abgenommen
						</p>
					</div>
				</div>
				{/* <div className="deine__item cards2 d-block d-sm-flex align-items-start flex-row gap-4">
					<div className="deine__img">
						<img src="/images/Group 52.svg" alt="" />
					</div>
					<div className="desc">
						<h4 className="heading-4">Candida Albicans</h4>
						<h2 className="common_h2 common_h2_secondary ">45% chance</h2>
						<p className="text">
							Bei Dir könnte ein übermässiges Wachstum des Hefepilzes Candida Albicans vorliegen
						</p>
					</div>
				</div> */}
			</div>
		</div>
	);
};

export default Cards2;
