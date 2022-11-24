import React, { useEffect, useState } from 'react';
import '../quiz.css';
import { Link, redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

const UserData = () => {
	// const [imperial, setImperial] = useState(false);
	// const [metric, setMetric] = useState(true);
	// const [userCollectData, setuserCollectData] = useState([]);

	const metricData = [
		{
			id: 1,
			placeholder: 'age',
			label: 'years',
		},
		{
			id: 3,
			placeholder: 'height',
			label: 'cm',
		},
		{
			id: 4,
			placeholder: 'weight',
			label: 'kg',
		},
		{
			id: 5,
			placeholder: 'desired weight',
			label: 'kg',
		},
	];
	// const [userData, setUserData] = useState(imperialData);
	const handleSubmit = (e) => {
		e.preventDefault();
	};

	return (
		<div>
			<div className="userData">
				<div className="userData-btns">
					<button className="btn btn-metric active">Metric</button>
				</div>
				<div className="userData-list">
					<form className="userData-form" onSubmit={handleSubmit}>
						{metricData.map((item) => {
							const { id, placeholder, label } = item;
							return (
								<div className="userData-item" key={id}>
									<input type="number" className="form-control" id={id} placeholder={placeholder} />
									<label htmlFor={id}>{label}</label>
								</div>
							);
						})}

						<div className="userData-btn">
							<Link type="submit" className="btn btn-contineu" to="/summary">
								contineu
							</Link>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default UserData;
