import React, { useEffect, useState } from 'react';
import Header from './header/header';
import Weight from './result/weight';
import HeaderBox from '../quiz/headerBox';
import './summary.css';
import Benefits from '../quiz/benefits';
import Cards from './cards';
import { useDispatch, useSelector } from 'react-redux';
import { getTime } from '../../counterSlice';
import Cards2 from './cards2';

const Summary = () => {
	useEffect(() => {
		if (localStorage.getItem('timer') && parseInt(localStorage.getItem('timer')) === 0) {
			window.location = '/quiz';
		}
	}, []);

	return (
		<div className="summary">
			<Header />
			<Weight />
			<Benefits />
			<Cards />
		</div>
	);
};

export default Summary;
