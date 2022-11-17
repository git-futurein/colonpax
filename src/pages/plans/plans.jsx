import React from 'react';
import './plans.css';
import Header from './header/header';
import Subscription from './subscription/subscription';
import PercentageSection from '../percentageSection/PercentageSection';
import Review from '../review/Review';
import Faq from '../faq/Faq';
import Individualisierter from './individualisierter/individualisierter';

const Plans = () => {
	return (
		<div className="plans">
			<Header />
			<Subscription />
			<Individualisierter />
			<PercentageSection />
			<Review />
			<Faq />
			<Subscription marginTop="20%" />
		</div>
	);
};

export default Plans;
