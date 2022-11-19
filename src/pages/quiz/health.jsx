import React, { useEffect, useState } from 'react';
import './quiz.css';
import UserData from './male/userData';
import { useDispatch } from 'react-redux';
import { incrementRangePageCount } from '../../counterSlice';

const Health = () => {
	const dispatch = useDispatch();

	const [quizCount, setQuizCount] = useState(1);
	const [userData, setUserData] = useState(false);

	const healthData = [
		[
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
		],
		[
			{
				id: 1,
				text: 'Bloating',
			},
			{
				id: 2,
				text: 'Weight-gain',
			},
			{
				id: 3,
				text: 'Constipation',
			},
			{
				id: 4,
				text: 'Diarrhea',
			},
			{
				id: 5,
				text: 'None',
			},
		],
		[
			{
				id: 1,
				img: 'health-6',
				text: 'Everyday',
			},
			{
				id: 2,
				img: 'health-7',
				text: 'Twice a week',
			},
			{
				id: 3,
				img: 'health-8',
				text: 'Once a week',
			},
			{
				id: 4,
				img: 'health-9',
				text: 'Less than once a week',
			},
		],
		[
			{
				id: 1,
				text: 'Skin issues (acne, eczema, rashes)',
			},
			{
				id: 2,
				text: 'Bad breath',
			},
			{
				id: 3,
				text: 'Rectal or vaginal itching',
			},
			{
				id: 4,
				text: 'Sugar and carbohydrate cravings',
			},
			{
				id: 5,
				text: 'Stomach pain and cramps',
			},
			{
				id: 6,
				text: 'Backache',
			},
			{
				id: 7,
				text: 'Moodswings',
			},
			{
				id: 8,
				text: 'None',
			},
		],
		[
			{
				id: 1,
				text: 'Skin and nail fungal infections',
			},
			{
				id: 2,
				text: 'Oral thrush',
			},
			{
				id: 3,
				text: 'Mood disorders',
			},
			{
				id: 4,
				text: 'Digestion issues',
			},
			{
				id: 5,
				text: 'Skin issues',
			},
			{
				id: 6,
				text: 'Recurring genital or urinary tract infections',
			},
			{
				id: 7,
				text: 'Increased appetite',
			},
			{
				id: 8,
				text: 'Joint pain',
			},
			{
				id: 9,
				text: 'None',
			},
		],
		[
			{
				id: 1,
				text: 'Wheat and gluten',
			},
			{
				id: 2,
				text: 'Lactose',
			},
			{
				id: 3,
				text: 'Nuts',
			},
			{
				id: 4,
				text: 'Fish',
			},
			{
				id: 5,
				text: 'Seafood',
			},
			{
				id: 6,
				text: 'Citrus fruits',
			},
			{
				id: 7,
				text: 'Strawberries',
			},
			{
				id: 8,

				text: 'None',
			},
			{
				id: 9,
				text: 'Other',
			},
		],
		[
			{
				id: 1,
				text: 'High cholesterol and/or blood triglycerides levels',
			},
			{
				id: 2,
				text: 'Thyroid issues',
			},
			{
				id: 3,
				text: 'Gout',
			},
			{
				id: 4,
				text: 'Diabetes',
			},

			{
				id: 8,
				text: 'None',
			},
			{
				id: 9,
				text: 'Other',
			},
		],
		[
			{
				id: 1,
				img: 'health-10',
				text: 'I workout',
			},
			{
				id: 2,
				img: 'health-11',
				text: "I'm in light mode",
			},
			{
				id: 3,
				img: 'health-12',
				text: 'Physically inactive',
			},
			{
				id: 4,
				img: 'health-13',
				text: 'Other',
			},
		],
		[
			{
				id: 1,
				png: '/images/tim1.png',
				text: 'I workout',
			},
			{
				id: 2,
				png: '/images/tim2.png',
				text: "I'm in light mode",
			},
			{
				id: 3,
				png: '/images/tim3.png',
				text: 'Physically inactive',
			},
			{
				id: 4,
				png: '/images/tim4.png',
				text: 'Other',
			},
		],
	];

	const [quizData, setquizData] = useState(healthData[quizCount - 1]);

	const handleQuizPages = () => {
		if (quizCount !== healthData.length) {
			setQuizCount((prevquizCount) => prevquizCount + 1);
			setquizData(healthData[quizCount]);
			dispatch(incrementRangePageCount(quizCount));
		} else {
			setUserData(true);
			dispatch(incrementRangePageCount(quizCount));
		}
	};

	return (
		<div>
			<h3 className="heading-3">What is your current health state?</h3>
			{!userData ? (
				<ul className="health-list">
					{quizData.map((item) => {
						const { id, img, text, png } = item;
						return (
							<li className={img || png ? 'health-item' : 'health-item health-item-text'} key={id}>
								<button className="btn btn-health" onClick={() => handleQuizPages()}>
									{img && (
										<svg className="icon">
											<use xlinkHref={`/images/icons.svg#icon-${img}`}></use>
										</svg>
									)}
									{png && <img src={png} className="icon" alt="" />}
									<span className="text">{text}</span>
								</button>
							</li>
						);
					})}
				</ul>
			) : (
				<UserData />
			)}
		</div>
	);
};

export default Health;
