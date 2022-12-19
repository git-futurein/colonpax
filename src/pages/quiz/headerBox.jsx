import React, { useEffect, useState } from 'react';
import './quiz.css';

const HeaderBox = ({ email }) => {
	const [timeValue, setTimeValue] = useState(1);
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
			if (timeValue !== 2) {
				alert('Timeout');
				setDelay(10);
				setTimeValue(2);
			}
		}
		return () => {
			clearInterval(timer);
		};
	});

	window.addEventListener('scroll', () => {
		if (window.scrollY > 100 && !email) {
			setSticky(true);
		} else {
			setSticky(false);
		}
	});

	return (
		<div>
			<div className={sticky ? 'header-box sticky' : 'header-box'}>
				<h2>
					Du hast noch 00:{minutes < 10 ? `0${minutes}` : minutes}:
					{seconds < 10 ? `0${seconds}` : seconds} um deinen Sonderpreis und den kostenfreien
					Versand freizuschalten
				</h2>
			</div>
		</div>
	);
};

export default HeaderBox;
