import React, { useEffect, useState } from 'react';
import './quiz.css';
import UserData from './male/userData';
import { useDispatch } from 'react-redux';
import { incrementRangePageCount, updateHealthCollectData } from '../../counterSlice';
import { Link, redirect, useLocation } from 'react-router-dom';
import QuizOptions from '../../component/QuizOptions';

const Health = () => {
	const dispatch = useDispatch();
	const location = useLocation();
	// const gender = location.pathname.split('/').slice(-1).toString();

	const [userData, setUserData] = useState(false);
	const [healthCollectData, setHealthCollectData] = useState([]);

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
				deselectAll: true,
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
				deselectAll: true,
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
				deselectAll: true,
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
				deselectAll: true,
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
				deselectAll: true,
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
	const [currentOption, setCurrentOption] = useState(0);
	// dispatch(incrementRangePageCount(currentOption + 1));
	const [quizData, setquizData] = useState([...healthData]);
	const [currentQuiz, setCurrentQuiz] = useState(quizData[currentOption]);
	const [isSelected, setIsSelected] = useState(false);

	const handleQuizPages = () => {
		console.log(currentOption, quizData.length);
		if (currentOption < quizData.length - 1) {
			const newCurrentOption = currentOption + 1;
			setCurrentOption(newCurrentOption);
			setCurrentQuiz(quizData[newCurrentOption]);
			dispatch(incrementRangePageCount(newCurrentOption));
		} else {
			setUserData(true);
			dispatch(incrementRangePageCount(currentOption + 1));
		}
		setIsSelected(false);
	};

	const handleQuizPagesBack = () => {
		// console.log(currentOption);
		if (currentOption > 0) {
			const newCurrentOption = currentOption - 1;
			setCurrentOption(newCurrentOption);
			const newCurrentQuiz = quizData[newCurrentOption].map((option) => {
				option.selected = false;
				return option;
			});
			console.log(newCurrentQuiz);
			setCurrentQuiz(quizData[newCurrentOption]);
			dispatch(incrementRangePageCount(newCurrentOption));
		} else {
			window.location = '/';
		}
	};

	const handleSelection = (selectedOption) => {
		if (selectedOption.deselectAll && !selectedOption.selected) {
			const newCurrentQuiz = currentQuiz.map((option) => {
				option.selected = false;
				if (option.id === selectedOption.id) {
					option.selected = true;
				}
				return option;
			});
			setCurrentQuiz(newCurrentQuiz);
		} else {
			const newCurrentQuiz = currentQuiz.map((option) => {
				if (option.id === selectedOption.id) {
					option.selected = !selectedOption.selected;
				}
				if (option.deselectAll) {
					option.selected = false;
				}
				return option;
			});
			setCurrentQuiz(newCurrentQuiz);
		}

		const isAnySelected = currentQuiz.some((item) => item.selected);
		setIsSelected(isAnySelected);
	};

	return (
		<div>
			<h3 className="heading-3">What is your current health state?</h3>
			{!userData ? (
				<div>
					<QuizOptions
						quizData={currentQuiz}
						handleSelection={handleSelection}
						isSelected={isSelected}
						handleQuizPages={handleQuizPages}
						currentOption={currentOption}
					/>

					<button className="btn-back" onClick={handleQuizPagesBack}>
						<i className="bi bi-caret-left"></i>
						<span className="text">go back</span>
					</button>
				</div>
			) : (
				<UserData />
			)}
		</div>
	);
};

export default Health;
