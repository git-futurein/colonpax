import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import './quiz.css';

const HeaderBox = () => {
	const delayResend = 60 * 50;
	const [delay, setDelay] = useState(+delayResend);
	const minutes = Math.floor(delay / 60);
	const seconds = Math.floor(delay % 60);
	useEffect(() => {
		const timer = setInterval(() => {
			setDelay(delay - 1);
		}, 1000);

		if (delay === 0) {
			clearInterval(timer);
		}

		return () => {
			clearInterval(timer);
		};
	});

	return (
		<div>
			<div className="header-box">
				<h2>
					countdown text Noch 00:{minutes}:{seconds} um Deinen Sonderpreis und den kostenfreien
					Versand freizuschalten
				</h2>
			</div>
		</div>
	);
};

export default HeaderBox;
