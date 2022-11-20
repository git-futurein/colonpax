import React from 'react';
import Header from './header/header';
import Weight from './result/weight';
import Result from './result/result';
import HeaderBox from '../quiz/headerBox';

const Summary = () => {
	return (
		<div>
			<HeaderBox />
			<Header />
			<Weight />
			<Result />
		</div>
	);
};

export default Summary;
