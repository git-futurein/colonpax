import React from 'react';
import '../quiz.css';
import Header from '../header';
import Health from '../health';

const Male = () => {
	return (
		<div className="male position-relative">
			<img src="/images/top-bg.svg" alt="" className="top-bg" />
			<img src="/images/bottom-bg.svg" alt="" className="bottom-bg" />
			<Header />
			<div className="container">
				<div className="range-wrapper">
					<div class="range" style={{ width: '10%' }}></div>
					<div className="range-squire" style={{ left: '8%' }}>
						2
					</div>
				</div>

				<h2 className="heading mb-5">Colonpax</h2>
				<Health />
			</div>
		</div>
	);
};

export default Male;
