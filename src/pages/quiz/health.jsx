import React, { useEffect, useState } from 'react';
import './quiz.css';
import UserData from './male/userData';
import { useDispatch } from 'react-redux';
import { incrementRangePageCount, updateHealthCollectData, getGender } from '../../counterSlice';
import { useLocation } from 'react-router-dom';
import QuizOptions from '../../component/QuizOptions';

const Health = () => {
	const dispatch = useDispatch();
	const location = useLocation();
	const gender = location.pathname.split('/').slice(-1).toString();

	const [userData, setUserData] = useState(false);
	const [collectData, setCollectData] = useState([]);

	// const [textQuizes, setTextQuizes] = useState(false);

	const healthData = [
		[
			{
				id: 1,
				img: 'e5',
				selected: false,
				text: 'Schlecht',
			},
			{
				id: 2,
				img: 'e3',
				selected: false,
				text: 'Könnte besser sein',
			},
			{
				id: 3,
				img: 'e1',
				selected: false,
				text: 'Geht so',
			},
			{
				id: 4,
				img: 'e2',
				selected: false,
				text: 'Ziemlich gut',
			},
			{
				id: 5,
				img: 'e4',
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
				day: 7,
			},
			{
				id: 2,
				img: 'health-7',
				selected: false,
				text: 'Zweimal pro Woche',
				day: 2,
			},
			{
				id: 3,
				img: 'health-8',
				selected: false,
				text: 'Einmal pro Woche',
				day: 1,
			},
			{
				id: 4,
				img: 'health-9',
				selected: false,
				text: 'UnregelmaBig',
				day: 0,
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
				text: 'Ich trainiere regelmäßig',
			},
			{
				id: 2,
				img: 'health-11',
				selected: false,
				text: 'Ich trainiere, aber unregelmäßig',
			},
			{
				id: 3,
				img: 'health-12',
				selected: false,
				text: 'Nicht wirklich aktiv',
			},
			{
				id: 4,
				img: 'health-13',
				selected: false,
				text: 'Andere',
			},
		],
		[
			{
				id: 1,
				png: '/images/tim1.png',
				selected: false,
				text: 'Sehr wenig',
			},
			{
				id: 2,
				png: '/images/tim2.png',
				selected: false,
				text: '15–30 Minuten',
			},
			{
				id: 3,
				png: '/images/tim3.png',
				selected: false,
				text: '30–60 Minuten',
			},
			{
				id: 4,
				png: '/images/tim4.png',
				selected: false,
				text: '60–90 Minuten',
			},
			{
				id: 5,
				png: '/images/tim5.png',
				selected: false,
				text: '90+ Minuten',
			},
		],
	];
	const quizTitle = [
		'Wie steht es um deine aktuelle Gesundheit?',
		'Leidest du unter den folgenden Beschwerden?',
		'Wie regelmäßig ist dein Stuhlgang?',
		'Hast du eines dieser Symptome?',
		'Was ist mit diesen Symptomen?',
		'Hast du eine der folgenden Empfindlichkeiten oder Allergien gegen:',
		'Hast du andere diagnostizierte Erkrankungen?',
		'Hast/hattest du folgende Erkrankungen des Verdauungssystems?',
		'Wie sportlich bist du?',
		'Wie viel Zeit verbringst du mit Bewegung oder Sport?',
		'Bitte gib deine Maße an',
	];

	const [currentOption, setCurrentOption] = useState(0);
	const [QuizTitleData, setQuizTitleData] = useState(quizTitle[currentOption]);
	const [quizData, setquizData] = useState([...healthData]);
	const [currentQuiz, setCurrentQuiz] = useState(quizData[currentOption]);
	const [isSelected, setIsSelected] = useState(false);
	// console.log(QuizTitleData, quizTitle);
	const handleQuizPages = () => {
		// console.log(currentOption, quizData.length);
		const newCurrentOption = currentOption + 1;
		const rangeWidth = (100 / quizData.length) * newCurrentOption;
		setQuizTitleData(quizTitle[newCurrentOption]);
		// console.log(rangeWidth, newCurrentOption);

		if (currentOption < quizData.length - 1) {
			setCurrentOption(newCurrentOption);
			setCurrentQuiz(quizData[newCurrentOption]);
			dispatch(incrementRangePageCount({ rangeWidth, newCurrentOption }));
		} else {
			setUserData(true);
			localStorage.setItem('timer', 60 * 15);
			dispatch(incrementRangePageCount({ rangeWidth, newCurrentOption }));
			// const newHealthCollectData =
		}
		setIsSelected(false);

		const filteredData = currentQuiz.filter((item) => item.selected);
		const newCollectedData = [...collectData, filteredData];
		setCollectData(newCollectedData);
		dispatch(updateHealthCollectData(collectData));
		// console.log(collectData);
		// localStorage.removeItem('healthCollectData');
		// console.log(collectData);
	};

	const handleQuizPagesBack = () => {
		// console.log(currentOption);
		const newCurrentOption = currentOption - 1;
		const rangeWidth = (100 / quizData.length) * newCurrentOption;
		if (currentOption > 0) {
			setCurrentOption(newCurrentOption);
			const newCurrentQuiz = quizData[newCurrentOption].map((option) => {
				option.selected = false;
				return option;
			});
			setCurrentQuiz(quizData[newCurrentOption]);
			setQuizTitleData(quizTitle[newCurrentOption]);
			dispatch(incrementRangePageCount({ rangeWidth, newCurrentOption }));
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

	useEffect(() => {
		dispatch(getGender(gender));
	}, [dispatch, gender]);

	return (
		<div>
			{/* <h3 className="heading-3">Wie steht es um deine aktuelle Gesundheit?</h3> */}
			{!userData ? (
				<div>
					<QuizOptions
						quizData={currentQuiz}
						handleSelection={handleSelection}
						isSelected={isSelected}
						handleQuizPages={handleQuizPages}
						currentOption={currentOption}
						title={QuizTitleData}
					/>

					<button className="btn-back" onClick={handleQuizPagesBack}>
						<i className="bi bi-caret-left"></i>
						<span className="text">Zurück</span>
					</button>
				</div>
			) : (
				<UserData title={QuizTitleData} />
			)}
		</div>
	);
};

export default Health;
