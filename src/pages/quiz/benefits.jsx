import React from 'react';
import partnar1 from '../../assets/benefits.png';
import './quiz.css';

const Benefits = () => {
	return (
		<div className="benefits">
			<div className="container">
				<h2 className="common_h2 text-center mb-5">Bekannt aus</h2>

				<div className="benefits__list">
					<img src={partnar1} alt="" />
				</div>
			</div>
		</div>
	);
};

export default Benefits;
