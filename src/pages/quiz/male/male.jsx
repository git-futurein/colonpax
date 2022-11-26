import React, { useEffect } from 'react';
import '../quiz.css';
import Header from '../headerBox';
import Health from '../health';
import { useSelector } from 'react-redux';

const Male = () => {
	const { rangePageCount } = useSelector((state) => state.counter);
	const { newCurrentOption = 1, rangeWidth = 0 } = rangePageCount;
	// console.log(rangeWidth, newCurrentOption);
	return (
		<div className="male position-relative">
			{/* <img src="/images/top-bg.svg" alt="" className="top-bg" />
			<img src="/images/bottom-bg.svg" alt="" className="bottom-bg" /> */}
			{/* <Header /> */}
			<div className="container">
				<h2 className="heading-2 mb-5">Colonpax</h2>

				<div className="range-wrapper">
					<div className="range" style={{ width: `${rangeWidth}%` }}></div>
					<div className="range-squire" style={{ left: `${rangeWidth - 2}%` }}>
						{newCurrentOption}
					</div>
				</div>

				<Health />
			</div>
		</div>
	);
};

export default Male;
