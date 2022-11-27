import './App.css';
import MainLayout from './pages/MainLayout';
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Quiz from './pages/quiz/quiz';
import Footer from './pages/footer/Footer';
import Male from './pages/quiz/male/male';
import Female from './pages/quiz/female/female';
import Plans from './pages/plans/plans';
import Summary from './pages/summary/summary';
import Email from './pages/email/email';
import Tarms from './pages/tarms/tarms';
import ScrollToTop from './component/scrollToTop';
import SubscriptionCancellation from './pages/cencelSubscription';

function App() {
	return (
		<div className="App">
			<Router>
				<ScrollToTop />
				<Routes>
					<Route path="/tarms" element={<Tarms />} />
					<Route path="/email" element={<Email />} />
					<Route path="/subscription-cancellation" element={<SubscriptionCancellation />} />
					<Route path="/plans" element={<Plans />} />
					<Route path="/summary" element={<Summary />} />
					<Route path="/quiz/male" element={<Male />} />
					<Route path="/quiz/female" element={<Female />} />
					<Route path="/quiz" element={<Quiz />} />
					<Route path="/" element={<MainLayout />} />
				</Routes>
				<Footer />
			</Router>
		</div>
	);
}

export default App;
