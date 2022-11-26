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
				text: 'Schlecht',
			},
			{
				id: 2,
				img: 'e2',
				selected: false,
				text: 'Könnte besser sein',
			},
			{
				id: 3,
				img: 'e3',
				selected: false,
				text: 'Durchschnitt',
			},
			{
				id: 4,
				img: 'e4',
				selected: false,
				text: 'Ziemlich gut',
			},
			{
				id: 5,
				img: 'e5',
				selected: false,
				text: 'Großartig!',
			},
		],
		[
			{
				id: 1,
				selected: false,
				text: 'Blähungen',
			},
			{
				id: 2,
				selected: false,
				text: 'Gewichtszunahme',
			},
			{
				id: 3,
				selected: false,
				text: 'Verstopfung',
			},
			{
				id: 4,
				selected: false,
				text: 'Durchfall',
			},
			{
				id: 5,
				selected: false,
				text: 'Keine',
				deselectAll: true,
			},
		],
		[
			{
				id: 1,
				img: 'health-6',
				selected: false,
				text: 'Täglich',
			},
			{
				id: 2,
				img: 'health-7',
				selected: false,
				text: 'Zweimal pro Woche',
			},
			{
				id: 3,
				img: 'health-8',
				selected: false,
				text: 'Einmal pro Woche',
			},
			{
				id: 4,
				img: 'health-9',
				selected: false,
				text: 'Weniger als einmal pro Woche',
			},
		],
		[
			{
				id: 1,
				selected: false,
				text: 'Hautprobleme (Akne, Ekzeme, Hautausschläge)',
			},
			{
				id: 2,
				selected: false,
				text: 'Schlechter Atem',
			},
			{
				id: 3,
				selected: false,
				text: 'Sodbrennen',
			},
			{
				id: 4,
				selected: false,
				text: 'Rektaler oder vaginaler Juckreiz',
			},
			{
				id: 5,
				selected: false,
				text: 'Heißhunger auf Zucker und Kohlenhydrate',
			},
			{
				id: 6,
				selected: false,
				text: 'Magenschmerzen und Krämpfe',
			},
			{
				id: 7,
				selected: false,
				text: 'Rückenschmerzen',
			},
			{
				id: 9,
				selected: false,
				text: 'Stimmungsschwankungen',
			},
			{
				id: 8,
				selected: false,
				text: 'Keine',
				deselectAll: true,
			},
		],
		[
			{
				id: 1,
				selected: false,
				text: 'Haut- und Nagelpilzinfektionen',
			},
			{
				id: 2,
				selected: false,
				text: 'Mundfäule',
			},
			{
				id: 3,
				selected: false,
				text: 'Stimmungsschwankungen',
			},
			{
				id: 4,
				selected: false,
				text: 'Verdauungsprobleme',
			},
			{
				id: 5,
				selected: false,
				text: 'Hautprobleme',
			},
			{
				id: 6,
				selected: false,
				text: 'Wiederkehrende Genital- oder Harnwegsinfektionen',
			},
			{
				id: 7,
				selected: false,
				text: 'Gesteigerter Appetit',
			},
			{
				id: 8,
				selected: false,
				text: 'Gelenkschmerzen',
			},
			{
				id: 9,
				selected: false,
				text: 'Keine',
				deselectAll: true,
			},
		],
		[
			{
				id: 1,
				selected: false,
				text: 'Weizen und Gluten',
			},
			{
				id: 2,
				selected: false,
				text: 'Laktose',
			},
			{
				id: 3,
				selected: false,
				text: 'Nüsse',
			},
			{
				id: 4,
				selected: false,
				text: 'Fisch',
			},
			{
				id: 5,
				selected: false,
				text: 'Meeresfrüchte',
			},
			{
				id: 6,
				selected: false,
				text: 'Zitrusfrüchte',
			},
			{
				id: 7,
				selected: false,
				text: 'Erdbeeren',
			},
			{
				id: 8,

				selected: false,
				text: 'Keine',
				deselectAll: true,
			},
			{
				id: 9,
				selected: false,
				text: 'Andere',
			},
		],
		[
			{
				id: 1,
				selected: false,
				text: 'Hoher Cholesterin- und/oder Triglyceridspiegel im Blut',
			},
			{
				id: 2,
				selected: false,
				text: 'Schilddrüsenprobleme',
			},
			{
				id: 3,
				selected: false,
				text: 'Gicht',
			},
			{
				id: 4,
				selected: false,
				text: 'Diabetes',
			},

			{
				id: 8,
				selected: false,
				text: 'Keine',
				deselectAll: true,
			},
			{
				id: 9,
				selected: false,
				text: 'Andere',
			},
		],
		[
			{
				id: 1,
				selected: false,
				text: 'Gastritis',
			},
			{
				id: 2,
				selected: false,
				text: 'Reizdarmsyndrom (RDS)',
			},
			{
				id: 3,
				selected: false,
				text: 'Gastroösophageale Refluxkrankheit (GERD)',
			},
			{
				id: 4,
				selected: false,
				text: 'Divertikulitis',
			},
			{
				id: 5,
				selected: false,
				text: 'Kolitis',
				deselectAll: true,
			},
			{
				id: 6,
				selected: false,
				text: 'Morbus Crohn',
			},

			{
				id: 7,
				selected: false,
				text: 'Keine',
				deselectAll: true,
			},
			{
				id: 8,
				selected: false,
				text: 'Andere',
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
		// console.log(currentOption, quizData.length);
		const newCurrentOption = currentOption + 1;
		const rangeWidth = (100 / quizData.length) * newCurrentOption;
		// console.log(rangeWidth, newCurrentOption);
		if (currentOption < quizData.length - 1) {
			setCurrentOption(newCurrentOption);
			setCurrentQuiz(quizData[newCurrentOption]);
			dispatch(incrementRangePageCount({ rangeWidth, newCurrentOption }));
		} else {
			setUserData(true);
			dispatch(incrementRangePageCount({ rangeWidth, newCurrentOption }));
		}
		setIsSelected(false);
	};

	// useEffect(() => {
	// 	const rangeWidth = (100 / quizData.length) * currentOption;
	// 	dispatch(incrementRangePageCount({ rangeWidth, currentOption }));
	// }, [dispatch, currentOption, quizData.length]);

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
			<h3 className="heading-3">Wie steht es um deine aktuelle Gesundheit?</h3>
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
						<span className="text">Zurück</span>
					</button>
				</div>
			) : (
				<UserData />
			)}
		</div>
	);
};

export default Health;
