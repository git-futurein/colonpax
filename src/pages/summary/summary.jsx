import React, { useEffect, useState } from 'react';
import Header from './header/header';
import Weight from './result/weight';
import HeaderBox from '../quiz/headerBox';
import './summary.css';
import Benefits from '../quiz/benefits';
import Cards from './cards';
import { useDispatch, useSelector } from 'react-redux';
import { getTime } from '../../counterSlice';

const Summary = () => {
	// const { timer } = useSelector((state) => state.counter);
	const dispatch = useDispatch();
	const delayResend = 60 * 30;
	// const [delay, setDelay] = useState(+delayResend);
	// const minutes = Math.floor(delay / 60);
	// const seconds = Math.floor(delay % 60);
	// useEffect(() => {
	// 	const timer = setInterval(() => {
	// 		setDelay(delay - 1);
	// 	}, 1000);

	// 	if (delay === 0) {
	// 		clearInterval(timer);
	// 	}

	// 	return () => {
	// 		clearInterval(timer);
	// 	};
	// });

	useEffect(() => {
		dispatch(getTime(delayResend));
	});

	return (
		<div className="summary">
			<HeaderBox />
			<Header />
			<Weight />
			<Benefits />
			<Cards />
		</div>
	);
};

export default Summary;
