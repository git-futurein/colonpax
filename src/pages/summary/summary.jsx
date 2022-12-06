import React, { useEffect } from 'react';
import Header from './header/header';
import Weight from './result/weight';
import './summary.css';
import Benefits from '../quiz/benefits';
import Cards from './cards';

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
