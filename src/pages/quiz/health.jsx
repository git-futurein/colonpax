import React from 'react';
import './quiz.css';

const Health = () => {
	const healthData = [
		{
			id: 1,
			img: 'e1',
			text: 'Poor',
		},
		{
			id: 2,
			img: 'e2',
			text: 'Could be better',
		},
		{
			id: 3,
			img: 'e3',
			text: 'Average',
		},
		{
			id: 4,
			img: 'e4',
			text: 'Pretty Good',
		},
		{
			id: 5,
			img: 'e5',
			text: 'Feeling Great',
		},
	];

	return (
		<div>
			<h3 className="heading-3">What is your current health state?</h3>
			<ul className="health-list">
				{healthData.map((item) => {
					const { id, img, text } = item;
					return (
						<li className="health-item" key={id}>
							<button className="btn btn-health">
								<svg className="icon">
									<use xlinkHref={`/images/icons.svg#icon-${img}`}></use>
								</svg>
								<span className="text">{text}</span>
							</button>
						</li>
					);
				})}
			</ul>
		</div>
	);
};

export default Health;
