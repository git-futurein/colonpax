import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import './quiz.css';

const HeaderBox = () => {
	const [sticky, setSticky] = useState(null);
	const delayResend = localStorage.getItem('timer');
	const [delay, setDelay] = useState(+delayResend);
	const minutes = Math.floor(delay / 60);
	const seconds = Math.floor(delay % 60);

	useEffect(() => {
		const timer = setInterval(() => {
			setDelay(delay - 1);
			localStorage.setItem('timer', delay - 1);
		}, 1000);

		if (delay === 0) {
			clearInterval(timer);
			alert('Timeout');
			window.location = '/quiz';
		}
		return () => {
			clearInterval(timer);
		};
	}, [delay]);

	window.addEventListener('scroll', () => {
		if (window.scrollY > 100) {
			setSticky(true);
		} else {
			setSticky(false);
		}
	});

	return (
		<div>
			<div className={sticky ? 'header-box sticky' : 'header-box'}>
				<h2>
					{/* Noch 00:{minutes < 10 ? `0${minutes}` : minutes}:{seconds < 10 ? `0${seconds}` : seconds}{' '}
					um Deinen Sonderpreis und den kostenfreien Versand freizuschalten */}
					Du hast noch 00:{minutes < 10 ? `0${minutes}` : minutes}:
					{seconds < 10 ? `0${seconds}` : seconds} um deinen Sonderpreis und den kostenfreien
					Versand freizuschalten
				</h2>
			</div>
		</div>
	);
};

export default HeaderBox;
