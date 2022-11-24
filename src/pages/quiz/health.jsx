import React, { useEffect, useState } from 'react';
import './quiz.css';
import UserData from './male/userData';
import { useDispatch } from 'react-redux';
import { incrementRangePageCount, updateHealthCollectData } from '../../counterSlice';
import { Link, useLocation } from 'react-router-dom';

const Health = () => {
	const dispatch = useDispatch();
	// const location = useLocation();
	// const gender = location.pathname.split('/').slice(-1).toString();

	const [quizCount, setQuizCount] = useState(0);
	const [userData, setUserData] = useState(false);
	const [healthCollectData, setHealthCollectData] = useState([]);
	const [selectItem, setselectItem] = useState(true);
	const [selectItemNumber, setselectItemNumber] = useState(null);
	// const [textQuizes, setTextQuizes] = useState(false);

	const healthData = [
		[
			{
				id: 1,
				img: 'e1',
				selected: false,
				text: 'Poor',
			},
			{
				id: 2,
				img: 'e2',
				selected: false,
				text: 'Could be better',
			},
			{
				id: 3,
				img: 'e3',
				selected: false,
				text: 'Average',
			},
			{
				id: 4,
				img: 'e4',
				selected: false,
				text: 'Pretty Good',
			},
			{
				id: 5,
				img: 'e5',
				selected: false,
				text: 'Feeling Great',
			},
		],
		[
			{
				id: 1,
				selected: false,
				text: 'Bloating',
			},
			{
				id: 2,
				selected: false,
				text: 'Weight-gain',
			},
			{
				id: 3,
				selected: false,
				text: 'Constipation',
			},
			{
				id: 4,
				selected: false,
				text: 'Diarrhea',
			},
			{
				id: 5,
				selected: false,
				text: 'None',
			},
		],
		[
			{
				id: 1,
				img: 'health-6',
				selected: false,
				text: 'Everyday',
			},
			{
				id: 2,
				img: 'health-7',
				selected: false,
				text: 'Twice a week',
			},
			{
				id: 3,
				img: 'health-8',
				selected: false,
				text: 'Once a week',
			},
			{
				id: 4,
				img: 'health-9',
				selected: false,
				text: 'Less than once a week',
			},
		],
		[
			{
				id: 1,
				selected: false,
				text: 'Skin issues (acne, eczema, rashes)',
			},
			{
				id: 2,
				selected: false,
				text: 'Bad breath',
			},
			{
				id: 3,
				selected: false,
				text: 'Rectal or vaginal itching',
			},
			{
				id: 4,
				selected: false,
				text: 'Sugar and carbohydrate cravings',
			},
			{
				id: 5,
				selected: false,
				text: 'Stomach pain and cramps',
			},
			{
				id: 6,
				selected: false,
				text: 'Backache',
			},
			{
				id: 7,
				selected: false,
				text: 'Moodswings',
			},
			{
				id: 8,
				selected: false,
				text: 'None',
			},
		],
		[
			{
				id: 1,
				selected: false,
				text: 'Skin and nail fungal infections',
			},
			{
				id: 2,
				selected: false,
				text: 'Oral thrush',
			},
			{
				id: 3,
				selected: false,
				text: 'Mood disorders',
			},
			{
				id: 4,
				selected: false,
				text: 'Digestion issues',
			},
			{
				id: 5,
				selected: false,
				text: 'Skin issues',
			},
			{
				id: 6,
				selected: false,
				text: 'Recurring genital or urinary tract infections',
			},
			{
				id: 7,
				selected: false,
				text: 'Increased appetite',
			},
			{
				id: 8,
				selected: false,
				text: 'Joint pain',
			},
			{
				id: 9,
				selected: false,
				text: 'None',
			},
		],
		[
			{
				id: 1,
				selected: false,
				text: 'Wheat and gluten',
			},
			{
				id: 2,
				selected: false,
				text: 'Lactose',
			},
			{
				id: 3,
				selected: false,
				text: 'Nuts',
			},
			{
				id: 4,
				selected: false,
				text: 'Fish',
			},
			{
				id: 5,
				selected: false,
				text: 'Seafood',
			},
			{
				id: 6,
				selected: false,
				text: 'Citrus fruits',
			},
			{
				id: 7,
				selected: false,
				text: 'Strawberries',
			},
			{
				id: 8,

				selected: false,
				text: 'None',
			},
			{
				id: 9,
				selected: false,
				text: 'Other',
			},
		],
		[
			{
				id: 1,
				selected: false,
				text: 'High cholesterol and/or blood triglycerides levels',
			},
			{
				id: 2,
				selected: false,
				text: 'Thyroid issues',
			},
			{
				id: 3,
				selected: false,
				text: 'Gout',
			},
			{
				id: 4,
				selected: false,
				text: 'Diabetes',
			},

			{
				id: 8,
				selected: false,
				text: 'None',
			},
			{
				id: 9,
				selected: false,
				text: 'Other',
			},
		],
		[
			{
				id: 1,
				img: 'health-10',
				selected: false,
				text: 'I workout',
			},
			{
				id: 2,
				img: 'health-11',
				selected: false,
				text: "I'm in light mode",
			},
			{
				id: 3,
				img: 'health-12',
				selected: false,
				text: 'Physically inactive',
			},
			{
				id: 4,
				img: 'health-13',
				selected: false,
				text: 'Other',
			},
		],
		[
			{
				id: 1,
				png: '/images/tim1.png',
				selected: false,
				text: 'I workout',
			},
			{
				id: 2,
				png: '/images/tim2.png',
				selected: false,
				text: "I'm in light mode",
			},
			{
				id: 3,
				png: '/images/tim3.png',
				selected: false,
				text: 'Physically inactive',
			},
			{
				id: 4,
				png: '/images/tim4.png',
				selected: false,
				text: 'Other',
			},
		],
	];

	const [quizData, setquizData] = useState(healthData);

	const handleQuizPages = (text = '') => {
		setHealthCollectData([...healthCollectData, text]);
		if (quizCount !== healthData.length - 1) {
			setQuizCount(quizCount + 1);
			// setquizData(healthData[quizCount]);
			dispatch(incrementRangePageCount(quizCount));
			// console.log(quizCount);
		} else {
			setUserData(true);
			dispatch(incrementRangePageCount(quizCount));
		}
	};

	const handleClickedItem = (number) => {
		setselectItemNumber(number);
	};

	const handleQuizPagesBack = () => {
		setQuizCount(quizCount - 1);
		dispatch(incrementRangePageCount(quizCount));
	};

	// const handleSelected = (id) => {
	// 	setquizData(
	// 		quizData[quizCount].map((item) => {
	// 			if (item.id === id) {
	// 				item.selected = true;
	// 			}
	// 		})
	// 	);
	// };

	return (
		<div>
			<h3 className="heading-3">What is your current health state?</h3>
			{!userData ? (
				<div>
					<div className={quizCount === 0 ? 'd-block' : 'd-none'}>
						<ul className="health-list">
							{healthData[0].map((item) => {
								const { id, img, text, png } = item;
								return (
									<li className="health-item" key={id}>
										<button
											className="btn btn-health"
											onClick={() => handleQuizPages(text, img, png)}
										>
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
					</div>
					<div className={quizCount === 1 ? 'd-block' : 'd-none'}>
						<ul className="health-list">
							{quizData[quizCount].map((item, i) => {
								const { id, img, text, png, selected } = item;
								return (
									<li
										className={
											selectItemNumber === i
												? 'health-item health-item-text checked'
												: 'health-item health-item-text '
										}
										key={id}
									>
										<i className="bi bi-check2"></i>
										<button className="btn btn-health" onClick={(e) => handleClickedItem(i)}>
											<span className="text">{text}</span>
										</button>
									</li>
								);
							})}
						</ul>
						<button
							className={selectItem ? 'btn-continue show-btn' : 'btn-continue'}
							onClick={() => handleQuizPages()}
						>
							continue
						</button>
					</div>
					<div className={quizCount === 2 ? 'd-block' : 'd-none'}>
						<ul className="health-list ">
							{healthData[2].map((item) => {
								const { id, img, text, png } = item;
								return (
									<li className="health-item" key={id}>
										<button
											className="btn btn-health"
											onClick={() => handleQuizPages(text, img, png)}
										>
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
					</div>
					<div className={quizCount === 3 ? 'd-block' : 'd-none'}>
						<ul className="health-list">
							{healthData[3].map((item, i) => {
								const { id, img, text, png } = item;
								return (
									<li
										className={
											selectItemNumber === i
												? 'health-item health-item-text checked'
												: 'health-item health-item-text '
										}
										key={id}
									>
										<i className="bi bi-check2"></i>
										<button className="btn btn-health" onClick={(e) => handleClickedItem(i)}>
											<span className="text">{text}</span>
										</button>
									</li>
								);
							})}
						</ul>
						<button
							className={selectItem ? 'btn-continue show-btn' : 'btn-continue'}
							onClick={() => handleQuizPages()}
						>
							continue
						</button>
					</div>
					<div className={quizCount === 4 ? 'd-block' : 'd-none'}>
						<ul className="health-list ">
							{healthData[4].map((item, i) => {
								const { id, img, text, png } = item;
								return (
									<li
										className={
											selectItemNumber === i
												? 'health-item health-item-text checked'
												: 'health-item health-item-text '
										}
										key={id}
									>
										<i className="bi bi-check2"></i>
										<button className="btn btn-health" onClick={(e) => handleClickedItem(i)}>
											<span className="text">{text}</span>
										</button>
									</li>
								);
							})}
						</ul>
						<button
							className={selectItem ? 'btn-continue show-btn' : 'btn-continue'}
							onClick={() => handleQuizPages()}
						>
							continue
						</button>
					</div>
					<div className={quizCount === 5 ? 'd-block' : 'd-none'}>
						<ul className="health-list">
							{healthData[5].map((item, i) => {
								const { id, img, text, png } = item;
								return (
									<li
										className={
											selectItemNumber === i
												? 'health-item health-item-text checked'
												: 'health-item health-item-text '
										}
										key={id}
									>
										<i className="bi bi-check2"></i>
										<button className="btn btn-health" onClick={(e) => handleClickedItem(i)}>
											<span className="text">{text}</span>
										</button>
									</li>
								);
							})}
						</ul>
						<button
							className={selectItem ? 'btn-continue show-btn' : 'btn-continue'}
							onClick={() => handleQuizPages()}
						>
							continue
						</button>
					</div>
					<div className={quizCount === 6 ? 'd-block' : 'd-none'}>
						<ul className="health-list">
							{healthData[6].map((item, i) => {
								const { id, img, text, png } = item;
								return (
									<li
										className={
											selectItemNumber === i
												? 'health-item health-item-text checked'
												: 'health-item health-item-text '
										}
										key={id}
									>
										<i className="bi bi-check2"></i>
										<button className="btn btn-health" onClick={(e) => handleClickedItem(i)}>
											<span className="text">{text}</span>
										</button>
									</li>
								);
							})}
						</ul>
						<button
							className={selectItem ? 'btn-continue show-btn' : 'btn-continue'}
							onClick={() => handleQuizPages()}
						>
							continue
						</button>
					</div>
					<div className={quizCount === 7 ? 'd-block' : 'd-none'}>
						<ul className="health-list">
							{healthData[7].map((item) => {
								const { id, img, text, png } = item;
								return (
									<li className="health-item" key={id}>
										<button
											className="btn btn-health"
											onClick={() => handleQuizPages(text, img, png)}
										>
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
					</div>
					<div className={quizCount === 8 ? 'd-block' : 'd-none'}>
						<ul className="health-list">
							{healthData[8].map((item) => {
								const { id, img, text, png } = item;
								return (
									<li className="health-item" key={id}>
										<button
											className="btn btn-health"
											onClick={() => handleQuizPages(text, img, png)}
										>
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
					</div>

					{quizCount === 0 ? (
						<button className="btn-back">
							<Link to="/">
								<i className="bi bi-caret-left"></i>
								<span className="text">go back</span>
							</Link>
						</button>
					) : (
						<button className="btn-back" onClick={() => handleQuizPagesBack()}>
							<i className="bi bi-caret-left"></i>
							<span className="text">go back</span>
						</button>
					)}
				</div>
			) : (
				<UserData />
			)}
		</div>
	);
};

export default Health;
