import React, { useEffect } from 'react';
import '../quiz.css';
import Header from '../headerBox';
import Health from '../health';
import { useSelector } from 'react-redux';

const Male = () => {
	const { rangePageCount } = useSelector((state) => state.counter);

	return (
		<div className="male position-relative">
			{/* <img src="/images/top-bg.svg" alt="" className="top-bg" />
			<img src="/images/bottom-bg.svg" alt="" className="bottom-bg" /> */}
			{/* <Header /> */}
			<div className="container">
				<div className="range-wrapper">
					<div className="range" style={{ width: `${rangePageCount * 10}%` }}></div>
					<div className="range-squire" style={{ left: `${rangePageCount * 10 - 2}%` }}>
						{rangePageCount}
					</div>
				</div>

				<h2 className="heading-2 mb-5">Colonpax</h2>
				<Health />
			</div>
		</div>
	);
};

export default Male;
