import React, { useEffect, useState } from 'react';
import Header from './header/header';
import Weight from './result/weight';
import './summary.css';
import Benefits from '../quiz/benefits';
import Cards from './cards';
import Preloader from './Preloader';

const Summary = () => {
	const [preloader, setPreloader] = useState(true);
	const [loaderTime, setloaderTime] = useState(1);
	useEffect(() => {
		// if (localStorage.getItem('timer') && parseInt(localStorage.getItem('timer')) === 0) {
		// 	window.location = '/quiz';
		// }
		setTimeout(() => {
			setPreloader(false);
		}, 3000);
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
