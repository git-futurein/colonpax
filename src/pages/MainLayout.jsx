import React, { useEffect } from 'react';
import AdvantageSection from './advantageSection/AdvantageSection';
import Carosel from './carosel/Carosel';
import Review from './review/Review';
import Faq from './faq/Faq';
import FeatureSection from './featureSection/FeatureSection';
import Footer from './footer/Footer';
import Header from './header/Header';
import HeroSection from './heroSection/HeroSection';
import PercentageSection from './percentageSection/PercentageSection';

const MainLayout = () => {
	return (
		<div>
			<Header></Header>
			<HeroSection></HeroSection>
			<FeatureSection></FeatureSection>
			<AdvantageSection></AdvantageSection>
			<PercentageSection></PercentageSection>
			<Review></Review>
			<Faq></Faq>
			{/* <Footer></Footer> */}
		</div>
	);
};

export default MainLayout;
