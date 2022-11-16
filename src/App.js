import './App.css';
import MainLayout from './pages/MainLayout';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Quiz from './pages/quiz/quiz';
import Footer from './pages/footer/Footer';

function App() {
	return (
		<div className="App">
			<Router>
				<Switch>
					<Route exact path="/">
						<MainLayout />
					</Route>
					<Route path="/quiz">
						<Quiz />
					</Route>
				</Switch>
				<Footer />
			</Router>
		</div>
	);
}

export default App;
