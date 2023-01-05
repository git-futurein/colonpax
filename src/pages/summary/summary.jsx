import React, { useEffect, useState } from 'react';
import Header from './header/header';
import Weight from './result/weight';
import './summary.css';
import Benefits from '../quiz/benefits';
import Cards from './cards';
import Preloader from './Preloader';

const Summary = () => {
	const [preloader, setPreloader] = useState(true);
	useEffect(() => {
		setTimeout(() => {
			setPreloader(false);
		}, 2500);
	}, []);

	if (preloader) {
		return <Preloader />;
	} else {
		return (
			<div className="summary">
				<Header />
				<Weight />
				<Benefits />
				<Cards />
			</div>
		);
	}
};

export default Summary;
