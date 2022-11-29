import React, { useEffect, useState } from 'react';
import '../quiz.css';
import { Link, Navigate, redirect, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { updateUserCollectData } from '../../../counterSlice';

const UserData = ({ title }) => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const [age, setAge] = useState(0);
	const [height, setHeight] = useState(0);
	const [weight, setWeight] = useState(0);
	const [desiredWeight, setDesiredWeight] = useState(0);

	const metricData = [
		{
			id: 1,
			placeholder: 'Alter',
			label: 'Jahre',
		},
		{
			id: 3,
			placeholder: 'Körpergröße',
			label: 'cm',
		},
		{
			id: 4,
			placeholder: 'Gewicht',
			label: 'kg',
		},
		{
			id: 5,
			placeholder: 'Zielgewicht',
			label: 'kg',
		},
	];
	// const [userData, setUserData] = useState(imperialData);
	const handleChange = (e) => {
		const target = e.target;
		// const newValue = [...values, value];
		// console.log(target.placeholder);
		if (target.placeholder === 'Alter') {
			setAge(target.value);
		} else if (target.placeholder === 'Körpergröße') {
			setHeight(target.value);
		} else if (target.placeholder === 'Gewicht') {
			setWeight(target.value);
		} else if (target.placeholder === 'Zielgewicht') {
			setDesiredWeight(target.value);
		}
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		// setAge(e.target.Alter.value);
		// setHeight(e.target.Körpergröße.value);
		// setWeight(e.target.Gewicht.value);
		// setDesiredWeight(e.target.Zielgewicht.value);

		navigate('/summary');
	};
	// const url = 'https://api.konnektive.com/leads/import/';
	const url = 'https://jsonplaceholder.typicode.com/posts';
	useEffect(() => {
		// console.log(age, height, weight, desiredWeight);
		fetch(url, {
			method: 'POST',
			body: JSON.stringify({ age, height, weight, desiredWeight }),
			headers: {
				'Content-type': 'application/json; charset=UTF-8',
			},
		})
			.then((response) => response.json())
			.then((data) => {
				dispatch(updateUserCollectData(data));
			});
		// dispatch(updateUserCollectData({ age, height, weight, desiredWeight }));
	}, [dispatch, age, height, weight, desiredWeight]);

	return (
		<div>
			<h3 className="heading-3">{title}</h3>
			<div className="userData">
				{/* <div className="userData-btns">
					<button className="btn btn-metric active">Metrisch</button>
				</div> */}
				<div className="userData-list">
					<form className="userData-form" onSubmit={(e) => handleSubmit(e)}>
						{metricData.map((item) => {
							const { id, placeholder, label } = item;
							return (
								<div className="userData-item" key={id}>
									<input
										type="number"
										className="form-control"
										name={placeholder}
										id={id}
										placeholder={placeholder}
										required
										onChange={(e) => handleChange(e)}
									/>
									<label htmlFor={id}>{label}</label>
								</div>
							);
						})}

						<div className="userData-btn">
							<button type="submit" className="btn btn-contineu">
								Weiter
							</button>
							{/* <Link type="submit" className="btn btn-contineu" to="/summary"></Link> */}
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default UserData;
