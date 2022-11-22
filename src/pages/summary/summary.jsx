import React, { useEffect } from 'react';
import Header from './header/header';
import Weight from './result/weight';
import HeaderBox from '../quiz/headerBox';
import './summary.css';
import Benefits from '../quiz/benefits';
import Cards from './cards';

const Summary = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
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
