import React, { useEffect, useState } from 'react';
import '../quiz.css';
import { useDispatch } from 'react-redux';
import { incrementRangeValue } from '../../../counterSlice';
import { Link } from 'react-router-dom';

const UserData = () => {
	const [imperial, setImperial] = useState(true);
	const [metric, setMetric] = useState(false);
	const dispatch = useDispatch();

	const imperialData = [
		{
			id: 1,
			placeholder: 'age',
			label: 'years',
		},
		{
			id: 2,
			placeholder: 'height',
			label: 'in',
		},
		{
			id: 3,
			placeholder: 'in',
			label: 'in',
		},
		{
			id: 4,
			placeholder: 'weight',
			label: 'lb',
		},
		{
			id: 5,
			placeholder: 'desired',
			label: 'lb',
		},
	];

	const metricData = [
		{
			id: 1,
			placeholder: 'age',
			label: 'years',
		},
		{
			id: 3,
			placeholder: 'in',
			label: 'in',
		},
		{
			id: 4,
			placeholder: 'weight',
			label: 'lb',
		},
		{
			id: 5,
			placeholder: 'desired',
			label: 'lb',
		},
	];

	const [userData, setUserData] = useState(imperialData);

	return (
		<div>
			<div className="userData">
				<div className="userData-btns">
					<button
						className={imperial ? 'btn btn-imperial active' : 'btn btn-imperial'}
						onClick={() => {
							setImperial(true);
							setMetric(false);
							setUserData(imperialData);
						}}
					>
						imperial
					</button>
					<button
						className={metric ? 'btn btn-metric active' : 'btn btn-metric'}
						onClick={() => {
							setMetric(true);
							setImperial(false);
							setUserData(metricData);
						}}
					>
						Metric
					</button>
				</div>
				<div className="userData-list">
					<form className="userData-form">
						{userData.map((item) => {
							const { id, placeholder, label } = item;
							return (
								<div className="userData-item" key={id}>
									<input type="number" className="form-control" id={id} placeholder={placeholder} />
									<label htmlFor={id}>{label}</label>
								</div>
							);
						})}

						<div className="userData-btn">
							<Link to="/summary" className="btn btn-contineu">
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
