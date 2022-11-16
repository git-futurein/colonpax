import React from 'react';
import partnar1 from '../../assets/benefits.png';
import './quiz.css';

const Benefits = () => {
	return (
		<div className="benefits">
			<div className="container">
				<h2 class="common_h2 text-center mb-5">Psyllium Husk Benefits Covered in</h2>

				<div className="benefits__list">
					<img src={partnar1} alt="" />
					{/* <div className="benefits__item">
						<img src={partnar1} alt="" />
					</div>
					<div className="benefits__item">
						<img src={partnar1} alt="" />
					</div>
					<div className="benefits__item">
						<img src={partnar1} alt="" />
					</div>
					<div className="benefits__item">
						<img src={partnar1} alt="" />
					</div>
					<div className="benefits__item">
						<img src={partnar1} alt="" />
					</div> */}
				</div>
			</div>
		</div>
	);
};

export default Benefits;
