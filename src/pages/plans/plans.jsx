import React from 'react';
import './plans.css';
import Header from './header/header';
import Subscription from './subscription/subscription';
import PercentageSection from '../percentageSection/PercentageSection';
import Review from '../review/Review';
import Faq from '../faq/Faq';
import Individualisierter from './individualisierter/individualisierter';
import AdvantageSection from '../advantageSection/AdvantageSection';
import Diese from './diese/diese';

const Plans = () => {
	return (
		<div className="plans">
			<Header />
			<Subscription />
			<Individualisierter />
			<AdvantageSection />
			<PercentageSection />
			<Diese />
			<Review />
			<Faq />
			<Subscription marginTop="-270px" />
		</div>
	);
};

export default Plans;
