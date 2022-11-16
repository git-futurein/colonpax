import './App.css';
import MainLayout from './pages/MainLayout';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Quiz from './pages/quiz/quiz';
import Footer from './pages/footer/Footer';

function App() {
	return (
		<div className="App">
			<Router>
				<Routes>
					<Route path="/quiz" element={<Quiz />} />
					<Route path="/" element={<MainLayout />} />
				</Routes>
				<Footer />
			</Router>
		</div>
	);
}

export default App;
