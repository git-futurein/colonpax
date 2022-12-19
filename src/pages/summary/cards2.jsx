import React from 'react';

const Cards2 = ({ age }) => {
	const agePlus5 = +age + 5;

	return (
		<div className="cards2-wrapper">
			<div className="container">
				<div className="cards2 d-block d-sm-flex align-items-start flex-row gap-4">
					<div className="icon">
						<img src="/images/Group 52.svg" alt="" />
					</div>
					<div className="details">
						<div className="parcent">98%</div>
						<h4 className="heading-4 text-black">Wusstest Du schon:</h4>
						<p className="text">
							{/* In your age group ({age}-{agePlus5}) have lost{' '}
							<strong className="weight">7 kg</strong> in the first 4 weeks */}
							In Deiner Altergruppe ({age}-{agePlus5}) haben{' '}
							<strong className="weight">6 kg</strong> in den ersten 4 wochen abgenommen
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Cards2;
